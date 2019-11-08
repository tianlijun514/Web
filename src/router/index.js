import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: () => import( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
      meta: {
        title: '自述文件'
      },
      children: [{
          path: '/dashboard',
          component: () => import( /* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
          meta: {
            title: '系统首页'
          }
        },
        {
          path: '/icon',
          component: () => import( /* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
          meta: {
            title: '自定义图标'
          }
        },
        {
          path: '/table',
          component: () => import( /* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
          meta: {
            title: '基础表格'
          }
        },
        {
          path: '/tabs',
          component: () => import( /* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
          meta: {
            title: 'tab选项卡'
          }
        },
        // {
        //   path: '/form',
        //   component: () => import( /* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
        //   meta: {
        //     title: '基本表单'
        //   }
        // },
        {
          path: '/box',
          component: () => import('../components/huibox/boxli.vue'),
          meta: {
            title: '会员信息综合查询'
          }
        },
        {
          path: '/box0',
          component: () => import('../components/huibox/boxhj.vue'),
          meta: {
            title: '会籍销售流水查询'
          }
        },
        {
          path: '/box1',
          component: () => import('../components/huibox/boxdj.vue'),
          meta: {
            title: '定金销售流水查询'
          }
        },
        {
          path: '/box2',
          component: () => import('../components/huibox/boxhy.vue'),
          meta: {
            title: '会员停转补流水查询'
          }
        },
        {
          path: '/box3',
          component: () => import('../components/huibox/boxzf.vue'),
          meta: {
            title: '支付宝支付流水查询'
          }
        },
        {
          path: '/box4',
          component: () => import('../components/huibox/boxcr.vue'),
          meta: {
            title: '会员出入场流水查询'
          }
        },
        {
          path: '/box5',
          component: () => import('../components/huibox/boxzk.vue'),
          meta: {
            title: '会员制卡综合查询'
          }
        },
        {
          path: '/box6',
          component: () => import('../components/huibox/boxmd.vue'),
          meta: {
            title: '合同可入场门店查询'
          }
        },
        {
          path: '/box7',
          component: () => import('../components/huibox/boxsy.vue'),
          meta: {
            title: '次卡剩余次数查询'
          }
        },
        {
          path: '/box8',
          component: () => import('../components/huibox/boxzs.vue'),
          meta: {
            title: '赠送储值卡查询'
          }
        },
        {
          path: '/box9',
          component: () => import('../components/huibox/boxchuzhi.vue'),
          meta: {
            title: '储值卡支付流水查询'
          }
        },
        {
          path: '/box11',
          component: () => import('../components/huibox/boxchaxun.vue'),
          meta: {
            title: '储值卡查询'
          }
        },






        {
          path: '/index1',
          component: () => import('../components/huiindex/indexdj.vue'),
          meta: {
            title: '会籍定金销售'
          }
        },
        {
          path: '/index2',
          component: () => import('../components/huiindex/indexxs.vue'),
          meta: {
            title: '会籍销售'
          }
        },
        {
          path: '/index3',
          component: () => import('../components/huiindex/indexzhuanbu.vue'),
          meta: {
            title: '会籍停转补'
          }
        },
        {
          path: '/index4',
          component: () => import('../components/huiindex/indexzuji.vue'),
          meta: {
            title: '会籍租箱办理'
          }
        },
        {
          path: '/index5',
          component: () => import('../components/huiindex/indexhetong.vue'),
          meta: {
            title: '会籍合同打印'
          }
        },
        {
          path: '/index6',
          component: () => import('../components/huiindex/indexqthetong.vue'),
          meta: {
            title: '其他合同打印'
          }
        },
        {
          path: '/index7',
          component: () => import('../components/huiindex/indexziliao.vue'),
          meta: {
            title: '新会员资料补充录入'
          }
        },
        {
          path: '/index8',
          component: () => import('../components/huiindex/indexzhuanrang.vue'),
          meta: {
            title: '会籍转让'
          }
        },
        {
          path: '/index9',
          component: () => import('../components/huiindex/indexyichang.vue'),
          meta: {
            title: '合同异常处理'
          }
        },
        {
          path: '/index10',
          component: () => import('../components/huiindex/indextuanka.vue'),
          meta: {
            title: '团卡销售'
          }
        },






        {
          path: '/editor1',
          component: () => import('../components/editor/editor1.vue'),
          meta: {
            title: '门店会员卡打印任务'
          }
        },
        {
          path: '/editor2',
          component: () => import('../components/editor/editor2.vue'),
          meta: {
            title: '会员领卡确认'
          }
        },
        {
          path: '/editor3',
          component: () => import('../components/editor/editor3.vue'),
          meta: {
            title: '会员出入场'
          }
        },
        {
          path: '/editor4',
          component: () => import('../components/editor/editor4.vue'),
          meta: {
            title: '访客录入'
          }
        },
        {
          path: '/editor5',
          component: () => import('../components/editor/editor5.vue'),
          meta: {
            title: '会籍礼品领取'
          }
        },
        {
          path: '/editor6',
          component: () => import('../components/editor/editor6.vue'),
          meta: {
            title: '合同内审处理'
          }
        },
        {
          path: '/editor7',
          component: () => import('../components/editor/editor7.vue'),
          meta: {
            title: '合同签名确认'
          }
        },
        {
          path: '/editor8',
          component: () => import('../components/editor/editor8.vue'),
          meta: {
            title: '合同签名上传测试'
          }
        },
        {
          path: '/editor9',
          component: () => import('../components/editor/editor9.vue'),
          meta: {
            title: '黑名单设置'
          }
        },
        {
          path: '/editor10',
          component: () => import('../components/editor/editor10.vue'),
          meta: {
            title: '非会员门店预约'
          }
        },
        {
          path: '/editor11',
          component: () => import('../components/editor/editor11.vue'),
          meta: {
            title: '销售数据录入'
          }
        },
        



        {
          path: '/pact',
          component: () => import('../components/pact/pact.vue'),
          meta: {
            title: '私教合同办理'
          }
        },
        {
          path: '/pact0',
          component: () => import('../components/pact/pact0.vue'),
          meta: {
            title: '私教定金销售'
          }
        },
        {
          path: '/pact1',
          component: () => import('../components/pact/pact1.vue'),
          meta: {
            title: '上课预约及取消预约'
          }
        },
        {
          path: '/pact2',
          component: () => import('../components/pact/pact2.vue'),
          meta: {
            title: '上课核销'
          }
        },
        {
          path: '/pact3',
          component: () => import('../components/pact/pact3.vue'),
          meta: {
            title: '会员更换教练'
          }
        },
        {
          path: '/pact4',
          component: () => import('../components/pact/pact4.vue'),
          meta: {
            title: '私教转店处理'
          }
        },
        {
          path: '/pact5',
          component: () => import('../components/pact/pact5.vue'),
          meta: {
            title: '私教转让处理'
          }
        },
        {
          path: '/pact6',
          component: () => import('../components/pact/pact6.vue'),
          meta: {
            title: '团操预约和入场'
          }
        },
        {
          path: '/pact7',
          component: () => import('../components/pact/pact7.vue'),
          meta: {
            title: '私教礼包销售'
          }
        },
        {
          path: '/pact8',
          component: () => import('../components/pact/pact8.vue'),
          meta: {
            title: '1对多上课预约'
          }
        },
        



        {
          path: '/chat1',
          component: () => import('../components/chat/chat1.vue'),
          meta: {
            title: '私教销售流水查询'
          }
        },
        {
          path: '/chat2',
          component: () => import('../components/chat/chat2.vue'),
          meta: {
            title: '教预约核销流水查询'
          }
        },
        {
          path: '/chat3',
          component: () => import('../components/chat/chat3.vue'),
          meta: {
            title: '私教日程安排一览表'
          }
        },
        {
          path: '/chat4',
          component: () => import('../components/chat/chat4.vue'),
          meta: {
            title: '私教合同打印'
          }
        },
        {
          path: '/chat5',
          component: () => import('../components/chat/chat5.vue'),
          meta: {
            title: '1对多团操预约'
          }
        },
        {
          path: '/chat6',
          component: () => import('../components/chat/chat6.vue'),
          meta: {
            title: '私教余课一览表'
          }
        },
        {
          path: '/chat7',
          component: () => import('../components/chat/chat7.vue'),
          meta: {
            title: '私教课时剩余表'
          }
        },
        {
          path: '/chat8',
          component: () => import('../components/chat/chat8.vue'),
          meta: {
            title: '小团操预约核销流水查询'
          }
        },
        {
          path: '/chat9',
          component: () => import('../components/chat/chat9.vue'),
          meta: {
            title: '私教预约签名查询'
          }
        },





        {
          // markdown组件
          path: '/markdown',
          component: () => import( /* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
          meta: {
            title: 'markdown编辑器'
          }
        },
        // {
        //   // 图片上传组件
        //   path: '/upload',
        //   component: () => import( /* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
        //   meta: {
        //     title: '文件上传'
        //   }
        // },
        {
          // vue-schart组件
          path: '/charts',
          component: () => import( /* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
          meta: {
            title: 'schart图表'
          }
        },

        // 11111111111111
        {
          // 拖拽列表组件
          path: '/drag',
          component: () => import( /* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
          meta: {
            title: '会员信息综合查询'
          }
        },
        {
          // 拖拽Dialog组件
          path: '/dialog',
          component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
          meta: {
            title: '会籍销售流水查询'
          }
        },
        {
          // 拖拽Dialog组件
          path: '/sijiao',
          component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/DragSijiao.vue'),
          meta: {
            title: '私教销售流水查询'
          }
        },
        {
          // 拖拽Dialog组件
          path: '/dingjin',
          component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/Dragdingjin.vue'),
          meta: {
            title: '定金销售流水查询'
          }
        },

        {
          // 拖拽Dialog组件
          path: '/huiyuan',
          component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/Draghuiyuan.vue'),
          meta: {
            title: '会员出入场'
          }
        }, {
          // 拖拽Dialog组件
          path: '/fangke',
          component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/Dragfangke.vue'),
          meta: {
            title: '访客录入'
          }
        },
        {
          // 拖拽Dialog组件
          path: '/zhika',
          component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/Dragzhika.vue'),
          meta: {
            title: '会员制卡综合查询'
          }
        },
        {
          // 拖拽Dialog组件
          path: '/shangping',
          component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/Dragshangping.vue'),
          meta: {
            title: '商品领用'
          }
        },
        {
          // 拖拽Dialog组件
          path: '/zhifu',
          component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/Dragzhifu.vue'),
          meta: {
            title: '支付流水查询'
          }
        },
        {
          // 拖拽Dialog组件
          path: '/shenqing',
          component: () => import( /* webpackChunkName: "dragdialog" */ '../components/page/Dragshenqing.vue'),
          meta: {
            title: '我的申请'
          }
        },



        {
          // 国际化组件
          path: '/i18n',
          component: () => import( /* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
          meta: {
            title: '国际化'
          }
        },
        {
          // 权限页面
          path: '/permission',
          component: () => import( /* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
          meta: {
            title: '权限测试',
            permission: true
          }
        },
        {
          path: '/404',
          component: () => import( /* webpackChunkName: "404" */ '../components/page/404.vue'),
          meta: {
            title: '404'
          }
        },
        {
          path: '/403',
          component: () => import( /* webpackChunkName: "403" */ '../components/page/403.vue'),
          meta: {
            title: '403'
          }
        },
        {
          path: '/donate',
          component: () => import( /* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
          meta: {
            title: '支持作者'
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});