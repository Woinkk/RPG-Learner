<template>
    <v-container style="background-color: #C7B0B4;height:100%;text-align:center" fluid>
        <div>
            <img v-if="potion1 === 'heal' && gif2" src="../assets/heal.gif">
            <img v-else-if="potion1 === 'xp' && gif2" src="../assets/xp.gif">
            <img v-else-if="potion1 === 'force' && gif2" src="../assets/force.gif">
            <img v-else-if="potion1 === 'heal'" src="../assets/heal.png">
            <img v-else-if="potion1 === 'xp'" src="../assets/xp.png">
            <img v-else-if="potion1 === 'force'" src="../assets/force.png">
            <img v-if="this.gif"  align="center" src="../assets/chest_opening.gif"/>
            <img v-else align="center" src="../assets/chest_open.gif"/>
            <img v-if="potion2 === 'heal' && gif2" src="../assets/heal.gif">
            <img v-else-if="potion2 === 'xp' && gif2" src="../assets/xp.gif">
            <img v-else-if="potion2 === 'force' && gif2" src="../assets/force.gif">
            <img v-else-if="potion2 === 'heal'" src="../assets/heal.png">
            <img v-else-if="potion2 === 'xp'" src="../assets/xp.png">
            <img v-else-if="potion2 === 'force'" src="../assets/force.png">
        </div>
        <img v-if="potion3 === 'heal' && gif2" src="../assets/heal.gif">
        <img v-else-if="potion3 === 'xp' && gif2" src="../assets/xp.gif">
        <img v-else-if="potion3 === 'force' && gif2" src="../assets/force.gif">
        <img v-else-if="potion3 === 'resu' && gif2" src="../assets/resu.gif">
        <img v-else-if="potion3 === 'heal'" src="../assets/heal.png">
        <img v-else-if="potion3 === 'xp'" src="../assets/xp.png">
        <img v-else-if="potion3 === 'force'" src="../assets/force.png">
        <img v-else-if="potion3 === 'resu'" src="../assets/resu.png">
    </v-container>
</template>

<script>

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
    methods: {
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