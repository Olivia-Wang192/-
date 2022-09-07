<template>
<div>
    <Nav />
		<div class="page_title_area">
			<div class="breadcrumbs">
				<div style="clear: left;"></div>
			</div>
			<div class="apphub_HomeHeaderContent">

				<div class="apphub_HeaderStandardTop">
					<a href="#">Nobody Saves the World</a>
				</div>
				<div class="apphub_OtherSiteInfo">
					<a class="btnv6_blue_hoverfade" href="#">
						<span class="abc">社区中心</span>
					</a>
				</div>
			</div>
		</div>

        <div class="image">
            <Swiper :catImgs="catImgs"></Swiper>
            <div class="text"> 
                <img :src="src" alt="" width="320px"/>
                <p>{{info}}</p>
            </div>
        </div>
        <div class="buttons">
            <button class="btn btn1">添加至您的愿望单</button><button class="btn btn1">关注</button>
            <button class="btn btn1">忽略</button> <button class="btn btn1" @click="goodss">查看下一个商品</button>
        </div>

        <div class="intro">
            <h3>游戏信息</h3><br>
            全部测评:<a href="">特别好评</a><br><br>
            发行日期:<a href="">2022年1月18日</a><br><br>
            开发商:<a href="">DrinkBox Studios</a><br><br>
            发行商:<a href="">DrinkBox Studios</a><br><br>
            <p>该产品的热门用户自定义标签:</p>
            <button class="btn2">角色扮演</button><button class="btn2">砍杀</button><button class="btn2">动作</button><button class="btn2">迷宫探索</button><button class="btn2">奇幻</button><button class="btn2">冒险</button><button class="btn2">+</button>
        </div>
        <div class="buy">
            <h1>64￥</h1><br>
            <h1>欢迎购买 Nobody Saves the World</h1><br>
            <button class="btn btn1">购买</button>
        </div>
        <hr>
        <div class="more">
            <h3>更多游戏信息</h3><br>
            <p>在这个由《墨西哥英雄大混战》的创作团队带来的全新动作角色扮演游戏中，你将能从一个毫无特色的无名小卒变形为一只鼻涕虫、一个幽灵、一条龙、以及更多其他形态！

完成任务，发现并变换超过15种不同的形态。创意性地混搭各种技能，解锁并完成更有挑战性的任务。在通关不断变形的地下城，努力阻止灾祸并拯救世界的同时，独自或与朋友联机，探索广阔的世界！</p>
            <br>
            <h4>特色</h4>
                <p>1.转换为多种形态：解锁超过从老鼠到盗贼再到机器人等15种不同形态，每种形态都有着自己独特的游戏机制。</p><br>
                <p>2.混搭技能：自由搭配超过80种形态技能，创造强大的自定义组合。扮演可以留下粘液痕迹的蛋，并发射火球！！！我们无法阻止你！</p><br>
                <p>3.非常规任务：帮助这个世界上的奇怪居民们解决他们的麻烦。每种形态都有自己的任务，你能以创造性地方式来完成它们。</p><br>
                <p>4.不断进化的地下城：当你变得更强时，程序生成的地下城的难度和复杂度也会提升，让你保持警惕。</p><br>
                <p>5.在线/本地合作：邀请一个朋友来一起冒险，能参与全程或是单一部分！</p><br>
                <p>6.新游戏+：用你的形态和技能来测试升级的敌人和更高难度的地下城。</p><br>
                <p>7.超赞的原声带：由著名作曲家Jim Guthrie全新创作的音乐。</p><br>
                <img :src="src1" alt=""/><br><br><br><br>
                <hr>
                <h3>测评</h3><br>
                <p style="color:lightblue">“After finishing Nobody Saves the World, I went right back to it... When a game is this much frictionless fun, it's hard to resist.”9 </p>– GameSpot<br><br>
                <p style="color:lightblue">“Nobody Saves the World kept me enthralled from start to finish.”8.25 </p>– Game Informer<br><br>
                <p style="color:lightblue">“...A wonderfully technical game that offers the freedom to let you discover the quality of its craft in your own time.”80 </p>– PC Gamer<br><br>

        </div>
    <Footer />
</div>
</template>
<script>

import Nav from './Nav.vue' 
import Swiper from './Swiper.vue' 
import Footer from './Footer.vue'

export default {
    name:'goods',
    components:{
        Nav,
        Swiper,
        Footer,
    },
    data() {
            return{
            src:'images/3.3.jpg',
            src1:'images/more1.png',
            info:'在这个由《墨西哥英雄大混战》的创作团队带来的全新动作角色扮演游戏中，你将能从一个毫无特色的无名小卒变形为一只鼻涕虫、一个幽灵和一条龙！发现超过15种不同的形态，混搭他们的技能，通关不断进化的地下城，并且……还得拯救世界？！',
            catImgs: [
            "./images/3.jpg",
            "./images/3.1.jpg",
            "./images/3.2.jpg",
            "./images/3.4.jpg",
        ],
        }

		},
         methods:{
            goodss(){
                this.$router.push('/goodss');
    },}
}

</script>


<style scoped>
img {
	display: block;
}
li {
	list-style: none;
}
a {
	text-decoration: none;
}
.red {
	color: #C00;
}
.clr {
	clear: both;
	visibility: hidden;
}
.page_title_area{
	width: 940px;
	height: 70px;
	margin: 0 auto;
	padding-top: 30px;
}
.blockbg{
	height: 14px;
	line-height: 14px;
	font-size: 12px;
}
.blockbg a{
	color: #7e919f

}
.apphub_HeaderStandardTop{
	height: 46px;
	font-size: 27px;
	float: left;
}
.apphub_HeaderStandardTop a{
	color: #ffffff;
	font-weight: bold;
}
.apphub_OtherSiteInfo{
    border-radius: 2px;
    border: none;
    padding: 1px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none !important;
    color: #67c1f5 !important;
    background: rgba( 103, 193, 245, 0.2 );
    position: relative;
    float: right;
    
}
.apphub_OtherSiteInfo a{
	text-align: center;
    font-size: 15px;
    line-height: 30px;
	color: #83bcda;
	width: 80px;
	height: 30px;
}
.apphub_OtherSiteInfo:hover{
	background-color: #96ccfe;
	
}
.btn_medium > span, input.btn_medium {
    padding: 0 15px;
    font-size: 15px;
    line-height: 30px;
}

.btnv6_blue_hoverfade > span {
    border-radius: 2px;
    display: block;
    background: transparent;
}
.apphub_OtherSiteInfo .btnv6_blue_hoverfade:hover .abc:hover{
	color: #ffffff;

}
.image{
    width:604px;
    height:360px;
    padding:0px
}
.text{
    float:left;
    width:320px;
    height:270px;
    color:white;
    display:inline;
    position:absolute;
    margin-left:310px;
    font-size:18px;
    text-align:left;
}

.intro{
    position:absolute;
    color:white;
    width:250px;
    text-align:left;
    margin-top:20px
}

.intro a{
    color:lightblue;
}

.buy{
    color:lightblue;
    background-color:rgb(27,40,56);
    width:520px;
    margin-left:400px;
    margin-top:20px;
    text-align:right;
    opacity:0.6;
    margin-bottom:140px

}

.more{
    text-align:left;
    color:white;
    width:700px;

}
</style>