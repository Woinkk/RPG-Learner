<template>
<v-card
      class="mx-auto text-center"
      color="secondary"
      dark
      max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        
      </v-sheet>
    </v-card-text>

    <v-card-text>
        <v-spacer>
        <v-menu open-on-hover top offset-y transition="fab-transition">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" v-if="selectedClasse === null">Ma classe</v-btn>
                <v-btn color="primary" dark v-on="on" v-else>{{selectedClasse.name}}</v-btn>
            </template>
            <v-list>
                <v-list-item
                  v-for="(item, index) in myClasse"
                  :key="index"
                  @click="selectMyClasses(item)"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click="selectMyClasses(null)">
                  <v-list-item-title></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-menu open-on-hover top offset-y transition="fab-transition">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" v-if="selectedQuizz === null">Mon quizz</v-btn>
                <v-btn color="primary" dark v-on="on" v-else>{{selectedQuizz.name}}</v-btn>
            </template>
            <v-list>
                <v-list-item
                  v-for="(item, index) in myQuizzes"
                  :key="index"
                  @click="selectMyQuizzes(item); statsQuizz()"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click="selectMyQuizzes(null)">
                  <v-list-item-title></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        </v-spacer>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn v-if="selectedQuizz !== null" block text>Voir ce quizz</v-btn>
      <v-btn v-else disabled block text>Voir ce quizz</v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
import { myClasses } from "../../services/api.js";
import { getQuizz } from "../../services/api.js";
export default {
    name: "Stats",
    components: {
    
    },
    data: () => ({
        myClasse: null,
        myQuizzes: null,
        selectedClasse: null,
        selectedQuizz: null,
        value: null,
        students: null,
    }),
    computed: {
    
    },
    methods: {
        selectMyClasses: async function(classe) {
          this.selectedClasse = classe;
        },
        selectMyQuizzes: async function(quizz) {
          this.selectedQuizz = quizz;
        },
        MyClasses:async function() {
            const req = await myClasses();
            if(req !== null) {
                this.myClasse = req;
            }
        },
        MyQuizzes: async function() {
            const req = await getQuizz();
            if(req !== null) {
                this.myQuizzes = req;
            }
        }
  },
  created() {
      this.MyClasses();
      this.MyQuizzes();
    }
}
</script>