<template>
    <v-container style="position: static; height: 90%">
        <div style="position: static; height: 100%">
            <v-card
                class="d-flex"
                outlined
                tile
                height="100%"
                width="100%"
            >
                <div class="d-flex justify-center" style="position: fixed; width:50%; height: 25%; z-index:1; left:25%">
                    <v-card
                        class="d-flex"
                        outlined
                        tile
                        height="100%"
                        width="100%"
                        color="rgba(0, 0, 0, 0)"
                    >
                        <v-card-text>
                            <v-btn v-model="this.Reponse1" @click="sendAnswer(Reponse1, 1)" style="position: absolute; top: 0%; left: 0%; margin:15px;">{{this.Reponse1}}</v-btn>
                            <v-btn v-model="this.Reponse2" @click="sendAnswer(Reponse2, 2)" large style="position: absolute; top: 0%; right: 0%; margin:15px;">{{this.Reponse2}}</v-btn>
                            <br>
                            <v-btn v-model="this.Reponse3" @click="sendAnswer(Reponse3, 3)" large style="position: absolute; bottom: 0%; left: 0%; margin:15px;">{{this.Reponse3}}</v-btn>
                            <v-btn v-model="this.Reponse4" @click="sendAnswer(Reponse4, 4)" large style="position: absolute; bottom: 0%; right: 0%; margin:15px;">{{this.Reponse4}}</v-btn>
                            <div class="white--text" style="position: absolute; top:-20%; left:34%; margin-left: auto; margin-right: auto; width: 21em;">
                                <Timer style="" :time="30" :key="this.Question" v-on:timePassed="timePassed"/>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>
                <v-card-text style="position: absolute; z-index:2; top:30%" class="text-center">
                    <div>
                        <h1>
                            <v-text style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;" class="white--text" v-bind="this.Question">{{this.Question}}</v-text>
                        </h1>
                    </div>
                </v-card-text>
                <v-img style="z-index:0;" :src="this.background[this.index]"></v-img>
                <div class="character-container justify-center" :style="{'left': xPerso+'%'}">
                    <div :style="characterStyle" class="character character-body" id="character-body"></div>
                    <div :style="characterStyle" class="character character-ears" id="character-ears"></div>
                    <div :style="characterStyle" class="character character-eyes" id="character-eyes"></div>
                    <div :style="characterStyle" class="character character-nose" id="character-nose"></div>
                    <div :style="characterStyle" class="character character-pants" id="character-pants"></div>
                    <div :style="characterStyle" class="character character-shirt" id="character-shirt"></div>
                    <div :style="characterStyle" class="character character-shoes" id="character-shoes"></div>
                    <div :style="characterStyle" class="character character-facialHair" id="character-facialHair"></div>
                    <div :style="characterStyle" class="character character-hair" id="character-hair"></div>
                    <div :style="characterStyle" class="character character-weapon" id="character-weapon"></div>
                </div>
            </v-card>
        </div>
    </v-container>
</template>


