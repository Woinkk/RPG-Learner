
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Navbar/> 
        <spacer/>
        <router-link to='/login' style ="color:Black">Sign in</router-link>
    </v-app-bar>

    <v-content>
      <router-view @login="Login" @goToQuizzCreation="ShowQuizzCreation" v-bind:selected="selected" @createSubject="createSubject" @sendQuizz="sendQuizz"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import {login, createSubject, } from '../services/api.js';

export default {
  methods: {
    Login:async function(logProp){
      const req = await login(logProp);
      console.log(req);
      if (req != 200) {
        console.log("fail");
        this.$router.push("login");
      } else {
        this.$router.push("home");
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
    console.log("CREATED")
     this.$on('login',function(logProp){
       console.log("leconsolelog")
      this.Login(logProp)
    })

  },
  
  name: 'App',
  components: {
    Navbar,
  },

  data: () => ({
    selected: null,
  }),
};
</script>
