
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Navbar />
        <v-spacer/>
        <router-link to='/login' style ="color:Black">Sign in</router-link>
    </v-app-bar>

    <v-content>
      <router-view @login="Login" @insertAccountNewStudent="insertAccountNewStudent" />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import { login } from "../services/api.js";
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
    //
  })
};
</script>
