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
                <v-form ref=form v-model="valid" lazy-validation>
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
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                  />
                </v-form>
              </v-card-text>
              
              <v-card-actions>
                <v-spacer />
                <router-link  to='/home' v-if="valid" >
                <v-btn @click=login(logProp) color="primary" >Login</v-btn>
                </router-link>
                <router-link  to='/home' v-else >
                <v-btn @click=login(logProp) color="primary" disabled="true">Login</v-btn>
                </router-link>
              </v-card-actions>
            
            </v-card>
         
          </v-col>
        </v-row>
      </v-container>
  

</template>

<script>

  export default {
    name: "Login",
    data :() =>({
        valid:false,
        emailRules:[
            v=> !!v || 'Email is required',
            v=> /.+@.+\..+/.test(v) ||'E-mail must be valid' ,
        ],
        
        logProp:{email:null,password:null},  
        
    }),

    updated(){
      if(this.email != null && this.password != null){
        valid=true
      }
      
    }

    methods : {
        login :function (logProp){
            console.log(logProp.email),
            this.$emit('login',logProp);
            },    
        
    }
  }
</script>