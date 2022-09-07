<template>
<div>
    <Nav />
		<div class="page_title_area">
			<div class="breadcrumbs">
				<div style="clear: left;"></div>
			</div>
			<div class="apphub_HomeHeaderContent">

				<div class="apphub_HeaderStandardTop">
					<a href="#">Besiege</a>
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
            <button class="btn btn1">忽略</button> <button class="btn btn1" @click="goodssss">查看下一个商品</button>
        </div>

        <div class="intro">
            <h3>游戏信息</h3><br>
            全部测评:<a href="">特别好评</a><br><br>
            发行日期:<a href="">2022年2月18日</a><br><br>
            开发商:<a href="">Spiderling Studios</a><br><br>
            发行商:<a href="">Spiderling Studios</a><br><br>
            <p>该产品的热门用户自定义标签:</p>
            <button class="btn2">建造</button><button class="btn2">沙盒</button><button class="btn2">解谜</button><button class="btn2">破坏</button><button class="btn2">模拟</button><button class="btn2">多人</button><button class="btn2">策略</button>
        </div>
        <div class="buy">
            <h1>76￥</h1><br>
            <h1>欢迎购买 Besiege</h1><br>
            <button class="btn btn1">购买</button>
        </div>
        <hr>
        <div class="more">
            <h3>更多游戏信息</h3><br>
            <img :src="src1" alt=""/><br><br><br><br>
            <p>Besiege是一款基于物理的建造类游戏，玩家可在其中建造中世纪的攻城工具，摧毁巨大的堡垒和宁静的村庄。建造一台可粉碎风车的机器，消灭勇敢的士兵军队并运送宝贵的资源，抵御大炮、弓箭手和绝望敌人可支配的任何其他武器，以保护好你的创造物。创造缓慢移动的庞然大物，或笨拙地飞上天空，在完全可摧毁的环境中展开大屠杀。最后，你必须以尽可能有创意或无情的方式，摧毁王国城堡并消灭其人民和牲畜，从而征服每一个王国！</p><br>
            <img :src="src2" alt=""/><br><br><br><br>
            <p>穿越到一个多元宇宙，在自定义竞技场中与其他玩家对战，或与好友组队消灭骑士军队、摧毁堡垒和洗劫定居地！</p><br>

            <p>《通过Steam创意工坊，下载其他玩家的战争机器、关卡、皮肤和模组，进一步自定义你的游戏体验！</p><br>

            <p>找不到你想要的？那就自己建造！在关卡编辑器中，你可以决定玩家在哪里生成，目标是什么以及什么样。增加羊群和农民将令游戏别具魅力，但弓箭手或牦牛炸弹会给尝试完成目标的玩家带来挑战。</p><br>

            <p>还想要更多？创建自己的模组或从创意工坊下载现有模组，扩展你的Besiege体验。模组可让你增加自定义机器模块、关卡目标、关卡逻辑等！</p><br>

            <p>走进Besiege的世界，实现你的童年幻想！</p><br>

            <h4>特色</h4>
                <p>1.单人战役 - 挑战性十足的单人战役包含54个关卡。征服4个不同主题的岛屿，夺取Besiege世界的胜利。</p><br>
                <p>2.多人PVP与合作 - 勇敢投入史诗级战争机器战斗，或与好友展开完成目标和关卡的较量。合作征服目标、解决难题以及摧毁堡垒和军队。</p><br>
                <p>3.开放式沙盒 - 与好友在开放式沙盒游玩，建造古怪的机器，并在闲暇时虐待关卡中的居住者。</p><br>
                <p>4.关卡编辑器 - 与好友一起制作新的关卡，或在制作关卡时，邀请好友实时测试！借助关卡编辑器，建造城堡、创建军队、设计自定义游戏模式和目标，或打造出你理想中的关卡。</p><br>
                <p>5.自定义皮肤 - 使用定制皮肤更改机器的视觉外观</p><br>
                <p>6.模组支持 - 为Besiege制作模组从未如此简单，丰富的文档将帮助你入门。</p><br>
                <p>7.创意工坊集成 - 在Steam创意工坊上分享和下载机器、皮肤、关卡以及模组</p><br>
                <img :src="src3" alt=""/><br><br><br><br>
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
    name:'goodssss',
    components:{
        Nav,
        Swiper,
        Footer,
    },
    data() {
            return{
            src:'images/5.5.jpg',
            src1:'images/more3.gif',
            src2:'images/more3.1.gif',
            src3:'images/more3.2.png',
            info:'Besiege是一款基于物理的建造类游戏，玩家可在其中建造中世纪的攻城工具。 在包含54个关卡的单人战役中一路战斗到底，与好友在多人游戏中引发混乱，借助关卡编辑器创造自己的世界，通过创意工坊使用模组来自定义游戏。',
            catImgs: [
            "./images/5.0.jpg",
            "./images/5.jpg",
            "./images/5.1.jpg",
            "./images/5.2.jpg",
        ],
        }

		},
        methods:{
            goodssss(){
                this.$router.push('/goodssss');
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