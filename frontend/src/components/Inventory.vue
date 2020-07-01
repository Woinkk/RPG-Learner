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
    <v-dialog v-model="gif" max-width="290">
      <img :src="gifs" />
    </v-dialog>
    <v-dialog v-model="inventory" max-width="290">
      <v-card>
        <v-card-title class="headline">Inventaire</v-card-title>

        <v-card-text>
          <v-list v-for="(item,i) in computeInventory" :key="i">
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
      listInventory: null,
      listRemove: [],
      icon: {},
      itemProp: { name: null, img: null },
      gifList: null,
      gif: false
      // used:false,
    };
  },
  computed: {
    computeInventory: function() {
      if (this.listInventory !== null) {
        var list = [];
        var verif = false;
        if (this.listRemove.length === 0)
          for (let i = 0; i < this.listInventory.length; i++)
            list.push(this.listInventory[i]);
        else {
          for (let i = 0; i < this.listInventory.length; i++) {
            for (let j = 0; j < this.listRemove.length; j++) {
              if (this.listRemove[j] === this.listInventory[i].name)
                verif = true;
            }
            if (!verif) list.push(this.listInventory[i]);
            verif = false;
          }
        }
        console.log("cleconole", list);
        return list;
      } else {
        console.log("cleconoleelse");
        return [];
      }
    }

    /* if(this.listInventory !== []) {
        return this.listInventory.filter(i => i.name !== this.listRemove);
      } else {
        return[];
      }
    }*/
  },
  methods: {
    useItem: async function(itemName) {
      try {
        const req = await useItem({ itemName: itemName });

        switch (itemName) {
          case "Heal Potion":
            this.gifS = this.getGif("heal");
            break;
          case "Resurection Potion":
            this.gifs = this.getGif("resu");
            break;
          case "Strength Potion":
            this.gifs = this.getGif("force");
            break;
          case "XP Potion":
            this.gifs = this.getGif("xp");
            break;
          default:
        }
        this.gif = true;
        this.inventory = false;
        setTimeout(() => {
          this.gif = false;
          this.inventory = true;
        }, 2000);

        if (req.command === "DELETE") {
          for (let i = 0; i < this.listInventory.length; i++) {
            if (this.listInventory[i].name === itemName) {
              this.listRemove.push(itemName);
            }
          }
          console.log("listRemove", this.listRemove);
        }
      } catch (error) {
        console.log("error");
      }

      console.log(itemName);
    },
    showInventory: async function() {
      try {
        let tempList = [];
        const req = await inventory();
        for (let i = 0; i < req.length; i++) {
          switch (req[i].result) {
            case "Heal Potion":
              tempList.push(
                this.createItemProp(req[i].result, this.getImg("heal"))
              );
              /*this.listInventory.push(
                this.createItemProp(req[i].result, this.getImg("heal"))
              );*/
              break;
            case "Resurection Potion":
              tempList.push(
                this.createItemProp(req[i].result, this.getImg("resu"))
              );
              break;
            case "Strength Potion":
              tempList.push(
                this.createItemProp(req[i].result, this.getImg("force"))
              );
              break;
            case "XP Potion":
              tempList.push(
                this.createItemProp(req[i].result, this.getImg("xp"))
              );
              break;
            default:
              console.log("default error");
          }
        }
        this.listInventory = tempList;
        console.log("listInventory", this.listInventory);
      } catch (error) {
        console.log("error , try echec");
      }
    },
    getImg: function(img) {
      var images = require.context("../assets/", false, /\.png$/);
      console.log(images);
      return images("./" + img + ".png");
    },
    getGif: function(gif) {
      var images = require.context("../assets/", false, /\.gif$/);
      console.log(images);
      return images("./" + gif + ".gif");
    },
    createItemProp: function(name, img) {
      let itemProp = { name: name, img: img };
      return itemProp;
    },
    consoleLogLOL: function() {
      console.log(this.listRemove);
    }
  },
  created() {
    this.showInventory();
  }
};
</script>


