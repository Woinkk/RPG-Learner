<template>
  <v-container>
    <v-row dense>
      <CreateQuizz @switchMode= "switchToModification" v-if="CreationMode === true" @goToQuizzCreation="goToQuizzCreation" @createSubject="createSubject"></CreateQuizz>
      <ModifyQuizz @switchMode= "switchToCreation" v-else></ModifyQuizz>
      <v-col cols="12">
        <v-card color="#4c727e" dark>
          <v-card-title class="headline">Classe VS Classe</v-card-title>

          <v-card-subtitle>Permet de créer un affrontement entre classe.</v-card-subtitle>

          <v-card-actions>
            <v-menu open-on-hover top offset-y transition="fab-transition">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" v-if="ClassVClass.selectedMyClasses === null">Ma classe</v-btn>
                <v-btn color="primary" dark v-on="on" v-else>{{ClassVClass.selectedMyClasses}}</v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in computeMine"
                  :key="index"
                  @click="selectMyClasses(item.name)"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <pre align="center">       VS</pre>
            <span style="display:inline-block; width: 60px;"></span>
            <v-menu open-on-hover top offset-y transition="fab-transition">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" v-if="ClassVClass.selectedAllClasses === null">Autre classe</v-btn>

                <v-btn color="primary" dark v-on="on" v-else>{{ClassVClass.selectedAllClasses}}</v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in computeAll"
                  :key="index"
                  @click="selectAllClasses(item.name)"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn @click=createClassVClass(ClassVClass)>Créer</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
          v-for="(item, i) in allClassVClass"
          :key="i"
          cols="12"
        >
          <v-card
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                >{{item.name1}} VS {{item.name2}}</v-card-title>

                <v-card-subtitle v-if="item.date !== null">Un Class VS Class déjà existant
                  <br>
                  Qui aura lieu : {{item.date}}.
                </v-card-subtitle>
                <v-card-subtitle v-else>Un Class VS Class déjà existant
                  <br>
                  La date et l'heure de cet événement rêste encore à définir.
                </v-card-subtitle>
              </div>
              <v-col
              align="right"
              >
              <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn @click=DeleteClassVClass(item) class="mx-2" fab small dark color="red" v-on="on">
                  <v-icon dark>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Supprimer ce Classe VS Classe</span>
            </v-tooltip>
            <br>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn @click=editClassVClass(item) class="mx-2" fab small dark color="green" v-on="on">
                  <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Editer ce Classe VS Classe</span>
            </v-tooltip>
              </v-col>
            </div>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>


<script>
import CreateQuizz from "./CreateQuizz.vue";
import ModifyQuizz from "./ModifyQuizz.vue";
import {myClasses} from "../../services/api.js";
import {otherClasses} from "../../services/api.js";
import {createClassVClass} from "../../services/api.js";
import {myClassVClass} from "../../services/api.js";
import {deleteClassVClass} from "../../services/api.js";
export default {
  name: "Home",
  components: {
    CreateQuizz,
    ModifyQuizz
  },
  data: () => ({
    CreationMode: true,
    myClasse: null,
    allClasses: null,
    ClassVClass:{selectedMyClasses: null, selectedAllClasses: null},
    allClassVClass:null,
  }),
  computed: {
    computeAll: function() {
      if(this.allClasses !== null) {
        return this.allClasses.filter(i => i.name !== this.ClassVClass.selectedMyClasses);
      } else {
        return[];
      }
    },
    computeMine: function() {
      if(this.myClasse !== null) {
        return this.myClasse.filter(i => i.name !== this.ClassVClass.selectedAllClasses);
      } else {
        return[];
      }
    }
  },
  methods: {
    selectMyClasses: function(myClass) {
      this.ClassVClass.selectedMyClasses = myClass;
    },
    selectAllClasses: function(Class) {
      this.ClassVClass.selectedAllClasses = Class;
    },
    switchToModification: function () {
      this.CreationMode = false;
    },
    switchToCreation: function () {
      this.CreationMode = true;
    },
    goToQuizzCreation: function (selected) {
      this.$emit("goToQuizzCreation", selected);
      console.log(selected);
    },
    createSubject: function (subject) {
      console.log(subject);
      this.$emit("createSubject", subject);
    },
    createClassVClass: async function (ClassVClass) {
      const req = await createClassVClass(ClassVClass);
      if(req != 200) {
        this.$router.push("Home");
      } else {
        this.$router.push("ClassVClass");
        }
    },
    MyClasses:async function() {
    const req = await myClasses();
    if(req !== null) {
      this.myClasse = req;
    }
    return;
    },
    OtherClasses:async function() {
      const req = await otherClasses();
      if(req !== null) {
        this.allClasses = req;
      }
      return;
    },
    MyClassVClass: async function() {
      const req = await myClassVClass();
      if(req !== null) {
        this.allClassVClass = req;
      }
    },
    DeleteClassVClass: async function(ClassVClass) {
      const req = await deleteClassVClass(ClassVClass);
      if(req == 200) {
        for(let i = 0; i < this.allClassVClass.length; i++) {
          if(this.allClassVClass[i].id === ClassVClass.id) this.allClassVClass.splice(i, 1);
        }
      } 
    }
  },
  created() {
      this.MyClasses();
      this.OtherClasses();
      this.MyClassVClass();
    }
};
</script>
