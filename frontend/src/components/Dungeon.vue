<template>
        <FightingInterface ref="FI" :Question="questions[index].question" 
        :Reponse1="questions[index].reponse1" 
        :Reponse2="questions[index].reponse2" 
        :Reponse3="questions[index].reponse3"
        :Reponse4="questions[index].reponse4"
        @getAnswer="getAnswer"
        >
        
        </FightingInterface>
</template>


<script>
import FightingInterface from "../components/FightingInterface.vue";
import { GetFullQuizzById } from "../../services/api.js";

export default {
  name: "Dungeon",
  components: {
      FightingInterface,
  },
  data: () => ({
    idStudent: "",
    quizz: [],
    questions: [],
    answer: [],
    timePassed: 0,
    index: 0,
  }),
  methods: {
    getQuizz: async function (idQuizz) {
      const fullQuizz = await GetFullQuizzById(idQuizz);
      this.quizz = fullQuizz.Quizz;
      this.questions = fullQuizz.Questions;

      console.log(fullQuizz);
    },
    getAnswer: async function (answer) {
      this.answer = [...this.answer, answer];
      this.nextQuetion();
      this.endOfQuizz();
      console.log(this.answer);
    },
    nextQuetion: async function () {
      if(this.questions[this.index].good === this.answer[this.index]) {
        this.$refs.FI.goodAnswer();
      } else {
        this.$refs.FI.badAnswer();
      }
      this.index++;
    },
    endOfQuizz: function () {
      setTimeout(() => {
            if (this.index > this.questions.length - 1) {
              //C'est la fin du quizz faire une page de résultat
              this.$router.push({name: "DungeonResult", params: {quizz: {quizz: this.quizz, question: this.questions, answer: this.answer}}});
            }
        }, 9000);
    },
  },
  mounted: {
      
  },
  created() {
    this.getQuizz(this.$route.params.id);
  }
};
</script>
