import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Portfolio from './views/Portfolio.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: Portfolio
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact
		},
		{
			path: '*',
			component: NotFound
		}
	]
})
