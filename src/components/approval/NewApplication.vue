<!-- vue快捷创建组件 -->
<template>
  <div class='app'>

    <div class="heade">会籍</div>

    <div class="tite">
      <router-link to="./huibox" class="span">会员资料修改申请</router-link>
      <router-link to='./Maloft' class="span">次卡次数调整</router-link>
      <router-link to='./genggaiday' class="span">更改会籍开始和结束时间申请</router-link>
      <router-link to='./huijitype' class="span">更改会籍类型申请</router-link>
      <router-link to="./zengjiaday" class="span">更改加增日期申请</router-link>
      <router-link to='./xiugaitongdian' class="span">修改通店申请</router-link>
      <router-link to='./katingka' class="span">公司卡停卡申请</router-link>
      <router-link to='./huijihetongfukuang' class="span">更改会籍合同付款方式申请</router-link>
      <router-link to='./hetongbukuang' class="span">会籍合同补款申请</router-link>
      <router-link to="./Hetongxiaoshou1" class="span">更改会籍合同销售员1申请</router-link>
      <router-link to='./Huijixiaoshou2' class="span">更改会籍合同销售员2申请</router-link>
      <router-link to='./katingka' class="span">更改会员补卡付款方式申请</router-link>
      <router-link to='./huiyuanbukashenqing' class="span">更改会员停卡付款方式申请</router-link>
      <router-link to='./gengaihuijifukuang' class="span">更改会籍转让付款方式申请</router-link>
      <router-link to='./gengzuxiang' class="span">更改租箱付款方式申请</router-link>
      <router-link to="./huijizhuanbu" class="span">会籍停转补手续费申请</router-link>
      <router-link to='./hetongjiyong' class="span">更改会籍合同计佣日期申请</router-link>
      <router-link to='./gengheimingdan' class="span">更改黑名单申请</router-link>
      <router-link to='./zengchuzhika' class="span">赠送储值卡</router-link>
      <router-link to='./yuetiaozheng' class="span">储值卡余额调整</router-link>
      <router-link to='./chuzhikayanqi' class="span">储值卡延期</router-link>
      <router-link to="./tejiashenpi" class="span">租箱特价审批</router-link>
      <router-link to='./zulingday' class="span">租箱更改租赁日期申请</router-link>
      <router-link to='./zuxianghao' class="span">租箱更换箱号申请</router-link>
      <router-link to='./hetongtuikuang' class="span">会籍合同退款申请</router-link>
    </div>

    <div class="heade">私教</div>
    <div class="tite">
      <router-link to="./Hjtuikuansheng" class="span">私教延期申请</router-link>
      <router-link to='./sijiaotime' class="span">更改私教开始结束日期申请</router-link>
      <router-link to='./quxiaohexiao' class="span">取消核销申请</router-link>
      <router-link to='./sijiaokeshi' class="span">更改私教课时数申请</router-link>
      <router-link to='./pilianghexiao' class="span">批量核销课数申请</router-link>
      <router-link to='./Sijiaofukuan' class="span">更改私教合同付款方式申请</router-link>
      <router-link to="./sijiaohetong1" class="span">更改私教合同销售员1申请</router-link>
      <router-link to='./sijiaohetong2' class="span">更改私教合同销售员2申请</router-link>
      <router-link to='./sijiaojiyong' class="span">更改私教合同计佣日期申请</router-link>
      <router-link to='./sijiaoHbu' class="span">私教合同补款申请</router-link>
      <router-link to='./Sijiaotuikuang' class="span">私教合同退款申请</router-link>
    </div>
    <div class="heade">定金</div>
    <div class="tite">
      <router-link to='./Dingjinyanqin' class="span">定金延期申请</router-link>
      <router-link to='./DingHefukuang' class="span">更改定金合同付款方式申请</router-link>
      <router-link to='./Xiaoshangoing' class="span">更改小商品付款方式申请</router-link>
    </div>

    <div class="heade">APP</div>
    <div class="heade">营运</div>

  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'NewApp',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // anuyy(){
    //  this.$router.push('./huibox')
    // }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.app {
    width: 800px;
    background: white;
}
.span {
    font-size: 14px;
    width: 235px !important;
    height: 25px;
    line-height: 25px;
    color: #369;
}
.span:hover {
    color: red;
    cursor: pointer;
}
.heade {
    height: 35px;
    line-height: 35px;
    margin-left: 25px;
    font-size: 14px;
    color: #585858;
    font-family: '微软雅黑';
}
.tite {
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: 25px;
}
</style>
