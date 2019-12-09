<!-- vue快捷创建组件 -->
<template>
  <div class='aapp'>
    <el-form :inline="true"  class="demo-form-inline">

      <el-form-item label="门店">
        <el-input v-model="inoutmen"></el-input>
      </el-form-item>

      <el-form-item label="类型">
        <el-select v-model="intype" @change="choose()">
          <el-option v-for="item in brandd" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="储值卡号">
        <el-input v-model="chuzhi"></el-input>
      </el-form-item>

      <el-form-item label="会员号">
        <el-input v-model="user"></el-input>
      </el-form-item>

      <span class="demonstration">赠送日期</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change='datas'>
      </el-date-picker>

      <el-form-item style="margin-left: 10px;">
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示第{{currentPage}}页</span>

    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
      </template>
    </el-table>

    <div class="aom">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>

</template>

<script>
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'boxchaxun',
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
      brandd: [],
      size: 10,
      value1: '',
      inoutmen: "世豪店",
      intype: '',
      chuzhi: '',
      user: '',
      // date_s: '',
      // date_e: '',
      tableTitle: [
        { title: '序号', data: 'num' },
        { title: '门店名称', data: 'shellStoreName' },
        { title: '会员姓名', data: 'memberName' },
        { title: '赠送日期', data: 'startDate' },
        { title: '储值卡号', data: 'cardCode' },
        { title: '储值卡类型', data: 'cardType' },
        { title: '赠送金额', data: 'givePrice' },
        { title: '余额', data: 'cardClass' },
        { title: '有效期', data: 'endDate' },
        { title: '操作员', data: 'operationUser' },
      ],
      tableData: [{}]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.chaxun();
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

    // 类型遍历
    choose () {
      axios
        .get(base + '/depositCard/getDepositCardType').then((res) => {
          this.brandd = res.data.o
          console.log(res.data.o)
        })
    },
    // 条件查询
    chaxun () {
      axios
        .get(base + '/depositCard/getDepositCard/' + this.currentPage + '/' + this.size, {
          params: {
            cardCode: this.chuzhi,
            memberCode: this.user,
            state: this.inputhui,
            type: this.intype,
            // endDate: this.date_s,
            // startDate: this.date_e
          }
        }).then(res => {
          console.log(res)
          for (let i = 0; i < res.data.queryResult.list.length; i++) {
            res.data.queryResult.list[i].num = (this.currentPage - 1) * this.size + i + 1
          }
          this.tableData = res.data.queryResult.list;
          this.total = res.data.queryResult.total;
        })
    }


  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun()
    this.choose()
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
@import './../../assets/css/table.css';
.aom {
    width: 50%;
    margin: auto;
}
.demonstration {
    height: 32px;
    vertical-align: middle;
    line-height: 32px !important;
    font-size: 14px;
    color: #606266;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.aapp {
    width: 100%;
}
</style>
