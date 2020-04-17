import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
const VueRouter = require ('vue-router');

Vue.config.productionTip = false


const Home ={template : '<div>alalalala</div>'}
const routes = [
  {path:'/login',component: Home},
]


const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
