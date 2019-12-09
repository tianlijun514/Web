<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true"  class="demo-form-inline">
      <el-form-item label="租箱号">
        <el-input v-model="gemietet"></el-input>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="status" @change="choose">
          <el-option v-for="item in brandd" :key="item.id" :label="item.remark" :value="item.number">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="类型">
        <el-select v-model="type" @change="leibox">
          <el-option v-for='item in leixing' :key="item.id" :label="item.remark" :value="item.number"></el-option>
        </el-select>
      </el-form-item>

      <span class="demonstration">归还日期</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change='datas'>
      </el-date-picker>

      <el-form-item style="margin-left: 10px">
        <el-button type="primary" @click="erkundigen">查询</el-button>
      </el-form-item>
    </el-form>

    <span class="searchRst">查询结果：共{{total}}条记录/显示第{{currentPage}}页</span>

    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
      </template>

      <el-table-column scope label="操作">
        <el-button size="mini" type="primary" @click="Look">租借</el-button>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
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
  name: 'indexzuji',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      leixing: [],
      leix: '',
      brandd: [],
      total: 0,
      currentPage: 1,
      gemietet: '0001',
      status: null,
      type: null,
      size: 10,
      date_s: '',
      date_e: '',
      value1: '',
      tableTitle: [
        { title: '箱号', data: 'boxCode' },
        { title: '名称', data: 'name' },
        { title: '押金', data: 'cashPledge' },
        { title: '年租金', data: 'yearRental' },
        { title: '月租金', data: 'monthRental' },
        { title: '类型', data: 'typeName' },
        { title: '状态', data: 'statusName' },
        { title: '会员', data: 'member' },
        { title: '开始日期', data: 'startTime' },
        { title: '结束日期', data: 'endTime' },
        { title: '支付押金', data: 'payCash' },
        { title: '支付租金', data: 'payRental' },
        { title: '操作', data: 'cau' },
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
    datas (e) {
      this.date_s = e[0].getFullYear() + '-' + Number(e[0].getMonth() + 1) + '-' + e[0].getDate();
      this.date_e = e[1].getFullYear() + '-' + Number(e[1].getMonth() + 1) + '-' + e[1].getDate();
    },
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
    Look () {
      this.$router.push('./zuboss')
    },

    // 类型
    leibox (e) {
      this.staat = e
    },

    // 状态
    choose (e) {
      this.type = e
    },
    // 查询
    erkundigen () {
      axios
        .post(base + '/rentBox/getRentBox', {
          page: this.currentPage,
          size: this.size,
          boxCode: this.gemietet,
          type: this.type,
          status: this.status,
          startDate: this.date_s,
          endDate: this.date_e

        }).then(res => {
          this.tableData = res.data.queryResult.list;
          this.total = res.data.queryResult.total;
        })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.erkundigen(),
      axios
        .get(base + '/rentBox/getRentBoxStatus').then((res) => {
          console.log(res.data.o)
          this.brandd = res.data.o
        })
    axios
      .get(base + '/rentBox/getRentBoxType').then((res) => {
        console.log(res.data.o)
        this.leixing = res.data.o
      })
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
.app{
  width: 100%;
}
.block {
    width: 550px;
    margin: auto;
}
</style>
