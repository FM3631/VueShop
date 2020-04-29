<template>
  <div class="goodsCon">
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" ref='numBox' @change='getnumCount'/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
export default {
  
  methods:{
    getnumCount(){
      console.log(this.$refs.numBox.value)
      this.$emit('getnumBox',parseInt(this.$refs.numBox.value))
    }
  },
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