<template>
    <v-container style="background-color: #C7B0B4;height:100%;text-align:center" fluid>
        <div>
            <img v-if="potion1 === 'heal' && gif2" src="../assets/heal.gif">
            <img v-else-if="potion1 === 'xp' && gif2" src="../assets/xp.gif">
            <img v-else-if="potion1 === 'force' && gif2" src="../assets/force.gif">
            <img v-else-if="potion1 === 'heal'" @click="addPotion('heal1')" src="../assets/heal.png">
            <img v-else-if="potion1 === 'xp'" @click="addPotion('xp1')" src="../assets/xp.png">
            <img v-else-if="potion1 === 'force'" @click="addPotion('force1')" src="../assets/force.png">
            <img v-if="this.gif"  align="center" src="../assets/chest_opening.gif"/>
            <img v-else align="center" src="../assets/chest_open.gif"/>
            <img v-if="potion2 === 'heal' && gif2" src="../assets/heal.gif">
            <img v-else-if="potion2 === 'xp' && gif2" src="../assets/xp.gif">
            <img v-else-if="potion2 === 'force' && gif2" src="../assets/force.gif">
            <img v-else-if="potion2 === 'heal'" @click="addPotion('heal2')" src="../assets/heal.png">
            <img v-else-if="potion2 === 'xp'" @click="addPotion('xp2')" src="../assets/xp.png">
            <img v-else-if="potion2 === 'force'" @click="addPotion('force2')" src="../assets/force.png">
        </div>
        <img v-if="potion3 === 'heal' && gif2" src="../assets/heal.gif">
        <img v-else-if="potion3 === 'xp' && gif2" src="../assets/xp.gif">
        <img v-else-if="potion3 === 'force' && gif2" src="../assets/force.gif">
        <img v-else-if="potion3 === 'resu' && gif2" src="../assets/resu.gif">
        <img v-else-if="potion3 === 'heal'" @click="addPotion('heal3')" src="../assets/heal.png">
        <img v-else-if="potion3 === 'xp'" @click="addPotion('xp3')" src="../assets/xp.png">
        <img v-else-if="potion3 === 'force'" @click="addPotion('force3')" src="../assets/force.png">
        <img v-else-if="potion3 === 'resu'" @click="addPotion('resu3')" src="../assets/resu.png">
    </v-container>
</template>

<script>
import {addItem} from '../../services/api.js';
export default {
    name: "LootChest",
    components: {
    
    },
    data: () => ({
      gif: true,
      gif2: null,
      potion1: null,
      potion2: null,
      potion3: null,
      }),
    computed: {
    
    },
    watch: {
        potion1: function () {
            if (this.gif === false && 
                this.gif2 === false &&
                this.potion1 === null &&
                this.potion2 === null &&
                this.potion3 === null) {
                    this.$route.params.loot = false;
                    this.$router.push({name : "DungeonResult", params: {quizz: this.$route.params}});
            }
        },
        potion2: function () {
            if (this.gif === false && 
                this.gif2 === false &&
                this.potion1 === null &&
                this.potion2 === null &&
                this.potion3 === null) {
                    this.$route.params.loot = false;
                    this.$router.push({name : "DungeonResult", params: {quizz: this.$route.params}});
            }
        },
        potion3: function () {
            if (this.gif === false && 
                this.gif2 === false &&
                this.potion1 === null &&
                this.potion2 === null &&
                this.potion3 === null) {
                    this.$route.params.loot = false;
                    this.$router.push({name : `DungeonResult`, params: {quizz: this.$route.params}});
            }
        },
    },
    methods: {
        addPotion: async function(potion) {
            if(potion === "heal1") {
                this.potion1 = null;
                addItem({"id":1});
            } else if(potion === "heal2") {
                this.potion2 = null;
                addItem({"id":1});
            } else if(potion === "heal3") {
                this.potion3 = null;
                addItem({"id":1});
            } else if(potion === "xp1") {
                this.potion1 = null;
                addItem({"id":3});
            } else if(potion === "xp2") {
                this.potion2 = null;
                addItem({"id":3});
            } else if(potion === "xp3") {
                this.potion3 = null;
                addItem({"id":3});
            } else if(potion === "force1") {
                this.potion1 = null;
                addItem({"id":4});
            } else if(potion === "force2") {
                this.potion2 = null;
                addItem({"id":4});
            } else if(potion === "force3") {
                this.potion3 = null;
                addItem({"id":4});
            } else if(potion === "resu3") {
                this.potion3 = null;
                addItem({"id":2});
            }
        },
        potions: async function() {
            let random1 = Math.floor(Math.random() * 100);
            let random2 = Math.floor(Math.random() * 100);
            let random3 = Math.floor(Math.random() * 100);

            if(random1 < 50) {
                this.potion1 = "xp";
                //xp
            } else if(random1 < 75) {
                this.potion1 = "heal";
                //santé
            } else {
                this.potion1 = "force";
                //force
            }

            if(random2 < 50) {
                this.potion2 = "xp";
                //xp
            } else if(random2 < 75) {
                this.potion2 = "heal";
                //santé
            } else {
                this.potion2 = "force";
                //force
            }

            if(random3 < 30) {
                //rien
            } else if(random3 < 50) {
                this.potion3 = "xp";
                //xp
            } else if(random2 < 70) {
                this.potion3 = "heal";
                //santé
            } else if(random3 < 80){
                this.potion3 = "force";
                //force
            } else {
                this.potion3 = "resu";
                //resurection
            }
        }
        
    },
    created() {
        console.log("YEAAAAAH YEAH");
        setTimeout(() => {
          this.gif = false;
          this.gif2 = true;
          this.potions();
        }, 4000);
        setTimeout(() => {
          this.gif2 = false;
        }, 4500);
    }
}
</script>