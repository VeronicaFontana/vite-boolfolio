import {createRouter, createWebHistory} from "vue-router";
import Home from "./assets/pages/home.vue";
import About from "./assets/pages/about.vue";
import Contacts from "./assets/pages/contacts.vue";
import Blog from "./assets/pages/blog.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: "/chi-siamo",
            name: "about",
            component: About
        },
        {
            path: "/contatti",
            name: "contacts",
            component: Contacts
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog
        }
    ]   

}) 

export {router}