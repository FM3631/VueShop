<template>
  <div class="container">
    <!-- header -->
    <mt-header fixed title="我的项目"></mt-header>

    
  <transition mode='out-in'>
    <router-view></router-view>
  </transition>


    <!-- footer -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/homeContainer">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/memberContainer">
        <span class="mui-icon mui-icon-contact"></span>

        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcarContainer">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/searchContainer">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

.container{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,.v-leave-active{
  transition: all .5s ease;
}
</style>