<template>
<div>
  <v-stepper v-model="e1">

      <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Genre</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Couleur de peau</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Cheveux</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Visage</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">Tenue</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6">Pilosité</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 7" step="7">Arme</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="8">Finalisation</v-stepper-step>
      </v-stepper-header>

     <v-stepper-items>
      <v-stepper-content step="1">
      <v-card color="grey lighten-1">
      <v-card-actions align="center">
      <div>
      <v-btn @click="genreM('male')"><v-icon>mdi-gender-male</v-icon></v-btn>
      <v-btn @click="genreM('female')"><v-icon>mdi-gender-female</v-icon></v-btn>
      </div>
      </v-card-actions>
      </v-card>
      <v-btn color="primary" @click="e1 = 2"><v-icon>mdi-hand-okay</v-icon></v-btn>
    </v-stepper-content>

      <v-stepper-content step="2">
      <v-card color="grey lighten-1">
      <v-card-actions align="center">
      <div>
      <v-btn @click="bodyM('light')">Claire</v-btn>
      <v-btn @click="bodyM('dark')">Foncé</v-btn>
      <v-btn @click="bodyM('darkelf')">Elfe sombre</v-btn>
      <v-btn @click="bodyM('orc')">Orque</v-btn>
      <v-btn @click="bodyM('red_orc')">Orque foncé</v-btn>
      <v-btn @click="bodyM('tanned2')">Bronzé</v-btn>
    </div>
    </v-card-actions>
    </v-card>
    <v-btn color="primary" @click="e1 = 3"><v-icon>mdi-hand-okay</v-icon></v-btn>
    <v-btn text @click="e1 = 1"><v-icon>mdi-arrow-up-bold-circle-outline</v-icon></v-btn>
    </v-stepper-content>

      <v-stepper-content step="3">
      <v-card color="grey lighten-1">
      <v-card-actions align="center">
      <div>
        <v-btn @click="hairTypes('bangs')">Pagailles</v-btn>
        <v-btn @click="hairTypes('bangslong2')">Pagailles longs</v-btn>
        <v-btn @click="hairTypes('bedhead')">Au réveil</v-btn>
        <v-btn @click="hairTypes('long')">Long</v-btn>
        <v-btn @click="hairTypes('longhawk')">Crête longue</v-btn>
        <v-btn @click="hairTypes('loose')">Détachés</v-btn>
        <v-btn @click="hairTypes('ponytail')">Queu de cheval</v-btn>
        <v-btn @click="hairTypes('princess')">Princess</v-btn>
        <v-btn @click="hairTypes('shorthawk')">Crête courte</v-btn>
        <v-btn @click="hairTypes('xlong')">Très long</v-btn>
        <v-btn @click="hairTypes('xlongknot')">Très longue queu de cheval</v-btn>
    </div>
    <br>
    <div>
        <v-btn @click='hairColors("blonde")'>Blond</v-btn>
        <v-btn @click='hairColors("black")'>Noir</v-btn>
        <v-btn @click='hairColors("blue")'>Bleu</v-btn>
        <v-btn @click='hairColors("brunette")'>Brun</v-btn>
        <v-btn @click='hairColors("gray")'>Gris</v-btn>
        <v-btn @click="hairColors('green')">Vert</v-btn>
        <v-btn @click='hairColors("pink")'>Rose</v-btn>
        <v-btn @click='hairColors("raven")'>Foncé</v-btn>
        <v-btn @click='hairColors("redhead")'>Rouge</v-btn>
        <v-btn @click='hairColors("white")'>Blanc</v-btn>
    </div>
    </v-card-actions>
    </v-card>
    <v-btn color="primary" @click="e1 = 4"><v-icon>mdi-hand-okay</v-icon></v-btn>
    <v-btn text @click="e1 = 2"><v-icon>mdi-arrow-up-bold-circle-outline</v-icon></v-btn>
    </v-stepper-content>

      <v-stepper-content step="4">
      <v-card color="grey lighten-1">
      <v-card-actions align="center">
    <div>
        <v-btn @click='earsM("bigears_light")'>Oreilles claires</v-btn>  
        <v-btn @click='earsM("bigears_dark")'>Oreilles foncées</v-btn>
        <v-btn @click='earsM("bigears_darkelf")'>Oreilles elfe sombre</v-btn>
        <v-btn @click='earsM("elvenears_dark")'>Oreilles d'elfe foncées</v-btn>
        <v-btn @click='earsM("elvenears_light")'>Oreilles d'elfe claires</v-btn>
        <v-btn @click='earsM("elvenears_tanned2")'>Oreilles d'elfe bronzées</v-btn>
    </div>
    <br>
    <div>
        <v-btn @click='eyesM("blue")'>Bleu</v-btn>
        <v-btn @click='eyesM("brown")'>Marron</v-btn>  
        <v-btn @click='eyesM("gray")'>Gris</v-btn>  
        <v-btn @click='eyesM("green")'>Vert</v-btn>  
        <v-btn @click='eyesM("orange")'>Orange</v-btn>  
        <v-btn @click='eyesM("purple")'>Violet</v-btn>  
        <v-btn @click='eyesM("red")'>Rouge</v-btn>  
        <v-btn @click='eyesM("yellow")'>Jaune</v-btn>
    </div>
    <br>
    <div>
        <v-btn @click='noseM("bignose_light")'>Nez clair</v-btn>
        <v-btn @click='noseM("bignose_dark")'>Nez foncé</v-btn>
        <v-btn @click='noseM("bignose_darkelf")'>Nez d'elfe sombre</v-btn>
        <v-btn @click='noseM("bignose_tanned2")'>Nez bronzé</v-btn>
        <v-btn @click='noseM("buttonnose_light")'>Nez plat clair</v-btn>
        <v-btn @click='noseM("buttonnose_dark")'>Nez plat foncé</v-btn>
        <v-btn @click='noseM("buttonnose_darkelf")'>Nez plat d'elfe sombre</v-btn>
        <v-btn @click='noseM("buttonnose_tanned2")'>Nez plat bronzé</v-btn>
        <v-btn @click='noseM("straightnose_light")'>Nez droit clair</v-btn>
        <v-btn @click='noseM("straightnose_dark")'>Nez droit foncé</v-btn>
        <v-btn @click='noseM("straightnose_darkelf")'>Nez droit d'elfe sombre</v-btn>
        <v-btn @click='noseM("straightnose_tanned2")'>Nez droit bronzé</v-btn>
    </div>
    </v-card-actions>
    </v-card>
    <v-btn color="primary" @click="e1 = 5"><v-icon>mdi-hand-okay</v-icon></v-btn>
    <v-btn text @click="e1 = 3"><v-icon>mdi-arrow-up-bold-circle-outline</v-icon></v-btn>
    </v-stepper-content>

      <v-stepper-content step="5">
      <v-card color="grey lighten-1">
      <v-card-actions align="center">
    <div>
        <v-btn @click='pantsM("magenta_pants")'>Pantalon magenta</v-btn>
        <v-btn @click='pantsM("red_pants")'>Pantalon rouge</v-btn>
        <v-btn @click='pantsM("teal_pants")'>Pantalon gris</v-btn>
        <v-btn @click='pantsM("white_pants")'>Pantalon blanc</v-btn>
    </div>
    <br>
    <div v-if="this.genre === 'male'">
        <v-btn @click='shirtM("brown_longsleeve")'>T-shirt manche longue marron</v-btn>
        <v-btn @click='shirtM("teal_longsleeve")'>T-shirt manche longue gris</v-btn>
        <v-btn @click='shirtM("white_longsleeve")'>T-shirt manche longue blanc</v-btn>
    </div>
    <div v-else>
        <v-btn @click='shirtM("brown_pirate")'>T-shirt marron</v-btn>
        <v-btn @click='shirtM("brown_sleeveless")'>T-shirt marrion sans manche</v-btn>
        <v-btn @click='shirtM("teal_pirate")'>T-shirt gris</v-btn>
        <v-btn @click='shirtM("teal_sleeveless")'>T-shirt gris sans manche</v-btn>
        <v-btn @click='shirtM("white_pirate")'>T-shirt blanc</v-btn>
        <v-btn @click='shirtM("white_sleeveless")'>T-shirt blanc sans manche</v-btn>
    </div>
    <br>
    <div v-if="this.genre === 'male'">
        <v-btn @click='shoesM("black_shoes")'>Chaussures noires</v-btn>
        <v-btn @click='shoesM("brown_shoes")'>Chaussures marrons</v-btn>
    </div>

    <div v-else>
        <v-btn @click='shoesM("black_shoes")'>Chaussures noires</v-btn>
        <v-btn @click='shoesM("brown_shoes")'>Chaussures marrons</v-btn>
        <v-btn @click='shoesM("slippers_black")'>Chaussons noirs</v-btn>
        <v-btn @click='shoesM("slippers_brown")'>Chaussons marrons</v-btn>
        <v-btn @click='shoesM("slippers_gray")'>Chaussons gris</v-btn>
        <v-btn @click='shoesM("slippers_white")'>Chaussons blanc</v-btn>
    </div>
    </v-card-actions>
    </v-card>
    <v-btn color="primary" @click="e1 = 6"><v-icon>mdi-hand-okay</v-icon></v-btn>
    <v-btn text @click="e1 = 4"><v-icon>mdi-arrow-up-bold-circle-outline</v-icon></v-btn>
    </v-stepper-content>

    <v-stepper-content step="6">
    <v-card color="grey lighten-1">
    <v-card-actions align="center">
    <div>
        <v-btn @click='facialHairStyleM("beard")'>Barbe</v-btn>
        <v-btn @click='facialHairStyleM("mustache")'>Moustache</v-btn>
        <v-btn @click='facialHairStyleM("bigstache")'>Grosse moustache</v-btn>
    </div>
    <br>
    <v-spacer>
    </v-spacer>
    <div>
        <v-btn @click='facialHairColorsM("blonde")'>Blond</v-btn>
        <v-btn @click='facialHairColorsM("black")'>Noir</v-btn>
        <v-btn @click='facialHairColorsM("blue")'>Bleu</v-btn>
        <v-btn @click='facialHairColorsM("brunette")'>Brun</v-btn>
        <v-btn @click='facialHairColorsM("gray")'>Gris</v-btn>
        <v-btn @click="facialHairColorsM('green')">Vert</v-btn>
        <v-btn @click='facialHairColorsM("pink")'>Rose</v-btn>
        <v-btn @click='facialHairColorsM("raven")'>Foncée</v-btn>
        <v-btn @click='facialHairColorsM("redhead")'>Rouge</v-btn>
        <v-btn @click='facialHairColorsM("white")'>Blanc</v-btn>
    </div>
    </v-card-actions>
    </v-card>
    <v-btn color="primary" @click="e1 = 7"><v-icon>mdi-hand-okay</v-icon></v-btn>
    <v-btn text @click="e1 = 5"><v-icon>mdi-arrow-up-bold-circle-outline</v-icon></v-btn>
    </v-stepper-content>

      <v-stepper-content step="7">
      <v-card color="grey lighten-1">
      <v-card-actions align="center">
    <div>
        <v-btn @click='weaponM("bow")'>Arc</v-btn>
        <v-btn @click='weaponM("greatbow")'>Arc amélioré</v-btn>
        <v-btn @click='weaponM("recurvebow")'>Arc professionnel</v-btn>
        <v-btn @click='weaponM("dagger")'>Dague</v-btn>
        <v-btn @click='weaponM("spear")'>Lance</v-btn>
        <v-btn @click='weaponM("woodwand")'>Baguette en bois</v-btn>
        <v-btn @click='weaponM("steelwand")'>Baguette en fer</v-btn>
    </div>
    </v-card-actions>
    </v-card>
    <v-btn color="primary" @click="e1 = 8"><v-icon>mdi-hand-okay</v-icon></v-btn>
    <v-btn text @click="e1 = 6"><v-icon>mdi-arrow-up-bold-circle-outline</v-icon></v-btn>
    </v-stepper-content>

      <v-stepper-content step="8">
      <v-card color="grey lighten-1">
      <v-card-actions align="center">
    <div>
        <v-btn @click='animationChange("spellcast")'>Lancement de sort</v-btn>
        <v-btn @click='animationChange("trust")'>Planter</v-btn>
        <v-btn @click='animationChange("walk")'>Marcher</v-btn>
        <v-btn @click='animationChange("slash")'>Couper</v-btn>
        <v-btn @click='animationChange("shoot")'>Tirer</v-btn>
        <v-btn @click='animationChange("hurt")'>Perdre</v-btn>
    </div>
    </v-card-actions>
    </v-card>
    <v-btn color="primary" @click="saving()"><v-icon>mdi-content-save-all</v-icon></v-btn>
    <v-btn text @click="e1 = 7"><v-icon>mdi-arrow-up-bold-circle-outline</v-icon></v-btn>
    </v-stepper-content>
     </v-stepper-items>
    </v-stepper>

    <div class="character-container">
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
  </div>
