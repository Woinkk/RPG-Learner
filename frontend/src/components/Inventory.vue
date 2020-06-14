<template>
  <v-row justify="center">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-icon
          v-on="on"
          color="primary"
          dark
          @click.stop="inventory = true"
        >mdi-bag-personal-outline</v-icon>
      </template>
      <span>Inventaire</span>
    </v-tooltip>

    <v-dialog v-model="inventory" max-width="290">
      <v-card>
        <v-card-title class="headline">Inventaire</v-card-title>

        <v-card-text>
          <v-list></v-list>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="inventory = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { inventory } from "../../services/api.js";
export default {
  name: "Inventory",
  data() {
    return {
      inventory: false,
      listInventory: [],
      icon: null,
    };
  },
  methods: {
    useItem: async function() {
      //Change la quantité d'un item de l'inventaire
    },
    showInventory: async function() {
      
      try{ 
       const req = await inventory()
       
       for(let i =0; i < req.length;i++){
         this.listInventory.push(req[i].name)
         switch (req[i].name){
           case "Heal Potion" :
             this.icon ="";
             break;
             default:
               break;
         }
       }
      console.log("listInventory" ,this.listInventory)

      }catch(error){
        console.log ("error")
      }
     


      //console.log("invent", req);
      /* if (req !== null){
        for (let i = 0; i < req.lenght;i++){
          this.listInventory.push(req[i])
        }
      }else {
        this.listInventory.push("Vous n'avez aucun item")
      }*/
    }
  },
  created() {
    this.showInventory();
  }
};
</script>


