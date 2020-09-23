import Vue from 'vue'
import App from './App.vue'

// Validation
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


Vue.config.productionTip = false

export const bus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
