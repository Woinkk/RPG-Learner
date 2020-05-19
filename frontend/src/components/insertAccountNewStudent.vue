<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Create Student Account</v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field
                v-model="newStudent.firstname"
                :rules="fieldsRules"
                label="FirstName"
                name="firstname"
              ></v-text-field>
              <v-text-field
                v-model="newStudent.lastname"
                :rules="fieldsRules"
                label="LastName"
                name="lastname"
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
              <v-btn class="mr-4" @click="insertAccountNewStudent(newStudent)">submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { myClasses } from "../../services/api.js";

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
      //tclass: null,
      myClasses: null
    };
  },

  computed: {},

  methods: {
    insertAccountNewStudent(newStudent) {

        this.$emit("insertAccountNewStudent", newStudent);
      
    },
    selectMyClasses: function(myClass) {
      this.newStudent.tclass = myClass;
    },

    MyClasses: async function() {
      console.log("lemyclasses");
      const req = await myClasses();
      if (req !== null) {
        this.myClasses = req;
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