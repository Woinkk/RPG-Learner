<template>
  <div>
    Matière: <input type="text" disabled v-model=completeQuizz.matiere>
    <br/>
    Sujet: <input type="text" disabled v-model=completeQuizz.subject>
    <v-card
        name="QuizzTitle"
        class="text-center"
        max-width="750"
        style="margin: auto; width: 50%; padding: 10px;"
    >
      <div>
          <h2>Nom du quizz</h2>
          <br/>
          <v-text-field
              class="text-center"
              v-model="completeQuizz.quizzName"
          ></v-text-field>
      </div>
    </v-card>
    <div>
      Difficulté:
      <v-menu open-on-hover top offset-y transition="fab-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on" v-if="completeQuizz.classLevel === null">Difficulté</v-btn>
          <v-btn color="primary" dark v-on="on" v-else>{{completeQuizz.classLevel}}</v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in classesLevel"
            :key="index"
            @click="selectClassLevel(item)"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <br/>
    <v-divider></v-divider>
    <br/>
    <div class="text-center">
      <v-btn @click="addQuestion">Ajouter une question</v-btn>
    </div>
    <br/>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Question</th>
            <th class="text-left">Réponses</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in completeQuizz.quizz" :key="index">
            <td style="border-right: 1px solid;">
              <v-textarea label="Question" v-model=item.question></v-textarea>
            </td>
            <td>
              <v-radio-group v-model="item.goodAnswer">
              <v-text-field placeholder="Réponse 1" v-model=item.reponses[0].text></v-text-field>Bonne réponse: <v-radio :value=1></v-radio>
              <v-text-field placeholder="Réponse 2" v-model=item.reponses[1].text></v-text-field>Bonne réponse: <v-radio :value=2></v-radio>
              <v-text-field placeholder="Réponse 3" v-model=item.reponses[2].text></v-text-field>Bonne réponse: <v-radio :value=3></v-radio>
              <v-text-field placeholder="Réponse 4" v-model=item.reponses[3].text></v-text-field>Bonne réponse: <v-radio :value=4></v-radio>
              </v-radio-group>
            </td>
            <td style="border-left: 1px solid;">
              <v-icon @click="deleteQuestion(index)">mdi-delete</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <br/>
    <div class="text-center">
      <v-btn @click="modifyQuizz">Modifier !</v-btn>
    </div>
    <v-snackbar
      v-model="snackbarGood"
      :timeout="timeout"
    >
      Quizz modifier avec succes!
      <v-btn
        color="blue"
        text
        @click="snackbarGood = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar
      v-model="snackbarError"
      :timeout="timeout"
    >
      Une erreur s'est produite veuillez verifier les informations de votre quizz.
      <v-btn
        color="blue"
        text
        @click="snackbarError = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { getQuizzByIdToModify, modifyQuizz } from "../../services/api.js";

export default {
  name: "QuizzModification",
  components: {
  },
  props: ['selected'],
  // updated() {
  //   console.log("blob");
  //   for (let i = 0; i < this.quizz.length; i++) {
  //     const element = this.quizz[i];
  //     if (element.question === "" || element.reponses[0] === "" || element.reponses[1] === "" || element.reponses[2] === "" || element.reponses[3] === "") {
  //       this.complete = false;
  //       return;
  //     }

  //     this.complete = true;
  //   }
  // },
  async created() {
    const QuizzToModify = await getQuizzByIdToModify(this.$route.params.id);

    console.log(QuizzToModify);

    this.completeQuizz = {
      quizzId: QuizzToModify.id,
      quizzName: QuizzToModify.quizzName,
      quizz: QuizzToModify.question,
      matiere: QuizzToModify.matiere,
      subject: QuizzToModify.subject,
      classLevel: QuizzToModify.classLevel
    }
    
  },
  data: function() {
    return {
      snackbarGood: false,
      snackbarError: false,
      timeout: "2000",
      completeQuizz: {
        quizzId: null,
        quizzName: null,
        quizz: [],
        matiere: null,
        subject: null,
        classLevel: null
      },
      classesLevel: [
        "6e",
        "5e",
        "4e",
        "3e",
        "2e",
        "1e",
        "T"
      ]
    }
  },
  methods: {
    deleteQuestion: function (index) {
      this.completeQuizz.quizz.splice(index, 1)
    },
    addQuestion: function () {
      this.completeQuizz.quizz = [...this.completeQuizz.quizz, {question: "", reponses: [{text: "", value: false}, {text: "", value: false}, {text: "", value: false}, {text: "", value: false}], goodAnswer: null}]
    },
    checkQuizz: function () {
      for (let i = 0; i < this.quizz.length; i++) {
      const element = this.quizz[i];
      if (element.question === "" || element.reponses[0] === "" || element.reponses[1] === "" || element.reponses[2] === "" || element.reponses[3] === "") {
        this.complete = false;
        return;
      }

      this.complete = true;
      }
    },
    selectClassLevel: function (classLevel) {
      this.completeQuizz.classLevel = classLevel;
    },
    modifyQuizz: async function () {
      const req = await modifyQuizz(this.completeQuizz.quizzId, this.completeQuizz);
      if(req.status === 200) {
        this.snackbarGood = true;
        setTimeout(() => {
          this.$router.push({name: "home"});
        }, this.timeout);
      } else {
        this.snackbarError = true;
      }
    }
  }
};
</script>
