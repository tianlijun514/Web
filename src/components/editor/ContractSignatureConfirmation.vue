<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="storeCode"></el-input>
      </el-form-item>

      <el-form-item label="类型">
        <el-select v-model="type">
          <el-option label="全部" value=""></el-option>
          <el-option  v-for="(item,index) in contractType"  :label="item.label"  :value="item.value" :key="index+'a'"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="status">
          <el-option label="全部" value=""></el-option>
          <el-option   v-for="(item,index) in Type"  :label="item.label"  :value="item.value" :key="index+'a'"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="销售员">
        <el-input v-model="salesman"></el-input>
      </el-form-item>

      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change='datas'>
      </el-date-picker>
      <el-form-item label="合同号">
        <el-input v-model="contractId"></el-input>
      </el-form-item>
      <el-form-item label="会员/姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center">
        </el-table-column>
      </template>
      <el-table-column scope label="操作">
        <el-button size="mini" type="primary">确认签名</el-button>
      </el-table-column>
    </el-table>
    <div class="uys">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>

</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

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
      size: 10,
      total: 0,
      currentPage: 1,
      storeCode: '',
      type: '',
      status: '',
      date_s: '',
      date_e: '',
      salesman: '',
      contractId: '',
      name: '',
      value1: '',
      tableTitle: [
        { title: '序号', data: 'num' },
        { title: '门店名称', data: 'storeName' },
        { title: '合同号', data: 'contractId' },
        { title: '类型', data: 'type' },
        { title: '会员编号', data: 'memberId' },
        { title: '姓名', data: 'name' },
        { title: '日期', data: 'shellDate' },
        { title: '状态', data: 'status' },
        { title: '销售员', data: 'salesman1' },
        { title: '销售员2', data: 'salesman2' },

      ],
      tableData: [{
        num: '00012',
        storeName: '天府四街分店',
        hyt: '刘小军',
        telNo: '2018-12-10',
        userName: '普通',
        name: '普通',
        userNo: '2018-12-12',
        usy: '2019-12-12',
        userCardNo: '2018-12-12',
        mone: '2019-12-12',

      },],
      Type: [],
    }
  },
  // 监听属性 类似于data概念
  computed: {
    ...mapState({ contractType: state => state.contractType })
  },
  // 监控data中的数据变化
  watch: {
    // contractType(newData,oldData){
    //   // console.log(newData)
    // }
  },
  // 方法集合
  methods: {
    datas (even) {
      var mydata = even[0]
      var y = mydata.getFullYear();
      var m = (mydata.getMonth() + 1 < 10 ? '0' + (mydata.getMonth() + 1) : mydata.getMonth() + 1);
      var d = mydata.getDate() + 1 < 10 ? '0' + mydata.getDate() : mydata.getDate();
      this.date_s = y + "-" + m + "-" + d;

      var enddata = even[1]
      var y = enddata.getFullYear();
      var d = enddata.getDate() + 1 < 10 ? '0' + enddata.getDate() : enddata.getDate();
      var m = (enddata.getMonth() + 1 < 10 ? '0' + (enddata.getMonth() + 1) : enddata.getMonth() + 1);
      this.date_e = y + "-" + m + "-" + d;
    },
    ...mapActions(['getCoachInformation']),

    onSubmit () {
      console.log('submit!');
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },

    // 查询
    chaxun () {
      let a
      a = this.type ? parseInt(this.type) : null
      let b
      b = this.status ? parseInt(this.status) : null
      axios
        .post(base + '/contract/queryContracts/' + this.currentPage + '/' + this.size, {
          storeCode: this.storeCode,
          type: a,
          status: b,
          salesman: this.salesman,
          contractId: this.contractId,
          name: this.name,
          startDate: this.date_s,
          endDate: this.date_e,
        }
        ).then(res => {
          console.log(res.data)
          for (let i = 0; i < res.data.d.length; i++) {
            res.data.d[i].num = (this.currentPage - 1) * this.size + i + 1
          }
          this.tableData = res.data.d
          this.total = res.data.t
        })
    },




  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun()
    this.getCoachInformation('C0001')
    this.getCoachInformation('C0002').then(res => {
      let obj
      for (let i = 0; i < res.length; i++) {
        obj = { label: res[i].remark, value: res[i].number }
        this.Type.push(obj)
      }
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
.uys {
    width: 50%;
    margin: auto;
}
.APPX {
    width: 100%;
}
</style>
