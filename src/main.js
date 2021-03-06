// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import { store } from './store.js'
import './assets/scss/app.scss'
const fb = require('./firebaseConfig.js')

Vue.use(VueResource);
Vue.use(VuePaginate);

Vue.config.productionTip = false

// handle page reloads
let app
fb.auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            components: { App },
            template: '<App/>',
            render: h => h(App)
        })
    }
})
