import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LandingPage from '@/views/pages/landing/landing.page.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: LandingPage
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
