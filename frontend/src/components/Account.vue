<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Ton compte</v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>

              <v-text-field
                v-model="modifyProp.password"
                :rules="passwordRules"
                id="password"
                label="Nouveaux Mot de passe"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
              
              <v-text-field
                v-model="modifyProp.confirmPassword"
                :rules="confirmPasswordRules"
                id="confirmPassword"
                label="Confirmer mot de passe"
                name="confirmPassword"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn @click="ModifyAccount(modifyProp)" color="primary">Modifier</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { modifyAccount } from "../../services/api.js";
export default {
  name: "Account",
  data: function() {
    return{
    valid: false,
    passwordRules: [v => !!v || "Password Required"],
    
    confirmPasswordRules: [v => (v === this.modifyProp.password ) || "Password must be identic" ],
    
    text:null,
    snackbar:false,
    timeout:2000,
    modifyProp: {  password: null,confirmPassword:null},
  }},
 
  methods: {
    ModifyAccount: async function(modifyProp) {
      if(modifyProp.password === modifyProp.confirmPassword){
       
        try{
          await modifyAccount(modifyProp)
          this.text = "Le mot de passe a été changé avec succès"
          setTimeout(() => {
            this.$router.push('/login');
        }, 1500);
        }
        catch(error){
          this.text = "Le changement de mot de passe a échoué"
        }
        this.snackbar=true

      }

    }
  }
};
</script>