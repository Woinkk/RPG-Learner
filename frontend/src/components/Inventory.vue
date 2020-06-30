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
          <v-list v-for="(item,i) in listInventory" :key="i">
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <img v-on="on" :src="item.img" width="15%" height="15%" />
                <v-tooltip bottom>
                  <template v-slot:activator="{on}">
                    <v-icon v-on="on" @click="useItem(item.name)">mdi-alpha-u-circle-outline</v-icon>
                  </template>
                  Utiliser
                </v-tooltip>
              </template>
              {{item.name}}
            </v-tooltip>
          </v-list>
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
import { inventory, useItem } from "../../services/api.js";
export default {
  name: "Inventory",
  data() {
    return {
      inventory: false,
      listInventory: [],
      icon: {},
      itemProp: { name: null, img: null }
    };
  },
  methods: {
    useItem: async function(itemName) {
      try {
        const req = await useItem();
        console.log("req", req);
      } catch (error) {
        console.log("error");
      }

      console.log(itemName);
    },
    showInventory: async function() {
      try {
        const req = await inventory();
        for (let i = 0; i < req.length; i++) {
          switch (req[i].result) {
            case "Heal Potion":
              this.listInventory.push( this.createItemProp(req[i].result,this.getImg("heal")));
              break;
            case "Resurection Potion":
               this.listInventory.push( this.createItemProp(req[i].result,this.getImg("resu")));
              break;
            case "Force Potion":
              this.listInventory.push( this.createItemProp(req[i].result,this.getImg("force")));
              break;
            case "XP Potion":
              this.listInventory.push( this.createItemProp(req[i].result,this.getImg("xp")));
              break;
            default:
              console.log("default error");
          }
        }
        console.log("listInventory", this.listInventory);
      } catch (error) {
        console.log("error , try echec");
      }

      //console.log("invent", req);
      /* if (req !== null){
        for (let i = 0; i < req.lenght;i++){
          this.listInventory.push(req[i])
        }
      }else {
        this.listInventory.push("Vous n'avez aucun item")
      }*/
    },
    getImg: function(img) {
      var images = require.context("../assets/", false, /\.png$/);
      console.log(images);
      return images("./" + img + ".png");
    },
    createItemProp: function (name,img){
      let itemProp= {name :name,img:img}
      return itemProp
    }
  },
  created() {
    this.showInventory();
  }
};
</script>


