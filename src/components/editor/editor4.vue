<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="inoutmen"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="inputphone"></el-input>
      </el-form-item>
      <el-form-item label="会员姓名">
        <el-input v-model="inputhui"></el-input>
      </el-form-item>
      <el-form-item label="证件号">
        <el-input v-model="inputzheng"></el-input>
      </el-form-item>

      <el-form-item label="销售员">
        <el-input v-model="inputxiao"></el-input>
      </el-form-item>
      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" @change='datas' type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd">
      </el-date-picker>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="xinzheng">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">导出</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示第{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center">
        </el-table-column>
      </template>
      <el-table-column scope label="操作">
        <!-- <el-button size="mini" type="primary">打印</el-button> -->
      </el-table-column>
    </el-table>
    <div class="uys">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import axios from "axios";
import { url } from '../js/url'
export default {
  name: 'inexhetong',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      currentPage: 1,
      total: 0,
      formInline: {
        user: '',
        region: ''
      },
      size: 10,
      value1: '',
      inoutmen: '',
      inputphone: '',
      inputhui: '',
      inputzheng: '',
      inputxiao: '',
      date_s: '',
      date_e: '',
      // list:[],
      tableTitle: [
        { title: '序号', data: 'num' },
        { title: '门店名称', data: 'storeName' },
        { title: '姓名', data: 'name' },
        { title: '手机号', data: 'phone' },
        { title: '证件号', data: 'idCard' },
        { title: '来访日期', data: 'date' },
        { title: '时段', data: 'timeHorizon' },
        { title: '类型', data: 'type' },
        { title: '销售员', data: 'shellUser' },
      ],
      // tableData: [{
      // }],
      tableData: [
        {'num':'0',"storeName": "沙滩搁浅我们的旧时光", "name": "小明",'phone':'1342343219','idCard':'12232143243','date':'2019-11-20','timeHorizon':'上午','type':'类型','shellUser':'销售员'},
        {'num':'1',"storeName": "女人天生高贵", "name": "小红",'phone':'1342343219','idCard':'12232143243','date':'2019-11-20','timeHorizon':'上午','type':'类型','shellUser':'销售员'},
        {'num':'2',"storeName": "海是彩色的灰尘", "name": "小兰",'phone':'1342343219','idCard':'12232143243','date':'2019-11-20','timeHorizon':'上午','type':'类型','shellUser':'销售员'}
      ]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onSubmit () {
      console.log('submit!');
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.chaxun();
    },
    xinzheng () {
      this.$router.push('./fang')
    },
    datas (even) {
      console.log(even)
      console.log(new Date())
      var mydata = even[0]
      var y = mydata.getFullYear();
      var m = mydata.getMonth() + 1;
      var d = mydata.getDate();
      this.date_s = y + "-" + m + "-" + d;
      console.log(this.date_s)
      var enddata = even[1]
      var y = enddata.getFullYear();
      var m = enddata.getMonth() + 1;
      var d = enddata.getDate();
      this.date_e = y + "-" + m + "-" + d;
      console.log(this.date_e)
    },

    // 查询
    chaxun () {
      // if (this.inputhui == '') {
      //   console.log(this.inputhui)
      //   return;
      // }
      // let _this = this;
      axios
        .get(url + '/visit/list/' + this.currentPage + '/' + this.size, {
          params: {
            storeName: this.inoutmen,
            phoneNum: this.inputphone,
            visitorName: this.inputhui,
            idcard: this.inputzheng,
            seller: this.inputxiao,
            date_s: this.date_s,
            date_e: this.date_e
          }
        }).then(res => {
          console.log(res)
          for(let i = 0;i<res.data.queryResult.list.length;i++){
            res.data.queryResult.list[i].num = (this.currentPage-1)*this.size+i+1
            
            // if(timeHorizon >=33){
            //   timeHorizon = '上午'
            // }
          }
          this.tableData = res.data.queryResult.list;
          console.log(this.tableData)
          this.total = res.data.queryResult.total;
          this.inoutmen = this.tableData.inoutmen
        })
    },
   // exportToExcel() {
   //       //excel数据导出
   //      require.ensure([], () => {
   //          const {
   //             export_json_to_excel
   //             } = require('../../assets/js/Export2Excel');
   //           const tHeader = ['序号','门店名称', '姓名', '手机号', '证件号','来访日期','时段','类型','销售员'];
   //          const filterVal = ['num','storeName', 'name', 'phone', 'idCard','date','timeHorizon','type','shellUser'];
   //           const list = this.tableData;
   //          const data = this.formatJson(filterVal, list);
   //           export_json_to_excel(tHeader, data, '用户列表');
   //         })
   //       },
   //     formatJson(filterVal, jsonData) {
   //     return jsonData.map(v => filterVal.map(j => v[j]))
   //  }

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun()
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
<style scoped>
.el-form-item__content {
    width: 100px !important;
}
@import './../../assets/css/table.css';
.uys {
    width: 50%;
    margin: auto;
}
.APPX {
    width: 100%;
}
</style>
