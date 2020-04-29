// console.log('ok')
import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'

// 引入 mint-ui
import { Header,Swipe, SwipeItem ,Button} from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 引入mui

import '../lib/mui/css/mui.min.css'
import '../lib/mui/fonts/mui.ttf'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'
import mui from '../lib/mui/js/mui.js'
Vue.prototype.mui = mui


//路由
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

let vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:(c)=>c(App),
    router
})