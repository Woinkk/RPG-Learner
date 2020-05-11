<template>
      <v-col cols="12">
        <v-card color="#295665" dark>
          <v-card-title class="headline">Modifier un quizz</v-card-title>

          <v-card-subtitle>Un quizz est une série de question.</v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="switchToCreation">Créer un quizz</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
</template>


<script>
export default {
  name: "CreateQuizz",
  components: {
      
  },
  data: () => ({
      myQuizz: [
          {
              name: "Les multiplications",
              matiere: "Mathématique",
              subject: "Multiplication"
          },
          {
              name: "Les additions",
              matiere: "Mathématique",
              subject: "Addition"
          }
      ]
  }),
  methods: {
    switchToCreation: function () {
        this.$emit('switchMode');
    }
  }
};
</script>
