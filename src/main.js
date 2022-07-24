import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import { createApp } from 'vue'
import "bootstrap/dist/js/bootstrap.js"

import { createRouter, createWebHistory } from 'vue-router'

import InformaticaPage from './view/InformaticaPage.vue'
import HomePage from './view/HomePage.vue'
import MarcenariaPage from './view/MarcenariaPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/HomePage',
            name: 'HomePage',
            component: HomePage,
            meta: {
                title: 'Página Inicial'
            }
        },
        {
            path: '/InformaticaPage',
            name: 'InformaticaPage',
            component: InformaticaPage,
            meta: {
                title: 'Informatica'
            }
        },
        {
            path: '/MarcenariaPage',
            name: 'MarcenariaPage',
            component: MarcenariaPage,
            meta: {
                title: 'Marcenaria'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title + " - Laboratórios Mackenzie"}`
    next()
})

createApp(App).use(router).mount('#app')
