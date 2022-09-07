<template>
  <div class="banner" @mouseover="mouseoverCall" @mouseout="mouseoutCall">
    <!-- 绑定图片的src属性 -->
    <a href="#"
      ><img :src="catImgs[i]" width="1226px" height="460px" id="myImg"
    /></a>
    <!-- 左右的按钮 -->
    <div class="button-prev" @click="prevPic"></div>
    <div class="button-next" @click="nextPic"></div>
    <!-- 右下方的小圆点 -->
    <div class="pagination">
      <ul id="list">
        <!-- <li v-for="(num,index) in 4" :class="classList[index]" @click="selectList(index)"></li> -->
        <li v-for="(num,index) in catImgs.length" :class="index == i ? 'select' : 'noselect' "
                @click="i = index" :key="num"></li>
      </ul>
    </div>
    <!-- {{ i }} -->
  </div>
</template>

<script>
export default {
  data: function(){
      return {
    // catImgs: [],
    i: 0,
    // classList: ['select', 'noselect', 'noselect', 'noselect']
  }},
  props:{
    catImgs:{
      type:Array,
      require:true
    }
  },
  methods: {
    // selectList(index) {
    //     this.i = index;
    //     for (let j = 0; j < this.classList.length; j++) {
    //         this.classList[j] = 'noselect';
    //     }
    //     this.classList[index] = 'select';
    // },
    prevPic() {
      if (this.i == 0) {
        this.i = 4;
      }
      this.i--;
    },
    nextPic() {
      this.i++;
      if (this.i == 4) {
        this.i = 0;
      }
    },
    mouseoverCall() {
      clearInterval(this.timer);
    },
    mouseoutCall() {
      this.timer = setInterval(this.nextPic, 1000);
    },
    stopSlide() {
      console.log("停止轮播");
      this.$destroy();
    },
  },

  mounted() {
    this.timer = setInterval(this.nextPic, 1000);
  },
  beforeDestory() {
    clearInterval(this.timer);
    console.log("vm没了");
  },
};
</script>

<style scoped>
.banner {
    position: relative;
    width: 1226px;
    height: 460px;
    margin: 00px auto;
    
    /* background-color: pink; */
}

.banner .button-prev {
    position: absolute;
    top: 50%;
    left: 0;
    width: 41px;
    height: 69px;
    margin-top: -35px;
    cursor: pointer;
    z-index: 10;
    background: url(../assets/images/icon-slides.png) no-repeat -84px 50%;
}
.banner .button-prev:hover {
    background-position: 0 50%;
}
.banner .button-next {
    position: absolute;
    top: 50%;
    right: 0;
    width: 41px;
    height: 69px;
    margin-top: -35px;
    cursor: pointer;
    z-index: 10;
    background: url(../assets/images/icon-slides.png) no-repeat -125px 50%;
}
.banner .button-next:hover {
    background-position: -42px 50%;
}

.banner .pagination {
    position: absolute;
    right: 30px;
    bottom: 20px;
    width: 120px;
}

.banner .pagination ul li {
    list-style-type: none;
    float: left;
    width: 6px;
    height: 6px;
    margin: 0 4px;
    border: 2px solid #fff;
    border-color: hsla(0,0%,100%,.3);
    border-radius: 10px;
    background: rgba(0,0,0,0.4);
}

.banner .pagination ul li:hover {
    border-color: rgba(0,0,0,0.4);
    background-color: hsla(0,0%,100%,.3);
}

.banner .pagination ul .select {
    border-color: rgba(0,0,0,0.4);
    background-color: hsla(0,0%,100%,.3);
}

.banner .pagination ul .noselect {
    border-color: hsla(0,0%,100%,.3);
    background: rgba(0,0,0,0.4);
}
</style>