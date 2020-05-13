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
                <v-btn color="primary" dark v-on="on" v-if="selectedMyClasses === null">Ma classe</v-btn>
                <v-btn color="primary" dark v-on="on" v-else>{{selectedMyClasses}}</v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in myClasses"
                  :key="index"
                  @click="selectMyClasses(item.name)"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <span style="display:inline-block; width: 60px;"></span>
            <v-menu open-on-hover top offset-y transition="fab-transition">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" v-if="selectedAllClasses === null">Autre classe</v-btn>
                <v-btn color="primary" dark v-on="on" v-else>{{selectedAllClasses}}</v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in allClasses"
                  :key="index"
                  @click="selectAllClasses(item.name)"
                >
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn>Créer</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import CreateQuizz from "./CreateQuizz.vue";
import ModifyQuizz from "./ModifyQuizz.vue";
export default {
  name: "Home",
  components: {
    CreateQuizz,
    ModifyQuizz
  },
  data: () => ({
    CreationMode: true,
    myClasses: [
        {
            name: "classe 4A"
        }
    ],
    allClasses: [
        {
            name: "classe 5C"
        },
        {
            name: "classe 2B"
        }, 
        {
            name: "classe 3A"
        }
    ],
    selectedMyClasses: null,
    selectedAllClasses: null,

  }),
  methods: {
    selectMyClasses: function(myClass) {
      this.selectedMyClasses = myClass;
    },
    selectAllClasses: function(Class) {
      this.selectedAllClasses = Class;
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
    }
  }
};
</script>
