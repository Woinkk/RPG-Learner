<template>
<v-container>
 <v-card
    dark
    disabled
    class="mx-auto"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/1vs1_background.jpg"
    >
      <v-card-title>Combat 1 VS 1</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Affronte tes amis dans un combat à mort.</v-card-subtitle>

    <v-card-text class="text--primary">
      <!-- Texte -->
    </v-card-text>

    <v-card-actions>
      <!-- Action -->
    </v-card-actions>
  </v-card>

    <v-card
    dark
    class="mx-auto"
    >
    <v-img
        class="white--text align-end"
        height="200px"
        src="../assets/dungeon_background.jpg"
    >
        <v-card-title>Donjon</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Pars affronter des monstres pour obtenir du meilleur équipement ainsi que de l'experience.</v-card-subtitle>

    <v-card-text class="text--primary">
        <!-- Texte -->
    </v-card-text>

    <v-card-actions>
        <!-- Action -->
        <v-btn @click="goToDungeonSelection">Lancer un donjon !</v-btn>
    </v-card-actions>
    </v-card>

    <v-card
    dark
    disabled
    class="mx-auto"
    >
    <v-img
        class="white--text align-end"
        height="200px"
        src="../assets/classVClass_background.jpg"
    >
        <v-card-title>Classe VS Classe</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Affronte toi avec tes camarades contre une autre classe. Pas de pitié dans ce combat.</v-card-subtitle>

    <v-card-text class="text--primary">
        <!-- Texte -->
    </v-card-text>

    <v-card-actions>
        <!-- Action -->
    </v-card-actions>
    </v-card>
</v-container>
</template>

<script>
export default {
    name: "CardsStudent",
    components: {
    
    },
    data: () => ({
        
    }),
    computed: {
    
    },
    methods: {
        goToDungeonSelection: async function () {
          this.$emit("goToDungeonSelection")
        }
  },
  created() {

    }
}
</script>