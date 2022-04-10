import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import NotFound from "@/pages/404";
import Product from "@/pages/Product";


export default new Router({
    mode: 'history', //yes or no Hash
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        }, 
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/shop/:id',
            name: 'product',
            component: Product
        },
    ]
})