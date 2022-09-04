import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import { createApp } from 'vue'
import "bootstrap/dist/js/bootstrap.js"

import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './view/HomePage.vue'
import MarcenariaPage from './view/MarcenariaPage.vue'
import CeramicaPage from './view/CeramicaPage.vue'
import JoiaPage from './view/JoiaPage.vue'
import ImpressaoPage from './view/ImpressaoPage.vue'
import InformaticaPage from './view/InformaticaPage.vue'
import PrototipagemPage from './view/PrototipagemPage.vue'
import MaquetariaPage from './view/MaquetariaPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/#',
            name: '/homePage',
            component: HomePage,
            meta: {
                title: 'Página Inicial'
            }
        },

        {
            path: '/HomePage',
            name: 'HomePage',
            component: HomePage,
            meta: {
                title: 'Página Inicial'
            }
        },
        {
            path: '/MarcenariaPage',
            name: 'MarcenariaPage',
            component: MarcenariaPage,
            meta: {
                title: 'Marcenaria'
            }
        },
        {
            path: '/CeramicaPage',
            name: 'CeramicaPage',
            component: CeramicaPage,
            meta: {
                title: 'Ceramica'
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
            path: '/JoiaPage',
            name: 'JoiaPage',
            component: JoiaPage,
            meta: {
                title: 'Joiaevidro'
            }
        },
        {
            path: '/ImpressaoPage',
            name: 'ImpressaoPage',
            component: ImpressaoPage,
            meta: {
                title: 'Impressao'
            }
        },
        {
            path: '/PrototipagemPage',
            name: 'PrototipagemPage',
            component: PrototipagemPage,
            meta: {
                title: 'Prototipagem'
            }
        },
        {
            path: '/MaquetariaPage',
            name: 'MaquetariaPage',
            component: MaquetariaPage,
            meta: {
                title: 'Maquetaria'
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title + " - Laboratórios Mackenzie"}`
    next()
})

createApp(App).use(router).mount('#app')
