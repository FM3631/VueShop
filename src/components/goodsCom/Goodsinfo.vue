<template>
  <div>
    <!-- 小圆点 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="flag"></div>
    </transition>

    <!-- loop -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in loopList" :key="item.id">
              <img :src="item.img_url" alt />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>

    <!-- goods -->
    <div class="mui-card">
      <div class="mui-card-header">商品标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            <del>市场价:￥999</del>
            <span>销售价:￥99</span>
          </p>
          <p>
            购买数量
            <goodsBox></goodsBox>
          </p>
          <p>
            <mt-button type="primary" size="small">点击购买</mt-button>
            <mt-button type="danger" size="small" @click="flag=!flag">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- info -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号</p>
          <p>库存情况:30件</p>
          <p>上架时间</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import goodsBox from "../goodsnumContainer/goodsnum.vue";
export default {
  data() {
    return {
      loopList: [],
      flag: false
    };
  },
  created() {
    this.getLoopList();
  },
  methods: {
    getLoopList() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop_1587914991785")
        .then(result => {
          this.loopList = result.body.message;
        })
        .catch();
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.transform = "translate(205px,523px)";
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    }
  },
  components: {
    goodsBox
  }
};
</script>
<style scoped>
.ball {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
  position: absolute;
  left: 200px;
  top: 500px;
  z-index: 999;
  left: 141px;
  top: 391px;
}
.mint-swipe {
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>