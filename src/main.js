// console.log('ok')
import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'

//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入 mint-ui
import { Header,Swipe, SwipeItem ,Button,Switch} from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch)

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

//清除缓存
// localStorage.clear()
//加载页面时后去购物车count
var car = JSON.parse(localStorage.getItem('car')||'[]')
let store = new Vuex.Store({
    state:{
        car:car
    },
    mutations:{
        getinfoToShopCar(state,getGoodinfo){
            var flag = false
            state.car.some(item=>{
                if(item.id == getGoodinfo.id){
                    item.count += parseInt(getGoodinfo.count)
                    flag = true
                    return true
                }
            })
            if(!flag){
                state.car.push(getGoodinfo)
            }
            //localStorage 存储购物车数据
            localStorage.setItem('car',JSON.stringify(state.car))
        },


        updataSelectCount(state,goodsinfo){
            state.car.some(item=>{
                if(item.id===goodsinfo.id){
                    item.count=parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
            },
        // 根据开关更新状态 info(id,selected:true)
        upadateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id===info.id){
                    item.selected = info.selected
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
            remove(state,id){
                state.car.some((item,i)=>{
                    if(item.id==id){
                        state.car.splice(i,1)
                        return true
                    }
                })
                localStorage.setItem('car',JSON.stringify(state.car))
             }
    },
    getters:{
        getAllCount(state){
            var c = 0
            state.car.forEach(item=>{
                c += item.count
            })
            return c
        },

        getGoodsCount(state){
            var x = {}  //{id:count}
            state.car.forEach(item=>{
                x[item.id] = item.count
            })
            return x
        },
        getGoodsSelected(state){
            var y = {}
            state.car.forEach(item=>{
                y[item.id] = item.selected
            })
            return y
        },
        // 获取商品的总数量以及总价格
        getAllCountANDAmount(state){
            var obj ={
                m :0,  //数量
                n : 0, //总价
            }
           
        state.car.forEach(item=>{
            if(item.selected){
                obj.m+=item.count,
                obj.n+=item.price*item.count
            }
        })
        return obj
        }
        
    }
})

let vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:(c)=>c(App),
    router,
    store
})

