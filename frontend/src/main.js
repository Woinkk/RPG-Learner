import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Login from './components/Login';
import Home from './components/Home';
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

Vue.use(VueAxios, axios);

axios.defaults.withCredentials = true;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

axios.defaults.withCredentials = true;

const routes = [
  { path: '/', component: Accueil },
  {path:'/login',component: Login},
  {
    name: "home", path: '/home', component: Home,
    beforeEnter: async (to, from, next) => {
      const req = await isConnected();
      if (req.status === 200 && req.connected === "teacher") {
        next();
        return
      }
    },
  },
  {
    path: '/newStudent', component: insertAccountNewStudent,
    beforeEnter: async (to, from, next) => {
      const req = await isConnected();
      if (req.status === 200 && req.connected === "teacher") {
        next();
        return
      }
    },
  },
  {
    path: '/stats', component: Stats,
    beforeEnter: async (to, from, next) => {
      const req = await isConnected();
      if (req.status === 200 && req.connected === "teacher") {
        next();
        return
      }
    },
  },
  {
    path: '/QuizzCreation', component: QuizzCreation,
    beforeEnter: async (to, from, next) => {
      const req = await isConnected();
      if (req.status === 200 && req.connected === "teacher") {
        next();
        return
      }
    },
  },
  {
    path: '/ClassVClass', component: ClassVClass,
    beforeEnter: async (to, from, next) => {
      const req = await isConnected();
      if (req.status === 200 && req.connected === "teacher") {
        next();
        return
      }
    },
  },

  {
    path: '/QuizzModification/:id', component: QuizzModification,
    beforeEnter: async (to, from, next) => {
      const req = await isConnected();
      if (req.status === 200 && req.connected === "teacher") {
        next();
        return
      }
    }
  },
  {
    path: '/CardsStudent', component: CardsStudent,
    beforeEnter: async (to, from, next) => {
      const req = await isConnected();
      if (req.status === 200 && req.connected === "student") {
        next();
        return
      }
    }
  },
  {
    name: 'AccueilEleve', path: '/AccueilEleve', component: AccueilEleve,
    beforeEnter: async (to, from, next) => {
      const req = await isConnected();
      if (req.status === 200 && req.connected === "student") {
        next();
        return
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
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
