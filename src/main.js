import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import nhanvien from './components/nhanvien.vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
Vue.use(BootstrapVue)
Vue.use(VModal)
Vue.component('table-nhanvien', nhanvien)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')