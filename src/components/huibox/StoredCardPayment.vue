<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="inoutmen"></el-input>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="intype" @change="choose()">
          <el-option v-for="item in brandd" :key="item.id" :label="item.remark" :value="item.number"></el-option>
        </el-select>
      </el-form-item>

      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>

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

    <div class="block">
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
  name: 'boxchunzhi',
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
      inoutmen: "天府店",
      value1: '',
      intype: '',
      tableTitle: [
        { title: '序号', data: 'num' },
        { title: '门店名称', data: 'storeName' },
        { title: '时间', data: 'createDate' },
        { title: '会员姓名', data: 'member.name' },
        { title: '支付码', data: 'payCode' },
        { title: '金额', data: 'amount' },
        { title: '状态', data: 'type' },
        { title: '付款时间', data: 'payTime' },
        { title: '操作员', data: 'operationUser' },
      ],
      tableData: []
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

    choose () {
      axios
        .get(base + '/depositCard/getDepositCardStatus').then((res) => {
          this.brandd = res.data.data
        })
    },

    chaxun () {
      axios
        .post(base + '/depositCard/getDepositCardPay/', {
            page:this.currentPage,
            size:this.currentPage,
            storeName: this.inoutmen,
            type: this.intype,
            endDate: this.date_s,
            startDate: this.date_e
        }).then(res => {
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
.app {
    width: 100%;
}
.block {
    width: 550px;
    margin: auto;

}
</style>
