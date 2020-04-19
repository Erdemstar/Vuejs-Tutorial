import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './componenets/Index.vue'
import About from './componenets/About.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/index", name: "index", componenet: Index },
        { path: "/about", name: "about", componenet: About },
    ]
})