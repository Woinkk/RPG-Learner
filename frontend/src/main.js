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
import Accueil from './components/Accueil';

Vue.use(VueAxios, axios);

axios.defaults.withCredentials = true;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

axios.defaults.withCredentials = true;

const routes = [
  {path: '/login', component: Login },
  {name: "home", path:'/home', component:Home},
  {path:'/newStudent', component: insertAccountNewStudent},
  { path: '/QuizzCreation', component: QuizzCreation },
  { path: '/ClassVClass', component: ClassVClass },
  { path : '/QuizzModification/:id', component: QuizzModification },
  { path: '/', component: Accueil }
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
