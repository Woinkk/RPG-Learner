import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Login from './components/Login';
import Home from './components/Home';
import insertAccountNewStudent from './components/insertAccountNewStudent';
import ClassVClass from './components/ClassVClass';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

axios.defaults.withCredentials = true;

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/login', component: Login },
  {path:'/home', component:Home},
  {path:'/insertAccountNewStudent', component: insertAccountNewStudent}
  { path: '/home', component: Home },
  { path: '/ClassVClass', component: ClassVClass }
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
