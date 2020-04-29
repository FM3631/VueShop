<template>
  <div>
    <!-- loop -->
    <homeLoop></homeLoop>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9 contentImg">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/newsList">
            <img src="images/menu1.png" alt />
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
          <!-- <router-view></router-view> -->
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img src="images/menu2.png" alt />
            <div class="mui-media-body">图片文献</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/goodsList">
            <img src="images/menu3.png" alt />
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img src="images/menu4.png" alt />
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img src="images/menu5.png" alt />
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/contactMe">
            <img src="images/menu6.png" alt />
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//导入图片的第二种方式
/* import menu1 from "../images/menu1.png"
import menu2 from "../images/menu2.png"
import menu3 from "../images/menu3.png"
import menu4 from "../images/menu4.png"
import menu5 from "../images/menu5.png"
import menu6 from "../images/menu6.png" */

import homeLoop from "./loopContainer/HomeLoop.vue";
export default {
  data() {
    return {
      /* menu1:menu1,
            menu2:menu2,
            menu3:menu3,
            menu4:menu4,
            menu5:menu5,
            menu6:menu6 */
    };
  },
  components:{
    homeLoop
  }
}
</script>
<style scoped>
.contentImg img {
  width: 65%;
  height: 100%;
  border-radius: 50%;
}
</style>