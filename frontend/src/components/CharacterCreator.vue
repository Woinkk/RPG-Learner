<template>
<div>
  <div>
    <select name="genre" id="genre" @change="genreM($event)">
      <option value="male">male</option>
      <option value="female">female</option>
    </select>
  </div>
  
  <div>
      <select name="body" id="body" @change="bodyM($event)">
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="dark2">dark2</option>
        <option value="darkelf">darkelf</option>
        <option value="darkelf2">darkelf2</option>
        <option value="orc">orc</option>
        <option value="red_orc">red_orc</option>
        <option value="tanned">tanned</option>
        <option value="tanned2">tanned2</option>
      </select>
    </div>

    <div>
        <select name="hairType" id="hairType" @change="hairTypes($event)">
        <option value="bangs">bangs</option>
        <option value="bangslong">bangslong</option>
        <option value="bangslong2">bangslong2</option>
        <option value="bangsshort">bangsshort</option>
        <option value="bedhead">bedhead</option>
        <option value="bunches">bunches</option>
        <option value="jewfro">jewfro</option>
        <option value="long">long</option>
        <option value="longhawk">longhawk</option>
        <option value="longknot">longknot</option>
        <option value="loose">loose</option>
        <option value="messy1">messy1</option>
        <option value="messy2">messy2</option>
        <option value="mohawk">mohawk</option>
        <option value="page">page</option>
        <option value="page2">page2</option>
        <option value="parted">parted</option>
        <option value="pixie">pixie</option>
        <option value="plain">plain</option>
        <option value="ponytail">ponytail</option>
        <option value="ponytail2">ponytail2</option>
        <option value="princess">princess</option>
        <option value="shorthawk">shorthawk</option>
        <option value="shortknot">shortknot</option>
        <option value="shoulderl">shoulderl</option>
        <option value="shoulderr">shoulderr</option>
        <option value="swoop">swoop</option>
        <option value="unkempt">unkempt</option>
        <option value="xlong">xlong</option>
        <option value="xlongknot">xlongknot</option>
        </select>
    </div>

    <div>
      <select name="hairColor" id="hairColor" @change="hairColors($event)">
        <option value="blonde">blonde</option>
        <option value="black">black</option>
        <option value="blonde2">blonde2</option>
        <option value="blue">blue</option>
        <option value="blue2">blue2</option>
        <option value="brown">brown</option>
        <option value="brown2">brwon2</option>
        <option value="brunette">brunette</option>
        <option value="brunette2">brunette2</option>
        <option value="dark-blonde">dark-blonde</option>
        <option value="gold">gold</option>
        <option value="gray">gray</option>
        <option value="gray2">gray2</option>
        <option value="green">green</option>²
        <option value="green2">green2</option>
        <option value="light-blonde">light-blonde</option>
        <option value="light-blonde2">light-blonde2</option>
        <option value="pink">pink</option>
        <option value="pink2">pink2</option>
        <option value="purple">purple</option>
        <option value="raven">raven</option>
        <option value="raven2">raven2</option>
        <option value="redhead">redhead</option>
        <option value="redhead2">redhead2</option>
        <option value="ruby-red">ruby-red</option>
        <option value="white">white</option>
        <option value="white-blonde">white-blonde</option>
        <option value="white-blonde2">white-blonde2</option>
        <option value="white-cyan">white-cyan</option>
      </select>
    </div>

    <div>
      <select name="ears" id="ears" @change="earsM($event)">
        <option value="bigears_light">bigears_light</option>  
        <option value="bigears_dark">bigears_dark</option>
        <option value="bigears_dark2">bigears_dark2</option>
        <option value="bigears_darkelf">bigears_darkelf</option>
        <option value="bigears_darkelf2">bigears_darkelf2</option>
        <option value="bigears_tanned">bigears_tanned</option>
        <option value="bigears_tanned2">bigears_tanned2</option>
        <option value="elvenears_dark">elvenears_dark</option>
        <option value="elvenears_dark2">elvenears_dark2</option>
        <option value="elvenears_darkelf">elvenears_darkelf</option>
        <option value="elvenears_darkelf2">elvenears_darkelf2</option>
        <option value="elvenears_light">elvenears_light</option>
        <option value="elvenears_tanned">elvenears_tanned</option>
        <option value="elvenears_tanned2">elvenears_tanned2</option>
      </select>
    </div>

    <div>
      <select name="eyes" id="eyes" @change="eyesM($event)">
        <option value="blue">blue</option>
        <option value="brown">brown</option>  
        <option value="gray">gray</option>  
        <option value="green">green</option>  
        <option value="orange">orange</option>  
        <option value="purple">purple</option>  
        <option value="red">red</option>  
        <option value="yellow">yellow</option>
      </select>
    </div>
    <div>
      <select name="nose" id="nose" @change="noseM($event)">
        <option value="bignose_light">bignose_light</option>
        <option value="bignose_dark">bignose_dark</option>
        <option value="bignose_dark2">bignose_dark2</option>
        <option value="bignose_darkelf">bignose_darkelf</option>
        <option value="bignose_darkelf2">bignose_darkelf2</option>
        <option value="bignose_tanned">bignose_tanned</option>
        <option value="bignose_tanned2">bignose_tanned2</option>
        <option value="buttonnose_dark">buttonnose_dark</option>
        <option value="buttonnose_dark2">buttonnose_dark2</option>
        <option value="buttonnose_darkelf">buttonnose_darkelf</option>
        <option value="buttonnose_darkelf2">buttonnose_darkelf2</option>
        <option value="buttonnose_light">buttonnose_light</option>
        <option value="buttonnose_tanned">buttonnose_tanned</option>
        <option value="buttonnose_tanned2">buttonnose_tanned2</option>
        <option value="straightnose_dark">straightnose_dark</option>
        <option value="straightnose_dark2">straightnose_dark2</option>
        <option value="straightnose_darkelf">straightnose_darkelf</option>
        <option value="straightnose_darkelf2">straightnose_darkelf2</option>
        <option value="straightnose_light">straightnose_light</option>
        <option value="straightnose_tanned">straightnose_tanned</option>
        <option value="straightnose_tanned2">straightnose_tanned2</option>
      </select>
    </div>
    <div>
      <select name="pants" id="pants" @change="pantsM($event)">
        <option value="magenta_pants">magenta_pants</option>
        <option value="red_pants">red_pants</option>
        <option value="teal_pants">teal_pants</option>
        <option value="white_pants">white_pants</option>

      </select>
    </div>
    <div v-if="this.genre === 'male'">
      <select name="shirtMale" id="shirtMale" @change="shirtM($event)">
        <option value="">choisi un t-shirt</option>
        <option value="brown_longsleeve">brown_longsleeve</option>
        <option value="maroon_longsleeve">maroon_longsleeve</option>
        <option value="teal_longsleeve">teal_longsleeve</option>
        <option value="white_longsleeve">white_longsleeve</option>
      </select>
    </div>
    <div v-else>
      <select name="shirtFemale" id="shirtFemale" @change="shirtM($event)">
        <option value="">choisi un t-shirt</option>
        <option value="brown_pirate">brown_pirate</option>
        <option value="brown_sleeveless">brown_sleeveless</option>
        <option value="maroon_pirate">maroon_pirate</option>
        <option value="maroon_sleeveless">maroon_sleeveless</option>
        <option value="teal_pirate">teal_pirate</option>
        <option value="teal_sleeveless">teal_sleeveless</option>
        <option value="white_pirate">white_pirate</option>
        <option value="white_sleeveless">white_sleeveless</option>
      </select>
    </div>
    <div>
      <select name="facialHair" id="facialHair" @change="facialHairStyleM($event)">
        <option value="beard">beard</option>
        <option value="bigstache">bigstache</option>
        <option value="mustache">mustache</option>
      </select>
    </div>
     <div>
      <select name="facialHairColor" id="facialHairColor" @change="facialHairColorsM($event)">
        <option value="blonde">blonde</option>
        <option value="black">black</option>
        <option value="blonde2">blonde2</option>
        <option value="blue">blue</option>
        <option value="blue2">blue2</option>
        <option value="brown">brown</option>
        <option value="brown2">brwon2</option>
        <option value="brunette">brunette</option>
        <option value="brunette2">brunette2</option>
        <option value="dark-blonde">dark-blonde</option>
        <option value="gold">gold</option>
        <option value="gray">gray</option>
        <option value="gray2">gray2</option>
        <option value="green">green</option>²
        <option value="green2">green2</option>
        <option value="light-blonde">light-blonde</option>
        <option value="light-blonde2">light-blonde2</option>
        <option value="pink">pink</option>
        <option value="pink2">pink2</option>
        <option value="purple">purple</option>
        <option value="raven">raven</option>
        <option value="raven2">raven2</option>
        <option value="redhead">redhead</option>
        <option value="redhead2">redhead2</option>
        <option value="ruby-red">ruby-red</option>
        <option value="white">white</option>
        <option value="white-blonde">white-blonde</option>
        <option value="white-blonde2">white-blonde2</option>
        <option value="white-cyan">white-cyan</option>
      </select>
    </div>

    <div v-if="this.genre === 'male'">
      <select name="shoesMale" id="shoesMale" @change="shoesM($event)">
        <option value="black_shoes">black_shoes</option>
        <option value="brown_shoes">brown_shoes</option>
        <option value="maroon_shoes">maroon_shoes</option>
      </select>
    </div>

    <div v-else>
      <select name="shoesFemale" id="shoesFemale" @change="shoesM($event)">
        <option value="black_shoes">black_shoes</option>
        <option value="brown_shoes">brown_shoes</option>
        <option value="maroon_shoes">maroon_shoes</option>
        <option value="slippers_black">slippers_black</option>
        <option value="slippers_brown">slippers_brown</option>
        <option value="slippers_gray">slippers_gray</option>
        <option value="slippers_white">slippers_white</option>
      </select>
    </div>

    <div>
      <select name="weapon" id="weapon" @change="weaponM($event)">
        <option value="bow">bow</option>
        <option value="bow_skeleton">bow_skeleton</option>
        <option value="dagger">dagger</option>
        <option value="greatbow">greatbow</option>
        <option value="recurvebow">recurvebow</option>
        <option value="spear">spear</option>
        <option value="steelwand">steelwand</option>
        <option value="woodwand">woodwand</option>
      </select>
    </div>

    <div>
      <select name="animation" id="animation" @change="animationChange($event)">
        <option value="spellcast">spellcast</option>
        <option value="trust">trust</option>
        <option value="walk">walk</option>
        <option value="slash">slash</option>
        <option value="shoot">shoot</option>
        <option value="hurt">hurt</option>
      </select>
    </div>
    

    <div class="character-container">
      <div :style="characterStyle" class="character character-body" id="character-body"></div>
      <div :style="characterStyle" class="character character-hair" id="character-hair"></div>
      <div :style="characterStyle" class="character character-ears" id="character-ears"></div>
      <div :style="characterStyle" class="character character-eyes" id="character-eyes"></div>
      <div :style="characterStyle" class="character character-nose" id="character-nose"></div>
      <div :style="characterStyle" class="character character-pants" id="character-pants"></div>
      <div :style="characterStyle" class="character character-shirt" id="character-shirt"></div>
      <div :style="characterStyle" class="character character-shoes" id="character-shoes"></div>
      <div :style="characterStyle" class="character character-weapon" id="character-weapon"></div>
      <div :style="characterStyle" class="character character-facialHair" id="character-facialHair"></div>


    </div>
    
  </div>
