import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CategoryEdit from '../views/CategoryEdit.vue';
import CategoryList from '../views/CategoryList.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            { path: '/categories/create', component: CategoryEdit },
            {
                path: '/categories/edit/:id',
                component: CategoryEdit,
                props: true,
            },
            { path: '/categories/list', component: CategoryList },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
