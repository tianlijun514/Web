<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="deptCode"></el-input>
      </el-form-item>

      <el-form-item label="供应商">
        <el-select v-model="supplierCode">
          <el-option label="全部" value></el-option>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
      </el-form-item>
      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" @change='datas' type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd">
      </el-date-picker>
      <el-button type="primary" @click="Statistische" style="margin-left: 10px">查询</el-button>
      <el-button type="primary" @click="herleiten">导出</el-button>
    </el-form>
     <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="cgTk.deptCode" label="部门编号" width="80"></el-table-column>
      <el-table-column prop="cgTk.deptName" label="部门名称" width="110"></el-table-column>
  
      <el-table-column prop="spContractCode" label="合同编号"></el-table-column>
      <el-table-column prop="supplierName" label="供应商"></el-table-column>
      <el-table-column prop="spCode" label="商品编号" width="100"></el-table-column>
      <el-table-column prop="spName" label="商品名称" width="100"></el-table-column>
      <el-table-column prop="spNum" label="数量" width="100"></el-table-column>
      <el-table-column prop="spPrice" label="金额" width="120"></el-table-column>
      <el-table-column prop="cgTk.tkDate" label="退货日期" width="120"></el-table-column>
      <el-table-column prop="cgTk.empName" label="操作员" width="120"></el-table-column>
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
  name: 'business7',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      value1: '',
      currentPage: 1,
      supplierCode: '',
      size: 10,
      date_s: '',
      date_e: '',
      total: 0,
      deptCode: '',
      regions: '',
      options: [{
        value: '21321',
        label: '21321 - 3213'
      }, {
        value: 'C00001',
        label: 'C00001 - 测试商品'
      }, {
        value: 'G0001',
        label: 'G0001 - 荷花池批发市场'
      }],
      tableData: [{
        yuhao: '00012',
        Mname: '天府四街分店',
        shang: '11111',
        Hebian: '0001242',
        name: '刘小军',
        yuan: '11111',
        jiaolian: '普通',
        yutime: '普通',
        hetime: '2018-12',
        yuyue: '2019-12-12'
      }]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    datas (even) {
      console.log(even)
      console.log(new Date())
      var mydata = even[0]
      var y = mydata.getFullYear();
      var m = mydata.getMonth() + 1;
      var d = mydata.getDate();
      this.date_s = y + "-" + m + "-" + d;
      var enddata = even[1]
      var y = enddata.getFullYear();
      var m = enddata.getMonth() + 1;
      var d = enddata.getDate();
      this.date_e = y + "-" + m + "-" + d;
    },

     handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.Statistische();
    },

    Statistische () {
      axios
        .post(base + '/commodity/getAllCgTk', {
          page: this.currentPage,
          size: this.size,
          deptCode: this.deptCode,
          supplierCode: this.supplierCode,
          startDate:this.date_s,
          endDate:this.date_e
        }).then(res => {
          this.tableData = res.data.d
          this.total = res.data.t
        })
    },
           // 导出
    herleiten () {
      axios
        .get(base + '/commodity/excelCgRk',{responseType: 'arraybuffer'})
        .then(res => {
          let blob = new Blob ([res.data],{type:"application/vnd.ms-excel"});
          let objectUrl = URL.createObjectURL(blob);
          window.location.href=objectUrl;
        })
    },

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.Statistische()

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
.app {
    width: 100% !important;
}
.block {
    width: 50%;
    margin: auto;
}
@import './../../assets/css/table.css';
</style>
