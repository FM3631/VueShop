<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in loopList" :key="item.id">
        <img :src="item.img_url" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopList: []
    };
  },
  created() {
    this.move();
  },
  methods: {
    move() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop")
        .then(function(res) {
          this.loopList = res.body.message;
          // console.log(this.loopList);
        })
        .catch();
    }
  }
};
</script>
<style scoped>
    .mint-swipe {
    height: 200px;
    }
    .mint-swipe-item img {
    width: 100%;
    height: 100%;
    }
</style>