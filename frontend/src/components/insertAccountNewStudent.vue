<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Create Student Account</v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field v-model="firstname" label="FirstName" required></v-text-field>
              <v-text-field v-model="lastname" label="LastName" required></v-text-field>
              <v-text-field v-model="email" label="E-mail" required></v-text-field>

              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Confirm ?"
                required
              ></v-checkbox>
              <v-card-actions>
                <v-btn class="mr-4" @click="insertAccountNewStudent(creStudProp)">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name:"insertAccountNewStudent",
  data: function(){
    return {
  
    creStudProp:{
      firstname:null,
      lastname: null,
      email: null,
      password: null
    },
    emailRules:[
            v=> !!v || 'Email is required',
            v=> /.+@.+\..+/.test(v) ||'E-mail must be valid' ,
        ],
        
    checkbox: false
    }
  },

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.checkbox.$dirty) return errors;
      !this.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
  },

  methods: {
    insertAccountNewStudent(creStudProp) {
      this.$emit('insertAccountNewStudent',creStudProp);
    },
    clear() {
      this.$reset();
      this.firstname = "";
      this.lastname=""
      this.email = "";
      this.checkbox = false;
    }
  }
};
</script>