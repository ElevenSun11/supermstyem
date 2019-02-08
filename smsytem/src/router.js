// 引入vue
import Vue from 'vue'

// 引入路由
import Router from 'vue-router'

// 注册路由(使用路由)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: ()=> import ('./views/Login/login.vue')// 引入登录组件
    },
    {
      path: '/',
      component: ()=> import ('./views/1-index/index.vue'),// 引入后端首页组件
      children:[
        {
          path:"",
          component:() => import('./views/Home/home.vue')
        },
        {
          path:"/ClassifiedManagement",
          component:() => import('./views/2-ClassifiedManagement/Classified management.vue')
        },
        {
          path:"/goodsManage",
          component:() => import('./views/3-goodsManage/goodsManage.vue')
        },
        {
          path:"/addgoods",
          component:() => import('./views/4-addgoods/addgoods.vue')
        },
        {
          path:"/stockcontrol",
          component:() => import('./views/5-stockcontrol/stock control.vue')
        },
        {
          path:"/addstock",
          component:() => import('./views/6-addstock/addStock.vue')
        },
        {
          path:"/addclass",
          component:() => import('./views/addClsaa/addclass.vue')
        },
        {
          path:"/salelist",
          component:() => import('./views/7-saleList/saleList.vue')
        },
        {
          path:"/goodsoutof",
          component:() => import('./views/8-Goodsoutof/goodsoutof.vue')
        },
        {
          path:"/returnGoods",
          component:() => import('./views/9-returnOfGood/returnOfGoods.vue')
        },
        {
          path:"/StatisticalManage",
          component:() => import('./views/10- StatisticalManage/statisticalManage.vue')
        },
        {
          path:"/IncomingStatistics",
          component:() => import('./views/11-IncomingStatistics/IncomingStatistics.vue')
        },
        {
          path:"/accountManage",
          component:() => import('./views/12-accountManage/accountManage.vue')
        },
        {
          path:"/addAcount",
          component:() => import('./views/13-addAcount/addacount.vue')
        },
        {
          path:"/pwdedit",
          component:() => import('./views/14-passwordEdie/passwoedEdit.vue')
        },
        {
          path:"/vipmanage",
          component:() => import('./views/15-vipManage/vipManage.vue')
        },
        {
          path:"/addVip",
          component:() => import('./views/16-addVip/addVip.vue')
        },
        
        
        
      ]
    }

   
  ]
})
