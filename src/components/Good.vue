<template>
  <li><img @click="goods" :src="good.src" alt="" />
    <h3 >{{ good.name }}</h3>
    <p class="desc">{{ good.info }}</p>
    <p class="price">{{ good.price }}￥</p>
    
  <div>
    <div class="input-group">
      <input type="text" class="input input1"  v-model="qua" placeholder="请输入购买数量"><br/>
      <button class="button button1" @click="addcar">ADD TO CART</button>
      <button class="button button2" @click="sell">BUY IT!</button>
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->

  </li>
</template>

<script>
import axios from "axios";

export default {
  name: "Good",
  data() {
    return {
      qua: "",
      flag: "",
    };

  },
  // props:['good']
  props: {
    good: {
      type: Object,
      require: true,
    },
  },
  methods: {
    goods() {
      this.$router.push('/goods');
    },
    addcar() {
      if (this.qua == "") this.qua = 1;
      let carinfo = {
        id: this.good.id,
        qua: this.qua,
      };
      axios.post("/home/goodslist/add", carinfo).then((res) => {
        this.flag = res.data;
        console.log("flag=" + this.flag);
        if (this.flag == 1) {
          console.log(alert("加入成功"));
        }
      });

      this.qua = "";
      // console.log(this.good.id)
    },
    sell() {
      if (this.qua == "") this.qua = 1;
      let allprice = this.qua * this.good.price;
      console.log(alert("您本次购买一共消费" + allprice + "元，消费愉快"));
      this.qua = "";
    },
}
}
</script>


<style scoped>
li {
  float: left;
  width: 315px;
  height: 560px;
  margin-left: 14px;
  margin-bottom: 14px;
  background-color: white;
}

li a {
  display: block;
  padding: 20px 0;
  transition: all 0.2s linear;
}
li a:hover {
  padding-top: 18px;
  box-shadow: 0 10px 10px 4px rgba(0, 0, 0, 0.1);
}
img {
  display: block;
  width: 290px;
  height: 350px;
  margin: 0 auto 18px;
}

h3 {
  text-align: center;
  margin-bottom: 2px;
  font-size: 20px;
  font-weight: 400;
  color: #333;
}

.desc {
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 10px;
  height: 20px;
  font-size: 12px;
  color: #b0b0b0;
}

.price {
  text-align: center;
  margin-bottom: 14px;
  color: #ff6700;
}

.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 4px 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
 
.button1 {
    background-color: white; 
    color: black; 
    border: 2px solid #4CAF50;
}
 
.button1:hover {
    background-color: #4CAF50;
    color: white;
}
 
.button2 {
    background-color: white; 
    color: black; 
    border: 2px solid #008CBA;
}
 
.button2:hover {
    background-color: #008CBA;
    color: white;
}

.input{
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 7px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}

.input1 {
    background-color: white; 
    color: black; 
    border: 2px solid black;
}
 
.input1:hover {
    background-color:black;
    color: white;
}
</style>