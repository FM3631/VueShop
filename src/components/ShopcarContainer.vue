<template>
  <div>
    <div class="mui-content">
      <div class="mui-card" v-for="(item,i) in goodsList" :key='item.id'>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <div class="box1">
              <img :src="item.img_url" alt />
            </div>

            <div class="shopinfo">
              <h4>{{item.title}}</h4>
              <div>
                <span>￥{{item.now_price}}</span>

                 <!-- '$store.getters.getGoodsCount[item.id]  拿到car中的数量 -->
                <shopnum :getCounts='$store.getters.getGoodsCount[item.id]' :goodsid='item.id'></shopnum>
                
                <span @click="del(item.id,i)">删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-content">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner" style="padding:20px">
            <div style="float:left">
              <p>总计</p>
              <p>已勾选数量:{{$store.getters.getAllCountANDAmount.m}}件 总价:￥{{$store.getters.getAllCountANDAmount.n}}</p>
            </div>
            <mt-button type="danger" style="float:right">去结算</mt-button>
            <p>{{$store.getters.getGoodsSelected}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shopnum from "./goodsnumContainer/goodsshopcarnum.vue";
export default {
  data() {
    return {
      goodsList: [],
      getCount: 0
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    
    getGoodsList() {
      var isArr = [];
      this.$store.state.car.forEach(item=>{
        isArr.push(item.id)
      })
      // console.log(isArr)

      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/shopcarlist/"+isArr.join(','))
        .then(result => {
          this.goodsList = result.body.message;
        })
        .catch();
    },

    //删除功能
    // id:store中的数据   index指的是获取到的数据
    del(id,index){
        this.goodsList.splice(index,1);
        this.$store.commit('remove',id)
    },
    
  },
  components: {
      shopnum
    }
};
</script>
<style scoped>
.mint-switch {
  display: inline-block;
}
.mui-card-content-inner {
  padding: 15px 0;
}
.mui-card-content-inner img {
  width: 35px;
  height: 35px;
}
.shopinfo {
  display: inline-block;
}
.box1 {
  display: inline-block;
}
</style>