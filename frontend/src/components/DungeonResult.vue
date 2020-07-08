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
          <br>
          Bonne réponse: <v-text>{{getGood(item)}}</v-text>
          <br>
          Votre réponse: <v-text>{{answer[index].Reponse}}</v-text>
        </div>
        <br>
        <v-btn @click="goToAccueil">Retour a l'accueil</v-btn>
      </div>
    </v-container>
</template>


<script>
import { sendResult } from "../../services/api.js";
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
    good: null,
  }),
  methods: {
    getTheRightAnswer: function (questions) {
      for (let i = 0; i < questions.length; i++) {
        const element = Object.keys(questions)[i];
        console.log("WOOOOOOOO",element);
        if (element.includes(this.questions.good)) {
          console.log("CEST WOOOOOO",Object.values(questions)[element]);
          return Object.values(questions)[element];
        } else {
          return null
        }
      }
    },
    getGood: function (item) {
      if (item.good === 1) {
        this.good = item.reponse1
        return this.good
      } else if (item.good === 2) {
        this.good = item.reponse2
        return this.good
      } else if (item.good === 3) {
        this.good = item.reponse3
        return this.good
      } else {
        this.good = item.reponse4
        return this.good
      }
    },
    goToAccueil: function () {
      this.$router.push({name: "AccueilEleve"})
    }
  },
  created() {
    this.quizz = this.$route.params.quizz.quizz;
    this.questions = this.$route.params.quizz.question;
    this.answer = this.$route.params.quizz.answer;

    for (let i = 0; i < this.answer.length; i++) {
      const answer = this.answer[i];
      if (answer.Index === this.questions[i].good) {
        this.goodAnswer++;
      }
    }

    if (this.goodAnswer === this.answer.length && this.$route.params.quizz.loot === true) {
      console.log("HOHO");
      this.$router.push({name: "LootChest", params: this.$route.params.quizz});
    } else {
      sendResult({GoodAnswer: this.goodAnswer, IdQuizz: this.quizz[0].id});
    }
    
  }
};
</script>
