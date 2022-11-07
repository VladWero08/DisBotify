import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import UserDashboard from '../components/UserDashboard.vue'
import SetUpDiscord from '../components/SetUpDiscord.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: UserDashboard
    },
    {
        path: '/configuration',
        name: 'Configuration',
        component: SetUpDiscord
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router