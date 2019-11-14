import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import nhanvien from './components/nhanvien.vue'
import Map from './components/Map'
import App from './App.vue'

Vue.use(BootstrapVue)
Vue.component('table-nhanvien', nhanvien)
Vue.component('Map', Map)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')