<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for = 'item in newsList' :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<div class="newsFont">{{item.title}}</div>
							<p class='mui-ellipsis'>
                                <span>{{item.add_time}}</span>
                                <span>点击{{item.click}}次</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('http://yapi.shangyuninfo.com/mock/121/api/getnewslist')
            .then(result=>{
                console.log(result)
                this.newsList = result.body.message
            })
            .catch()
        }
    }
}
</script>
<style scoped>
    .newsFont{
        font-size: 16px;
    }
    .mui-ellipsis{
        color: blue;
        display: flex;
    }
    .mui-ellipsis>span:nth-of-type(1){
        font-size: 12px;
        flex: 8;
    }
    .mui-ellipsis>span:nth-of-type(2){
        font-size: 12px;
        flex: 2;
    }
</style>