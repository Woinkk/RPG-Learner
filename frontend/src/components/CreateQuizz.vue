<template>
      <v-col cols="12">
        <v-card color="#295665" dark>
          <v-card-title class="headline">Créer un quizz</v-card-title>

          <v-card-subtitle>Un quizz est une série de question.</v-card-subtitle>

          <v-card-actions>
            <v-menu open-on-hover top offset-y transition="fab-transition" :elevation="20">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" v-if="selectedMatiere === null">Matière</v-btn>
                <v-btn color="primary" dark v-on="on" v-else>{{selectedMatiere}}</v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in matiere"
                  :key="index"
                  @click="selectMatiere(item.name)"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <span style="display:inline-block; width: 60px;"></span>
            <v-menu open-on-hover top offset-y transition="fab-transition">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" v-if="selectedSubject === null">Sujet</v-btn>
                <v-btn color="primary" dark v-on="on" v-else>{{selectedSubject}}</v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in subject"
                  :key="index"
                  @click="selectSubject(item.name)"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <AddSubject></AddSubject>
            <v-spacer></v-spacer>
            <v-btn @click="switchToModification">Modifier un quizz existant</v-btn>
            <v-btn>Créer</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
</template>


<script>
import AddSubject from "./AddSubject.vue";
export default {
  name: "CreateQuizz",
  components: {
    AddSubject
  },
  data: () => ({
    matiere: [
      {
        name: "mathématique"
      }
    ],
    subject: [
      {
        name: "multiplication"
      },
      {
        name: "addition"
      }
    ],
    selectedMatiere: null,
    selectedSubject: null,
  }),
  methods: {
    selectMatiere: function(matiere) {
      this.selectedMatiere = matiere;
    },
    selectSubject: function(subject) {
      this.selectedSubject = subject;
    },
    switchToModification: function () {
        console.log("test");
        this.$emit('switchMode');
    }
  }
};
</script>
