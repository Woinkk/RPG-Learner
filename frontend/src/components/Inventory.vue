<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="inventory = true"
    >
      Inventaire
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Inventaire</v-card-title>

        <v-card-text>
          <v-list>

          </v-list>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="inventory = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name:"Inventory",
    data () {
      return {
        inventory: false,
      }
    },
    methods: {
        useItem: async function (){
            //Change la quantité d'un item de l'inventaire
        }
    }
  }
</script>


