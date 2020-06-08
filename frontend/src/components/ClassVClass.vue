<template>
  <!--<v-sheet
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
      <v-icon
          color="pink"
          dark
          @click="hidden = !hidden"
          v-if="hidden"
        >
          mdi-calendar-clock
        </v-icon>
        <v-icon
          color="pink"
          dark
          @click="hidden = !hidden"
          v-else-if="!hidden"
        >
          mdi-calendar-clock
        </v-icon>
        <br :hidden="hidden">
        <br>
      <v-date-picker v-model="savings.pickerDate" :hidden="hidden" landscape=true locale="fr"></v-date-picker>
      <v-time-picker v-model="savings.pickerTime" :hidden="hidden" format=24hr landscape=true></v-time-picker>
    </v-col>

      <v-col 
      v-for="(item, i) in savings.quizzList"
      :key="i"
      cols="12">
          <v-card
            color="primary"
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

            <v-tooltip bottom v-if="i !== savings.quizzList.length - 1">
              <template v-slot:activator="{ on }">
                <v-btn @click=subPos(item) class="mx-2" fab small dark color="red" v-on="on">
                  <v-icon dark>mdi-sort-numeric-ascending</v-icon>
                </v-btn>
              </template>
              <span>Placer ce Quizz plus tard</span>
            </v-tooltip>
          </v-card>
        </v-col>

        <v-icon
          color="pink"
          dark
          @click="drawer = !drawer"
        >
          mdi-toy-brick-plus-outline
        </v-icon>
        <v-icon
          color="green"
          dark
          @click="saving()"
        >
          mdi-content-save-all
        </v-icon>
      </v-row>
    </v-container>

    <v-snackbar
      v-model="snackbar"
      timeout=2000
    >
      {{ text }}
      <v-btn
        color="blue"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

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
  </v-sheet>-->

  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">Choix de la date et heure</v-stepper-step>
    <v-stepper-content step="1">
      <v-card color="grey lighten-1">
      <v-card-actions align="center">
        <v-date-picker v-model="savings.pickerDate" landscape=true locale="fr"></v-date-picker>
        <v-time-picker v-model="savings.pickerTime" format=24hr landscape=true></v-time-picker>
      </v-card-actions>
      </v-card>
      <v-btn v-if="savings.pickerDate !== null && savings.pickerTime !== null" color="primary" @click="e6 = 2"><v-icon>mdi-hand-okay</v-icon></v-btn>
      <v-btn v-else color="primary" @click="e6 = 2" disabled><v-icon>mdi-hand-okay</v-icon></v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Choix des quizzs</v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="grey lighten-1">
        <v-card-actions style="overflow-y:scroll;max-height:75%">
          <v-expansion-panels accordion=true style="width:25%">
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

          <v-col 
          v-for="(item, i) in savings.quizzList"
          :key="i"
          >
          <v-card
            color="primary"
            style="width:auto"
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

            <v-tooltip bottom v-if="i !== savings.quizzList.length - 1">
              <template v-slot:activator="{ on }">
                <v-btn @click=subPos(item) class="mx-2" fab small dark color="red" v-on="on">
                  <v-icon dark>mdi-sort-numeric-ascending</v-icon>
                </v-btn>
              </template>
              <span>Placer ce Quizz plus tard</span>
            </v-tooltip>
          </v-card>
        </v-col>
        </v-card-actions>
      </v-card>
      <v-btn color="primary" @click="e6 = 3"><v-icon>mdi-hand-okay</v-icon></v-btn>
      <v-btn text @click="e6 = 1"><v-icon>mdi-arrow-up-bold-circle-outline</v-icon></v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Confirmation</v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12">
        <v-card-actions>
          <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
          >
          <v-carousel-item>
            <v-sheet height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">Le {{savings.pickerDate}} à {{savings.pickerTime}}.</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{classe1}} <v-icon size="250">mdi-flash-outline</v-icon> {{classe2}}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">Il contient {{savings.quizzList.length}} quizz(s).</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        </v-card-actions>
      </v-card>
      <v-btn color="primary" @click="saving()"><v-icon>mdi-content-save-all</v-icon></v-btn>
      <v-btn text @click="e6 = 2"><v-icon>mdi-arrow-up-bold-circle-outline</v-icon></v-btn>
    </v-stepper-content>
    <v-snackbar
      v-model="snackbar"
      timeout=2000
    >
      {{ text }}
      <v-btn
        color="blue"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-stepper>
