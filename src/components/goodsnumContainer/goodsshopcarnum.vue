<template>
  <div class="goodsCon">
    <div class="mui-numbox" data-numbox-min="0" data-numbox-max="100">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" :value="getCounts" ref='numbox' @change='countChange'/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
export default {
  


  methods:{
    countChange(){
      this.$store.commit('updataSelectCount',{
        id:this.goodsid,
        count:this.$refs.numbox.value
      })
     
    }
  },
  props:['getCounts','goodsid'],
   mounted(){
    this.mui('.mui-numbox').numbox()
  },

};
</script>
<style scoped>
.goodsCon{
  display: inline-block;
}
</style>