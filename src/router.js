import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './components/homepage/Homepage.vue'
import Esperienze from './components/Esperienze/Esperienze.vue'
import ChiSiamo from './components/ChiSiamo/ChiSiamo.vue'
import Shop from './components/Shop.vue'
import Alba from './components/Alba/Alba.vue'
import DomandeFrequentiPage from './components/DomandeFrequentiPage.vue'
import ScaricoResponsabilita from './components/ScaricoResponsabilita.vue'
import DateViaggi from './components/DateViaggi.vue'

const routes = [
	{ path: '/', name: 'Home', component: Homepage },
	{ path: '/esperienze', name: 'Esperienze', component: Esperienze },
	{ path: '/chi-siamo', name: 'ChiSiamo', component: ChiSiamo },
	{ path: '/shop', name: 'Shop', component: Shop },
	{ path: '/alba', name: 'Alba', component: Alba },
	{ path: '/domande-frequenti', name: 'DomandeFrequenti', component: DomandeFrequentiPage },
	{ path: '/scarico-responsabilita', name: 'ScaricoResponsabilita', component: ScaricoResponsabilita },
	{ path: '/date-viaggi', name: 'DateViaggi', component: DateViaggi },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 }
	},
})

export default router