<script>
import Timer from "../components/Timer.vue";
import {skinPerso} from '../../services/api.js'
export default {
  name: "FightingInterface",

  props: ["Question", "Reponse1", "Reponse2", "Reponse3", "Reponse4"],

  components: {
      Timer,
  },

  data: () => ({
    background : [
        "https://thumbs.gfycat.com/AmusingSpanishFattaileddunnart-size_restricted.gif",
        "https://i.pinimg.com/originals/96/3f/49/963f4946cb59a181fc60fdca84ce9027.gif",
        "https://ekladata.com/81N4laPNam0muEUNsjClVUnaOQs.gif",
        "https://i.pinimg.com/originals/a9/52/9a/a9529a5067aa1f2fc995679ac89f10ad.gif",
        "https://i.pinimg.com/originals/be/2a/66/be2a6662f216fe3fa7364d6891977fa1.gif",
        "https://www.cowabungart.com/wp-content/uploads/2013/10/GIF-video-games-background_06.gif",
        "https://media2.giphy.com/media/LhxEgqOryeLHa/source.gif",
        "https://i.imgur.com/4003cn5.gif",
        "https://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/njPhhkca.gif",
        "https://www.cowabungart.com/wp-content/uploads/2013/10/GIF-video-games-background_01.gif",
    ],
    index: 0,
    image: "",
    currentCharacterSpriteX:0,
    currentCharacterSpriteY:0,
    characterState: "stand",
    weapon: null,
    animation: "walk",
    xPerso:10,
  }),
  computed: {
      characterStyle: function(){
          this.moove();
          if(this.characterState === "stand") {
            return {
            backgroundPositionX:(-64*0)+"px",
            backgroundPositionY:(-64*11)+"px",            
            };
          } else if(this.characterState === "walkR") {
            return {
            backgroundPositionX:(-64*this.currentCharacterSpriteX)+"px",
            backgroundPositionY:(-64*11)+"px",            
            };
          } else if(this.characterState === "walkL") {
            return {
            backgroundPositionX:(-64*this.currentCharacterSpriteX)+"px",
            backgroundPositionY:(-64*9)+"px",            
            };
          } else if(this.characterState === "attack") {
            return {
            backgroundPositionX:(-64*this.currentCharacterSpriteX)+"px",
            backgroundPositionY:(-64*this.currentCharacterSpriteY)+"px",            
            };
          }
          return {
          backgroundPositionX:(-64*0)+"px",
          backgroundPositionY:(-64*11)+"px",            
          };
        }
  },
  methods: {
    moove: async function() {
        if(this.characterState === "stand") {
            this.xPerso = 10;
          } else if(this.characterState === "walkR") {
              this.xPerso += 2;
          } else if(this.characterState === "walkL") {
              this.xPerso -= 2;
          } else if(this.characterState === "attack") {
              this.xPerso = 50;
          }

    },
    timePassed: async function (timePassed) {
        if(timePassed >= 30) {
            this.$emit('getAnswer', null);
        }
        console.log(timePassed);
    },
    sendAnswer: async function (reponse, indexrep) {
        this.$emit('getAnswer', {Reponse: reponse, Index: indexrep});
    },
    attack: async function() {
        switch (this.weapon) {
          case "spear":
            this.animation = "trust"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 7;
          break;
          case "dagger":
              this.animation = "slash"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 15;
          break;
          case "woodwand":
              this.animation = "slash"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 15;
          break;
          case "steelwand":
            this.animation = "slash"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 15;
          break;
          case "bow":
              this.animation = "shoot"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 19;
          break;
          case "greatbow":
              this.animation = "shoot"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 196;
          break;
          case "recurvebow":
            this.animation = "shoot"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 19;
          break;
          case "hurt":
            this.animation = "hurt"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 23;
          break;
          default:
        }
    },
    goodAnswer: async function() {
        if(this.weapon === "bow" || this.weapon === "greatbow" || this.weapon === "recurvebo") {
            this.attack();
            this.characterState = "attack";
            setTimeout(() => {
                this.characterState = "stand";
            }, 2000);
        } else {
            this.characterState = "walkR";
            setTimeout(() => {
                this.xPerso = 50;
                this.attack();
                //this.currentCharacterSpriteY = 19;
                this.characterState = "attack";
            }, 3000);
            setTimeout(() => {
                this.characterState = "walkL";
            }, 4000);
            setTimeout(() => {
                this.xPerso = 10;
                this.characterState = "stand";
            }, 7000);
        }
    },
    badAnswer: async function() {
        
    },
    skinPerso: async function () {
        const perso = await skinPerso();
          this.image = require.context('../assets/',true, /\.png$/);
          document.getElementById("character-hair").style.backgroundImage= "url("+this.image("./SpriteCharacter/hair/"+perso.hairStyle+"/"+perso.hairColor+".png")+")";
          document.getElementById("character-ears").style.backgroundImage= "url("+this.image("./SpriteCharacter/ears/"+perso.ears+".png")+")";
          document.getElementById("character-eyes").style.backgroundImage= "url("+this.image("./SpriteCharacter/eyes/"+perso.eyes+".png")+")";
          document.getElementById("character-nose").style.backgroundImage= "url("+this.image("./SpriteCharacter/nose/"+perso.nose+".png")+")";
          document.getElementById("character-facialHair").style.backgroundImage = "url("+this.image("./SpriteCharacter/facialHair/" + perso.facialHairStyle +"/"+ perso.facialHairColor+ ".png")+")";
          document.getElementById("character-facialHair").style.backgroundImage = "url("+this.image("./SpriteCharacter/facialHair/" + perso.facialHairStyle +"/"+ perso.facialHairColor+ ".png")+")";
          if(perso.genre === "male") {
            document.getElementById("character-pants").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/pants/" + perso.pants + ".png")+")";
            document.getElementById("character-shirt").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/shirt/" + perso.shirt + ".png")+")";
            document.getElementById("character-shoes").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/shoes/" + perso.shoes + ".png")+")";
            document.getElementById("character-weapon").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/weapon/" + perso.weapon + ".png")+")";
            document.getElementById("character-body").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/body/" + perso.race + ".png")+")";
          } else {
            document.getElementById("character-pants").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/pants/" + perso.pants + ".png")+")";
            document.getElementById("character-shirt").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/shirt/" + perso.shirt + ".png")+")";
            document.getElementById("character-shoes").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/shoes/" + perso.shoes + ".png")+")";
            document.getElementById("character-weapon").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/weapon/" + perso.weapon + ".png")+")";
            document.getElementById("character-body").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/body/" + perso.race + ".png")+")";
          }
          this.currentCharacterSpriteX = 0;
          this.currentCharacterSpriteY = 8;
          this.weapon = perso.weapon;
    }
  },
  created () {
      document.documentElement.style.overflow = "hidden";
      this.index =  Math.floor(Math.random() * this.background.length);
      console.log("INDEX IMAGE",this.index);
      this.skinPerso();
      this.animation = "walk";
      setInterval(()=>{
          switch (this.animation) {
            case "spellcast":
            this.currentCharacterSpriteX = (this.currentCharacterSpriteX + 1) % 7
            if(this.currentCharacterSpriteX === 0) this.currentCharacterSpriteY = (this.currentCharacterSpriteY+1) % 4
          break;
          case "trust":
            this.currentCharacterSpriteX = (this.currentCharacterSpriteX + 1) % 8
            if(this.currentCharacterSpriteX === 0) this.currentCharacterSpriteY = (this.currentCharacterSpriteY+1) % 8
            if(this.currentCharacterSpriteY === 0) this.currentCharacterSpriteY +=4
          break;
          case "walk":
            this.currentCharacterSpriteX = (this.currentCharacterSpriteX + 1) % 9
            if(this.currentCharacterSpriteX === 0) this.currentCharacterSpriteY = (this.currentCharacterSpriteY+1) % 12
            if(this.currentCharacterSpriteY === 0) this.currentCharacterSpriteY +=8
          break;
          case "slash":
            this.currentCharacterSpriteX = (this.currentCharacterSpriteX + 1) % 6
            if(this.currentCharacterSpriteX === 0) this.currentCharacterSpriteY = (this.currentCharacterSpriteY+1) % 16
            if(this.currentCharacterSpriteY === 0) this.currentCharacterSpriteY +=12
          break;
          case "shoot":
            this.currentCharacterSpriteX = (this.currentCharacterSpriteX + 1) % 13
            if(this.currentCharacterSpriteX === 0) this.currentCharacterSpriteY = (this.currentCharacterSpriteY+1) % 20
            if(this.currentCharacterSpriteY === 0) this.currentCharacterSpriteY +=16
          break;
          case "hurt":
            this.currentCharacterSpriteX = (this.currentCharacterSpriteX + 1) % 6
            if(this.currentCharacterSpriteY === 0) this.currentCharacterSpriteY +=20

          break;
          default:
            this.currentCharacterSpriteX = (this.currentCharacterSpriteX + 1) % 7
            if(this.currentCharacterSpriteX === 0) this.currentCharacterSpriteY = (this.currentCharacterSpriteY+1) % 4
          break;
          }
        },175)
  }
};
</script>
<style scoped>
.character{
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
}
.character-body{
  background-image: url(../assets/SpriteCharacter/male/body/light.png);
}
.character-hair{
    background-image: url(../assets/SpriteCharacter/hair/bangs/blonde.png);
}
.character-ears{
    background-image: url(../assets/SpriteCharacter/ears/bigears_light.png);
}
.character-eyes{
    background-image: url(../assets/SpriteCharacter/eyes/blue.png);
}
.character-nose{
    background-image: url(../assets/SpriteCharacter/nose/bignose_light.png);
}
.character-pants{
    background-image: url(../assets/SpriteCharacter/male/pants/magenta_pants.png);
}
.character-shirt{
    background-image: url(../assets/SpriteCharacter/male/shirt/brown_longsleeve.png);
}
.character-facialHair{
    background-image: url(../assets/SpriteCharacter/facialHair/beard/blonde.png);
}
.character-shoes{
    background-image: url(../assets/SpriteCharacter/male/shoes/black_shoes.png);
}
.character-weapon{
    background-image: url(../assets/SpriteCharacter/male/weapon/bow.png);
}
.character-container{
  position: fixed;
  bottom: 45%;
  -moz-transform: scale(3.5);
  -o-transform: scale(3.5);
  -webkit-transform: scale(3.5);
  transform: scale(3.5); /* Standard Property */
  transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    
}
</style>
