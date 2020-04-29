<template>
  <div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopList: [],
      flag: false,
    };
  },
  created() {
    this.getLoopList();
  },
  methods:{
      getLoopList() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop_1587914991785")
        .then(result => {
          this.loopList = result.body.message;
        })
        .catch();
    },
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