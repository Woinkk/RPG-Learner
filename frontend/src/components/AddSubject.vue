<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn class="mx-2" fab small dark color="indigo" v-on="on">
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        </template>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Créer un sujet
          </v-card-title>
  
          <v-card-text>
            Nom du sujet: <v-text-field></v-text-field>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Créer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
export default {
    name: "AddSubject",
    data () {
        return {
        dialog: false,
        }
    }
}
</script>

<style>

</style>script