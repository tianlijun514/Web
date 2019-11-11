
<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu popper-class :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title" class='spanmun'>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs" class="pages">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index" class="mens">{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus';
export default {
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-lx-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-rank',
          index: '6',
          title: '常用功能',
          subs: [
            {
              index: 'drag',
              title: '会员信息综合查询'
            },
            {
              index: 'dialog',
              title: '会籍销售流水查询'
            },
            {
              index: 'sijiao',
              title: '私教销售流水查询'
            },
            {
              index: 'dingjin',
              title: '定金销售流水查询'
            },
            {
              index: 'huiyuan',
              title: '会员出入场'
            },
            {
              index: 'fangke',
              title: '访客录入'
            },
            {
              index: 'zhika',
              title: '会员制卡综合查询'
            },
            {
              index: 'shangping',
              title: '商品领用'
            },
            {
              index: 'zhifu',
              title: '支付流水查询'
            },
            {
              index: 'shenqing',
              title: '我的申请'
            }
          ]
        },
        {
          icon: 'el-icon-burger',
          index: '3',
          title: '会籍',
          subs: [
            {
                // icon: 'el-icon-burger',
              index: '3-2',
              title: '会籍查询',
              subs: [
                {
                  index: 'box',
                  title: '会员信息综合查询'
                },
                {
                  index: 'box0',
                  title: '会籍销售流水查询'
                },
                {
                  index: 'box1',
                  title: '定金销售流水查询'
                },
                {
                  index: 'box2',
                  title: '会员停转补流水查询'
                },
                {
                  index: 'box3',
                  title: '支付宝支付流水查询'
                },
                {
                  index: 'box4',
                  title: '会员出入场流水查询'
                },
                {
                  index: 'box5',
                  title: '会员制卡综合查询'
                },
                {
                  index: 'box6',
                  title: '合同可入场门店查询'
                },
                {
                  index: 'box7',
                  title: '次卡剩余次数查询'
                },
                {
                  index: 'box8',
                  title: '赠送储值卡查询'
                },
                {
                  index: 'box9',
                  title: '储值卡支付流水查询'
                },
                {
                  index: 'box11',
                  title: '储值卡查询'
                }
              ]
            },
            {
              index: '4-2',
              title: '会籍业务',
              subs: [
                {
                  index: 'index1',
                  title: '会籍定金销售'
                },
                {
                  index: 'index2',
                  title: '会籍销售'
                },
                {
                  index: 'index3',
                  title: '会籍停转补'
                },
                {
                  index: 'index4',
                  title: '会籍租箱办理'
                },
                {
                  index: 'index5',
                  title: '会籍合同打印'
                },
                {
                  index: 'index6',
                  title: '其他合同打印'
                },
                {
                  index: 'index7',
                  title: '新会员资料补充录入'
                },
                {
                  index: 'index8',
                  title: '会籍转让'
                },
                {
                  index: 'index9',
                  title: '合同异常处理'
                },
                {
                  index: 'index10',
                  title: '团卡销售'
                }
              ]
            },
            {
              index: '5-2',
              title: '会籍接待',
              subs: [
                {
                  index: 'editor1',
                  title: '门店会员卡打印任务'
                },
                {
                  index: 'editor2',
                  title: '会员领卡确认'
                },
                {
                  index: 'editor3',
                  title: '会员出入场'
                },
                {
                  index: 'editor4',
                  title: '访客录入'
                },
                {
                  index: 'editor5',
                  title: '会籍礼品领取'
                },
                {
                  index: 'editor6',
                  title: '合同内审处理'
                },
                {
                  index: 'editor7',
                  title: '合同签名确认'
                },
                {
                  index: 'editor8',
                  title: '合同签名上传测试'
                },
                {
                  index: 'editor9',
                  title: '黑名单设置'
                },
                {
                  index: 'editor10',
                  title: '非会员门店预约'
                },
                {
                  index: 'editor11',
                  title: '销售数据录入'
                }

              ]
            },
          ]
        },
        {
          icon: 'el-icon-s-custom',
          index: '4',
          title: '私教',
          subs: [
            {
              icon: 'el-icon-s-custom',
              index: '3-2',
              title: '私教业务',
              subs: [
                {
                  index: 'pact',
                  title: '私教合同办理'
                },
                {
                  index: 'pact0',
                  title: '私教定金销售'
                },
                {
                  index: 'pact1',
                  title: '上课预约及取消预约'
                },
                {
                  index: 'pact2',
                  title: '上课核销'
                },
                {
                  index: 'pact3',
                  title: '会员更换教练'
                },
                {
                  index: 'pact4',
                  title: '私教转店处理'
                },
                {
                  index: 'pact5',
                  title: '私教转让处理'
                },
                {
                  index: 'pact6',
                  title: '团操预约和入场'
                },
                {
                  index: 'pact7',
                  title: '私教礼包销售'
                },
                {
                  index: 'pact8',
                  title: '1对多上课预约'
                }

              ]
            },
            {
              index: '4-2',
              title: '私教查询',
              subs: [
                {
                  index: 'chat1',
                  title: '私教销售流水查询'
                },
                {
                  index: 'chat2',
                  title: '教预约核销流水查询'
                },
                {
                  index: 'chat3',
                  title: '私教日程安排一览表'
                },
                {
                  index: 'chat4',
                  title: '私教合同打印'
                },
                {
                  index: 'chat5',
                  title: '1对多团操预约'
                },
                {
                  index: 'chat6',
                  title: '私教余课一览表'
                },
                {
                  index: 'chat7',
                  title: '私教课时剩余表'
                },
                {
                  index: 'chat8',
                  title: '小团操预约核销流水查询'
                },
                {
                  index: 'chat9',
                  title: '私教预约签名查询'
                }
              ]
            }
          ]
        },
        {
          icon: 'el-icon-lx-calendar',
          index: '5',
          title: '商品管理',
          subs: [
            {
              index: '5-2',
              title: '总部管理',
              subs: [
                {
                  index: 'business',
                  title: '领用类型设置'
                },
                {
                  index: 'business1',
                  title: '商品分类设置'
                },
                {
                  index: 'business2',
                  title: '商品信息设置'
                },
                {
                  index: 'business3',
                  title: '供应商定义'
                },
                {
                  index: 'business4',
                  title: '合同定义'
                },
                {
                  index: 'business5',
                  title: '采购入库'
                },
                {
                  index: 'business6',
                  title: '采购退货'
                },
                {
                  index: 'business7',
                  title: '采购入库汇总'
                },
                {
                  index: 'business8',
                  title: '采购退货汇总'
                }
              ]
            },
            {
              index: '6-2',
              title: '进销存业务',
              subs: [
                {
                  index: 'regulate',
                  title: '配送商品出入库'
                },
                {
                  index: 'regulate1',
                  title: '配送商品出库汇总'
                },
                {
                  index: 'regulate2',
                  title: '商品盘点'
                },
                {
                  index: 'regulate3',
                  title: '商品报损溢'
                },
                {
                  index: 'regulate4',
                  title: '商品领用'
                },
                {
                  index: 'regulate5',
                  title: '库存余额一览表'
                },
                {
                  index: 'regulate6',
                  title: '商品进销存报表'
                },
                {
                  index: 'regulate7',
                  title: '商品销售'
                },
                {
                  index: 'regulate8',
                  title: '商品销售流水'
                },
                {
                  index: 'regulate9',
                  title: '商品报损溢流水'
                },
                {
                  index: 'regulate10',
                  title: '商品领用流水'
                },
                {
                  index: 'regulate11',
                  title: '库存历史查询'
                },
                {
                  index: 'regulate12',
                  title: '商品销售(调整)'
                }





              ]
            }
          ]
        },
        {
          icon: 'el-icon-lx-redpacket_fill',
          index: '11',
          title: '财务',
          subs: [
            {
              index: '11-1',
              title: '财务管理',
              subs: [
                {
                  index: 'finance',
                  title: 'TraCode设置'
                },
                {
                  index: 'finance1',
                  title: '支付流水查询'
                },
                {
                  index: 'finance2',
                  title: '每月摊销汇总'
                },
                {
                  index: 'finance3',
                  title: '定金销售流水详单查询'
                },
                {
                  index: 'finance4',
                  title: '支付流水备注修改'
                },
                {
                  index: 'finance5',
                  title: '电子发票管理'
                },
                {
                  index: 'finance6',
                  title: '预售设置'
                },
                {
                  index: 'finance7',
                  title: '预收款查询'
                }
              ]
            }
          ]
        },
        {
          icon: 'el-icon-turn-off-microphone',
          index: '12',
          title: '客诉',
          subs: [
            {
              index: '12-1',
              title: '客诉管理',
              subs: [
                {
                  index: 'customer',
                  title: '客诉录入'
                },
                {
                  index: 'customer1',
                  title: '客诉处理'
                },
                {
                  index: 'customer2',
                  title: '客诉综合查询'
                },
                {
                  index: 'customer3',
                  title: '在线客服处理'
                }
              ]
            }
          ]
        },
        {
          icon: 'el-icon-finished',
          index: '13',
          title: '审批',
          subs: [
            {
              index: '13-1',
              title: '审批流',
              subs: [
                {
                  index: 'approval',
                  title: '我的申请'
                },
                {
                  index: 'approval1',
                  title: '初审'
                },
                {
                  index: 'approval2',
                  title: '会籍复审'
                },
                {
                  index: 'approval3',
                  title: '私教复审'
                },
                {
                  index: 'approval4',
                  title: '定金复审'
                },
                {
                  index: 'approval5',
                  title: '终审'
                },
                {
                  index: 'approval6',
                  title: '新申请'
                },
                {
                  index: 'approval7',
                  title: '流程审批环节的定义'
                }
              ]
            }
          ]
        },
        {
          icon: 'el-icon-edit-outline',
          index: '14',
          title: '报表',
          subs: [
            {
              index: '14-1',
              title: '业务报表',
              subs: [
                {
                  index: 'bordereaux',
                  title: 'DPR日报表'
                },
                {
                  index: 'bordereaux1',
                  title: 'DPR月报表'
                },
                {
                  index: 'bordereaux2',
                  title: 'Cashier Report总表'
                },
                {
                  index: 'bordereaux3',
                  title: '报表一览下载'
                },
                {
                  index: 'bordereaux4',
                  title: '报表手动生成'
                },
                {
                  index: 'bordereaux5',
                  title: '销售报表'
                },
              ]
            },
            {
              index: '14-2',
              title: '分析报表',
              subs: [
                {
                  index: 'analyze',
                  title: '试算平衡表'
                },
                {
                  index: 'analyze1',
                  title: '剩余会籍分析'
                },
                {
                  index: 'analyze2',
                  title: '剩余PT分析'
                },
                {
                  index: 'analyze3',
                  title: '会籍销售排名'
                },
                {
                  index: 'analyze4',
                  title: '私教销售排名'
                },
                {
                  index: 'analyze5',
                  title: '剩余定金统计'
                },
                {
                  index: 'analyze6',
                  title: '卡价变动差异'
                },
                {
                  index: 'analyze7',
                  title: '有效会员数统计'
                },
                {
                  index: 'analyze8',
                  title: '市场渠道统计'
                },

              ]
            }
          ]
        },
        {
          icon: 'el-icon-setting',
          index: '15',
          title: '系统设置',
          subs: [
            {
              index: '15-1',
              title: '参数设置',
              subs: [
                {
                  index: 'parameters',
                  title: '卡种设置'
                },
                {
                  index: 'parameters1',
                  title: '卡种区域设置'
                },
                {
                  index: 'parameters2',
                  title: '销售员设置'
                },
                {
                  index: 'parameters3',
                  title: '租箱定义'
                },
                {
                  index: 'parameters4',
                  title: '支付方式设置'
                },
                {
                  index: 'parameters5',
                  title: '教练员设置'
                },
                 {
                  index: 'parameters6',
                  title: '私教及团操课程设置'
                },
                 {
                  index: 'parameters7',
                  title: '团操教室定义'
                },
                 {
                  index: 'parameters8',
                  title: '团操课表发布'
                },
                 {
                  index: 'parameters9',
                  title: '其他属性设置'
                },
                 {
                  index: 'parameters10',
                  title: '发送门店通知'
                },
                 {
                  index: 'parameters11',
                  title: '储值卡配卡'
                },
                 {
                  index: 'parameters12',
                  title: '储值卡挂失'
                },
                 {
                  index: 'parameters13',
                  title: '私教礼包设置'
                },
                 {
                  index: 'parameters14',
                  title: '会员礼包设置'
                },
                 {
                  index: 'parameters15',
                  title: '税号设置'
                },
                 {
                  index: 'parameters16',
                  title: '租箱价格设置'
                },
                
              ]
            },
            {
              index: '15-2',
              title: '运营设置',
              subs: [
                {
                  index: 'operation',
                  title: '门店设置'
                },
                {
                  index: 'operation1',
                  title: '门店级别设置'
                },
                {
                  index: 'operation2',
                  title: '管理区域设置'
                },
                {
                  index: 'operation3',
                  title: '其它参数设置'
                },
                {
                  index: 'operation4',
                  title: '营销活动设置'
                },
                {
                  index: 'operation5',
                  title: '配卡'
                },
                {
                  index: 'operation6',
                  title: '短信发送流水查询'
                },
                {
                  index: 'operation7',
                  title: '短信模板设置'
                },
                {
                  index: 'operation8',
                  title: '菜单设置'
                },
                 {
                  index: 'operation9',
                  title: '系统日志'
                },
                 {
                  index: 'operation10',
                  title: 'DPR月度目标输入'
                },
                 {
                  index: 'operation11',
                  title: '营运日报门店设置'
                },
                 {
                  index: 'operation12',
                  title: '二维码生成'
                },
                 {
                  index: 'operation13',
                  title: '二维码明细查询'
                },


              ]
            }
          ]
        },



        // {
        //   icon: 'el-icon-lx-cascades',
        //   index: 'table',
        //   title: '基础表格'
        // },
        // {
        //   icon: 'el-icon-lx-copy',
        //   index: 'tabs',
        //   title: 'tab选项卡'
        // },
        // {
        //   icon: 'el-icon-lx-emoji',
        //   index: 'icon',
        //   title: '自定义图标'
        // },
        // {
        //   icon: 'el-icon-pie-chart',
        //   index: 'charts',
        //   title: 'schart图表'
        // },
        // {
        //   icon: 'el-icon-lx-global',
        //   index: 'i18n',
        //   title: '国际化功能'
        // },
        // {
        //   icon: 'el-icon-lx-warn',
        //   index: '7',
        //   title: '错误处理',
        //   subs: [
        //     {
        //       index: 'permission',
        //       title: '权限测试'
        //     },
        //     {
        //       index: '404',
        //       title: '404页面'
        //     }
        //   ]
        // },
        // {
        //   icon: 'el-icon-lx-redpacket_fill',
        //   index: '/donate',
        //   title: '支持作者'
        // }
      ]
    };
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '');
    }
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
      bus.$emit('collapse-content', msg);
    });
  }
};
</script>

<style  scope>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}

.sidebar>ul{
     background: #333; 
}
.el-submenu>ul>li{
  color: #333 !important;
}
.el-submenu__title:hover {
    background-color: #606266!important;
}
.el-menu-item:hover{
  background-color: rgba(96, 98, 102, 0.65)!important;
}
.el-menu {
    background-color: #f0e9e5ef;
}
.el-button--primary {
    color: #FFF;
    background-color: #303133;
    border-color: #303133;
}
.el-button--primary:focus, .el-button--primary:hover{
    color: #FFF;
    background-color: rgba(96, 98, 102, 0.65)!important;
    border-color: rgba(96, 98, 102, 0.65) !important;
}
.el-menu-item.is-active {
        color: rgb(191, 203, 217)!important;
}
.el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: rgba(96, 98, 102, 0.65);
}
.el-submenu .el-menu-item {
    height: 45px;
    line-height: 45px;
    padding: 0 45px;
    min-width: 200px;
}

</style>
