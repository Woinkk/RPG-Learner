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
            </v-card>
        </div>
    </v-container>
</template>


<script>
import Timer from "../components/Timer.vue";

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
  }),

  methods: {
    timePassed: async function (timePassed) {
        if(timePassed >= 30) {
            this.$emit('getAnswer', null);
        }
        console.log(timePassed);
    },
    sendAnswer: async function (reponse, indexrep) {
        this.$emit('getAnswer', {Reponse: reponse, Index: indexrep});
    }
  },
  created () {
      document.documentElement.style.overflow = "hidden";
      this.index =  Math.floor(Math.random() * this.background.length);
      console.log("INDEX IMAGE",this.index);
  }
};
</script>