</template>
<script>
import {savingCharacter} from '../../services/api.js';
  export default {
    name:"CharacterCreator",
    components:{
      
    },
    data: () => ({
        e1: 1,
        currentCharacterSpriteX:0,
        currentCharacterSpriteY:0,
        genre:"male",
        hairColor:"blonde",
        hairStyle:"bangs",
        race:"light",
        ears:"bigears_light",
        eyes:"blue",
        nose:"bignose_light",
        pants:"magenta_pants",
        shirt:"brown_longsleeve",
        facialHairColor:"blonde",
        facialHairStyle:"beard",
        shoes:"black_shoes",
        weapon:"bow",
        image:"",
        animation:"",
        MapURL :new Map([["blonde","../assets/blonde"],["darkelf","../assets/darkelf.png"],["light" ,"../assets/light.png"],["black","../assets/black.png"]]),
    }),
    computed: {
        characterStyle: function(){
          
            return {
            backgroundPositionX:(-64*this.currentCharacterSpriteX)+"px",
            backgroundPositionY:(-64*this.currentCharacterSpriteY)+"px",            
            };
        }
    },
    methods:{
      saving: async function() {
          let perso = {
            "genre":this.genre, "hairColor":this.hairColor, "hairStyle":this.hairStyle, "race":this.race, "ears":this.ears,
            "eyes":this.eyes, "nose":this.nose, "pants":this.pants, "shirt":this.shirt, "facialHairColor":this.facialHairColor,
            "facialHairStyle":this.facialHairStyle, "shoes":this.shoes, "weapon":this.weapon
          };
          await savingCharacter(perso);
          this.$router.push({name: "AccueilEleve"})


      },
      animationChange(event){
        switch (event) {
          case "spellcast":
            this.animation = "spellcast"
          break;
          case "trust":
            this.animation = "trust"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 4;
          break;
          case "walk":
            this.animation = "walk"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 8;
          break;
          case "slash":
            this.animation = "slash"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 12;
          break;
          case "shoot":
            this.animation = "shoot"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 16;
          break;
          case "hurt":
            this.animation = "hurt"
            this.currentCharacterSpriteX = 0;
            this.currentCharacterSpriteY = 20;
          break;
          default:
        }
      },
      genreM(event){
        this.genre = event;
        this.image = require.context('../assets/',true, /\.png$/)
        if(this.genre === "male"){
          document.getElementById("character-body").style.backgroundImage= "url("+this.image("./SpriteCharacter/male/body/"+this.race+".png");
          document.getElementById("character-pants").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/pants/" + this.pants + ".png")+")";
          document.getElementById("character-shirt").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/shirt/brown_longsleeve.png")+")";
          document.getElementById("character-shoes").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/shoes/brown_shoes.png")+")";
        }else{
          document.getElementById("character-body").style.backgroundImage= "url("+this.image("./SpriteCharacter/female/body/"+this.race+".png");
          document.getElementById("character-shirt").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/shirt/brown_sleeveless.png")+")";
          document.getElementById("character-shoes").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/shoes/brown_shoes.png")+")";
          document.getElementById("character-pants").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/pants/" + this.pants+ ".png")+")";
        }
      },
       hairTypes(event){
         this.hairStyle = event;
         this.image = require.context('../assets/',true, /\.png$/)
         document.getElementById("character-hair").style.backgroundImage= "url("+this.image("./SpriteCharacter/hair/"+this.hairStyle+"/"+this.hairColor+".png")+")";
       },
       hairColors(event){
         this.hairColor = event;
         this.image = require.context('../assets/',true, /\.png$/)
         document.getElementById("character-hair").style.backgroundImage= "url("+this.image("./SpriteCharacter/hair/"+this.hairStyle+"/"+this.hairColor+".png")+")";

       },
       earsM(event){
        this.ears = event;
        this.image = require.context('../assets/',true, /\.png$/)
        document.getElementById("character-ears").style.backgroundImage= "url("+this.image("./SpriteCharacter/ears/"+this.ears+".png")+")";
       },
       eyesM(event){
          this.eyes = event;
          this.image = require.context('../assets/',true, /\.png$/)
          document.getElementById("character-eyes").style.backgroundImage= "url("+this.image("./SpriteCharacter/eyes/"+this.eyes+".png")+")";
       },
       noseM(event){
          this.nose = event;
          this.image = require.context('../assets/',true, /\.png$/)
          document.getElementById("character-nose").style.backgroundImage= "url("+this.image("./SpriteCharacter/nose/"+this.nose+".png")+")";

       },
       pantsM(event){
          this.pants = event;
          this.image = require.context('../assets/',true, /\.png$/)
          if(this.genre === "male"){
           document.getElementById("character-pants").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/pants/" + this.pants + ".png")+")";
          }else{
           document.getElementById("character-pants").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/pants/" + this.pants + ".png")+")";
          }
       },
       shirtM(event){
          this.shirt = event;
          this.image = require.context('../assets/',true, /\.png$/)
          if(this.genre === "male"){
            document.getElementById("character-shirt").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/shirt/" + this.shirt + ".png")+")";
          }else{
            document.getElementById("character-shirt").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/shirt/" + this.shirt + ".png")+")";
          }
       },
       facialHairColorsM(event){
          this.facialHairColor = event;
          this.image = require.context('../assets/',true, /\.png$/)
          document.getElementById("character-facialHair").style.backgroundImage = "url("+this.image("./SpriteCharacter/facialHair/" + this.facialHairStyle +"/"+ this.facialHairColor+ ".png")+")";

        
       },
       facialHairStyleM(event){
          this.facialHairStyle = event;
          this.image = require.context('../assets/',true, /\.png$/)
          document.getElementById("character-facialHair").style.backgroundImage = "url("+this.image("./SpriteCharacter/facialHair/" + this.facialHairStyle +"/"+ this.facialHairColor+ ".png")+")";
       },
       shoesM(event){
          this.shoes = event;
          this.image = require.context('../assets/',true, /\.png$/)
          if(this.genre === "male"){
            document.getElementById("character-shoes").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/shoes/" + this.shoes + ".png")+")";
          }else{
            document.getElementById("character-shoes").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/shoes/" + this.shoes + ".png")+")";
          }         
       },
       weaponM(event){
          this.weapon = event;
          this.image = require.context('../assets/',true, /\.png$/)
          if(this.genre === "male"){
            document.getElementById("character-weapon").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/weapon/" + this.weapon + ".png")+")";
          }else{
            document.getElementById("character-weapon").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/weapon/" + this.weapon + ".png")+")";
          }         
       },
       bodyM(event){
         this.image = require.context('../assets/',true, /\.png$/)
         this.race = event;
         if(this.genre === "male"){
           document.getElementById("character-body").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/body/" + this.race + ".png")+")";

         }else{
           document.getElementById("character-body").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/body/" + this.race + ".png")+")";
         }
         
         
         
         //document.documentElement.style
          //.setProperty('--url-body',this.MapURL.get(event.target.value))
       }
    },
      created() {
        document.documentElement.style.overflow = 'hidden';
        console.log(this.animation)
        
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
    
}
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
  left: 45%;
  
    -moz-transform: scale(2.5);
  -o-transform: scale(2.5);
  -webkit-transform: scale(2.5);
  transform: scale(2.5); /* Standard Property */
  transform-origin: 0 0;
}
</style>    