<template>
  <v-sheet
    height="100%"
    class="overflow-hidden"
    style="position: relative;"
  >
    
   <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >

    <v-col cols="12" align="center">
      <v-btn
          color="pink"
          dark
          @click="hidden = !hidden"
          v-if="hidden"
        >
          Choisir la date !
        </v-btn>
        <v-btn
          color="pink"
          dark
          @click="hidden = !hidden"
          v-else-if="!hidden"
        >
          Cacher la date !
        </v-btn>
        <br :hidden="hidden">
        <br>
      <v-date-picker v-model="pickerDate" :hidden="hidden" landscape=true></v-date-picker>
      <v-time-picker v-model="pickerTime" :hidden="hidden" format=24hr landscape=true></v-time-picker>
    </v-col>

      <v-col 
      v-for="(item, i) in quizzList"
      :key="i"
      cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">{{item.name}}</v-card-title>

            <v-card-subtitle>Nombre de question(s): {{item.nmbQuestions}}. Sur le sujet: {{item.subject}}.</v-card-subtitle>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn @click=deleteQuizz(item) class="mx-2" fab small dark color="red" v-on="on">
                  <v-icon dark>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Retirer ce Quizz</span>
            </v-tooltip>

            <v-tooltip bottom v-if="i !== 0">
              <template v-slot:activator="{ on }">
                <v-btn @click=plusPos(item) class="mx-2" fab small dark color="red" v-on="on">
                  <v-icon dark>mdi-sort-numeric-descending</v-icon>
                </v-btn>
              </template>
              <span>Placer ce Quizz plus tôt</span>
            </v-tooltip>

            <v-tooltip bottom v-if="i !== quizzList.length - 1">
              <template v-slot:activator="{ on }">
                <v-btn @click=subPos(item) class="mx-2" fab small dark color="red" v-on="on">
                  <v-icon dark>mdi-sort-numeric-ascending</v-icon>
                </v-btn>
              </template>
              <span>Placer ce Quizz plus tard</span>
            </v-tooltip>
          </v-card>
        </v-col>

        <v-btn
          color="pink"
          dark
          @click="drawer = !drawer"
        >
          Ajouter un Quizz !
        </v-btn>
        <v-btn
          color="green"
          dark
          @click="saving()"
        >
          Sauvegarder !
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    <v-expansion-panels accordion=true>
      <v-expansion-panel
      :key=1
      >
      <v-expansion-panel-header>Vos quizzs</v-expansion-panel-header>
      <v-expansion-panel-content>
          
          <v-expansion-panels accordion=true>
          <v-expansion-panel
            v-for="(item,i) in computeMine"
            :key="i"
          >
            <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              Nombre de Question(s): {{item.nmbQuestions}}
              <v-btn @click=addQuizz(item) class="mx-2" fab small dark color="red" v-on="on">
                  <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel
      :key=2
      >
      <v-expansion-panel-header>Les autres quizzs</v-expansion-panel-header>
      <v-expansion-panel-content>
          
          <v-expansion-panels accordion=true>
          <v-expansion-panel
            v-for="(item,i) in computeAll"
            :key="i"
          >
            <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              Nombre de Question(s): {{item.nmbQuestions}}
              <v-btn @click=addQuizz(item) class="mx-2" fab small dark color="red" v-on="on">
                  <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import {AllQuizz} from "../../services/api.js";
import {GetNmbQuestionsByQuizz} from "../../services/api.js";
import {GetSubjectByQuizz} from "../../services/api.js";
export default {
  computed: {
    computeMine: function() {
      if(this.myQuizzes !== null) {
        var list = [];
        var verif = false;
        if(this.quizzList.length === 0) for(let i = 0; i < this.myQuizzes.length; i++) list.push(this.myQuizzes[i]);
        else {
          for(let i = 0; i < this.myQuizzes.length; i++) {
            for(let j = 0; j < this.quizzList.length; j++) {
              if(this.quizzList[j].id === this.myQuizzes[i].id) verif = true;
            }
            if(!verif) list.push(this.myQuizzes[i]);
          }
        }
        return list;
      } else {
        return[];
      }
    },
    computeAll: function() {
      if(this.otherQuizzes !== null) {
        var list = [];
        var verif = false;
        if(this.quizzList.length === 0) for(let i = 0; i < this.otherQuizzes.length; i++) list.push(this.otherQuizzes[i]);
        else {
          for(let i = 0; i < this.otherQuizzes.length; i++) {
            for(let j = 0; j < this.quizzList.length; j++) {
              if(this.quizzList[j].id === this.otherQuizzes[i].id) verif = true;
            }
            if(!verif) list.push(this.otherQuizzes[i]);
          }
        }
        return list;
      } else {
        return[];
      }
    }
  },
  methods: {
    saving: async function() {
      
    },
    allQuizz: async function () {
        const req = await AllQuizz();
        console.log(req);
        if(req !== null) {
            var MyQuizz = [];
            var OtherQuizz = [];
            let nmb;
            var subject;
            for (let i = 0; i < req.length; i++) {
              if(req[i].idteacher === req[0].userId) 
              {
                nmb = await GetNmbQuestionsByQuizz(req[i]);
                subject = await GetSubjectByQuizz(req[i]);
                req[i].nmbQuestions = nmb;
                req[i].subject = subject;
                MyQuizz.push(req[i]);
              } 
              else 
              {
                nmb = await GetNmbQuestionsByQuizz(req[i]);
                subject = await GetSubjectByQuizz(req[i]);
                req[i].nmbQuestions = nmb;
                req[i].subject = subject;
                OtherQuizz.push(req[i]);
              }
            }
            this.myQuizzes = MyQuizz;
            this.otherQuizzes = OtherQuizz;
        }
        return;
    },
    addQuizz: async function(quizz) {
      this.quizzList.push(quizz);
    },
    deleteQuizz: async function(quizz) {
      for(let i = 0; i < this.quizzList.length; i++) if(this.quizzList[i].name === quizz.name) this.quizzList.splice(i, 1);
    },
    plusPos: async function(quizz) {
      var plus;
      var sub;
      var verif = false;
      for(let i = 0; !verif; i++) {
        if(quizz.id === this.quizzList[i].id) {
          plus = i + 1;
          sub = i - 1;
          this.quizzList.splice(sub, 0, quizz);
          this.quizzList.splice(plus, 1);
          verif = true;
        }
      }
    },
    subPos: async function(quizz) {
      var plus;
      var verif = false;
      for(let i = 0; !verif; i++) {
        if(quizz.id === this.quizzList[i].id) {
          plus = i + 2;
          this.quizzList.splice(plus, 0, quizz);
          this.quizzList.splice(i, 1);
          verif = true;
        }
      }
    }
  },

  created() {
    this.allQuizz();
  },
  
  name: 'App',
  components: {

  },

 data () {
      return {
        pickerDate: new Date().toISOString().substr(0, 10),
        pickerTime: null,
        drawer: false,
        myQuizzes: null,
        otherQuizzes: null,
        quizzList: [],
        hidden: true,
      }
    },
};
</script>