
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Navbar />
        <v-spacer/>
        <v-btn color="primary" >
        <router-link to="/account" style="color:Black">Account</router-link>
        <router-link to='/login' style ="color:Black">Sign in</router-link>
        </v-btn>
        <v-btn color="primary">
          <router-link to='/newStudent' style="color:Black">Add Student</router-link>
        </v-btn>
    </v-app-bar>

    <v-content>
      <router-view @login="Login" @insertAccountNewStudent="insertAccountNewStudent"/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import { login } from "../services/api.js";
import { insertAccountNewStudent } from "../services/api.js";
import { isConnected } from "../services/api.js";

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

    insertAccountNewStudent: async function(newStudent) {
      const req = await insertAccountNewStudent(newStudent);
      console.log(req)
      if (req != 200) {
        this.$router.push("newStudent");
      }else {
        this.$router.push("home");
      }
    }
  },

  created() {
    this.$on("login", function(logProp) {
      this.Login(logProp);
    });
    isConnected();
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
