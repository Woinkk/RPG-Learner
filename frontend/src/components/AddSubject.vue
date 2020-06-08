<template>
    <div class="text-center">

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn @click="showDialog" class="mx-2" fab small dark v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Créer un nouveau sujet</span>
      </v-tooltip>

      <v-dialog
        v-model="dialog"
        width="500"
      >


        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Créer un sujet
          </v-card-title>
  
          <v-card-text>
            Nom du sujet: <v-text-field v-model="subject"></v-text-field>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="createSubject"
            >
              Créer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar
      v-model="snackbarGood"
      :timeout="timeout"
    >
      Sujet créer avec succes!
      <v-btn
        color="blue"
        text
        @click="snackbarGood = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar
      v-model="snackbarError"
      :timeout="timeout"
    >
      Il a eu un problème a la création du sujet/le sujet existe déja.
      <v-btn
        color="blue"
        text
        @click="snackbarGood = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    </div>
</template>

<script>
import {createSubject} from '../../services/api.js';

export default {
    name: "AddSubject",
    data () {
        return {
        snackbarGood: false,
        snackbarError: false,
        timeout: "2000",
        dialog: false,
        subject: null,
        }
    },
    methods: {
      createSubject: async function () {
        const req = await createSubject(this.subject);
        if (req.status === 200) {
          this.snackbarGood = true
          this.dialog = false;
        } else {
          this.snackbarError = true
        }
        //this.$emit('createSubject', this.subject);
        this.$emit('reload')
      },
      showDialog: function () {
        this.dialog = true;
      }
    },
}
</script>

<style>
</style>