<template>
    <v-container>
      <div style="text-align: center">
        <h1>
          <v-text>Nom du quizz</v-text>
        </h1>
        <v-text>{{this.quizz[0].name}}</v-text>
        <v-divider></v-divider>
        <h1>
          <v-text>Résultats</v-text>
        </h1>
        <div v-for="(item, index) in this.questions" :key=index>
          <h3>
            <v-text>Question {{index+1}}</v-text>
          </h3>
          <v-text>{{item.question}}</v-text>
        </div>
      </div>
    </v-container>
</template>


<script>
export default {
  name: "DungeonResult",
  components: {

  },
  data: () => ({
    idStudent: "",
    quizz: [],
    questions: [],
    answer: [],
    goodAnswer: 0,
  }),
  methods: {

  },
  created() {
    this.quizz = this.$route.params.quizz.quizz;
    this.questions = this.$route.params.quizz.question;
    this.answer = this.$route.params.quizz.answer;

    for (let i = 0; i < this.answer.length; i++) {
      const answer = this.answer[i];
      if (answer === this.questions[i].good) {
        this.goodAnswer++;
      }
    }
  }
};
</script>
