<template>
      <v-col cols="12">
        <v-card color="#295665" dark>
          <v-card-title class="headline">Créer un quizz</v-card-title>

          <v-card-subtitle>Un quizz est une série de question.</v-card-subtitle>

          <v-card-actions>
            <!--v-menu open-on-hover top offset-y transition="fab-transition" :elevation="20">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" v-if="selected.selectedMatiere === null">Matière</v-btn>
                <v-btn color="primary" dark v-on="on" v-else>{{selected.selectedMatiere}}</v-btn>
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
            </v-menu-->
            <!--span style="display:inline-block; width: 60px;"></span-->
            <v-menu open-on-hover top offset-y transition="fab-transition">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" v-if="selected.selectedSubject === null">Sujet</v-btn>
                <v-btn color="primary" dark v-on="on" v-else>{{selected.selectedSubject}}</v-btn>
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
            <AddSubject @createSubject="createSubject" @reload="LoadMatiereAndSubject"></AddSubject>
            <v-spacer></v-spacer>
            <v-icon @click="switchToModification">mdi-eye-outline</v-icon>
            <v-btn v-if="CanCreate" @click="GoToQuizzCreation">Créer</v-btn>
            <v-btn v-else disabled>Créer</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
</template>


<script>
import AddSubject from "./AddSubject.vue";
import { getMatiere, getSubject } from "../../services/api.js";
export default {
  name: "CreateQuizz",
  components: {
    AddSubject
  },
  async created () {
    await this.LoadMatiereAndSubject();
  },
  data: () => ({
    CanCreate: false,
    subject: [
    ],
    selected: {
      selectedMatiere: null,
      selectedSubject: null,
    },
  }),
  methods: {
    selectMatiere: function(matiere) {
      this.selected.selectedMatiere = matiere;
      if (this.selected.selectedMatiere != null && this.selected.selectedSubject != null) {
        this.CanCreate = true;
      }
    },
    selectSubject: function(subject) {
      this.selected.selectedSubject = subject;
      if (this.selected.selectedMatiere != null && this.selected.selectedSubject != null) {
        this.CanCreate = true;
      }
    },
    switchToModification: function () {
        console.log("test");
        this.$emit('switchMode');
    },
    GoToQuizzCreation: function () {
      this.$emit("goToQuizzCreation", this.selected);
      console.log(this.selected);
    },
    createSubject: function (subject) {
      console.log(subject);
      this.$emit("createSubject", subject);
    },
    GetMatiere: async function () {
      const matieres = await getMatiere();
      return matieres;
    },
    GetSubject: async function () {
      const subjects = await getSubject();
      return subjects;
    },
    LoadMatiereAndSubject: async function () {
      this.subject = [];
      
      const matiere = await this.GetMatiere();
      const subject = await this.GetSubject();

      this.subject = subject;

      console.log(matiere);

      this.selected.selectedMatiere = matiere[0].name;
    }
  }
};
</script>
