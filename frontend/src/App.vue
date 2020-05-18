
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Navbar />
        <v-spacer/>
        <router-link to='/login' style ="color:Black">Sign in</router-link>
    </v-app-bar>

    <v-content>
      <router-view @login="Login" @insertAccountNewStudent="insertAccountNewStudent" @goToQuizzCreation="ShowQuizzCreation" v-bind:selected="selected" @createSubject="createSubject" @sendQuizz="sendQuizz"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import {login, createSubject, } from '../services/api.js';
import { insertAccountNewStudent } from "../services/api.js";

export default {
  methods: {
    Login: async function(logProp) {
      const req = await login(logProp);
      if (req != 200) {
        this.$router.push("login");
      } else {
        this.$router.push("home");
      }
    },

    insertAccountNewStudent: async function(creStudProp) {
      const req = await insertAccountNewStudent(creStudProp);
      if (req != 200) {
        this.$router.push("createNewStudent");
      }
    },
    ShowQuizzCreation: function (selected) {
      this.selected = selected;
      this.$router.push("QuizzCreation");
      console.log(this.selected);
    },
    createSubject: async function (subject) {
      console.log(subject);
      await createSubject(subject);
    },
    sendQuizz: async function () {
      
    }
  },

  created() {
    this.$on("login", function(logProp) {
      this.Login(logProp);
    });
  },

  name: "App",
  components: {
    Navbar
  },

  data: () => ({
    selected: null,
  })
};
</script>