</template>

<script>
import {AllQuizz} from "../../services/api.js";
import {GetNmbQuestionsByQuizz} from "../../services/api.js";
import {GetSubjectByQuizz} from "../../services/api.js";
import {SavingClassVClass} from "../../services/api.js";
import {classVClassLoader} from "../../services/api.js";
import {GetQuizzById} from "../../services/api.js";
import {myClassVClassSpecific} from "../../services/api.js";
export default {
  computed: {
    computeMine: function() {
      if(this.myQuizzes !== null) {
        var list = [];
        var verif = false;
        if(this.savings.quizzList.length === 0) for(let i = 0; i < this.myQuizzes.length; i++) list.push(this.myQuizzes[i]);
        else {
          for(let i = 0; i < this.myQuizzes.length; i++) {
            for(let j = 0; j < this.savings.quizzList.length; j++) {
              if(this.savings.quizzList[j].id === this.myQuizzes[i].id) verif = true;
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
        if(this.savings.quizzList.length === 0) for(let i = 0; i < this.otherQuizzes.length; i++) list.push(this.otherQuizzes[i]);
        else {
          for(let i = 0; i < this.otherQuizzes.length; i++) {
            for(let j = 0; j < this.savings.quizzList.length; j++) {
              if(this.savings.quizzList[j].id === this.otherQuizzes[i].id) verif = true;
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
      const resp = await SavingClassVClass(this.savings);
      console.log(resp);
      if(resp === 202){
        this.text = "Sauvegarde Quizzs mais pas de date sélectionnée.";
        this.snackbar = true;
      } else if(resp === 200) {
        this.text = "Sauvegarde Quizzs et date effectuée.";
        this.snackbar = true;
        setTimeout(() => {
          this.$router.push({ name: "home" });
        }, 2000);
      }
      return;
    },
    showTime: async function() {
      console.log(this.savings.pickerTime);
    },
    MyClassVClass: async function() {
      const req = await myClassVClassSpecific();
      if(req !== null) {
        this.classe1 = req[0];
        this.classe2 = req[1];
      }
    },
    allQuizz: async function () {
        const req = await AllQuizz();
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
      this.savings.quizzList.push(quizz);
    },
    deleteQuizz: async function(quizz) {
      for(let i = 0; i < this.savings.quizzList.length; i++) if(this.savings.quizzList[i].name === quizz.name) this.savings.quizzList.splice(i, 1);
    },
    plusPos: async function(quizz) {
      var plus;
      var sub;
      var verif = false;
      for(let i = 0; !verif; i++) {
        if(quizz.id === this.savings.quizzList[i].id) {
          plus = i + 1;
          sub = i - 1;
          this.savings.quizzList.splice(sub, 0, quizz);
          this.savings.quizzList.splice(plus, 1);
          verif = true;
        }
      }
    },
    subPos: async function(quizz) {
      var plus;
      var verif = false;
      for(let i = 0; !verif; i++) {
        if(quizz.id === this.savings.quizzList[i].id) {
          plus = i + 2;
          this.savings.quizzList.splice(plus, 0, quizz);
          this.savings.quizzList.splice(i, 1);
          verif = true;
        }
      }
    },
    loader: async function() {
      const req = await classVClassLoader();
      if(req !== null) {
        var nmb;
        var subject;
        var reqs;
        this.savings.pickerTime = req.date.substr(11, 5);
        this.savings.pickerDate = req.date.substr(0, 10);
        for(let i = 0; i  < req.rows.length; i++) {
          reqs = await GetQuizzById(req.rows[i]);
          nmb = await GetNmbQuestionsByQuizz(reqs);
          subject = await GetSubjectByQuizz(reqs);
          reqs.nmbQuestions = nmb;
          reqs.subject = subject;
          this.savings.quizzList.push(reqs);
        }
      }
      return;
    }
  },

  created() {
    this.loader();
    this.allQuizz();
    this.MyClassVClass();
  },
  
  name: 'App',
  components: {

  },

 data () {
      return {
        drawer: false,
        myQuizzes: null,
        otherQuizzes: null,
        savings: {quizzList: [], pickerTime: null, pickerDate:new Date().toISOString().substr(0, 10)},
        snackbar: false,
        text: null,
        classe1: null,
        classe2: null,
        e6: 1,
      }
    },
};
</script>