
<template>
  <v-app>
    
    <v-app-bar app color="primary" dark>
      <Navbar/> 
    </v-app-bar>

    <v-content>
      <Login v-on:login=Login /> 
    </v-content>
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Login from './components/Login';
import {login} from '../services/api.js';

export default {
  methods: {
    Login:function(logProp){
      login(logProp);
    }
  },
  
  name: 'App',
  components: {
    Navbar,
    Login,


  },

  data: () => ({
    //
  }),
};
</script>
