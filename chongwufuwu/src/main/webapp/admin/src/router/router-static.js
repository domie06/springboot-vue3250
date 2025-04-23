import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import cart from '@/views/modules/cart/list'
        import chongwu from '@/views/modules/chongwu/list'
        import chongwuOrder from '@/views/modules/chongwuOrder/list'
        import dictionary from '@/views/modules/dictionary/list'
        import gonggao from '@/views/modules/gonggao/list'
        import shangpin from '@/views/modules/shangpin/list'
        import shangpinCollection from '@/views/modules/shangpinCollection/list'
        import shangpinCommentback from '@/views/modules/shangpinCommentback/list'
        import shangpinOrder from '@/views/modules/shangpinOrder/list'
        import xihu from '@/views/modules/xihu/list'
        import xihuCommentback from '@/views/modules/xihuCommentback/list'
        import xihuOrder from '@/views/modules/xihuOrder/list'
        import yonghu from '@/views/modules/yonghu/list'
        import config from '@/views/modules/config/list'
        import dictionaryChongwu from '@/views/modules/dictionaryChongwu/list'
        import dictionaryChongwuLingyang from '@/views/modules/dictionaryChongwuLingyang/list'
        import dictionaryChongwuOrder from '@/views/modules/dictionaryChongwuOrder/list'
        import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
        import dictionaryHuiyuandengji from '@/views/modules/dictionaryHuiyuandengji/list'
        import dictionarySex from '@/views/modules/dictionarySex/list'
        import dictionaryShangpin from '@/views/modules/dictionaryShangpin/list'
        import dictionaryShangpinOrder from '@/views/modules/dictionaryShangpinOrder/list'
        import dictionaryShangpinOrderPayment from '@/views/modules/dictionaryShangpinOrderPayment/list'
        import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
        import dictionaryXihu from '@/views/modules/dictionaryXihu/list'
        import dictionaryXihuOrder from '@/views/modules/dictionaryXihuOrder/list'
        import dictionaryXihuOrderPayment from '@/views/modules/dictionaryXihuOrderPayment/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryChongwu',
        name: '宠物类型名称',
        component: dictionaryChongwu
    }
    ,{
        path: '/dictionaryChongwuLingyang',
        name: '是否被领养名称',
        component: dictionaryChongwuLingyang
    }
    ,{
        path: '/dictionaryChongwuOrder',
        name: '订单类型名称',
        component: dictionaryChongwuOrder
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型名称',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHuiyuandengji',
        name: '会员等级类型名称',
        component: dictionaryHuiyuandengji
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangpin',
        name: '商品类型名称',
        component: dictionaryShangpin
    }
    ,{
        path: '/dictionaryShangpinOrder',
        name: '订单类型名称',
        component: dictionaryShangpinOrder
    }
    ,{
        path: '/dictionaryShangpinOrderPayment',
        name: '订单支付类型名称',
        component: dictionaryShangpinOrderPayment
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架名称',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryXihu',
        name: '洗护类型名称',
        component: dictionaryXihu
    }
    ,{
        path: '/dictionaryXihuOrder',
        name: '订单类型名称',
        component: dictionaryXihuOrder
    }
    ,{
        path: '/dictionaryXihuOrderPayment',
        name: '订单支付类型名称',
        component: dictionaryXihuOrderPayment
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/chongwu',
        name: '宠物领养',
        component: chongwu
      }
    ,{
        path: '/chongwuOrder',
        name: '宠物领养订单',
        component: chongwuOrder
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/shangpin',
        name: '商品',
        component: shangpin
      }
    ,{
        path: '/shangpinCollection',
        name: '商品收藏',
        component: shangpinCollection
      }
    ,{
        path: '/shangpinCommentback',
        name: '商品评价',
        component: shangpinCommentback
      }
    ,{
        path: '/shangpinOrder',
        name: '商品订单',
        component: shangpinOrder
      }
    ,{
        path: '/xihu',
        name: '宠物洗护',
        component: xihu
      }
    ,{
        path: '/xihuCommentback',
        name: '洗护评价',
        component: xihuCommentback
      }
    ,{
        path: '/xihuOrder',
        name: '洗护订单',
        component: xihuOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
