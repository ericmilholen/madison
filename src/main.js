// [IMPORT] //
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// [IMPORT] Personal //
import App from './App.vue'
import router from './router'
import store from './store'


// [VUE] //
Vue.config.productionTip = false


// [USE] //
Vue.use(BootstrapVue)
Vue.use(VueApexCharts)


// [VUE] //
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')