import Vue from '../node_modules/vue/dist/vue.min.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import homeContainer from './components/HomeContainer.vue'
import memberContainer from './components/MemberContainer.vue'
import shopcarContainer from './components/ShopcarContainer.vue'
import searchContainer from './components/SearchContainer.vue'
import newsList from './components/newsCom/NewsList.vue'
import goodsList from './components/goodsCom/GoodsList.vue'
import contactMe from './components/contactCom/contactMe.vue'
import goodsinfo from './components/goodsCom/Goodsinfo.vue'

let router = new VueRouter({
    routes:[
        {path:'/',component:homeContainer},
        {path:'/homeContainer',component:homeContainer},
        {path:'/memberContainer',component:memberContainer},
        {path:'/shopcarContainer',component:shopcarContainer},
        {path:'/searchContainer',component:searchContainer},
        {path:'/newsList',component:newsList},
        {path:'/goodsList',component:goodsList},
        {path:'/contactMe',component:contactMe},
        {path:'/goodsinfo/:id',component:goodsinfo}
    ],
    linkActiveClass:'mui-active'
})
export default  router