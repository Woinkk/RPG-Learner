<template>
    <v-container>
        <v-row>
            <v-col
                name="character-container"
                class="d-flex justify-center"
                cols="6"
                md="5"
            >
                <v-card
                class="d-flex justify-center"
                width="100%"
                height="95%"
                outlined
                flat
                >
                <img class="earth justify-center" src="https://images.fineartamerica.com/images/artworkimages/medium/1/pixel-earth-design-martin-capek-transparent.png"/>
                <div class="character-container justify-center">
                    <div :style="characterStyle" class="character character-body" id="character-body"></div>
                    <div :style="characterStyle" class="character character-ears" id="character-ears"></div>
                    <div :style="characterStyle" class="character character-eyes" id="character-eyes"></div>
                    <div :style="characterStyle" class="character character-nose" id="character-nose"></div>
                    <div :style="characterStyle" class="character character-pants" id="character-pants"></div>
                    <div :style="characterStyle" class="character character-shirt" id="character-shirt"></div>
                    <div :style="characterStyle" class="character character-shoes" id="character-shoes"></div>
                    <div :style="characterStyle" class="character character-weapon" id="character-weapon"></div>
                    <div :style="characterStyle" class="character character-facialHair" id="character-facialHair"></div>
                    <div :style="characterStyle" class="character character-hair" id="character-hair"></div>
                </div>
                <v-card-text style="position: absolute; bottom: 0px;">
                    <div>
                        <v-card
                        outlined
                        tile
                        >
                        <v-row style="position: relative; left: 2.5%;">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-img max-width="20" max-height="20" src="../assets/heart-RPG.png" v-on="on"></v-img>
                                </template>
                            <span>Point de vie</span>
                            </v-tooltip>: 2<br>
                        </v-row>
                        <v-row style="position: relative; left: 2.5%;">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-img max-width="20" max-height="20" src="../assets/speed-boot-RPG.png" v-on="on"></v-img>
                                </template>
                            <span>Vitesse</span>
                            </v-tooltip>: 2<br>
                        </v-row>
                        <v-row style="position: relative; left: 2.5%;">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-img max-width="20" max-height="20" src="../assets/strength-RPG.png" v-on="on"></v-img>
                                </template>
                            <span>Force</span>
                            </v-tooltip>: 1<br>
                        </v-row>
                        Point de compétence disponible: 0<br>
                        <inventory></inventory>
                        </v-card>

                        
                    </div>
                    
                       
                    
                </v-card-text>
                </v-card>
            </v-col>
            <v-col
                name="cards-container"
                cols="12"
                md="7"
            >
                <v-card
                class="d-flex justify-center"
                flat
                >
                    <CardsStudent></CardsStudent>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import inventory from "./Inventory"
import {skinPerso} from '../../services/api.js'
import CardsStudent from "./CardsStudent";
export default {
  name: "AccueilEleve",
  components: {
      CardsStudent,
      inventory,
  },
  data: () => ({
      image: "",
      currentCharacterSpriteX:0,
      currentCharacterSpriteY:0,
  }),
  computed: {
      characterStyle: function(){
            return {
            backgroundPositionX:(-64*this.currentCharacterSpriteX)+"px",
            backgroundPositionY:(-64*11)+"px",            
            };
        }
  },
  methods: {
      skinPerso: async function() {
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
      }
    
  },
  created() {
      document.documentElement.style.overflow = 'scroll';
      this.skinPerso();
      setInterval(()=>{
          this.currentCharacterSpriteX = (this.currentCharacterSpriteX + 1) % 9;
          if(this.currentCharacterSpriteX === 0) this.currentCharacterSpriteY = (this.currentCharacterSpriteY+1) % 12;
          if(this.currentCharacterSpriteY === 0) this.currentCharacterSpriteY += 8;
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
  position: relative;
  left: -15%;
  zoom: 350%;
}
@keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
}
.earth{
    position: absolute;
    top: 12%;
    animation: rotation 20s infinite linear;
}
</style>
