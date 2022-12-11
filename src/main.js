import Vue from 'vue'
import App from './App.vue'
import './styles/style.scss';
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted() {
    AOS.init()
  },
  render: function (h) { return h(App) }
}).$mount('#app')
