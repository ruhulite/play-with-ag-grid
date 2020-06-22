import Vue from "vue";
import Router from "vue-router";

import Home from './views/Home.vue';
import About from './views/About.vue';
import Service from './views/Service.vue';
import NotFound from './views/404.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: 'home',
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/service",
      name: "service",
      component: Service
    },
    {
      path: "*",
      component: NotFound
    }
  ]
})