import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
// import User from '../views/User/View-User.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/viewUser',
    name: '/viewUser',

    component: () => import('../views/User/viewUser.vue'),
  },
  {
    path: '/CreateUser',
    name: '/CreateUser',

    component: () => import('../views/User/CreateUser.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
