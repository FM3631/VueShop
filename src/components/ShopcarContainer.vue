<template>
  <div>
    <div class="mui-content">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner" v-for="(item) in goodsList" :key='item.id'>
            <mt-switch></mt-switch>
            <div class="box1">
              <img :src="item.img_url" alt />
            </div>

            <div class="shopinfo">
              <h4>{{item.title}}</h4>
              <div>
                <span>￥{{item.now_price}}</span>
                <shopnum  @getnumBox="getnumBox1"></shopnum>
                <span>删除</span>
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
              <p>已勾选数量:0件 总价:￥0</p>
            </div>
            <mt-button type="danger" style="float:right">去结算</mt-button>
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
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/shopcarlist/")
        .then(result => {
          this.goodsList = result.body.message;
        })
        .catch();
    },
    //获取购物车数据
    getnumBox1(count){
      this.getCount = count;
      // console.log(this.getCount)
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