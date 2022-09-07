<template>
    <div>

        <div class="head">
        <h3>推荐</h3></div>
            <div class="cards">
                <div class="card">
                    <div class="photo"><img :src="src1" alt=""></div>
                    <h1>英雄之时</h1>
                    <h2>战略角色扮演游戏</h2>
                    <p>发展你的城市和军队，升级你的英雄以获得全新的强力法术和技能，探索地图上的各类奇遇与危险。</p>
                    <a href="#">了解更多</a> 
                </div>
                <div class="card">
                    <div class="photo"><img :src="src2" alt=""></div>
                    <h1>Shadow Tactics</h1>
                    <h2>策略性潜入类游戏</h2>
                    <p>在幕府时代的日本，幕府将军以和平的名义招募了五位从事间谍活动的人才，他们又会做出多少牺牲呢？</p>
                    <a href="#">了解更多</a>
                </div>
                <div class="card">
                    <div class="photo"><img :src="src3" alt=""></div>
                    <h1>Escape Simulator</h1>
                    <h2>第一人称解谜游戏</h2>
                    <p>探索许多的交互式密室。你可以移动家具、解开各种锁、把你所能看到的东西全部捡起来仔细查看！</p>
                    <a href="#">了解更多</a>
                </div>
            </div>
            
</div>
</template>

<script>
export default {
    name: 'Detail',

    data() {
        return {
            src1:'images/header1.jpg',
            src2:'images/header2.jpg',
            src3:'images/header3.jpg',
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.head{
    background-color:black;
    color:white;
    font-size:30px;
    text-align:left;

}

.cards{
    display: flex;
    justify-content: center;
    align-items: center;
}

.card{
    /* 相对定位 */
    position: relative;
    width: 300px;
    height: 450px;
    margin: 20px;
    background-color: #758a99;
    border-radius: 20px;
    /* 溢出隐藏 */
    overflow: hidden;
    /* 弹性布局 */
    display: flex;
    /* 元素纵向排列 */
    flex-direction: column;
    /* 居中 */
    align-items: center;
    color: #fff;
    /* 阴影 */
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
    /* 不让其被挤压 */
    flex-shrink: 0;
}
.card .photo img{
    width: 100%;
    height: 100%;
    /* 保持原有尺寸比例，裁切长边 */
    object-fit: cover;
}
/* 默认大图 */
.card .photo{
    /* 绝对定位 */
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0%;
    overflow: hidden;
    /* 动画过渡 */
    transition: 0.5s;
}
/* 鼠标移入变小图 */
.card:hover .photo{
    top: 30px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
}
/* 这里加个黑色到透明的渐变背景，可以更好的看清楚名字 */
.card .photo::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,transparent 50%,#222);
}
.card h1{
    position: absolute;
    top: 370px;
    transition: 0.5s;
}
.card:hover h1{
    top: 170px;
}
.card h2{
    margin-top: 220px;
    width: 80%;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
}
.card p{
    width: 90%;
    text-indent: 32px;
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 30px;
}
.card a{
    font-size: 14px;
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    border: 1px solid rgba(255,255,255,0.5);
    padding: 8px 32px;
    border-radius: 8px;
}
.card a:hover{
    color: #fff;
    background-color: rgba(255,255,255,0.2);
}
</style>