<template>
    <div>
        <h3 class="contact">联系我们</h3>
        <p class="contact1">请谨慎填写联系信息,三个工作日内反馈</p>
        <div class="call">
            <i class="mui-icon mui-icon-person callInner"></i>
            <input type="text" placeholder="您的称呼">
        </div>
        <div class="call">
            <i class="mui-icon mui-icon-phone callInner"></i>
            <input type="text" placeholder="您的联系电话">
        </div>
        <div class="call">
            <i class="mui-icon mui-icon-compose callInner"></i>
            <textarea name="" id="" cols="30" rows="6" resize: none placeholder='请填写咨询事项，建议或意见'></textarea>
        </div>
        <mt-button size="large">提交信息</mt-button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .contact{
        text-align: center;
        padding: 5px 5px;
        background-color: #ec6f14;
        color: #fff;
        margin: 0px;
    }
    .contact1{
        margin-bottom: 10px;
        color: #ec6f14;
        padding: 5px 10px;
        background-color: #eec09f;
    }
    .call{
        position: relative;
    }
    .callInner{
        position: absolute;
        left: 0;
        top: 6px;
        font-size: 30px;
    }
    .call>input{
        padding: 0 30px;
        font-size: 12px;
    }
    .call>textarea{
        padding: 10px 30px 0;
        font-size: 12px;
    }
</style>