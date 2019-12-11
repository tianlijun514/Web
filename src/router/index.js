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
            title: '会员管理'
          }
        },
        {
          path: '/tabs',
          component: () => import('../components/page/StoreNotice.vue'),
          meta: {
            title: '门店通知'
          }
        },
        {
          path: '/drag',
          component: () => import('../components/page/MemberCompreInquiry.vue'),
          meta: {
            title: '会员信息综合查询'
          }
        },

        // 内容跳转组件
        {
          path: '/hymesg',
          component: () => import('../components/huibox/MemberRnformation.vue'),
          meta: {
            title: '会员信息'
          }
        },
        {
          path: '/zuboss',
          component: () => import('../components/huiindex/RentAbox.vue'),
          meta: {
            title: '租箱租用'
          }
        },
        {
          path: '/box',
          component: () => import('../components/huibox/MemberInformationSynthesis.vue'),
          meta: {
            title: '会员信息综合查询'
          }
        },
        {
          path: '/box0',
          component: () => import('../components/huibox/MembershipSalesFlow.vue'),
          meta: {

            title: '会籍销售流水查询'
          }
        },
        {
          path: '/box1',
          component: () => import('../components/huibox/DepositSalesFlow.vue'),
          meta: {
            title: '定金销售流水查询'
          }
        },
        {
          path: '/box2',
          component: () => import('../components/huibox/MemberStopWater.vue'),
          meta: {
            title: '会员停转补流水查询'
          }
        },
        {
          path: '/box3',
          component: () => import('../components/huibox/AlipayPaymentFlow.vue'),
          meta: {
            title: '支付宝支付流水查询'
          }
        },
        {
          path: '/box4',
          component: () => import('../components/huibox/MembersEnterWater.vue'),
          meta: {
            title: '会员出入场流水查询'
          }
        },
        {
          path: '/box5',
          component: () => import('../components/huibox/MembershipCardSynthesis.vue'),
          meta: {
            title: '会员制卡综合查询'
          }
        },
        {
          path: '/box6',
          component: () => import('../components/huibox/ContractCanStore.vue'),
          meta: {
            title: '合同可入场门店查询'
          }
        },

        {
          path: '/box7',
          component: () => import('../components/huibox/SecondaryCardRemaining.vue'),
          meta: {
            title: '次卡剩余次数查询'
          }
        },
        {
          path: '/box8',
          component: () => import('../components/huibox/GiftCard.vue'),
          meta: {
            title: '赠送储值卡查询'
          }
        },
        {
          path: '/box9',
          component: () => import('../components/huibox/StoredCardPayment.vue'),
          meta: {
            title: '储值卡支付流水查询'
          }
        },
        {
          path: '/box11',
          component: () => import('../components/huibox/StoredCardInquiry.vue'),
          meta: {
            title: '储值卡查询'
          }
        },
        // 会籍业务
        {
          path: '/index1',
          component: () => import('../components/huiindex/MembershipDeposit.vue'),
          meta: {
            title: '会籍定金销售'
          }
        },
        {
          path: '/index2',
          component: () => import('../components/huiindex/MembershipContract.vue'),
          meta: {
            title: '会籍合同销售'
          }
        },
        {
          path: '/index3',
          component: () => import('../components/huiindex/MembershipStoppage.vue'),
          meta: {
            title: '会籍停转补'
          }
        },
        {
          path: '/index4',
          component: () => import('../components/huiindex/RentalManagement.vue'),
          meta: {
            title: '租箱管理'
          }
        },
        {
          path: '/index5',
          component: () => import('../components/huiindex/MembershipContractPrinting.vue'),
          meta: {
            title: '会籍合同打印'
          }
        },
        {
          path: '/index6',
          component: () => import('../components/huiindex/OtherContractPrinting.vue'),
          meta: {
            title: '其他合同打印'
          }
        },
        {
          path: '/index7',
          component: () => import('../components/huiindex/NewMemberProfile.vue'),
          meta: {
            title: '新会员资料补充录入'
          }
        },
        {
          path: '/index8',
          component: () => import('../components/huiindex/MembershipTransfer.vue'),
          meta: {
            title: '会籍转让'
          }
        },
        {
          path: '/index9',
          component: () => import('../components/huiindex/ContractExceptionHandling.vue'),
          meta: {
            title: '合同异常处理'
          }
        },
        {
          path: '/index10',
          component: () => import('../components/huiindex/GroupCardSales.vue'),
          meta: {
            title: '团卡销售'
          }
        },
        {
          path: '/editor1',
          component: () => import('../components/editor/StoreMembershipCard.vue'),
          meta: {
            title: '门店会员卡打印任务'
          }
        },
        {
          path: '/editor2',
          component: () => import('../components/editor/MemberCardConfirmation.vue'),
          meta: {
            title: '会员领卡确认'
          }
        },
        {
          path: '/editor3',
          component: () => import('../components/editor/MembershipExit.vue'),
          meta: {
            title: '会员出入场'
          }
        },
        {
          path: '/editor4',
          component: () => import('../components/editor/VisitorRecord.vue'),
          meta: {
            title: '访客记录'
          }
        },
        {
          path: '/fang',
          component: () => import('../components/editor/AddVisitors.vue'),
          meta: {
            title: '新增访客'
          }
        },
        {
          path: '/editor5',
          component: () => import('../components/editor/MembershipGiftCollection.vue'),
          meta: {
            title: '会籍礼品领取'
          }
        },
        {
          path: '/editor6',
          component: () => import('../components/editor/ContractInternalAudit.vue'),
          meta: {
            title: '合同内审处理'
          }
        },
        {
          path: '/editor7',
          component: () => import('../components/editor/ContractSignatureConfirmation.vue'),
          meta: {
            title: '合同签名确认'
          }
        },
        {
          path: '/editor8',
          component: () => import('../components/editor/ContractSignatureUpload .vue'),
          meta: {
            title: '合同签名上传测试'
          }
        },
        {
          path: '/editor9',
          component: () => import('../components/editor/BlacklistSetting.vue'),
          meta: {
            title: '黑名单设置'
          }
        },
        {
          path: '/ming',
          component: () => import('../components/editor/AddBlacklist.vue'),
          meta: {
            title: '新增黑名单'
          }
        },
        {
          path: '/editor10',
          component: () => import('../components/editor/NonMemberStore.vue'),
          meta: {
            title: '非会员门店预约'
          }
        },
        {
          path: '/editor11',
          component: () => import('../components/editor/SalesDataEntry.vue'),
          meta: {
            title: '销售数据录入'
          }
        },
        {
          path: '/pact',
          component: () => import('../components/pact/PrivateEducationContract.vue'),
          meta: {
            title: '私教合同办理'
          }
        },
        {
          path: '/pact0',
          component: () => import('../components/pact/PrivateEducationDeposit.vue'),
          meta: {
            title: '私教定金销售'
          }
        },
        {
          path: '/pact1',
          component: () => import('../components/pact/ClassAppointmentCancellation.vue'),
          meta: {
            title: '上课预约及取消预约'
          }
        },
        {
          path: '/pact2',
          component: () => import('../components/pact/PersonalEducation.vue'),
          meta: {
            title: '私教核销'
          }
        },
        {
          path: '/pact3',
          component: () => import('../components/pact/MemberChangeCoach.vue'),
          meta: {
            title: '会员更换教练'
          }
        },
        {
          path: '/drillen',
          component: () => import('../components/pact/PrivateOfCoach.vue'),
          meta: {
            title: '私教换教练'
          }
        },


        {
          path: '/pact4',
          component: () => import('../components/pact/PrivateEducationShop.vue'),
          meta: {
            title: '私教转店'
          }
        },
        {
          path: '/pact5',
          component: () => import('../components/pact/Private educationProcessing.vue'),
          meta: {
            title: '私教转让处理'
          }
        },
        {
          path: '/pact6',
          component: () => import('../components/pact/GroupAppointmentAdmission.vue'),
          meta: {
            title: '团操预约和入场'
          }
        },
        {
          path: '/onetable',
          component: () => import('../components/pact/GroupAppointment.vue'),
          meta: {
            title: '团操预约'
          }
        },

        {
          path: '/pact7',
          component: () => import('../components/pact/PrivateEducationSales.vue'),
          meta: {
            title: '私教礼包销售'
          }
        },
        {
          path: '/pact8',
          component: () => import('../components/pact/moreClassAppointment.vue'),
          meta: {
            title: '1对多上课预约'
          }
        },
