import VueRouter from 'vue-router'

import login from '../components/login.vue'
import zuce from '../components/zuce.vue'
import home from '../components/home.vue'
import car from '../components/Cart.vue'
import goods from '../components/Goods.vue'
import goodss from '../components/Goodss.vue'
import goodsss from '../components/Goodsss.vue'
import goodssss from '../components/Goodssss.vue'


//创建并暴露一个路由器
    export default new VueRouter({
        routes:[
            {
                path:'/',
                redirect:'/login'
            },
            {
                path:'/login',
                component:login
            },
            {
                path:'/zuce',
                component:zuce
            },
            {
                path:'/home',
                component:home
            },
            {
                path:'/car',
                component:car
            },
            {
                path:'/goods',
                component:goods
            },
            {
                path:'/goodss',
                component:goodss
            },
            {
                path:'/goodsss',
                component:goodsss
            },
            {
                path:'/goodssss',
                component:goodssss
            },



        ]
    })