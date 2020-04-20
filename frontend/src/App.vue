
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Navbar/> 
        <spacer/>
        <router-link to='/login' style ="color:Black">Sign in</router-link>
    </v-app-bar>

    <v-content>
      <router-view @login="Login"></router-view>
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
    //
  }),
};
</script>
