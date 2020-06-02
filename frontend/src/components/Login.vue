
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="logProp.email"
                :rules="emailRules"
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="text"
                required
              />

              <v-text-field
                v-model="logProp.password"
                :rules="passwordRules"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn @click="login(logProp)" color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    
    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>

  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    valid: false,
    emailRules: [
      v => !!v || "Email is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    passwordRules: [v => !!v || "Password Required"],
    logProp: { email: null, password: null },
    }),
  props:{text:String,snackbar:Boolean},
  methods: {
    login: function(logProp) {
      console.log(logProp.email),
       this.$emit("login", logProp);
    },
  
  }
};
</script>

<style>
.disabled {
  pointer-events: none;
  cursor: default;
}
</style>