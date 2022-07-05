import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.js"

import { createRouter, createWebHistory } from 'vue-router'

import InformaticaPage from './view/InformaticaPage.vue'
import MarcenariaPage from './view/MarcenariaPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/InformaticaPage',
            name: 'InformaticaPage',
            component: InformaticaPage
        },
        {
            path: '/MarcenariaPage',
            name: 'MarcenariaPage',
            component: MarcenariaPage
        }
    ]
})

createApp(App).use(router).mount('#app')
