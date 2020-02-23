import Vue from 'vue'
import Router from 'vue-router'
//引入创建的四个路由组件
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'


Vue.use(Router) //声明使用插件
//路由器对象模块
export default new Router({
  //所有路由
  routes:[
      {
          path:'/msite',
          component:Msite,
          meta:{
              showFooter:true
          }
      },
      {
        path:'/order',
        component:Order,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/',
        redirect:'/msite'
    },
    {
        path:'/login',
        component:Login
    }
  ]
})
