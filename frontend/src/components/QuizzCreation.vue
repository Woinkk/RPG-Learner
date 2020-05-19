<template>
  <div>
    Matière: <input type="text" disabled v-model=selected.selectedMatiere>
    <br/>
    Sujet: <input type="text" disabled v-model=selected.selectedSubject>
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
              <v-text-field placeholder="Réponse 1" v-model=item.reponses[0].text></v-text-field>Bonne réponse: <v-checkbox v-model="item.reponses[0].value"></v-checkbox>
              <v-text-field placeholder="Réponse 2" v-model=item.reponses[1].text></v-text-field>Bonne réponse: <v-checkbox v-model="item.reponses[1].value"></v-checkbox>
              <v-text-field placeholder="Réponse 3" v-model=item.reponses[2].text></v-text-field>Bonne réponse: <v-checkbox v-model="item.reponses[2].value"></v-checkbox>
              <v-text-field placeholder="Réponse 4" v-model=item.reponses[3].text></v-text-field>Bonne réponse: <v-checkbox v-model="item.reponses[3].value"></v-checkbox>
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
      <v-btn @click="sendQuizz">Créer !</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizzCreation",
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
  data: function() {
    return {
    //complete: false,
      completeQuizz: {
        quizzName: null,
        quizz: [
          {question: "", reponses: [{text: "", value: false}, {text: "", value: false}, {text: "", value: false}, {text: "", value: false}]},
        ],
        matiere: this.selected.selectedMatiere,
        subject: this.selected.selectedSubject,
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
      this.completeQuizz.quizz = [...this.completeQuizz.quizz, {question: "", reponses: [{text: "", value: false}, {text: "", value: false}, {text: "", value: false}, {text: "", value: false}]}]
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
    sendQuizz: function () {
      this.$emit('sendQuizz', this.completeQuizz)
    }
  }
};
</script>
