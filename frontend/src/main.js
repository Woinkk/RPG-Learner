import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Login from './components/Login';
import Home from './components/Home';
import QuizzCreation from './components/QuizzCreation';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

axios.defaults.withCredentials = true;

const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  {path: '/QuizzCreation', component: QuizzCreation},
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
