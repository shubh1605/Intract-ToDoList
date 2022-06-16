import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  Vuetify,
}).$mount('#app')

// import PortalVue from 'portal-vue'

// Vue.use(PortalVue)

// const app = Vue.createApp({
//     data() {
        
//     },
//     methods: {
        
             
//     }
// })

// app.mount("#app")