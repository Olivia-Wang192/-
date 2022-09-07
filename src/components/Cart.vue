<template>
  <div class="cart">
    <Nav />
    <div class="car1">
      <table>
        <tr>
          <th>全选</th>
          <th></th>
          <th>商品名称</th>
          <th>商品信息</th>
          <th>单价</th>
          <th>数量</th>
          <th>金额</th>
          <th>操作</th>
        </tr>
        <tr v-for="item, index in carlist" :key="item.id">
          <td><input type="checkbox" v-model="item.isChecked"></td>
          <td><img :src="item.src" alt="" class="img"></td>
          <td>{{ item.name }}</td>
          <td>{{ item.info }}</td>
          <td>{{ item.price }}</td>
          <td><button class="btn5 btn6" @click="sub(index)">-</button>{{ item.qua }}<button class="btn7 btn8"
              @click="add(index)">+</button></td>
          <td class="price">￥{{ Price( item.price,item.qua) }}</td>
          <td><button class="btn3 btn4" @click="del(item.id)">移除</button></td>
        </tr>
        <tr>
        <td class="tot">总价格：{{ totalPrice }}<button class="btn9 btn10" @click="sell">付款</button></td>
        </tr>  
      </table>
      
    </div>
    <Footer />

  </div>

</template>

<script>
import Nav from './Nav.vue' 
import Footer from './Footer.vue' 
import axios from "axios";
export default {
  name: "Cart",
  components: {
    Nav,
    Footer

  },
  data: function () {
    return {
      carlist: []
    }
  },
  created() {
    axios.post('/home/carlist', {
      params: {
        page: 1
      }
    }).then(res => {
      this.carlist = res.data;
    })
  },
  methods: {
    Price(a, b) {
      let price = 0;
      price = a * b;
      return price;
    },
    add(res) {
      console.log(res)
      this.carlist[res].qua++
    },
    sub(res) {
      this.carlist[res].qua--;
      if (this.carlist[res].qua == 0)
        this.carlist.splice(res, 1);
    },
    del(res) {
      // this.carlist.splice(res, 1);
      let d={
        id:res
      }
      axios.post('/home/goodslist/del',d).then(res => {
      this.carlist = res.data;
    });
    },
    sell() {
      let tot = 0;
      let i;
      for (i = 0; i < this.carlist.length; i++) {
        if (this.carlist[i].isChecked) {
          tot = tot + this.carlist[i].price * this.carlist[i].qua;
        }
      }
      console.log(alert("您本次购买一共消费" + tot + "元，消费愉快"));
      console.log(this.carlist.length)
      for (i = 0; i <= this.carlist.length; i++) {
        if (this.carlist[i].isChecked) {
          this.del(this.carlist[i].id)
        }
          console.log(i)
      }
    }
  },
  computed: {
    //商品总价格
    totalPrice: function () {
      let total = 0;
      for (var i = 0; i < this.carlist.length; i++) {
        if (this.carlist[i].isChecked)
          total += this.carlist[i].price * this.carlist[i].qua;
      }
      return total;
    }
  },

};
</script>

<style scoped>

.img {
  width: 80px;
  height: 80px;
  margin-left: -20px;
}

.car1 {
  margin-left: 0px;
  width: 1100px;
}
.car1 table tr th {
  font-size: 25px;
  padding-bottom: 20px;
  color:white;
  width:175px;
  height:33px;

}

.car1 table tr td {
  padding: 15px;
  font-size: 17px;
  color:white;
}

.price {
  color: red;
}
.tot{
  margin-top: -40px;
  position: relative;
  left: 80%;
  font-size: 32px;
  color: red;
}
.car1 table tr td input {
  width: 20px;
  height: 20px;
}

.btn3 {
    background-color: red; /* Green */
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
 
.btn4 {
    background-color: white; 
    color: black; 

}
 
.btn4:hover {
    background-color: red;
    color: white;
}

.btn9 {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 7px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 8px 8px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
 
.btn10 {
    background-color: white; 
    color: black; 

}
 
.btn10:hover {
    background-color: #4CAF50;
    color: white;
}


.btn5 {
    background-color: white; /* Green */
    border: none;
    color: white;
    padding: 1px 1px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 4px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
 
.btn6 {
    background-color: white; 
    color: black; 
    border: red;
}
 
.btn6:hover {
    background-color: red;
    color: white;
}


.btn7 {
    background-color: white; /* Green */
    border: none;
    color: white;
    padding: 1px 1px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 4px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
 
.btn8 {
    background-color: white; 
    color: black; 

}
 
.btn8:hover {
    background-color: green;
    color: white;
}




</style>