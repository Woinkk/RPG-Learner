<template>
      <div class="d-flex align-center">
        <router-link to='/'>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        </router-link>
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
       <v-spacer/>
       <router-link to='/login' style ="color:Black">
        <v-btn color="primary">Sign in</v-btn>
        </router-link> 
      </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>
