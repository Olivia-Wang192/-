<template>
  <!-- <div class="container"> -->
    <div class="container1">
      <div class="header1">Login</div>
      <div class="form-wrapper">

                <input type="text" name="username" placeholder="请输入用户名"  v-model="username"  class="input-item">
                <input type="password" name="password" placeholder="请输入密码"  v-model="password" class="input-item">
                <!-- <div id="login" class="btn">Login</div> -->
                
      </div>
      <button @click="login" type="button" class="btn btn1">SUBMIT</button>
      <div class="msg">
        还没有账号?请点击  <router-link to='/zuce'>注册</router-link>
       
      </div>
    </div>
 <!--  </div> -->
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      username: "",
      password: "",
      userinfos: [],
    };
  },
  created() {
    axios
      .get("/userinfos", {
        params: {
          page: 1,
        },
      })
      .then((response) => {
        console.log(response);
        this.userinfos = response.data;
      });
  },
  methods: {
    login() {
      let i = 0;
      for (i = 0; i < this.userinfos.length; i++) {
        if (
          this.username == this.userinfos[i].username &&
          this.password == this.userinfos[i].password
        ) {
           this.$router.push('/home'); 
          this.clear();
          return;
        }
      }
      this.clear();
      console.log(alert("用户名密码错误或不存在"));
    },
    clear() {
      this.username = "";
      this.password = "";
    },
    zuce(){
      this.$router.push('/zuce'); 
    }
  },
};
</script>
<style scoped>

.container1 {
    width: 400px;
    height: 380px;
    margin: 0 auto;
    margin-top: 240px;
    box-shadow: 0 0 20px #222;

    background-color: rgba(218, 248, 248, 0.701);
}

.header1{

    color: black;
    font-weight: bold;
    font-size: 70px;
    
}

.form-wrapper{
  float:left;
  margin-top:20px;
}


.input-item{
background:black;
width:200px;
height:40px;
margin:5px;
padding:10px;
color:white;
}

.btn{
    background-color: black; /* Green */
    border: none;
    color: white;
    padding: 7px 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 10px 4px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}




 .btn1{
  background-color: white; 
  color: black; 
  border: 2px solid black;
  width:200px;
  height:40px;
}


.btn1:hover {
    background-color: black;
    color: white;
}
 

</style>