</template>
<script>
  export default {
    name:"CharacterCreator",
    components:{
      
    },
    data: () => ({
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
        shirt:"",
        facialHairColor:"blonde",
        facialHairStyle:"beard",
        shoes:"",
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
      animationChange(event){
        switch (event.target.value) {
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
        this.genre = event.target.value
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
         this.hairStyle = event.target.value
         this.image = require.context('../assets/',true, /\.png$/)
         document.getElementById("character-hair").style.backgroundImage= "url("+this.image("./SpriteCharacter/hair/"+this.hairStyle+"/"+this.hairColor+".png")+")";
       },
       hairColors(event){
         this.hairColor = event.target.value
         this.image = require.context('../assets/',true, /\.png$/)
         document.getElementById("character-hair").style.backgroundImage= "url("+this.image("./SpriteCharacter/hair/"+this.hairStyle+"/"+this.hairColor+".png")+")";

       },
       earsM(event){
        this.ears = event.target.value
        this.image = require.context('../assets/',true, /\.png$/)
        document.getElementById("character-ears").style.backgroundImage= "url("+this.image("./SpriteCharacter/ears/"+this.ears+".png")+")";
       },
       eyesM(event){
          this.eyes = event.target.value
          this.image = require.context('../assets/',true, /\.png$/)
          document.getElementById("character-eyes").style.backgroundImage= "url("+this.image("./SpriteCharacter/eyes/"+this.eyes+".png")+")";
       },
       noseM(event){
          this.nose = event.target.value
          this.image = require.context('../assets/',true, /\.png$/)
          document.getElementById("character-nose").style.backgroundImage= "url("+this.image("./SpriteCharacter/nose/"+this.nose+".png")+")";

       },
       pantsM(event){
          this.pants = event.target.value
          this.image = require.context('../assets/',true, /\.png$/)
          if(this.genre === "male"){
           document.getElementById("character-pants").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/pants/" + this.pants + ".png")+")";
          }else{
           document.getElementById("character-pants").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/pants/" + this.pants + ".png")+")";
          }
       },
       shirtM(event){
          this.shirt = event.target.value
          this.image = require.context('../assets/',true, /\.png$/)
          if(this.genre === "male"){
            document.getElementById("character-shirt").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/shirt/" + this.shirt + ".png")+")";
          }else{
            document.getElementById("character-shirt").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/shirt/" + this.shirt + ".png")+")";
          }
       },
       facialHairColorsM(event){
          this.facialHairColor = event.target.value
          this.image = require.context('../assets/',true, /\.png$/)
          document.getElementById("character-facialHair").style.backgroundImage = "url("+this.image("./SpriteCharacter/facialHair/" + this.facialHairStyle +"/"+ this.facialHairColor+ ".png")+")";

        
       },
       facialHairStyleM(event){
          this.facialHairStyle = event.target.value
          this.image = require.context('../assets/',true, /\.png$/)
          document.getElementById("character-facialHair").style.backgroundImage = "url("+this.image("./SpriteCharacter/facialHair/" + this.facialHairStyle +"/"+ this.facialHairColor+ ".png")+")";
       },
       shoesM(event){
          this.shoes = event.target.value
          this.image = require.context('../assets/',true, /\.png$/)
          if(this.genre === "male"){
            document.getElementById("character-shoes").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/shoes/" + this.shoes + ".png")+")";
          }else{
            document.getElementById("character-shoes").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/shoes/" + this.shoes + ".png")+")";
          }         
       },
       weaponM(event){
          this.weapon = event.target.value
          this.image = require.context('../assets/',true, /\.png$/)
          if(this.genre === "male"){
            document.getElementById("character-weapon").style.backgroundImage = "url("+this.image("./SpriteCharacter/male/weapon/" + this.weapon + ".png")+")";
          }else{
            document.getElementById("character-weapon").style.backgroundImage = "url("+this.image("./SpriteCharacter/female/weapon/" + this.weapon + ".png")+")";
          }         
       },
       bodyM(event){
         this.image = require.context('../assets/',true, /\.png$/)
         this.race = event.target.value
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

:root{
}
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
}
</style>    