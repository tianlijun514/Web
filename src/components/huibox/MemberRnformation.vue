<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-tabs type="border-card">
      <el-tab-pane label="个人资料">
        <el-row type="flex" class="row-bg" ustify="center">
          <el-col :span="1"></el-col>
          <el-col :span="5">
            <el-form label-width="105px" >
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
            <el-form label-width="105px" style="margin-top: 31px;">
              <el-form-item label=""><span class="p1"></span></el-form-item>
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

      <!-- 定金合同 -->
      <el-tab-pane label="定金合同">
        <template>
          <el-table :data="jiaoseData" border style="width: 100%">
            <el-table-column prop="date" label="序号" width="180"></el-table-column>
            <el-table-column prop="name" label="门店名称" width="180"></el-table-column>
            <el-table-column prop="address" label="定金编码"></el-table-column>
            <el-table-column prop="ds" label="定金类型"></el-table-column>
            <el-table-column prop="dsday" label="定金金额"></el-table-column>
            <el-table-column prop="xsday" label="销售日期"></el-table-column>
            <el-table-column prop="gqday" label="过期日期"></el-table-column>
            <el-table-column prop="syday" label="使用日期"></el-table-column>
            <el-table-column prop="ztday" label="状态"></el-table-column>
            <el-table-column prop="qmday" label="签名"></el-table-column>
            <el-table-column prop="yuday" label="销售员"></el-table-column>
          </el-table>
        </template>
      </el-tab-pane>
      <!-- 租箱合同 -->
      <el-tab-pane label="租箱合同">
        <template>
          <el-table :data="leasing" border style="width: 100%">
            <el-table-column prop="comh" label="流水号" width="180"></el-table-column>
            <el-table-column prop="coname" label="店名" width="180"></el-table-column>
            <el-table-column prop="conzhu" label="租箱号"></el-table-column>
            <el-table-column prop="conxiao" label="销售日期"></el-table-column>
            <el-table-column prop="conday" label="租赁开始日期"></el-table-column>
            <el-table-column prop="conjiy" label="租赁结束日期"></el-table-column>
            <el-table-column prop="conya" label="支付押金"></el-table-column>
            <el-table-column prop="conmeny" label="支付租金"></el-table-column>
            <el-table-column prop="condata" label="归还日期"></el-table-column>
            <el-table-column prop="conyuan" label="销售员"></el-table-column>
          </el-table>
        </template>
      </el-tab-pane>

      <!-- 私教合同 -->
      <el-tab-pane label="私教合同">
        <el-table :data="Sysing" border style="width: 100%">
          <el-table-column fixed prop="syxu" label="序号" width="50"></el-table-column>
          <el-table-column prop="syname" label="门店名称" width="120"></el-table-column>
          <el-table-column prop="sybian" label="合同编号" width="120"></el-table-column>
          <el-table-column prop="syxiao" label="销售日期" width="120"></el-table-column>
          <el-table-column prop="syty" label="销售类型" width="120"></el-table-column>
          <el-table-column prop="syzt" label="状态" width="60"></el-table-column>
          <el-table-column prop="syzhi" label="课程" width="120"></el-table-column>
          <el-table-column prop="syjiao" label="教练" width="80"></el-table-column>
          <el-table-column prop="syshi" label="总课时" width="80"></el-table-column>
          <el-table-column prop="syyue" label="预约课时" width="80"></el-table-column>
          <el-table-column prop="sykexiao" label="核销课时" width="80"></el-table-column>
          <el-table-column prop="sysheng" label="剩余课时" width="70"></el-table-column>
          <el-table-column prop="syjin" label="金额" width="120"></el-table-column>
          <el-table-column prop="sykai" label="开始日期" width="120"></el-table-column>
          <el-table-column prop="syday" label="结束日期" width="120"></el-table-column>
          <el-table-column prop="sybox" label="终止日期" width="120"></el-table-column>
          <el-table-column prop="symin" label="终止原因" width="80"></el-table-column>
          <el-table-column prop="syxi" label="销售员" width="120"></el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- 商品消费 -->
      <el-tab-pane label="商品消费">
        <template>
          <el-table :data="shoping" border style="width: 100%">
            <el-table-column prop="shname" label="店名" width="180"></el-table-column>
            <el-table-column prop="shshang" label="商品"></el-table-column>
            <el-table-column prop="shdan" label="单价"></el-table-column>
            <el-table-column prop="shshu" label="数量"></el-table-column>
            <el-table-column prop="shmoney" label="金额"></el-table-column>
            <el-table-column prop="shdata" label="归还日期"></el-table-column>
          </el-table>
        </template>
        <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </el-tab-pane>

      <!-- 出入场 -->
      <el-tab-pane label="出入场">
         <template>
          <el-table :data="Coument" border style="width: 100%">
            <el-table-column prop="couname" label="店名" width="180"></el-table-column>
            <el-table-column prop="coushang" label="卡号"></el-table-column>
            <el-table-column prop="coudan" label="日期"></el-table-column>
            <el-table-column prop="coushu" label="入场时间"></el-table-column>
            <el-table-column prop="coujine" label="离开时间"></el-table-column>
            <el-table-column prop="coudata" label="消耗次数"></el-table-column>
          </el-table>
        </template>
           <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </el-tab-pane>

      <!-- 私教核销 -->
      <el-tab-pane label="私教核销">
        <template>
          <el-table :data="hexiao" border style="width: 100%">
            <el-table-column prop="hxname" label="店名" width="180"></el-table-column>
            <el-table-column prop="hxhao" label="私教合同号"></el-table-column>
            <el-table-column prop="hxdata" label="预约日期"></el-table-column>
            <el-table-column prop="hxtime" label="预定上课时间"></el-table-column>
            <el-table-column prop="hxkecheng" label="课程"></el-table-column>
            <el-table-column prop="hxjiao" label="教练"></el-table-column>
            <el-table-column prop="hxday" label="核销时间"></el-table-column>
            <el-table-column prop="hxtai" label="状态"></el-table-column>
          </el-table>
        </template>
           <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </el-tab-pane>

      <!-- 客诉记录 -->
      <el-tab-pane label="客诉记录">
          <template>
          <el-table :data="Keing" border style="width: 100%">
            <el-table-column prop="kehao" label="序号" width="180"></el-table-column>
            <el-table-column prop="kename" label="门店名称"></el-table-column>
            <el-table-column prop="keti" label="标题"></el-table-column>
            <el-table-column prop="keflei" label="分类"></el-table-column>
            <el-table-column prop="kecheng" label="紧急程度"></el-table-column>
            <el-table-column prop="kezhaung" label="处理状态"></el-table-column>
            <el-table-column prop="kedata" label="提交时间"></el-table-column>
            <el-table-column prop="ketime" label="更新时间"></el-table-column>
            <el-table-column prop="keren" label="操作人"></el-table-column>
          </el-table>
        </template>
      </el-tab-pane>

      <!-- 停卡 -->
      <el-tab-pane label="停卡">
        <template>
          <el-table :data="tingka" border style="width: 100%">
            <el-table-column prop="tihao" label="流水号" width="180"></el-table-column>
            <el-table-column prop="tiname" label="门店名称"></el-table-column>
            <el-table-column prop="tidata" label="销售日期"></el-table-column>
            <el-table-column prop="tihetong" label="合同号"></el-table-column>
            <el-table-column prop="tilei" label="回籍类型"></el-table-column>
            <el-table-column prop="tibu" label="开始日期"></el-table-column>
            <el-table-column prop="tiday" label="结束日期"></el-table-column>
            <el-table-column prop="tibox" label="停卡开始"></el-table-column>
            <el-table-column prop="timin" label="停卡结束"></el-table-column>
             <el-table-column prop="tirx" label="开卡日期"></el-table-column>
            <el-table-column prop="tiht" label="新合同号"></el-table-column>
            <el-table-column prop="tifei" label="手续费"></el-table-column>
          </el-table>
        </template>
      </el-tab-pane>

      <!-- 补卡 -->
      <el-tab-pane label="补卡">
        <template>
          <el-table :data="bkming" border style="width: 100%">
            <el-table-column prop="bkhao" label="流水号" width="180"></el-table-column>
            <el-table-column prop="bkname" label="门店名称"></el-table-column>
            <el-table-column prop="bkdata" label="销售日期"></el-table-column>
            <el-table-column prop="bkmp" label="合同号"></el-table-column>
            <el-table-column prop="bkcy" label="原卡号"></el-table-column>
            <el-table-column prop="bkcom" label="新卡号"></el-table-column>
            <el-table-column prop="bkshou" label="手续费"></el-table-column>
            <el-table-column prop="bkyuan" label="销售员"></el-table-column>
          </el-table>
        </template>
      </el-tab-pane>

      <!-- 储值卡 -->
      <el-tab-pane label="储值卡">
      <template>
          <el-table :data="zhingbox" border style="width: 100%">
            <el-table-column prop="zhname" label="门店名称"></el-table-column>
            <el-table-column prop="zhdata" label="储值卡号"></el-table-column>
            <el-table-column prop="zhmp" label="储值类型"></el-table-column>
            <el-table-column prop="zhcy" label="赠送日期"></el-table-column>
            <el-table-column prop="zhcom" label="余额"></el-table-column>
            <el-table-column prop="zhshou" label="有效期"></el-table-column>
          </el-table>
        </template>
        
      </el-tab-pane>

      
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      activeName: 'second',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    tableData: [{
        date: '1',
        name: 'test000004',
        province: 'B20190224',
        city: 'M80509-游泳健身次数12月卡3000100次',
        address: '538',
        zip: '538',
        money: '538',
        ding: '0',
        zhuan: '538',
        zong: '12',
        sheng: '10',
        jia: '11',
        xiaobox: '转让',
        hui: '2019-04-01',
        zhi: '2020-04-01',
        zeng: '2020-04-01',
        zhaung: '终止',
        zhong: '2019-09-27',
        ying: '转让',
        mendian: '培训测试店',
        xiao: '2019-03-12',
        xishou: 'B00974-王福川'

      }],
    jiaoseData: [{
        date: '1',
        name: '培训测试店',
        address: '001',
        ds: '会籍定金',
        dsday: '1000',
        xsday: '2019-12-26',
        gqday: '2019-12-12',
        syday: '2017-01-12',
        ztday: '未使用',
        qmday: '已签',
        yuday: '2222-小明'
      }],
    leasing: [{
        comh: '1',
        coname: '培训测试店',
        conzhu: '001',
        conxiao: '会籍定金',
        conday: '1000',
        conjiy: '2019-12-26',
        conya: '2019-12-12',
        conmeny: '2017-01-12',
        condata: '未使用',
        conyuan: '2222-小明'
      }],
    Sysing: [{
        syxu: '1',
        syname: '培训测试店',
        sybian: '001',
        syxiao: '0005',
        syty: '2018-05-12',
        syzt: '100',
        syzhi: '正常',
        syjiao: '小虾',
        syshi: '120',
        syyue: '2小',
        sykexiao: '50',
        sysheng: '100',
        syjin: '5000',
        sykeshi: '2018-12-12',
        sykai: '2018-12-23',
        syday: '2019-12-12',
        sybox: '2017-01-12',
        symin: '未使用',
        syxi: '2222-小明'
      }],
    shoping: [{
        shname: '1',
        shshang: '培训测试店',
        shdan: '001',
        shshu: '会籍定金',
        shmoney: '1000',
        shdata: '2019-12-26',
      }],
    Coument: [{
        couname: '培训测试店',
        coushang: '000001',
        coudan: '2018-10-20',
        coushu: '12:10',
        coujine: '14:20',
        coudata: '2',
      }],
    hexiao: [{
        hxname: '培训测试店',
        hxhao: '000001',
        hxdata: '2018-10-20',
        hxtime: '12:10',
        hxkecheng: '舞蹈',
        hxjiao: '小明',
        hxday: '14:20',
        hxtai: '已预约',
      }],
    Keing: [{
        kehao: '培训测试店',
        kename: '000001',
        keti: '2018-10-20',
        keflei: '12:10',
        kecheng: '舞蹈',
        kezhaung: '小明',
        kedata: '14:20',
        ketime: '已预约',
        keren: '已预约',
      }],
    tingka: [{
        tihao: '培训测试店',
        tiname: '000001',
        tidata: '2018-10-20',
        tihetong: '12:10',
        tilei: '舞蹈',
        tibu: '小明',
        tiday: '14:20',
        tibox: '已预约',
        timin: '已预约',
        tirx: '14:20',
        tiht: '已预约',
        tifei: '已预约',
      }],
    bkming: [{
        bkhao: '培训测试店',
        bkname: '000001',
        bkdata: '2018-10-20',
        bkmp: '12:10',
        bkcy: '舞蹈',
        bkcom: '小明',
        bkshou: '14:20',
        bkyuan: '已预约',
      }],
    zhingbox: [{
        zhname: '培训测试店',
        zhdata: '000001',
        zhmp: '2018-10-20',
        zhcy: '12:10',
        zhcom: '舞蹈',
        zhshou: '小明',
      }],
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
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
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
@import './../../assets/css/table.css';
.el-col-4 {
    margin-top: 60px;
}
.gbtn {
    margin: auto;
    float: left;
    margin-left: 40%;
}
.has-gutter {
    text-align: center;
}
.block{

    width: 50%;
    margin: auto
}   
</style>
