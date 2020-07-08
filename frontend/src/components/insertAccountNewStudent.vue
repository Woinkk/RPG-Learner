<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Créer compte étudiant</v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field
                v-model="newStudent.lastname"
                :rules="fieldsRules"
                label="Nom"
                name="lastname"
              ></v-text-field>
              <v-text-field
                v-model="newStudent.firstname"
                :rules="fieldsRules"
                label="Prénom"
                name="firstname"
              ></v-text-field>
              <v-text-field
                v-model="newStudent.email"
                :rules="emailRules"
                label="E-mail"
                name="email"
              ></v-text-field>
              <v-menu open-on-hover top offset-y transition="fab-transition">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on" v-if="newStudent.tclass === null">La classe</v-btn>
                  <v-btn color="primary" dark v-on="on" v-else>{{newStudent.tclass}}</v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in myClasses"
                    :key="index"
                    :rules="fieldsRules"
                    @click="selectMyClasses(item.name)"
                  >
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-form>
            <v-card-actions>
              <v-btn class="mr-4" @click="insertAccountNewStudent(newStudent)">Confirmer</v-btn>
              <!--<v-btn @click="clear">clear</v-btn>!-->
            </v-card-actions>
          </v-card-text>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Rechercher par classe"
            single-line
            hide-details
            align="right"
            dark="true"
            filled="true"
            ></v-text-field>
          <v-simple-table fixed-header dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nom</th>
            <th class="text-left">Prénom</th>
            <th class="text-left">Classe</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in computeClass" :key="index">
            <td>
              {{item.lastname}}
            </td>
            <td>
              {{item.firstname}}
            </td>
            <td>
              {{item.class}}
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon @click="EditStudent(item)" v-on="on">mdi-pencil</v-icon>
                </template>
                <span>Editer cet élève</span>
              </v-tooltip>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
    
    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>

  </v-container>
</template>


<script>
import { myClasses } from "../../services/api.js";
import { classesStudents } from "../../services/api.js";
export default {
  name: "NewStudent",
  data: function() {
    return {
      newStudent: {
        firstname: null,
        lastname: null,
        email: null,
        tclass: null
      },
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      fieldsRules: [v => !!v || "This field is required"],
      checkbox: false,
      myClasses: null,
      allStudent: null,
      search: null,
    };
  },
  props:{text:String,snackbar:Boolean},

  computed: {
    computeClass: function() {
      if(this.allStudent !== null) {
        if(this.search !== null && this.search !== "") return this.allStudent.filter(i => i.class === this.search);
        else return this.allStudent;
      } else {
        return[];
      }
    }
  },

  methods: {
    insertAccountNewStudent(newStudent) {

        this.$emit("insertAccountNewStudent", newStudent);
        this.allStudent.push(newStudent);
      
    },
    selectMyClasses: function(myClass) {
      this.newStudent.tclass = myClass;
    },

    MyClasses: async function() {
      console.log("lemyclasses");
      var students;
      var list = [];
      const req = await myClasses();
      if (req !== null) {
        this.myClasses = req;
        for(let i = 0; i < req.length; i++) {
          students = await classesStudents(req[i]);
          if(students !== null) {
            for(let j = 0; j < students.length; j++) {
              students[j].class = req[i].name;
              list.push(students[j]);
            }
          }
        }
        this.allStudent = list;
      }
      return;
    },

    clear() {
      this.newStudent.$reset();
      this.newStudent.firstname = null;
      this.newStudent.lastname = null;
      this.newStudent.email = null;
      this.newStudent.tclass = null;
    }
  },
  created() {
    console.log("lecreated");
    this.MyClasses();
  }
};
</script>