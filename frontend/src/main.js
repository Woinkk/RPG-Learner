import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Login from './components/Login';
import Home from './components/Home'

Vue.use(VueRouter) ;
Vue.config.productionTip = false

const routes =[
  {path:'/login', component:Login},
  {path:'/home', component:Home}
]

const router =new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
