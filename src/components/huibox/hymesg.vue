<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-tabs type="border-card">
      <el-tab-pane label="个人资料">
        <el-row type="flex" class="row-bg" ustify="center">
          <el-col :span="1"></el-col>
          <el-col :span="5">
            <el-form label-width="105px">
              <el-form-item label="会员编号 :"><span class="p1">123123123123</span></el-form-item>
              <el-form-item label="会员卡号 :"><span class="p1">123123123123 </span></el-form-item>
              <el-form-item label="中文姓名 :"><span class="p1">小小小</span></el-form-item>
              <el-form-item label="证件类型 :"><span class="p1">身份证</span></el-form-item>
              <el-form-item label="出生日期 :"><span class="p1">1995-05-25</span></el-form-item>
              <el-form-item label="手机 :"><span class="p1">12515214251</span></el-form-item>
              <el-form-item label="电子邮件 :"><span class="p1">988152002@qq.com</span></el-form-item>
              <el-form-item label="备注 :"><span class="p1">哈哈哈哈哈</span></el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6">
            <el-form label-width="105px">
              <el-form-item label="."><span class="p1"></span></el-form-item>
              <el-form-item label="通讯地址 :"><span class="p1">剑南大道中段1537号</span></el-form-item>
              <el-form-item label="英文姓名 :"><span class="p1">mededes</span></el-form-item>
              <el-form-item label="证件号码 :"><span class="p1">25154259874815265</span></el-form-item>
              <el-form-item label="性别 :"><span class="p1">男 </span></el-form-item>
              <el-form-item label="联系电话 :"><span class="p1">02-8585855</span></el-form-item>
              <el-form-item label="国籍 :"><span class="p1">中国</span></el-form-item>
              <el-form-item label="	K-Yoga卡号 :"><span class="p1">1010101010</span> </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="4">
            <div class="demo-fit">
              <div class="block">
                <el-avatar shape="square" :size="100" :src="url"></el-avatar>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-button size="mini" type="primary" class="gbtn">挂失储值卡</el-button>
      </el-tab-pane>

      <!-- 配置管理 -->
      <el-tab-pane label="会籍合同">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="序号" width="50"></el-table-column>
          <el-table-column prop="name" label="合同号" width="120"></el-table-column>
          <el-table-column prop="province" label="卡号" width="120"></el-table-column>
          <el-table-column prop="city" label="会籍类型" width="240"></el-table-column>
          <el-table-column prop="address" label="指导价" width="120"></el-table-column>
          <el-table-column prop="zip" label="实际售价" width="80"></el-table-column>
          <el-table-column prop="money" label="付款金额" width="80"></el-table-column>
          <el-table-column prop="ding" label="定金金额" width="80"></el-table-column>
          <el-table-column prop="zhuan" label="转入金额" width="80"></el-table-column>
          <el-table-column prop="zong" label="总次数" width="70"></el-table-column>
          <el-table-column prop="sheng" label="剩余次数" width="80"></el-table-column>
          <el-table-column prop="jia" label="剩余价值" width="80"></el-table-column>
          <el-table-column prop="xiaobox" label="销售类别" width="80"></el-table-column>
          <el-table-column prop="hui" label="会籍起日" width="120"></el-table-column>
          <el-table-column prop="zhi" label="会籍迄日" width="120"></el-table-column>
          <el-table-column prop="zeng" label="赠后日期" width="120"></el-table-column>
          <el-table-column prop="zhaung" label="状态" width="60"></el-table-column>
          <el-table-column prop="zhong" label="终止日期" width="120"></el-table-column>
          <el-table-column prop="ying" label="终止原因" width="120"></el-table-column>
          <el-table-column prop="mendian" label="销售门店" width="120"></el-table-column>
          <el-table-column prop="xiao" label="销售日期" width="120"></el-table-column>
          <el-table-column prop="xishou" label="销售员" width="120"></el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- 角色管理 -->
      <el-tab-pane label="定金合同">
       <template>
  <el-table
    :data="jiaoseData" border style="width: 100%">
    <el-table-column prop="date" label="序号" width="180"></el-table-column>
    <el-table-column prop="name" label="门店名称" width="180"></el-table-column>
    <el-table-column prop="address" label="定金编码"></el-table-column>
  </el-table>
</template>
        
      </el-tab-pane>
      <el-tab-pane label="租箱合同">定时任务补偿</el-tab-pane>
      <el-tab-pane label="私教合同">用户管理</el-tab-pane>
      <el-tab-pane label="商品消费">配置管理</el-tab-pane>
      <el-tab-pane label="出入场">角色管理</el-tab-pane>
      <el-tab-pane label="私教核销">定时任务补偿</el-tab-pane>
      <el-tab-pane label="客诉记录">用户管理</el-tab-pane>
      <el-tab-pane label="停卡">配置管理</el-tab-pane>
      <el-tab-pane label="补卡">角色管理</el-tab-pane>
      <el-tab-pane label="储值卡">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'hymesg',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      activeName: 'second',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      tableData: [{
        date: '1',
        name: 'test000004',
        province: 'B20190224',
        city: 'M80509-游泳健身次数12月卡3000100次',
        address: '538',
        zip: '538',
        money:'538',
        ding:'0',
        zhuan:'538',
        zong:'12',
        sheng:'10',
        jia:'11',
        xiaobox:'转让',
        hui:'2019-04-01',
        zhi:'2020-04-01',
        zeng:'2020-04-01',
        zhaung:'终止',
        zhong:'2019-09-27',
        ying:'转让',
        mendian:'培训测试店',
        xiao:'2019-03-12',
        xishou:'B00974-王福川'

      }],
  jiaoseData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
    

  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    handleClick (row) {
      console.log(row);
    }





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
.el-col-4 {
    margin-top: 60px;
}
.gbtn {
    margin: auto;
    float: left;
    margin-left: 40%;
}
.has-gutter{
  text-align: center;
}

</style>
