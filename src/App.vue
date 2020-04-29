<template>
  <div class="container">
    <!-- header -->
    <mt-header fixed title="我的项目"></mt-header>

    
  <transition mode='out-in'>
    <router-view></router-view>
  </transition>


    <!-- footer -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-wh" to="/homeContainer">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-wh" to="/memberContainer">
        <span class="mui-icon mui-icon-contact"></span>

        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-wh" to="/shopcarContainer">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id='badge'>0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-wh" to="/searchContainer">
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
*{touch-action: none;} 
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

.mui-active{
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-wh{
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* color: #ccc; */
}
.mui-bar-tab .mui-tab-item-wh .mui-icon{
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-wh .mui-icon ~ .mui-tab-label{
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>