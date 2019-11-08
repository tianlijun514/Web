<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs" class="pages">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
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
            }
            ,
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
          icon: 'el-icon-lx-calendar',
          index: '3',
          title: '会籍',
          subs: [
            // {
            //     index: 'form',
            //     title: '基本表单'
            // },

            {
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
                }
                ,
                {
                  index: 'box1',
                  title: '定金销售流水查询'
                }
                ,
                {
                  index: 'box2',
                  title: '会员停转补流水查询'
                }
                ,
                {
                  index: 'box3',
                  title: '支付宝支付流水查询'
                }
                ,
                {
                  index: 'box4',
                  title: '会员出入场流水查询'
                }
                ,
                {
                  index: 'box5',
                  title: '会员制卡综合查询'
                }
                ,
                {
                  index: 'box6',
                  title: '合同可入场门店查询'
                }
                ,
                {
                  index: 'box7',
                  title: '次卡剩余次数查询'
                }
                ,
                {
                  index: 'box8',
                  title: '赠送储值卡查询'
                }
                ,
                {
                  index: 'box9',
                  title: '储值卡支付流水查询'
                }
                ,
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
                }
                ,
                {
                  index: 'index3',
                  title: '会籍停转补'
                }
                ,
                {
                  index: 'index4',
                  title: '会籍租箱办理'
                }
                ,
                {
                  index: 'index5',
                  title: '会籍合同打印'
                }
                ,
                {
                  index: 'index6',
                  title: '其他合同打印'
                }
                ,
                {
                  index: 'index7',
                  title: '新会员资料补充录入'
                }
                ,
                {
                  index: 'index8',
                  title: '会籍转让'
                }
                ,
                {
                  index: 'index9',
                  title: '合同异常处理'
                }
                ,
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
                }
                ,
                {
                  index: 'editor3',
                  title: '会员出入场'
                }
                ,
                {
                  index: 'editor4',
                  title: '访客录入'
                }
                ,
                {
                  index: 'editor5',
                  title: '会籍礼品领取'
                }
                ,
                {
                  index: 'editor6',
                  title: '合同内审处理'
                }
                ,
                {
                  index: 'editor7',
                  title: '合同签名确认'
                }
                ,
                {
                  index: 'editor8',
                  title: '合同签名上传测试'
                }
                ,
                {
                  index: 'editor9',
                  title: '黑名单设置'
                }
                ,
                {
                  index: 'editor10',
                  title: '非会员门店预约'
                }
                ,
                {
                  index: 'editor11',
                  title: '销售数据录入'
                }

              ]
            },
            // {
            //     index: 'upload',
            //     title: '文件上传'
            // }
          ]
        },

       {
          icon: 'el-icon-lx-calendar',
          index: '4',
          title: '私教',
          subs: [
            // {
            //     index: 'form',
            //     title: '基本表单'
            // },

            {
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
                }
                ,
                {
                  index: 'pact1',
                  title: '上课预约及取消预约'
                }
                ,
                {
                  index: 'pact2',
                  title: '上课核销'
                }
                ,
                {
                  index: 'pact3',
                  title: '会员更换教练'
                }
                ,
                {
                  index: 'pact4',
                  title: '私教转店处理'
                }
                ,
                {
                  index: 'pact5',
                  title: '私教转让处理'
                }
                ,
                {
                  index: 'pact6',
                  title: '团操预约和入场'
                }
                ,
                {
                  index: 'pact7',
                  title: '私教礼包销售'
                }
                ,
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
                }
                ,
                {
                  index: 'chat3',
                  title: '私教日程安排一览表'
                }
                ,
                {
                  index: 'chat4',
                  title: '私教合同打印'
                }
                ,
                {
                  index: 'chat5',
                  title: '1对多团操预约'
                }
                ,
                {
                  index: 'chat6',
                  title: '私教余课一览表'
                }
                ,
                {
                  index: 'chat7',
                  title: '私教课时剩余表'
                }
                ,
                {
                  index: 'chat8',
                  title: '小团操预约核销流水查询'
                }
                ,
                {
                  index: 'chat9',
                  title: '私教预约签名查询'
                }
              ]
            }
          ]
        },




        {
          icon: 'el-icon-lx-cascades',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-lx-copy',
          index: 'tabs',
          title: 'tab选项卡'
        },

        {
          icon: 'el-icon-lx-emoji',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'el-icon-pie-chart',
          index: 'charts',
          title: 'schart图表'
        },

        {
          icon: 'el-icon-lx-global',
          index: 'i18n',
          title: '国际化功能'
        },
        {
          icon: 'el-icon-lx-warn',
          index: '7',
          title: '错误处理',
          subs: [
            {
              index: 'permission',
              title: '权限测试'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        },
        {
          icon: 'el-icon-lx-redpacket_fill',
          index: '/donate',
          title: '支持作者'
        }
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

<style scoped>

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
</style>
