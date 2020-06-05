
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Navbar />
      <v-spacer />
      <router-link to="/login">
        <v-btn color="primary">
          <!--<router-link v-if="connected" to="/account" style="colo:black">Account</router-link>!-->
          Connexion
        </v-btn>
      </router-link>
      <router-link to="/newStudent">
        <v-btn color="primary"><v-icon>mdi-account-plus-outline</v-icon></v-btn>
      </router-link>
      <router-link to="/stats">
        <v-btn color="primary"><v-icon>mdi-chart-line</v-icon></v-btn>
      </router-link>
    </v-app-bar>

    <v-content>
      <router-view
        @login="Login"
        v-bind:text="textToast"
        v-bind:snackbar="snackbar"
        @insertAccountNewStudent="insertAccountNewStudent"
        @goToQuizzCreation="ShowQuizzCreation"
        v-bind:selected="selected"
        @createSubject="createSubject"
        @sendQuizz="sendQuizz"
      ></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import { login, createSubject, createQuizz } from "../services/api.js";
import { insertAccountNewStudent } from "../services/api.js";

export default {
  methods: {
    Login: async function(logProp) {
      try {
        await login(logProp);
        this.textToast = "Vous êtes connecté(e)";
        console.log(this.textToast);
        setTimeout(() => {
          this.$router.push({ name: "home" });
        }, 2000);
      } catch (error) {
        this.textToast = "La connexion a échoué";
        this.$router.push("login");
      }
      this.snackbar = true;
      setTimeout(() => {
        this.snackbar = false;
      }, 2000);
    },

    insertAccountNewStudent: async function(newStudent) {
      if (newStudent.tclass !== null) {
        const req = await insertAccountNewStudent(newStudent);
        console.log(req);
        if (req !== 200) {
          this.$router.push("newStudent");
        } else {
          this.$router.push("newStudent");
        }
      } else {
        console.log("error");
        this.$router.push("newStudent");
      }
    },
    ShowQuizzCreation: function(selected) {
      this.selected = selected;
      this.$router.push("QuizzCreation");
      console.log(this.selected);
    },
    createSubject: async function(subject) {
      console.log(subject);
      await createSubject(subject);
    },
    sendQuizz: async function(completeQuizz) {
      console.log(completeQuizz);
      await createQuizz(completeQuizz);
      this.$router.push("home");
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
    textToast: null,
    snackbar: false,
  })
};
</script>
