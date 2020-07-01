<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Créer compte professeur</v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field
                v-model="newTeacher.lastname"
                :rules="fieldsRules"
                label="Nom"
                name="lastname"
              ></v-text-field>
              <v-text-field
                v-model="newTeacher.firstname"
                :rules="fieldsRules"
                label="Prénom"
                name="firstname"
              ></v-text-field>
              <v-text-field
                v-model="newTeacher.email"
                :rules="emailRules"
                label="E-mail"
                name="email"
              ></v-text-field>
              <v-menu open-on-hover top offset-y transition="fab-transition">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on" v-if="newTeacher.matiere === null">La Matière</v-btn>
                  <v-btn color="primary" dark v-on="on" v-else>{{newTeacher.matiere}}</v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in myMatieres"
                    :key="index"
                    :rules="fieldsRules"
                    @click="selectMyTeacher(item.name)"
                  >
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-form>
            <v-card-actions>
              <v-btn class="mr-4" @click="insertAccountNewTeacher(newTeacher)">Confirmer</v-btn>
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
                <span>Editer ce professeur</span>
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
import { getAllMatiere } from "../../services/api.js";
// import { schoolTeachers } from "../../services/api.js";

export default {
  name: "NewTeacher",
  data: function() {
    return {
      newTeacher: {
        firstname: null,
        lastname: null,
        email: null,
        matiere: null
      },
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      fieldsRules: [v => !!v || "This field is required"],
      checkbox: false,
      myMatieres: null,
      allTeacher: null,
      search: null,
    };
  },
  props:{text:String,snackbar:Boolean},

  computed: {
    computeClass: function() {
      if(this.allTeacher !== null) {
        if(this.search !== null && this.search !== "") return this.allTeacher.filter(i => i.class === this.search);
        else return this.allTeacher;
      } else {
        return[];
      }
    }
  },

  methods: {
    insertAccountNewTeacher(newTeacher) {

        this.$emit("insertAccountNewTeacher", newTeacher);
      
    },
    selectMyTeacher: function(myMatiere) {
      this.newTeacher.matiere = myMatiere;
    },

    MyMatiere: async function() {
      console.log("lemyclasses");
      const req = await getAllMatiere();
      // this.allTeacher = await schoolTeachers();
      if (req !== null) {
        this.myMatieres = req;
      }
      return;
    },

    clear() {
      this.newTeacher.$reset();
      this.newTeacher.firstname = null;
      this.newTeacher.lastname = null;
      this.newTeacher.email = null;
      this.newTeacher.matiere = null;
    }
  },
  created() {
    console.log("lecreated");
    this.MyMatiere();
  }
};
</script>