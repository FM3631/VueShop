import Vue from '../node_modules/vue/dist/vue.min.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import homeContainer from './components/HomeContainer.vue'
import memberContainer from './components/MemberContainer.vue'
import shopcarContainer from './components/ShopcarContainer.vue'
import searchContainer from './components/SearchContainer.vue'

let router = new VueRouter({
    routes:[
        {path:'/',component:homeContainer},
        {path:'/homeContainer',component:homeContainer},
        {path:'/memberContainer',component:memberContainer},
        {path:'/shopcarContainer',component:shopcarContainer},
        {path:'/searchContainer',component:searchContainer},
    ]
})
export default  router