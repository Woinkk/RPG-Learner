<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
  <Navbar/> 
    </v-app-bar>

    <v-content>
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Login from './components/Login';


export default {
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
