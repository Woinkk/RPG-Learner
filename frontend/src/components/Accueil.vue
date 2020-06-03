<style scoped>
::-webkit-scrollbar {
width: 0px;
}

.earth{
    position: absolute;
    left: -160px;
    bottom: -250px;
    height: 110%;
    width: 50%;
    -webkit-animation: rotation 20s infinite linear;
}

.player{
  position: absolute;
  left: 160px;
  bottom: 190px;
  height: 300px;
  width: 150px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

.background {
  position: absolute;
  background-image: url('../assets/stars_background.gif');
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  border-style: hidden;
  outline-style: hidden;
}

@-webkit-keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
}
</style>

<template>
  <v-container style="background-color: black; height:100%" fluid>

        <v-parallax class="background" src="../assets/stars_background.gif"></v-parallax>
        
        <v-responsive
          dark
          class="overflow-y-auto"
          max-height="425"
        >
        <v-card
          dark
          class="mx-auto"
          max-width="700"
        >
          <v-card-title class="text-center">RPG-Learner</v-card-title>
          <v-card-text class="text-center">
            La première interface en ligne reliant le jeu à l'apprentissage. <br>
            Pars à l'aventure avec tes camarades, explore des donjons, affronte d'autres classes, obtiens de l'équipement et de l'expérience. <br>
            Facile d'utilisation pour les élèves mais aussi pour les professeurs. Rejoignez l'apprentissage nouvelle génération.
          </v-card-text>
        </v-card>
        <v-responsive
          height="200vh"
          class="text-center pa-2"
        >
        <v-responsive min-height="50vh"></v-responsive>
          <v-lazy
            v-model="isActive"
            :options="{
              threshold: .5
            }"
            min-height="100"
            transition="fade-transition"
          >
          <v-card
            dark
            class="mx-auto"
            max-width="700"
            hover
          >
            <v-card-title class="text-center" @click="toConnect()">Connecte toi !</v-card-title>
            <v-card-text class="text-center">
              Connecte toi avec toute ton école, combas toi contre d'autres classes, tes camarades avec ton personnage personnalisé. <br>
              Prépare toi, car ton aventure ne fais que commencer !
            </v-card-text>
          </v-card>
        </v-lazy>
      </v-responsive>
    </v-responsive>

    <img class="earth" src="https://images.fineartamerica.com/images/artworkimages/medium/1/pixel-earth-design-martin-capek-transparent.png"/>
    <img class="player" src="../assets/player.gif"/>

  </v-container>
</template>

<script>
export default {
  name: "Accueil",
  components: {
    
  },
  data: () => ({
    isActive: false,
  }),
  computed: {
    
  },
  methods: {
    toConnect: async function() {
      this.$router.push('/login');
    }
  },
  created() {
      document.documentElement.style.overflow = 'hidden';
    }
};
</script>
