
<template>
  <v-app>
    <v-app-bar app color="primary">
      <Navbar />
      <v-spacer />

      <router-link v-if="!this.connected" class="d-flex pa-2" justify-end to="/login">
        <v-btn color="primary">Connexion</v-btn>
      </router-link>

      <router-link v-else class="d-flex pa-2" justify-end :to="{path:currentRouteName}">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on" @click.stop="drawer=!drawer">
              <v-icon>mdi-account-settings-outline</v-icon>
            </v-btn>
          </template>
          <span>Menu</span>
        </v-tooltip>
      </router-link>
      <router-link to="/newStudent">
        <v-btn color="primary">
          <v-icon>mdi-account-plus-outline</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/stats">
      <v-btn color="primary"><v-icon>mdi-chart-line</v-icon></v-btn>
      </router-link>
    </v-app-bar>

    <v-content>
      <v-navigation-drawer right v-model="drawer" absolute temporary>
        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item.title">
          <v-btn text @click="moveTo(item.path)">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-btn>
        </v-list-item>
      </v-navigation-drawer>

      <router-view
        @login="Login"
        v-bind:text="textToast"
        v-bind:snackbar="snackbar"
        @insertAccountNewStudent="insertAccountNewStudent"
        @insertAccountNewTeacher="insertAccountNewTeacher"
        @goToQuizzCreation="ShowQuizzCreation"
        v-bind:selected="selected"
        @createSubject="createSubject"
        @sendQuizz="sendQuizz"
      ></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import { login, createSubject, createQuizz, logout } from "../services/api.js";
import { insertAccountNewStudent, insertAccountNewTeacher } from "../services/api.js";

export default {
  methods: {
    Login: async function(logProp) {
      try {
        const req = await login(logProp);
        this.textToast = "Vous êtes connecté(e)";
        console.log(this.textToast);
        this.connected = true;
        console.log(this.connected);
        setTimeout(() => {
          console.log(req.data.user)
          if(req.data.user === "teacher"){
            this.$router.push({ name: "home" });
          }else if(req.data.user === "school"){
            this.$router.push({ name:"newTeacher"})
          }else if(req.data.type !== null){
            this.$router.push({name: "AccueilEleve"})
          }else{
            this.$router.push({name: "CharacterCreator"})
          }
          
        }, 2000);
      } catch (error) {
        this.textToast = "La connexion a échoué";
        this.$router.push("login");
      }
      this.snackbar = true;
      setTimeout(() => {
        this.snackbar = false;
      }, 2000);
    },

    insertAccountNewStudent: async function(newStudent) {
      if (newStudent.tclass !== null) {
        try {
          await insertAccountNewStudent(newStudent);
          this.textToast = "L'ajout du compte est un succès";
          this.$router.push("newStudent");
        } catch (error) {
          this.textToast = "L'ajout du compte a échoué";
          this.$router.push("newStudent");
        }
      } else {
        console.log("error");
        this.textToast = "Aucune classe n'a été selectioné ";
        this.$router.push("newStudent");
      }
      this.snackbar = true;
      setTimeout(() => {
        this.snackbar = false;
      }, 2000);
    },
    insertAccountNewTeacher: async function(newTeacher) {
      if (newTeacher.matiere !== null) {
        try {
          await insertAccountNewTeacher(newTeacher);
          this.textToast = "L'ajout du compte est un succès";
          this.$router.push("newTeacher");
        } catch (error) {
          this.textToast = "L'ajout du compte a échoué";
          this.$router.push("newTeacher");
        }
      } else {
        console.log("error");
        this.textToast = "Aucune matiere n'a été selectioné ";
        this.$router.push("newTeacher");
      }
      this.snackbar = true;
      setTimeout(() => {
        this.snackbar = false;
      }, 2000);
    },
    ShowQuizzCreation: function(selected) {
      this.selected = selected;
      this.$router.push("QuizzCreation");
      console.log(this.selected);
    },
    createSubject: async function(subject) {
      console.log(subject);
      await createSubject(subject);
    },
    sendQuizz: async function(completeQuizz) {
      console.log(completeQuizz);
      await createQuizz(completeQuizz);
      this.$router.push("home");
    },
    moveTo(path) {
      if (path === "/logout") {
        console.log("OUAIS");
        this.Logout();
        this.$router.push("/");
      } else {
        console.log("path" + path);
        this.$router.push(path);
      }
    },
    Logout: async function() {
      await logout();
      this.connected = false;
    }
  },

  created() {
    this.$on("login", function(logProp) {
      this.Login(logProp);
    });
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },

  name: "App",
  components: {
    Navbar
  },

  data: () => ({
    selected: null,
    textToast: null,
    snackbar: false,
    connected: false,
    drawer: null,
    items: [
      { title: "Home", path: "/home" },
      { title: "Compte", path: "/account" },
      { title: "Déconexion", path: "/logout" }
    ]
  })
};
</script>
