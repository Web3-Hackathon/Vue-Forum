import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CKEditor from '@ckeditor/ckeditor5-vue2';
import vuetify from './plugins/vuetify'
import "./assets/fa-font/css/all.css"
import "./assets/scss/scss.scss"
import "./assets/scss/vuetify_missings.scss"

Vue.config.productionTip = false  

Vue.use(CKEditor)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
