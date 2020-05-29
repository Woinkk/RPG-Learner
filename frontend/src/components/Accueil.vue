<template>
  <v-container style="background-color: black; height:100%" fluid>
        <v-parallax class="background" src="../assets/stars_background.gif"></v-parallax>
        <img class="earth" src="https://images.fineartamerica.com/images/artworkimages/medium/1/pixel-earth-design-martin-capek-transparent.png"/>
        <img class="player" src="../assets/player.gif"/>
  </v-container>
</template>

<style>
.earth{
    position: absolute;
    left: -160px;
    bottom: -250px;
    height: 110%;
    width: 50%;
    -webkit-animation: rotation 25s infinite linear;
}

.player{
  position: absolute;
  left: 160px;
  bottom: 190px;
  height: 300px;
  width: 150px;
}

.background {
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

<script>
export default {
  name: "Accueil",
  components: {
    
  },
  data: () => ({

  }),
  computed: {
    
  },
  methods: {
  
  },
  created() {
      document.documentElement.style.overflow = 'hidden';
    }
};
</script>
