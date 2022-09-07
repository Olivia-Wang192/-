<template>
<div>
    <Nav />
		<div class="page_title_area">
			<div class="breadcrumbs">
				<div style="clear: left;"></div>
			</div>
			<div class="apphub_HomeHeaderContent">

				<div class="apphub_HeaderStandardTop">
					<a href="#">面条人</a>
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
            <button class="btn btn1">忽略</button> <button class="btn btn1" @click="goodsss">查看下一个商品</button>
        </div>

        <div class="intro">
            <h3>游戏信息</h3><br>
            全部测评:<a href="">特别好评</a><br><br>
            发行日期:<a href="">2022年2月8日</a><br><br>
            开发商:<a href="">No Brakes Games</a><br><br>
            发行商:<a href="">完美世界</a><br><br>
            <p>该产品的热门用户自定义标签:</p>
            <button class="btn2">合作</button><button class="btn2">解谜</button><button class="btn2">欢乐</button><button class="btn2">冒险</button><button class="btn2">物理</button><button class="btn2">动作</button><button class="btn2">沙盒</button>
        </div>
        <div class="buy">
            <h1>58￥</h1><br>
            <h1>欢迎购买 面条人</h1><br>
            <button class="btn btn1">购买</button>
        </div>
        <hr>
        <div class="more">
            <h3>更多游戏信息</h3><br>
            <p>本产品建议年满8岁以上的用户使用。</p><br>

            <p>《面条人》是一款轻松搞笑的沙雕游戏，游戏的场景发生在飘渺的梦境之中。</p><br>

            <p>每个梦境关卡会提供一个全新的环境让玩家探索，从豪宅、城堡和阿兹台克到雪山、光怪陆离的夜景和工业区。每关都贯穿有多条路线和完美设置的谜题，确保热衷探索和聪明的玩家能得到奖励。</p><br>

            <p>当然，梦中小人那软趴趴的身体和摇摇晃晃的动作可不会让事情变容易，无论是在跳跃、攀爬、负重或摇摆时，情况都很容易变得很糟——产生非常搞笑的结果。</p><br>

            <p>如果这个软趴趴的小人抓绳子手滑了，对空间判断错误跳跃失足了，或者甚至被亲队友从悬崖边推下去了……别害怕：TA只是会掉落回梦境中，准备好再尝试，一次又一次。</p><br>

            <p>《面条人》既适合单机自闭，同时也可以最多八人联机一起欢畅，人多乐趣多。而且，除了创意工坊里数之不尽的玩家关卡，游戏本身也会定期公布新的免费关卡，欢乐的记忆会一直延续下去的！</p><br>
            <br>
            <h4>特色</h4>
                <p>1.需要帮忙把巨石装上投石器，或者需要有人来打破那堵墙？最多8名玩家的在线多人模式会改变《面条人》的游戏方式。</p><br>
                <p>2.主播和UP主们对《面条人》尤为青睐，就因为其独特搞笑的游戏方式。这些视频的综合播放量已多达6亿！</p><br>
                <p>3.你的软趴趴小人由你自己来定制。可以选择建筑工人、大厨、跳伞员、矿工、宇航员或忍者的服装。还可以分别打扮你的脑袋、上半身和下半身，并且用脑洞让一切变得创意十足！</p><br>
                <p>4.自游戏推出以来，已经发布了四个全新的免费关卡，而且很快还会有更多。下一个即将推出的梦境会是什么样的？</p><br>
                <p>5.《面条人》赢得了超过10个游戏业的奖项，因为其吸引人的合作游戏方式深受成千上万的玩家喜爱，它始终能为玩家们带来新的欢乐。</p><br>
                <p>6.仅在蒸汽平台上发布的《面条人》创意工坊，是一个绝佳的工具，与Unity一起使用，可以让玩家打造自己的《面条人》内容，并和全世界的玩家分享。对自己打造关卡、大厅或皮肤不感兴趣？你也可以在蒸汽平台上直接下载和探索别人的创意！</p><br>
                <img :src="src1" alt=""/><br><br><br><br>
                <hr>
                <h3>测评</h3><br>
                <p style="color:lightblue">“《面条人》是我好一段时间来玩过的最特别的游戏。” </p>– Darkstation<br><br>
                <p style="color:lightblue">“我很欣慰的是，游戏里的每一个谜题都有一百万个可能的解法。” </p>– Destructoid<br><br>
                <p style="color:lightblue">“这游戏也太沙雕了……” </p>– IGN<br><br>

        </div>
    <Footer />
</div>
</template>
<script>

import Nav from './Nav.vue' 
import Swiper from './Swiper.vue' 
import Footer from './Footer.vue'

export default {
    name:'goodss',
    components:{
        Nav,
        Swiper,
        Footer,
    },
    data() {
            return{
            src:'images/4.4.jpg',
            src1:'images/more2.gif',
            info:'《面条人》是一款轻松搞笑的沙雕游戏，游戏的场景发生在飘渺的梦境之中。玩家既可以单机自闭，也可以最多八人联机一起欢畅。游戏支持的创意工坊，还可以让大家免费玩到不计其数的高质量玩家关卡和皮肤。游戏支持中文。',
            catImgs: [
            "./images/4.0.jpg",
            "./images/4.1.jpg",
            "./images/4.2.jpg",
            "./images/4.3.jpg",
        ],
        }

		},
        methods:{
            goodsss(){
                this.$router.push('/goodsss');
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