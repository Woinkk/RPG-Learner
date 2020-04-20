
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Navbar/> 
        <spacer></spacer>
        <router-link to='/login' style ="color:Black">Sign in</router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
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
  },

  data: () => ({
    //
  }),
};
</script>
