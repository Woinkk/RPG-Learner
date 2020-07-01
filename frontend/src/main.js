import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Login from './components/Login';
import Home from './components/Home';
import Account from './components/Account';
import insertAccountNewStudent from './components/insertAccountNewStudent';
import QuizzCreation from './components/QuizzCreation';
import ClassVClass from './components/ClassVClass';
import QuizzModification from './components/QuizzModification';
import { isConnected } from '../services/api.js';
import Accueil from './components/Accueil';
import AccueilEleve from './components/AccueilEleve.vue';
import Stats from './components/Stats';
import CardsStudent from './components/CardsStudent.vue';
import FightingInterface from "./components/FightingInterface.vue";
import CharacterCreator from './components/CharacterCreator.vue';
import LootChest from './components/LootChest.vue';
import insertAccountNewTeacher from './components/insertAccountNewTeacher.vue';
import VueApexCharts from 'vue-apexcharts';
import Dungeon from "./components/Dungeon.vue";
import DungeonResult from "./components/DungeonResult.vue";

Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.component('apexchart', VueApexCharts);


const routes = [
  { path: '/', component: Accueil },
  { path: '/login', component: Login },
  {
    path: '/account', component: Account,
    beforeEnter: async (to, from, next) => {
      try {
        await isConnected();
        next();
        return
      } catch (error) {
        router.push("login");
      }

    }
  },
  {
    name: "home", path: '/home', component: Home,
    beforeEnter: async (to, from, next) => {
      try {
        const req = await isConnected();
        if (req.status === 200 && req.connected === "teacher") {
          next();
          return
        } else if (req.status === 200 && req.connected === "student") {
          router.push("AccueilEleve")
        }else if (req.status === 200 && req.connected === "school"){
          router.push("newTeacher")
        }
      } catch (error) {
        router.push("login")
      }

    },
  },
  {
    path: '/newStudent', component: insertAccountNewStudent,
    beforeEnter: async (to, from, next) => {
      try {
        const req = await isConnected();
        if (req.status === 200 && req.connected === "teacher") {
          next();
          return
        }
      } catch (error) {
        router.push("login")
      }

    },
  },
  {
    path: '/stats', component: Stats,
    beforeEnter: async (to, from, next) => {
      try {
        const req = await isConnected();
        if (req.status === 200 && req.connected === "teacher") {
          next();
          return
        }
      } catch (error) {
        router.push("login")
      }

    },
  },
  {
    path: '/QuizzCreation', component: QuizzCreation,
    beforeEnter: async (to, from, next) => {
      try {
        const req = await isConnected();
        if (req.status === 200 && req.connected === "teacher") {
          next();
          return
        }
      } catch (error) {
        router.push("login")
      }

    },
  },
  {
    path: '/ClassVClass', component: ClassVClass,
    beforeEnter: async (to, from, next) => {
      try {
        const req = await isConnected();
        if (req.status === 200 && req.connected === "teacher") {
          next();
          return
        }
      } catch (error) {
        router.push("login")
      }

    },
  },

  {
    path: '/QuizzModification/:id', component: QuizzModification,
    beforeEnter: async (to, from, next) => {
      try {
        const req = await isConnected();
        if (req.status === 200 && req.connected === "teacher") {
          next();
          return
        }
      } catch (error) {
        router.push("login")
      }

    },
  },
  {
    path: '/CardsStudent', component: CardsStudent,
    beforeEnter: async (to, from, next) => {
      try {
        const req = await isConnected();
        if (req.status === 200 && req.connected === "student") {
          next();
          return


        }
      } catch (error) {
        router.push("login")
      }
    }
  },
  {
    path: '/LootChest', component: LootChest,
    beforeEnter: async (to, from, next) => {
      try {
        const req = await isConnected();
        if (req.status === 200 && req.connected === "student") {
          next();
          return
        }
      } catch (error) {
        router.push("login")
      }
    }
  },
  {
    name: 'AccueilEleve', path: '/AccueilEleve', component: AccueilEleve,
    beforeEnter: async (to, from, next) => {
      try {
        const req = await isConnected();
        if (req.status === 200 && req.connected === "student") {
          next();
          return
        }
      } catch (error) {
        router.push("login")
      }
    }
  },
  {
    name: 'FightingInterface', path: '/FightingInterface', component: FightingInterface,
    beforeEnter: async (to, from, next) => {
      const req = await isConnected();
      if (req.status === 200 && req.connected === "student") {
        next();
        return
      }
    }
  },
  {
    name: 'CharacterCreator',path: '/CharacterCreator', component: CharacterCreator,
    beforeEnter: async(to,from,next) =>{
      const req = await isConnected();
      if(req.status === 200 && req.connected === "student") {
        next();
        return
      }
    }
  },
  {
    name: 'newTeacher',path: '/newTeacher',component: insertAccountNewTeacher,
    beforeEnter: async(to,from,next) =>{
      const req = await isConnected();
      if(req.status === 200 && req.connected === "school") {
        next();
        return
      }
    }
  },
  {
    name: 'Dungeon',path: '/Dungeon/:id', component: Dungeon,
    beforeEnter: async(to,from,next) =>{
      const req = await isConnected();
      if(req.status === 200 && req.connected === "student") {
        next();
        return
      }
    }
  },
  {
    name: 'DungeonResult',path: '/DungeonResult/:quizz', component: DungeonResult,
    beforeEnter: async(to,from,next) =>{
      const req = await isConnected();
      if(req.status === 200 && req.connected === "student") {
        next();
        return
      }
    }
  },
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
