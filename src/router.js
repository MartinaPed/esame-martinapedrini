import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './components/Homepage.vue'
import Esperienze from './components/Esperienze.vue'

const routes = [
	{ path: '/', name: 'Home', component: Homepage },
	{ path: '/esperienze', name: 'Esperienze', component: Esperienze },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

