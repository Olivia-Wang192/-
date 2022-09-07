<template>
  <div id="app">
     <Nav/>
     <Slide :catImgs="catImgs"></Slide>
    <GoodList :goodslist="goodslist"></GoodList>
    <Detail></Detail>
    <Below></Below>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Slide from './Slide.vue'
import GoodList from './GoodList.vue'
import Nav from './Nav.vue'
import Footer from './Footer.vue'
import Detail from './Detail.vue'
import Below from './Below.vue'

export default {
  name: 'App',
  components: {
    Slide,
    GoodList,
    Nav,
    Footer,
    Detail,
    Below
  },
    data:function(){
    return {
      goodslist:[],
      catImgs:[]
    }
  },
  created(){
    axios.get('/home/banner').then(res => {
      // console.log(res)
      this.catImgs = res.data;  
    })

    axios.get('/home/goodslist',{
      params:{
        page:1
      }
    }).then(res => {
      // console.log(res)
      this.goodslist = res.data;  
    })
  }
}
</script>

<style>

/* 清零内边距和外边距 */
* {
    margin:0;
    padding:0;
}
/* 设置全局字体和颜色 */
body {
    height: 1000px;
    width: 100%;
    background-color: rgb(27,40,56);
    display: flex;
    justify-content: center;
}
/* 清除默认列表样式 */
li {
    list-style: none;
}
/* 去掉链接的下划线 */
a {
    text-decoration: none;
}


/* 设置清除浮动的类样式 */
.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1;
}
/* 设置盒子默认的宽度和居中显示 */
.w {
    width: 1226px;
    margin: auto;
}
</style>