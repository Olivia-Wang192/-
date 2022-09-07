const Mock = require('mockjs');

const userinfos = 
         [
            {
              name:"一一",
              username:"0001", 
              password: "123",
              rpassword: "123"  
            },
            {    name:"二二",
                 username:"0002",
                 password: "123",
                 rpassword: "123"
            },
        
        ]
Mock.mock('/userinfos?page=1', 'get', userinfos);
Mock.mock('/userinfos/add', 'post', (user)=>{
  console.log(user);
  let u=JSON.parse(user.body);
  let userinfo={
    name:u.name,
    username:u.username,
    password:u.password,
    rpassword:u.rpassword
  };
  userinfos.push(userinfo);
  return 1;
});


const catImgs = [
  "./images/banner1.png",
  "./images/banner2.png",
  "./images/banner3.png",
  "./images/banner4.png",
]
Mock.mock("/home/banner","get",catImgs)


const goodslist = [
  {
      id:1,
      name:'Nobody Saves the World',
      info:'不一样的动作角色扮演游戏',
      src:'images/two.jpg',
      price:'64',
      carfl:0,
      qua:"",
      isChecked: false
  },
  {
      id:2,
      name:'面条人',
      info:'一款轻松搞笑的沙雕游戏',
      src:'images/six.jpg',
      price:'58',
      carfl:0,
      qua:"",
      isChecked: false
  },
  {
      id:3,
      name:'Besiege',
      info:'一款基于物理的建造类游戏',
      src:'images/five.jpg',
      price:'76',
      carfl:0,
      qua:"",
      isChecked: false
  },
  {
    id:4,
    name:'饥荒联机版',
    info:'在绝不妥协的荒野生存游戏中一起愉快的玩耍吧',
    src:'images/seven.jpg',
    price:'48',
    carfl:0,
    qua:"",
    isChecked:false
  },

]


const carlist=[]
Mock.mock('/home/goodslist?page=1','get',goodslist);
Mock.mock('/home/goodslist/add','post',(res)=>{
  let c=JSON.parse(res.body);
  let id=c.id;
  let i=0;
  for(i=0;i<goodslist.length;i++){
    if(goodslist[i].id==id){
    if(goodslist[i].carfl){
      goodslist[i].qua=parseInt(goodslist[i].qua)+parseInt(c.qua);
      console.log(alert("该商品已存在，目前的购买数量为"+goodslist[i].qua))
      return 0
    }
    else{
    goodslist[i].carfl=1;
    goodslist[i].qua=c.qua;
    return 1
    }
  }
  }
});
Mock.mock('/home/carlist','post',()=>{
  let i;
  for(i=0;i<goodslist.length;i++){
    if(goodslist[i].carfl){
      carlist.push(goodslist[i]);
    }
  }
  return carlist;
});
Mock.mock('/home/goodslist/del','post',(res)=>{
  let b;
  let i;
  console.log(res)
  b=JSON.parse(res.body);
 for(i=0;i<carlist.length;i++){
   if(carlist[i].id==b.id){
     carlist.splice(i,1)
   }
   if(goodslist[i].id==b.id){
     goodslist[i].carfl=0
   } 
 }
 return carlist
});

