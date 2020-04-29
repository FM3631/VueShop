<template>
  <div>
    <!-- 小圆点 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="flag" ref='ball'></div>
    </transition>

    <!-- loop -->
    <goodsLoop></goodsLoop>

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
            <goodsBox @getnumBox="getnumBox1"></goodsBox>
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
import goodsLoop from '../loopContainer/GoodsLoop.vue'
export default {
  data() {
    return {
      loopList: [],
      flag: false,
      getCount:1
    };
  },
  
  methods: {
    
    
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document.getElementById('badge').getBoundingClientRect();
      const positionX = badgePosition.left - ballPosition.left;
      const positionY = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${positionX}px,${positionY}px)`;
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    //获取购物车数据
    getnumBox1(count){
      this.getCount = count;
      console.log(this.getCount)
    },
  },
  components: {
    goodsBox,
    goodsLoop
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

</style>