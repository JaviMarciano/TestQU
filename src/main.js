import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
import store from './store'
import ApiService from "./common/api.service";
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

import "@/styles.css"
ApiService.init();
Vue.use(BootstrapVue)
Vue.use(VueGtag, {
  config: { id: "UA-169826261-2" }
  }, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
