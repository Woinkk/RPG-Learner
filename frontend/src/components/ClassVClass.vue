<template>
  <v-sheet
    height="550"
    class="overflow-hidden"
    style="position: relative;"
  >
    
   <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Ajouter un Quizz !
        </v-btn>
      </v-row>
    </v-container>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    <v-expansion-panels accordion="true">
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>Name</v-expansion-panel-header>
      <v-expansion-panel-content>
          Texte
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-expansion-panels>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import {MyQuizz} from "../../services/api.js";
export default {
  methods: {
    myQuizz: async function () {
        const req = await MyQuizz();
        if(req !== null) {
            this.myQuizzes = req;
        }
        return;
    }
  },

  created() {
    this.myQuizz();
  },
  
  name: 'App',
  components: {

  },

 data () {
      return {
        drawer: false,
        myQuizzes: null,
      }
    },
};
</script>