// 私教查询
        {
          path: '/chat1',
          component: () => import('../components/chat/PersonalEducationSalesFlow.vue'),
          meta: {
            title: '私教销售流水查询'
          }
        },
        {
          path: '/chat2',
          component: () => import('../components/chat/TeachingAppointments.vue'),
          meta: {
            title: '教预约核销流水查询'
          }
        },
        {
          path: '/chat3',
          component: () => import('../components/chat/PersonalEducationSchedule.vue'),
          meta: {
            title: '私教日程安排一览表'
          }
        },
        {
          path: '/chat4',
          component: () => import('../components/chat/PrivateEducationContract.vue'),
          meta: {
            title: '私教合同打印'
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
          path: '/chat6',
          component: () => import('../components/chat/PrivateEducationLesson.vue'),
          meta: {
            title: '私教余课一览表'
          }
        },
        {
          path: '/chat7',
          component: () => import('../components/chat/PrivateEducationLessoner.vue'),
          meta: {
            title: '私教课时剩余表'
          }
        },
        {
          path: '/chat8',
          component: () => import('../components/chat/GroupExerciseAppointment.vue'),
          meta: {
            title: '小团操预约核销流水查询'
          }
        },
        {
          path: '/chat9',
          component: () => import('../components/chat/PrivateEducationSignature.vue'),
          meta: {
            title: '私教预约签名查询'
          }
        },


        // 总部管理组件
        {
          path: '/business',
          component: () => import('../components/business/RetrievalTypeSetting.vue'),
          meta: {
            title: '领用类型设置'
          }
        },
        {
          path: '/business1',
          component: () => import('../components/business/ProductClassificationSetting.vue'),
          meta: {
            title: '商品分类设置'
          }
        },
        {
          path: '/business2',
          component: () => import('../components/business/ProductInformationSettings.vue'),
          meta: {
            title: '商品信息设置'
          }
        },
        {
          path: '/business3',
          component: () => import('../components/business/VendorDefinition.vue'),
          meta: {
            title: '供应商定义'
          }
        },
        {
          path: '/business4',
          component: () => import('../components/business/ContractDefinition.vue'),
          meta: {
            title: '合同定义'
          }
        },
        {
          path: '/business5',
          component: () => import('../components/business/PurchaseWarehousing.vue'),
          meta: {
            title: '采购入库'
          }
        },
        {
          path: '/business6',
          component: () => import('../components/business/PurchaseReturns.vue'),
          meta: {
            title: '采购退货'
          }
        },
        {
          path: '/business7',
          component: () => import('../components/business/PurchaseWarehousingSummary.vue'),
          meta: {
            title: '采购入库汇总'
          }
        },
        {
          path: '/business8',
          component: () => import('../components/business/PurchaseReturnSummary.vue'),
          meta: {
            title: '采购退货汇总'
          }
        },

        // 进销存业务组件
        {
          path: '/regulate',
          component: () => import('../components/regulate/DeliveryMerchandise.vue'),
          meta: {
            title: '配送商品出入库'
          }
        },
        {
          path: '/regulate1',
          component: () => import('../components/regulate/DeliveryProductSummary.vue'),
          meta: {
            title: '配送商品出库汇总'
          }
        },
        {
          path: '/regulate2',
          component: () => import('../components/regulate/ProductInventory.vue'),
          meta: {
            title: '商品盘点'
          }
        },
        {
          path: '/regulate3',
          component: () => import('../components/regulate/CommodityReportDamage.vue'),
          meta: {
            title: '商品报损溢'
          }
        },
        {
          path: '/regulate4',
          component: () => import('../components/regulate/CommodityUse.vue'),
          meta: {
            title: '商品领用'
          }
        },
        {
          path: '/regulate5',
          component: () => import('../components/regulate/InventoryBalanceList.vue'),
          meta: {
            title: '库存余额一览表'
          }
        },
        {
          path: '/regulate6',
          component: () => import('../components/regulate/CommodityInvoicingReport.vue'),
          meta: {
            title: '商品进销存报表'
          }
        },
        {
          path: '/regulate7',
          component: () => import('../components/regulate/Merchandising.vue'),
          meta: {
            title: '商品销售'
          }
        },
        {
          path: '/regulate8',
          component: () => import('../components/regulate/CommoditySalesFlow.vue'),
          meta: {
            title: '商品销售流水'
          }
        },
        {
          path: '/regulate9',
          component: () => import('../components/regulate/CommodityReportOverflow.vue'),
          meta: {
            title: '商品报损溢流水'
          }
        },
        {
          path: '/regulate10',
          component: () => import('../components/regulate/CommercialRunningWater.vue'),
          meta: {
            title: '商品领用流水'
          }
        },
        {
          path: '/regulate11',
          component: () => import('../components/regulate/InventoryHistoryQuery.vue'),
          meta: {
            title: '库存历史查询'
          }
        },
        {
          path: '/regulate12',
          component: () => import('../components/regulate/MerchandiseAdjustment.vue'),
          meta: {
            title: '商品销售(调整)'
          }
        },

        // 财务管理组件
        // {
        //   path: '/finance',
        //   component: () => import('../components/finance/TraCodeSetting.vue'),
        //   meta: {
        //     title: 'TraCode设置'
        //   }
        // },
        {
          path: '/finance1',
          component: () => import('../components/finance/PaymentFlowQuery.vue'),
          meta: {
            title: '支付流水查询'
          }
        },
        // {
        //   path: '/finance2',
        //   component: () => import('../components/finance/MonthlyAmortizationSummary.vue'),
        //   meta: {
        //     title: '每月摊销汇总'
        //   }
        // },
        // {
        //   path: '/finance3',
        //   component: () => import('../components/finance/DepositSalesFlow.vue'),
        //   meta: {
        //     title: '定金销售流水详单查询'
        //   }
        // },
        {
          path: '/finance4',
          component: () => import('../components/finance/PaymentFlowNote.vue'),
          meta: {
            title: '支付流水备注修改'
          }
        },
        // {
        //   path: '/finance5',
        //   component: () => import('../components/finance/ElectronicInvoiceManagement.vue'),
        //   meta: {
        //     title: '电子发票管理'
        //   }
        // },
        // {
        //   path: '/finance6',
        //   component: () => import('../components/finance/PresaleSetting.vue'),
        //   meta: {
        //     title: '预售设置'
        //   }
        // },
        // {
        //   path: '/finance7',
        //   component: () => import('../components/finance/AdvanceReceiptInquiry.vue'),
        //   meta: {
        //     title: '预收款查询'
        //   }
        // },

        // 客损管理组件
        // {
        //   path: '/customer',
        //   component: () => import('../components/customer/GuestComplaintEntry.vue'),
        //   meta: {
        //     title: '客诉录入'
        //   }
        // },
        // {
        //   path: '/customer1',
        //   component: () => import('../components/customer/CustomerComplaintHandling.vue'),
        //   meta: {
        //     title: '客诉处理'
        //   }
        // },
        // {
        //   path: '/customer2',
        //   component: () => import('../components/customer/CustomerComplaintComprehensive.vue'),
        //   meta: {
        //     title: '客诉综合查询'
        //   }
        // },
        // {
        //   path: '/customer3',
        //   component: () => import('../components/customer/OnlineCustomerService.vue'),
        //   meta: {
        //     title: '在线客服处理'
        //   }
        // },
        // 审批流组件
        {
          path: '/approval',
          component: () => import('../components/approval/MyApplication.vue'),
          meta: {
            title: '我的申请'
          }
        },
        {
          path: '/approval1',
          component: () => import('../components/approval/FirstTrial.vue'),
          meta: {
            title: '初审'
          }
        },
        {
          path: '/approval2',
          component: () => import('../components/approval/MembershipReview.vue'),
          meta: {
            title: '会籍复审'
          }
        },
        {
          path: '/approval3',
          component: () => import('../components/approval/PrivateEducationReview.vue'),
          meta: {
            title: '私教复审'
          }
        },
        {
          path: '/approval4',
          component: () => import('../components/approval/DepositReview.vue'),
          meta: {
            title: '定金复审'
          }
        },
        {
          path: '/approval5',
          component: () => import('../components/approval/FinalReview.vue'),
          meta: {
            title: '终审'
          }
        },
        {
          path: '/newApplication',
          component: () => import('../components/approval/newApplication.vue'),
          meta: {
            title: '新申请'
          }
        },
        {
          path: '/dingjinyq',
          component: () => import('../components/approval/dingjinyq.vue'),
          meta: {
            title: '定金延期申请'
          }
        },
        {
          path: '/approval7',
          component: () => import('../components/approval/ProcessApprovalDefinition.vue'),
          meta: {
            title: '流程审批环节的定义'
          }
        },

        // 新申请的页面跳转
        {
          path: '/huibox',
          component: () => import('../components/approval/huibox.vue'),
          meta: {
            title: '会员资料修改申请'
          }
        },
        {
          path: '/Maloft',
          component: () => import('../components/approval/Maloft.vue'),
          meta: {
            title: '次卡次数调整'
          }
        },
        {
          path: '/genggaiday',
          component: () => import('../components/approval/genggaiday.vue'),
          meta: {
            title: '更改会籍开始和结束时间申请'
          }
        },
        {
          path: '/huijitype',
          component: () => import('../components/approval/huijitype.vue'),
          meta: {
            title: '更改会籍类型申请'
          }
        },
        {
          path: '/zengjiaday',
          component: () => import('../components/approval/zengjiaday.vue'),
          meta: {
            title: '更改加增日期申请'
          }
        },
        {
          path: '/xiugaitongdian',
          component: () => import('../components/approval/xiugaitongdian.vue'),
          meta: {
            title: '修改通店申请'
          }
        },
        {
          path: '/katingka',
          component: () => import('../components/approval/katingka.vue'),
          meta: {
            title: '公司卡停卡申请'
          }
        },
        {
          path: '/huijihetongfukuang',
          component: () => import('../components/approval/huijihetongfukuang.vue'),
          meta: {
            title: '更改会籍合同付款方式申请'
          }
        },
        {
          path: '/hetongbukuang',
          component: () => import('../components/approval/hetongbukuang.vue'),
          meta: {
            title: '会籍合同补款申请'
          }
        },
        {
          path: '/Hetongxiaoshou1',
          component: () => import('../components/approval/Hetongxiaoshou1.vue'),
          meta: {
            title: '更改会籍合同销售员1申请'
          }
        },
        {
          path: '/Huijixiaoshou2',
          component: () => import('../components/approval/Huijixiaoshou2.vue'),
          meta: {
            title: '更改会籍合同销售员2申请'
          }
        },
        {
          path: '/huiyuanbukashenqing',
          component: () => import('../components/approval/huiyuanbukashenqing.vue'),
          meta: {
            title: '更改会员补卡付款方式申请'
          }
        },
        {
          path: '/tingkabukuanbox',
          component: () => import('../components/approval/tingkabukuanbox.vue'),
          meta: {
            title: '更改会员停卡付款方式申请'
          }
        },
        {
          path: '/gengaihuijifukuang',
          component: () => import('../components/approval/gengaihuijifukuang.vue'),
          meta: {
            title: '更改会籍转让付款方式申请'
          }
        },
        {
          path: '/gengzuxiang',
          component: () => import('../components/approval/gengzuxiang.vue'),
          meta: {
            title: '更改租箱付款方式申请'
          }
        },
        {
          path: '/huijizhuanbu',
          component: () => import('../components/approval/huijizhuanbu.vue'),
          meta: {
            title: '会籍停转补手续费申请'
          }
        },
        {
          path: '/hetongjiyong',
          component: () => import('../components/approval/hetongjiyong.vue'),
          meta: {
            title: '更改会籍合同计佣日期申请'
          }
        },
        {
          path: '/gengheimingdan',
          component: () => import('../components/approval/gengheimingdan.vue'),
          meta: {
            title: '更改黑名单申请'
          }
        },
        {
          path: '/zengchuzhika',
          component: () => import('../components/approval/zengchuzhika.vue'),
          meta: {
            title: '赠送储值卡'
          }
        },
        {
          path: '/yuetiaozheng',
          component: () => import('../components/approval/yuetiaozheng.vue'),
          meta: {
            title: '储值卡余额调整'
          }
        },
        {
          path: '/chuzhikayanqi',
          component: () => import('../components/approval/chuzhikayanqi.vue'),
          meta: {
            title: '储值卡延期'
          }
        },
        {
          path: '/tejiashenpi',
          component: () => import('../components/approval/tejiashenpi.vue'),
          meta: {
            title: '租箱特价审批'
          }
        },
        {
          path: '/zulingday',
          component: () => import('../components/approval/zulingday.vue'),
          meta: {
            title: '租箱更改租赁日期申请'
          }
        },
        {
          path: '/zuxianghao',
          component: () => import('../components/approval/zuxianghao.vue'),
          meta: {
            title: '租箱更换箱号申请'
          }
        },
        {
          path: '/hetongtuikuang',
          component: () => import('../components/approval/hetongtuikuang.vue'),
          meta: {
            title: '会籍合同退款申请'
          }
        },
        {
          path: '/Hjtuikuansheng',
          component: () => import('../components/approval/Hjtuikuansheng.vue'),
          meta: {
            title: '私教延期申请'
          }
        },
        {
          path: '/sijiaotime',
          component: () => import('../components/approval/sijiaotime.vue'),
          meta: {
            title: '更改私教开始结束日期申请'
          }
        },
        {
          path: '/quxiaohexiao',
          component: () => import('../components/approval/quxiaohexiao.vue'),
          meta: {
            title: '取消核销申请'
          }
        },
        {
          path: '/sijiaokeshi',
          component: () => import('../components/approval/sijiaokeshi.vue'),
          meta: {
            title: '更改私教课时数申请'
          }
        },
        {
          path: '/pilianghexiao',
          component: () => import('../components/approval/pilianghexiao.vue'),
          meta: {
            title: '批量核销课数申请'
          }
        },
        {
          path: '/Sijiaofukuan',
          component: () => import('../components/approval/Sijiaofukuan.vue'),
          meta: {
            title: '更改私教合同付款方式申请'
          }
        },
        {
          path: '/sijiaohetong1',
          component: () => import('../components/approval/sijiaohetong1.vue'),
          meta: {
            title: '更改私教合同销售员1申请'
          }
        },
        {
          path: '/sijiaohetong2',
          component: () => import('../components/approval/sijiaohetong2.vue'),
          meta: {
            title: '更改私教合同销售员2申请'
          }
        },
        {
          path: '/sijiaojiyong',
          component: () => import('../components/approval/sijiaojiyong.vue'),
          meta: {
            title: '更改私教合同计佣日期申请'
          }
        },
        {
          path: '/sijiaoHbu',
          component: () => import('../components/approval/sijiaoHbu.vue'),
          meta: {
            title: '私教合同补款申请'
          }
        },
        {
          path: '/Sijiaotuikuang',
          component: () => import('../components/approval/Sijiaotuikuang.vue'),
          meta: {
            title: '私教合同退款申请'
          }
        },
        {
          path: '/Dingjinyanqin',
          component: () => import('../components/approval/Dingjinyanqin.vue'),
          meta: {
            title: '定金延期申请'
          }
        },
        {
          path: '/DingHefukuang',
          component: () => import('../components/approval/DingHefukuang.vue'),
          meta: {
            title: '更改定金合同付款方式申请'
          }
        },
        {
          path: '/Xiaoshangoing',
          component: () => import('../components/approval/Xiaoshangoing.vue'),
          meta: {
            title: '更改小商品付款方式申请'
          }
        },

        // 业务报表组件

        {
          path: '/bordereaux',
          component: () => import('../components/bordereaux/DprDailyReport.vue'),
          meta: {
            title: 'DPR日报表'
          }
        },
        {
          path: '/bordereaux1',
          component: () => import('../components/bordereaux/DprMonthlyReport.vue'),
          meta: {
            title: 'DPR月报表'
          }
        },
        {
          path: '/bordereaux2',
          component: () => import('../components/bordereaux/ReportSummary.vue'),
          meta: {
            title: 'Cashier Report总表'
          }
        },
        {
          path: '/bordereaux3',
          component: () => import('../components/bordereaux/ReportListDownload.vue'),
          meta: {
            title: '报表一览下载'
          }
        },
        {
          path: '/bordereaux4',
          component: () => import('../components/bordereaux/ManualReporGeneration.vue'),
          meta: {
            title: '报表手动生成'
          }
        },
        {
          path: '/bordereaux5',
          component: () => import('../components/bordereaux/SalesReport.vue'),
          meta: {
            title: '销售报表'
          }
        },


        // 分析报表组件
        {
          path: '/analyze',
          component: () => import('../components/analyze/TrialBalance.vue'),
          meta: {
            title: '试算平衡表'
          }
        },
        {
          path: '/analyze1',
          component: () => import('../components/analyze/RemainingMembershipAnalysis.vue'),
          meta: {
            title: '剩余会籍分析'
          }
        },
        {
          path: '/analyze2',
          component: () => import('../components/analyze/ResidualPTAnalysis.vue'),
          meta: {
            title: '剩余PT分析'
          }
        },
        {
          path: '/analyze3',
          component: () => import('../components/analyze/MembershipSalesRanking.vue'),
          meta: {
            title: '会籍销售排名'
          }
        },
        {
          path: '/analyze4',
          component: () => import('../components/analyze/PersonalEducationRanking.vue'),
          meta: {
            title: '私教销售排名'
          }
        },
        {
          path: '/analyze5',
          component: () => import('../components/analyze/RemainingDepositStatistics.vue'),
          meta: {
            title: '剩余定金统计'
          }
        },
        {
          path: '/analyze6',
          component: () => import('../components/analyze/CardChangeDifference.vue'),
          meta: {
            title: '卡价变动差异'
          }
        },
        {
          path: '/analyze7',
          component: () => import('../components/analyze/EffectiveMembershipStatistics.vue'),
          meta: {
            title: '有效会员数统计'
          }
        },
        {
          path: '/analyze8',
          component: () => import('../components/analyze/MarketChannelStatistics.vue'),
          meta: {
            title: '市场渠道统计'
          }
        },

        // 参数设置
        {
          path: '/parameters',
          component: () => import('../components/parameters/CardTypeSetting.vue'),
          meta: {
            title: '卡种设置'
          }
        },
        {
          path: '/parameters1',
          component: () => import('../components/parameters/CardAreaSetting.vue'),
          meta: {
            title: '卡种区域设置'
          }
        },
        {
          path: '/parameters2',
          component: () => import('../components/parameters/SalespersonSetting.vue'),
          meta: {
            title: '销售员设置'
          }
        },
        {
          path: '/parameters3',
          component: () => import('../components/parameters/RentDefinition.vue'),
          meta: {
            title: '租箱定义'
          }
        },
        {
          path: '/parameters4',
          component: () => import('../components/parameters/PaymentMethodSetting.vue'),
          meta: {
            title: '支付方式设置'
          }
        },
        {
          path: '/parameters5',
          component: () => import('../components/parameters/CoachSetting.vue'),
          meta: {
            title: '教练员设置'
          }
        },
        
        {
          path: '/parameters6',
          component: () => import('../components/parameters/PersonalGroupExercises.vue'),
          meta: {
            title: '私教及团操课程设置'
          }
        },
        {
          path: '/parameters7',
          component: () => import('../components/parameters/GroupClassroomDefinition.vue'),
          meta: {
            title: '团操教室定义'
          }
        },
        {
          path: '/parameters8',
          component: () => import('../components/parameters/GroupCcheduleReleased.vue'),
          meta: {
            title: '团操课表发布'
          }
        },
        {
          path: '/parameters9',
          component: () => import('../components/parameters/OtherPropertySettings.vue'),
          meta: {
            title: '其他属性设置'
          }
        },
        {
          path: '/parameters10',
          component: () => import('../components/parameters/SendStoreNotification.vue'),
          meta: {
            title: '发送门店通知'
          }
        },
        {
          path: '/parameters11',
          component: () => import('../components/parameters/StoredValueCard.vue'),
          meta: {
            title: '储值卡配卡'
          }
        },
        {
          path: '/parameters12',
          component: () => import('../components/parameters/StoredCardLost.vue'),
          meta: {
            title: '储值卡挂失'
          }
        },
        {
          path: '/parameters13',
          component: () => import('../components/parameters/PrivateEducationPackage.vue'),
          meta: {
            title: '私教礼包设置'
          }
        },
        {
          path: '/parameters14',
          component: () => import('../components/parameters/MemberPackageSettings.vue'),
          meta: {
            title: '会员礼包设置'
          }
        },
        {
          path: '/parameters15',
          component: () => import('../components/parameters/TaxNumberSetting.vue'),
          meta: {
            title: '税号设置'
          }
        },
        {
          path: '/parameters16',
          component: () => import('../components/parameters/RentalPriceSetting.vue'),
          meta: {
            title: '租箱价格设置'
          }
        },
        {
          path: '/parameters17',
          component: () => import('../components/parameters/addCoach.vue'),
          meta: {
            title: '新增教练员'
          }
        },
        {
          path: '/parameters18',
          component: () => import('../components/parameters/addCourse.vue'),
          meta: {
            title: '新增私教课程'
          }
        },
        {
          path: '/parameters19',
          component: () => import('../components/parameters/addClassroom.vue'),
          meta: {
            title: '新增教室'
          }
        },
        {
          path: '/parameters20',
          component: () => import('../components/parameters/addAttribute.vue'),
          meta: {
            title: '新增属性'
          }
        },
        {
          path: '/parameters21',
          component: () => import('../components/parameters/addStoreInform.vue'),
          meta: {
            title: '新增门店通知'
          }
        },
        {
          path: '/parameters22',
          component: () => import('../components/parameters/addLoss.vue'),
          meta: {
            title: '新增挂失'
          }
        },
        {
          path: '/parameters23',
          component: () => import('../components/parameters/addCoachPackage.vue'),
          meta: {
            title: '新增私教礼包'
          }
        },
        {
          path: '/parameters24',
          component: () => import('../components/parameters/addMembersGift.vue'),
          meta: {
            title: '新增会员礼包'
          }
        },
        {
          path: '/parameters25',
          component: () => import('../components/parameters/addCard.vue'),
          meta: {
            title: '新增卡种'
          }
        },

        // 运营设置组件
        {
          path: '/quxianzushezhi',
          component: () => import('../components/operation/quxianzushezhi.vue'),
          meta: {
            title: '用户权限组设置'
          }
        },
        {
          path: '/yonghuguanli',
          component: () => import('../components/operation/yonghuguanli.vue'),
          meta: {
            title: '用户管理'
          }
        },
        {
          path: '/operation',
          component: () => import('../components/operation/StoreSetting.vue'),
          meta: {
            title: '门店设置'
          }
        },
        {
          path: '/operation1',
          component: () => import('../components/operation/StoreLevelSetting.vue'),
          meta: {
            title: '门店级别设置'
          }
        },

        {
          path: '/operation2',
          component: () => import('../components/operation/ManagementZoneSettings.vue'),
          meta: {
            title: '管理区域设置'
          }
        },

        {
          path: '/operation3',
          component: () => import('../components/operation/OtherParameterSettings.vue'),
          meta: {
            title: '其它参数设置'
          }
        },

        {
          path: '/operation4',
          component: () => import('../components/operation/CampaignSettings.vue'),
          meta: {
            title: '营销活动设置'
          }
        },

        {
          path: '/operation5',
          component: () => import('../components/operation/MatchCard.vue'),
          meta: {
            title: '配卡'
          }
        },

        {
          path: '/operation6',
          component: () => import('../components/operation/SmsSendingStream.vue'),
          meta: {
            title: '短信发送流水查询'
          }
        },

        {
          path: '/operation7',
          component: () => import('../components/operation/SmsTemplateSettings.vue'),
          meta: {
            title: '短信模板设置'
          }
        },

        {
          path: '/operation8',
          component: () => import('../components/operation/MenuSettings.vue'),
          meta: {
            title: '菜单设置'
          }
        },

        {
          path: '/operation9',
          component: () => import('../components/operation/SystemLog.vue'),
          meta: {
            title: '系统日志'
          }
        },

        {
          path: '/operation10',
          component: () => import('../components/operation/DprMonthlyTarget.vue'),
          meta: {
            title: 'DPR月度目标输入'
          }
        },

        {
          path: '/operation11',
          component: () => import('../components/operation/OperationNewspaperSetting.vue'),
          meta: {
            title: '营运日报门店设置'
          }
        },

        {
          path: '/operation12',
          component: () => import('../components/operation/QrCodeGeneration.vue'),
          meta: {
            title: '二维码生成'
          }
        },
        {
          path: '/operation13',
          component: () => import('../components/operation/QrCodeDetail.vue'),
          meta: {
            title: '二维码明细查询'
          }
        },
        {
          path: '/operation14',
          component: () => import('../components/operation/addStore.vue'),
          meta: {
            title: '新增门店级别'
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