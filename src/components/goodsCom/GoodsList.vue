<template>
<div>
    <!-- 传递参数用属性绑定的方法 -->
    <router-link class="goodsBox" v-for='item in goodsList' :key="item.id" :to="'/goodsinfo/'+item.id">
        <div class="goodsBoxTop">
            <img :src="item.img_url" alt="">
            <p style="color:#000;font-weight:600;white-space: nowrap;overflow: hidden; text-overflow: ellipsis; margin-bottom:4px">{{item.title}}</p>
        </div>
        <div class="goodsBoxDown">
            <p style="margin-top:-4px">
                <span style="color:red;font-size:14px;font-weight:600">￥{{item.now_price}}</span>
                <span style="color:#eee;font-size:12px; text-decoration: line-through;">￥{{item.old_price}}</span>
            </p>
            <p class="goodsBoxDownP">
                <span style="font-size:12px">热卖中</span>
                <span style="font-size:12px">剩{{item.own}}件</span>
            </p>
        </div>
    </router-link>
</div>

</template>
<script>
export default {
    data(){
        return {
            goodsList:[]
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get('http://yapi.shangyuninfo.com/mock/121/api/goodslist?pageindex=1')
            .then(result=>{
                // console.log(result)
                this.goodsList = result.body.message
            })
            .catch()
        }
    }
}
</script>
<style scoped>
    .goodsBox{
        width: 48%;
        /* height: 250px; */
        margin: 2px;
        padding: 2px;
        float: left; 
    }
    .goodsBoxTop{
        background-color: #fff;
    }
    .goodsBoxTop>img{
        width: 100%;
        height: 100%;
    }
    .goodsBoxDown{
        background-color: #ccc;
    }
    .goodsBoxDownP{
        display:flex;
    }
    .goodsBoxDownP>span:nth-of-type(1){
        flex: 8;
    }
    .goodsBoxDownP>span:nth-of-type(2){
        flex: 4;
    }
</style>