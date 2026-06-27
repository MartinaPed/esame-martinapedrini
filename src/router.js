import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './components/homepage/Homepage.vue'
import Esperienze from './components/Esperienze/Esperienze.vue'
import ChiSiamo from './components/ChiSiamo/ChiSiamo.vue'
import Shop from './components/Shop.vue'
import Alba from './components/Alba/Alba.vue'

const routes = [
	{ path: '/', name: 'Home', component: Homepage },
	{ path: '/esperienze', name: 'Esperienze', component: Esperienze },
	{ path: '/chi-siamo', name: 'ChiSiamo', component: ChiSiamo },
	{ path: '/shop', name: 'Shop', component: Shop },
	{ path: '/alba', name: 'Alba', component: Alba },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router