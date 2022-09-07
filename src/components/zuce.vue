<template>
  <!--  <div class="container"> -->
  <div class="container1">
    <div class="header1">Register</div>
    <div class="form-wrapper">
      <input
        type="text"
        name="name"
        placeholder="姓名"
        v-model="user.name"
        class="input-item"
      />
      <input
        type="text"
        name="username"
        placeholder="用户名"
        v-model="user.username"
        class="input-item"
      />
      <input
        type="password"
        name="password"
        placeholder="密码"
        v-model="user.password"
        class="input-item"
      />
      <input
        type="password"
        name="rpassword"
        placeholder="确认密码"
        v-model="user.rpassword"
        class="input-item"
      />
      <button type="button" @click="zuce" class="btn btn1">注册</button>
      <div class="msg">
        已有账号？点击 <router-link to="/login">登陆</router-link>
      </div>
    </div>

    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        name: "",
        username: "",
        password: "",
        rpassword: "",
      },
      users: [],
    };
  },
  created() {
    axios.get("/userinfos?page=1").then((res) => {
      console.log(res);
      this.users = res.data;
    });
  },
  methods: {
    zuce() {
      if (this.ifkong()) {
        if (this.comp()) {
          if (this.isfind()) {
            if (axios.post("/userinfos/add", this.user)) {
              console.log(alert("注册成功,请点击登陆按钮前往登陆界面"));
              this.clear();
            }
          }
        }
      }
      this.clear();
    },
    clear() {
      this.user.name = "";
      this.user.username = "";
      this.user.password = "";
      this.user.rpassword = "";
    },
    ifkong() {
      if (
        this.user.name == "" ||
        this.user.username == "" ||
        this.user.password == "" ||
        this.user.rpassword == ""
      ) {
        console.log(alert("信息填写不完整，请仔细检查"));
        return 0;
      }
      return 1;
    },
    comp() {
      if (this.user.password != this.user.rpassword) {
        console.log(alert("两次密码不一致，请重新输入"));
        return 0;
      }
      return 1;
    },
    isfind() {
      axios.get("/userinfos?page=1").then((res) => {
        this.users = res.data;
      });
      let i;
      for (i = 0; i < this.users.length; i++) {
        if (
          this.users[i].name == this.user.name ||
          this.users[i].username == this.user.username
        ) {
          console.log(alert("用户已存在"));
          return 0;
        }
      }
      return 1;
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>
<style>

.container1 {
    width: 400px;
    height: 520px;
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