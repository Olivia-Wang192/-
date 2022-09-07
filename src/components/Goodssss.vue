<template>
<div>
    <Nav />
		<div class="page_title_area">
			<div class="breadcrumbs">
				<div style="clear: left;"></div>
			</div>
			<div class="apphub_HomeHeaderContent">

				<div class="apphub_HeaderStandardTop">
					<a href="#">饥荒联机版</a>
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
            <button class="btn btn1">忽略</button> <button class="btn btn1">查看下一个商品</button>
        </div>

        <div class="intro">
            <h3>游戏信息</h3><br>
            全部测评:<a href="">好评如潮</a><br><br>
            发行日期:<a href="">2016年4月22日</a><br><br>
            开发商:<a href="">Klei Entertainment</a><br><br>
            发行商:<a href="">Klei Entertainment</a><br><br>
            <p>该产品的热门用户自定义标签:</p>
            <button class="btn2">探索</button><button class="btn2">生存</button><button class="btn2">制作</button><button class="btn2">沙盒</button><button class="btn2">困难</button><button class="btn2">多人</button><button class="btn2">欢乐</button>
        </div>
        <div class="buy">
            <h1>48￥</h1><br>
            <h1>欢迎购买 饥荒联机版</h1><br>
            <button class="btn btn1">购买</button>
        </div>
        <hr>
        <div class="more">
            <h3>更多游戏信息</h3><br>
            <h4>一起探索</h4><br>
            <img :src="src1" alt=""/><br><br>
            <p>去发现和探索程序生成的巨大世界，那里有丰富的生物圈、既有数不清的资源也有各种各样的危险。不管是在地表畅游、还是洞穴探险；不管是深入远古档案还是寻访月岛，你都会在很长的一段时间里一直有事可做。</p><br>
            <br><br>
            <h4>一起战斗</h4><br>
            <hr><br>
            <img :src="src2" alt=""/><br><br>
            <p>季节性的头目、四处游荡的危险生物、潜伏的暗影生物，以及植物群和兽群都会让你一不小心就变成吓人的鬼魂。</p><br>
            <br><br>
            <h4>一起耕种</h4><br>
            <hr><br>
            <img :src="src3" alt=""/><br><br>
            <p>开垦田地，撒下种子，种出最梦幻的庄稼。悉心照顾你的农田，喂饱同伴冒险家们，共同迎接未来的挑战。</p><br>
            <br><br>
            <h4>一起建造</h4><br>
            <hr><br>
            <img :src="src4" alt=""/><br><br>
            <p>保护好自己和同伴，以及采集到的所有东西，因为你放心，一定会有人、或是有东西想把它们拿回去。</p><br>
            <br><br>

            <h4>关于这款游戏</h4><br>
            <hr><br>
            <img :src="src5" alt=""/><br><br>
            <p>在绝不妥协的荒野生存游戏《饥荒》的多人联机版中一起战斗、耕种、建设和探索吧。</p><br>
            <br><br>
            <p>进入一个光怪陆离而未经探索的世界，这里充满了奇怪的生物以及隐藏的危险，以及古老的秘密。收集资源以制作符合你的生存风格的物品和建筑。通过游戏去解开“永恒领域”的各种谜团。</p><br>
            <br><br>
            <p>你可以在非公开游戏中与好友并肩作战，或者与陌生玩家在线组队去探险。携手其他玩家克服恶劣的环境，或者自力更生，求得生存。</p><br>
            <br><br>
            <p>你必须懂得随机应变，且谨记一点：千万别饿死。</p><br>
            <br><br>

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
            src:'images/6.6.jpg',
            src1:'images/more4.0.gif',
            src2:'images/more4.1.gif',
            src3:'images/more4.2.gif',
            src4:'images/more4.3.gif',
            src5:'images/more4.4.gif',
            info:'在绝不妥协的荒野生存游戏《饥荒》的多人联机版中一起战斗、耕种、建设和探索吧。',
            catImgs: [
            "./images/6.0.jpg",
            "./images/6.1.jpg",
            "./images/6.2.jpg",
            "./images/6.3.jpg",
        ],
        }

		},
        
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