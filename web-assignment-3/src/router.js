import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import AddMovie from './components/AddMovie.vue'
import UpdateMovie from './components/UpdateMovie.vue'

const routes = [
        {
                name: 'HomePage',
                component: Home,
                path: '/'
        },
        {
                name: 'SignUp',
                component: SignUp,
                path: '/sign-up'
        },
        {
                name: 'LogIn',
                component: Login,
                path: '/login'
        },
        {
                name: 'AddMovie',
                component: AddMovie,
                path: '/add-movie'
        },
        {
                name: 'UpdateMovie',
                component: UpdateMovie,
                path: '/update-movie/:id'
        },
];

const router = createRouter({
        history: createWebHistory(),
        routes
});

export default router;