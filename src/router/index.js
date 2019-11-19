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
          component: () => import('../components/page/Dashboard.vue'),
          meta: {
            title: '系统首页'
          }
        },
        {
          path: '/tabs',
          component: () => import('../components/page/Tabs.vue'),
          meta: {
            title: '门店通知'
          }
        },
        {
          path: '/drag',
          component: () => import('../components/page/DragList.vue'),
          meta: {
            title: '会员信息综合查询'
          }
        },

  // 内容跳转组件
        {
          path: '/hymesg',
          component: () => import('../components/huibox/hymesg.vue'),
          meta: {
            title: '会员信息'
          }
        },
        {
          path: '/zuboss',
          component: () => import('../components/huiindex/zuboss.vue'),
          meta: {
            title: '租箱租用'
          }
        },
        {
          path: '/dialog',
          component: () => import('../components/page/DragDialog.vue'),
          meta: {
            title: '会籍销售流水查询'
          }
        },
        {
          path: '/sijiao',
          component: () => import( '../components/page/DragSijiao.vue'),
          meta: {
            title: '私教销售流水查询'
          }
        },
        {
          path: '/dingjin',
          component: () => import('../components/page/Dragdingjin.vue'),
          meta: {
            title: '定金销售流水查询'
          }
        },
        {
          path: '/huiyuan',
          component: () => import( '../components/page/Draghuiyuan.vue'),
          meta: {
            title: '会员出入场'
          }
        },
        {
          path: '/fangke',
          component: () => import('../components/page/Dragfangke.vue'),
          meta: {
            title: '访客录入'
          }
        },
        {
          path: '/zhika',
          component: () => import(  '../components/page/Dragzhika.vue'),
          meta: {
            title: '会员制卡综合查询'
          }
        },
        {
          path: '/shangping',
          component: () => import('../components/page/Dragshangping.vue'),
          meta: {
            title: '商品领用'
          }
        },
        {
          path: '/zhifu',
          component: () => import('../components/page/Dragzhifu.vue'),
          meta: {
            title: '支付流水查询'
          }
        },
        {
          path: '/shenqing',
          component: () => import( '../components/page/Dragshenqing.vue'),
          meta: {
            title: '我的申请'
          }
        },
    
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
            title: '会籍合同销售'
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
            title: '租箱管理'
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
            title: '访客记录'
          }
        },
        {
          path: '/fang',
          component: () => import('../components/editor/fang.vue'),
          meta: {
            title: '新增访客'
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
          path: '/ming',
          component: () => import('../components/editor/ming.vue'),
          meta: {
            title: '新增黑名单'
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
            title: '私教核销'
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
          path: '/drillen',
          component: () => import('../components/pact/drillen.vue'),
          meta: {
            title: '私教换教练'
          }
        },


        {
          path: '/pact4',
          component: () => import('../components/pact/pact4.vue'),
          meta: {
            title: '私教转店'
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
          path: '/onetable',
          component: () => import('../components/pact/onetable.vue'),
          meta: {
            title: '团操预约'
          }
        },
        {
          path: '/alstable',
          component: () => import('../components/pact/alstable.vue'),
          meta: {
            title: '1对多团操预约'
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


        // 总部管理组件
        {
          path: '/business',
          component: () => import('../components/business/business.vue'),
          meta: {
            title: '领用类型设置'
          }
        },
        {
          path: '/business1',
          component: () => import('../components/business/business1.vue'),
          meta: {
            title: '商品分类设置'
          }
        },
        {
          path: '/business2',
          component: () => import('../components/business/business2.vue'),
          meta: {
            title: '商品信息设置'
          }
        },
        {
          path: '/business3',
          component: () => import('../components/business/business3.vue'),
          meta: {
            title: '供应商定义'
          }
        },
        {
          path: '/business4',
          component: () => import('../components/business/business4.vue'),
          meta: {
            title: '合同定义'
          }
        },
        {
          path: '/business5',
          component: () => import('../components/business/business5.vue'),
          meta: {
            title: '采购入库'
          }
        },
        {
          path: '/business6',
          component: () => import('../components/business/business6.vue'),
          meta: {
            title: '采购退货'
          }
        },
        {
          path: '/business7',
          component: () => import('../components/business/business7.vue'),
          meta: {
            title: '采购入库汇总'
          }
        },
        {
          path: '/business8',
          component: () => import('../components/business/business8.vue'),
          meta: {
            title: '采购退货汇总'
          }
        },

        // 进销存业务组件
        {
          path: '/regulate',
          component: () => import('../components/regulate/regulate.vue'),
          meta: {
            title: '配送商品出入库'
          }
        },
        {
          path: '/regulate1',
          component: () => import('../components/regulate/regulate1.vue'),
          meta: {
            title: '配送商品出库汇总'
          }
        },
        {
          path: '/regulate2',
          component: () => import('../components/regulate/regulate2.vue'),
          meta: {
            title: '商品盘点'
          }
        },
        {
          path: '/regulate3',
          component: () => import('../components/regulate/regulate3.vue'),
          meta: {
            title: '商品报损溢'
          }
        },
        {
          path: '/regulate4',
          component: () => import('../components/regulate/regulate4.vue'),
          meta: {
            title: '商品领用'
          }
        },
        {
          path: '/regulate5',
          component: () => import('../components/regulate/regulate5.vue'),
          meta: {
            title: '库存余额一览表'
          }
        },
        {
          path: '/regulate6',
          component: () => import('../components/regulate/regulate6.vue'),
          meta: {
            title: '商品进销存报表'
          }
        },
        {
          path: '/regulate7',
          component: () => import('../components/regulate/regulate7.vue'),
          meta: {
            title: '商品销售'
          }
        },
        {
          path: '/regulate8',
          component: () => import('../components/regulate/regulate8.vue'),
          meta: {
            title: '商品销售流水'
          }
        },
        {
          path: '/regulate9',
          component: () => import('../components/regulate/regulate9.vue'),
          meta: {
            title: '商品报损溢流水'
          }
        },
        {
          path: '/regulate10',
          component: () => import('../components/regulate/regulate10.vue'),
          meta: {
            title: '商品领用流水'
          }
        },
        {
          path: '/regulate11',
          component: () => import('../components/regulate/regulate11.vue'),
          meta: {
            title: '库存历史查询'
          }
        },
        {
          path: '/regulate12',
          component: () => import('../components/regulate/regulate12.vue'),
          meta: {
            title: '商品销售(调整)'
          }
        },

        // 财务管理组件
        {
          path: '/finance',
          component: () => import('../components/finance/finance.vue'),
          meta: {
            title: 'TraCode设置'
          }
        },
        {
          path: '/finance1',
          component: () => import('../components/finance/finance1.vue'),
          meta: {
            title: '支付流水查询'
          }
        },
        {
          path: '/finance2',
          component: () => import('../components/finance/finance2.vue'),
          meta: {
            title: '每月摊销汇总'
          }
        },
        {
          path: '/finance3',
          component: () => import('../components/finance/finance3.vue'),
          meta: {
            title: '定金销售流水详单查询'
          }
        },
        {
          path: '/finance4',
          component: () => import('../components/finance/finance4.vue'),
          meta: {
            title: '支付流水备注修改'
          }
        },
        {
          path: '/finance5',
          component: () => import('../components/finance/finance5.vue'),
          meta: {
            title: '电子发票管理'
          }
        },
        {
          path: '/finance6',
          component: () => import('../components/finance/finance6.vue'),
          meta: {
            title: '预售设置'
          }
        },
        {
          path: '/finance7',
          component: () => import('../components/finance/finance7.vue'),
          meta: {
            title: '预收款查询'
          }
        },

        // 客损管理组件
        {
          path: '/customer',
          component: () => import('../components/customer/customer.vue'),
          meta: {
            title: '客诉录入'
          }
        },
        {
          path: '/customer1',
          component: () => import('../components/customer/customer1.vue'),
          meta: {
            title: '客诉处理'
          }
        },
        {
          path: '/customer2',
          component: () => import('../components/customer/customer2.vue'),
          meta: {
            title: '客诉综合查询'
          }
        },
        {
          path: '/customer3',
          component: () => import('../components/customer/customer3.vue'),
          meta: {
            title: '在线客服处理'
          }
        },


        // 审批流组件
        {
          path: '/approval',
          component: () => import('../components/approval/approval.vue'),
          meta: {
            title: '我的申请'
          }
        },
        {
          path: '/approval1',
          component: () => import('../components/approval/approval1.vue'),
          meta: {
            title: '初审'
          }
        },
        {
          path: '/approval2',
          component: () => import('../components/approval/approval2.vue'),
          meta: {
            title: '会籍复审'
          }
        },
        {
          path: '/approval3',
          component: () => import('../components/approval/approval3.vue'),
          meta: {
            title: '私教复审'
          }
        },
        {
          path: '/approval4',
          component: () => import('../components/approval/approval4.vue'),
          meta: {
            title: '定金复审'
          }
        },
        {
          path: '/approval5',
          component: () => import('../components/approval/approval5.vue'),
          meta: {
            title: '终审'
          }
        },
        {
          path: '/approval6',
          component: () => import('../components/approval/approval6.vue'),
          meta: {
            title: '新申请'
          }
        },
        {
          path: '/approval7',
          component: () => import('../components/approval/approval7.vue'),
          meta: {
            title: '流程审批环节的定义'
          }
        },

        // 业务报表组件

        {
          path: '/bordereaux',
          component: () => import('../components/bordereaux/bordereaux.vue'),
          meta: {
            title: 'DPR日报表'
          }
        },
        {
          path: '/bordereaux1',
          component: () => import('../components/bordereaux/bordereaux1.vue'),
          meta: {
            title: 'DPR月报表'
          }
        },
        {
          path: '/bordereaux2',
          component: () => import('../components/bordereaux/bordereaux2.vue'),
          meta: {
            title: 'Cashier Report总表'
          }
        },
        {
          path: '/bordereaux3',
          component: () => import('../components/bordereaux/bordereaux3.vue'),
          meta: {
            title: '报表一览下载'
          }
        },
        {
          path: '/bordereaux4',
          component: () => import('../components/bordereaux/bordereaux4.vue'),
          meta: {
            title: '报表手动生成'
          }
        },
        {
          path: '/bordereaux5',
          component: () => import('../components/bordereaux/bordereaux5.vue'),
          meta: {
            title: '销售报表'
          }
        },


        // 分析报表组件
        {
          path: '/analyze',
          component: () => import('../components/analyze/analyze.vue'),
          meta: {
            title: '试算平衡表'
          }
        },
        {
          path: '/analyze1',
          component: () => import('../components/analyze/analyze1.vue'),
          meta: {
            title: '剩余会籍分析'
          }
        },
        {
          path: '/analyze2',
          component: () => import('../components/analyze/analyze2.vue'),
          meta: {
            title: '剩余PT分析'
          }
        },
        {
          path: '/analyze3',
          component: () => import('../components/analyze/analyze3.vue'),
          meta: {
            title: '会籍销售排名'
          }
        },
        {
          path: '/analyze4',
          component: () => import('../components/analyze/analyze4.vue'),
          meta: {
            title: '私教销售排名'
          }
        },
        {
          path: '/analyze5',
          component: () => import('../components/analyze/analyze5.vue'),
          meta: {
            title: '剩余定金统计'
          }
        },
        {
          path: '/analyze6',
          component: () => import('../components/analyze/analyze6.vue'),
          meta: {
            title: '卡价变动差异'
          }
        },
        {
          path: '/analyze7',
          component: () => import('../components/analyze/analyze7.vue'),
          meta: {
            title: '有效会员数统计'
          }
        },
        {
          path: '/analyze8',
          component: () => import('../components/analyze/analyze8.vue'),
          meta: {
            title: '市场渠道统计'
          }
        },

        // 参数设置
        {
          path: '/parameters',
          component: () => import('../components/parameters/parameters.vue'),
          meta: {
            title: '卡种设置'
          }
        },
        {
          path: '/parameters1',
          component: () => import('../components/parameters/parameters1.vue'),
          meta: {
            title: '卡种区域设置'
          }
        },
        {
          path: '/parameters2',
          component: () => import('../components/parameters/parameters2.vue'),
          meta: {
            title: '销售员设置'
          }
        },
        {
          path: '/parameters3',
          component: () => import('../components/parameters/parameters3.vue'),
          meta: {
            title: '租箱定义'
          }
        },
        {
          path: '/parameters4',
          component: () => import('../components/parameters/parameters4.vue'),
          meta: {
            title: '支付方式设置'
          }
        },
        {
          path: '/parameters5',
          component: () => import('../components/parameters/parameters5.vue'),
          meta: {
            title: '教练员设置'
          }
        },
        {
          path: '/parameters6',
          component: () => import('../components/parameters/parameters6.vue'),
          meta: {
            title: '私教及团操课程设置'
          }
        },
        {
          path: '/parameters7',
          component: () => import('../components/parameters/parameters7.vue'),
          meta: {
            title: '团操教室定义'
          }
        },
        {
          path: '/parameters8',
          component: () => import('../components/parameters/parameters8.vue'),
          meta: {
            title: '团操课表发布'
          }
        },
        {
          path: '/parameters9',
          component: () => import('../components/parameters/parameters9.vue'),
          meta: {
            title: '其他属性设置'
          }
        },
        {
          path: '/parameters10',
          component: () => import('../components/parameters/parameters10.vue'),
          meta: {
            title: '发送门店通知'
          }
        },
        {
          path: '/parameters11',
          component: () => import('../components/parameters/parameters11.vue'),
          meta: {
            title: '储值卡配卡'
          }
        },
        {
          path: '/parameters12',
          component: () => import('../components/parameters/parameters12.vue'),
          meta: {
            title: '储值卡挂失'
          }
        },
        {
          path: '/parameters13',
          component: () => import('../components/parameters/parameters13.vue'),
          meta: {
            title: '私教礼包设置'
          }
        },
        {
          path: '/parameters14',
          component: () => import('../components/parameters/parameters14.vue'),
          meta: {
            title: '会员礼包设置'
          }
        },
        {
          path: '/parameters15',
          component: () => import('../components/parameters/parameters15.vue'),
          meta: {
            title: '税号设置'
          }
        },
        {
          path: '/parameters16',
          component: () => import('../components/parameters/parameters16.vue'),
          meta: {
            title: '租箱价格设置'
          }
        },

        // 运营设置组件
        {
          path: '/operation',
          component: () => import('../components/operation/operation.vue'),
          meta: {
            title: '门店设置'
          }
        },
        {
          path: '/operation1',
          component: () => import('../components/operation/operation1.vue'),
          meta: {
            title: '门店级别设置'
          }
        },

        {
          path: '/operation2',
          component: () => import('../components/operation/operation2.vue'),
          meta: {
            title: '管理区域设置'
          }
        },

        {
          path: '/operation3',
          component: () => import('../components/operation/operation3.vue'),
          meta: {
            title: '其它参数设置'
          }
        },

        {
          path: '/operation4',
          component: () => import('../components/operation/operation4.vue'),
          meta: {
            title: '营销活动设置'
          }
        },

        {
          path: '/operation5',
          component: () => import('../components/operation/operation5.vue'),
          meta: {
            title: '配卡'
          }
        },

        {
          path: '/operation6',
          component: () => import('../components/operation/operation6.vue'),
          meta: {
            title: '短信发送流水查询'
          }
        },

        {
          path: '/operation7',
          component: () => import('../components/operation/operation7.vue'),
          meta: {
            title: '短信模板设置'
          }
        },

        {
          path: '/operation8',
          component: () => import('../components/operation/operation8.vue'),
          meta: {
            title: '菜单设置'
          }
        },

        {
          path: '/operation9',
          component: () => import('../components/operation/operation9.vue'),
          meta: {
            title: '系统日志'
          }
        },

        {
          path: '/operation10',
          component: () => import('../components/operation/operation10.vue'),
          meta: {
            title: 'DPR月度目标输入'
          }
        },

        {
          path: '/operation11',
          component: () => import('../components/operation/operation11.vue'),
          meta: {
            title: '营运日报门店设置'
          }
        },

        {
          path: '/operation12',
          component: () => import('../components/operation/operation12.vue'),
          meta: {
            title: '二维码生成'
          }
        },
        {
          path: '/operation13',
          component: () => import('../components/operation/operation13.vue'),
          meta: {
            title: '二维码明细查询'
          }
        },





















    // {
        //   path: '/icon',
        //   component: () => import('../components/page/Icon.vue'),
        //   meta: {
        //     title: '自定义图标'
        //   }
        // },
        // {
        //   path: '/table',
        //   component: () => import('../components/page/BaseTable.vue'),
        //   meta: {
        //     title: '基础表格'
        //   }
        // },
      
        // {
        //   path: '/form',
        //   component: () => import( /* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
        //   meta: {
        //     title: '基本表单'
        //   }
        // },




        // {
        //   // markdown组件
        //   path: '/markdown',
        //   component: () => import( /* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
        //   meta: {
        //     title: 'markdown编辑器'
        //   }
        // },
        // {
        //   // 图片上传组件
        //   path: '/upload',
        //   component: () => import( /* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
        //   meta: {
        //     title: '文件上传'
        //   }
        // },
        // {
        //   // vue-schart组件
        //   path: '/charts',
        //   component: () => import( /* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
        //   meta: {
        //     title: 'schart图表'
        //   }
        // },

        // 11111111111111
      


        // {
        //   // 国际化组件
        //   path: '/i18n',
        //   component: () => import( /* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
        //   meta: {
        //     title: '国际化'
        //   }
        // },
        // {
        //   // 权限页面
        //   path: '/permission',
        //   component: () => import( /* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
        //   meta: {
        //     title: '权限测试',
        //     permission: true
        //   }
        // },
        // {
        //   path: '/404',
        //   component: () => import( /* webpackChunkName: "404" */ '../components/page/404.vue'),
        //   meta: {
        //     title: '404'
        //   }
        // },
        // {
        //   path: '/403',
        //   component: () => import( /* webpackChunkName: "403" */ '../components/page/403.vue'),
        //   meta: {
        //     title: '403'
        //   }
        // },
        // {
        //   path: '/donate',
        //   component: () => import( /* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
        //   meta: {
        //     title: '支持作者'
        //   }
        // }
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