import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/simulator/sample',
        name: 'simulator.sample',
        component: () => import('../views/ViewComponent.vue')
    },
    {
        path: '/simulator/constant_velocity_linear_motion',
        name: 'simulator.constant_velocity_linear_motion',
        component: () => import('../views/simulator/ConstantVelocityLinearMotion.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
