<template>
      <div class="home-products w clearfix">
        <div class="box-hd">
            <h2>精选</h2>
        </div>
        <div class="box-bd">
            <div class="box-list">
                <ul>

                    <Good v-for="item in goodslist" :good="item" :key="item.id"></Good>
				
                </ul>
           
            </div>
        </div>

    </div>
</template>

<script>
import Good from './Good.vue'

export default {
    name:'GoodList',
    components: { 
		Good },
	props:{
        goodslist:{
            type: Array,
            default:function(){
                return []
            }
        }
    },
	
    }
</script>

<style scoped>
/* 开始设置home-products */
.box-hd {
    height: 46px;
	background-color:black;
	
}

.box-hd h2 {
    float: left;
    font-size: 30px;
    font-weight: 900;
    line-height: 50px;
    color: white;
}

.box-hd a {
	color: white;
    float: right;
    height: 58px;
    line-height: 58px;
    font-size: 16px;
}



.box-list {
    width: 880px;
	background-color: rgb(27,40,56);
    height:600px;
}


</style>