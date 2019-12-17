<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="门店">
        <el-input v-model="spCode"></el-input>
      </el-form-item>

      <el-form-item label="商品">
        <el-input v-model="spCode" style="width: 110px;" disabled></el-input>
        <el-input v-model="spName" style="width: 110px;" disabled></el-input>
      </el-form-item>

      <el-button type="primary" @click="angelegt()" class="btn">...</el-button>

      <el-button type="primary" @click="chaxun">查询</el-button>
      <el-button type="primary" @click="herleiten">导出</el-button>

    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="deptCode" label="门店编号"></el-table-column>
      <el-table-column prop="deptName" label="门店名称"></el-table-column>
      <el-table-column prop="spCode" label="商品编码"></el-table-column>
      <el-table-column prop="spName" label="商品名称"></el-table-column>
      <el-table-column prop="unitName" label="单位"></el-table-column>
      <el-table-column prop="number" label="数量"></el-table-column>
      <el-table-column prop="cgPrice" label="标准采购价"></el-table-column>
      <el-table-column prop="totalPrice" label="金额"></el-table-column>
      <el-table-column prop="dai" label="平均采购价"></el-table-column>
      <el-table-column prop="bei" label="金额"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <Auswahl :auswahl="auswahl" @tapecode="Details"></Auswahl>
  </div>
</template>

<script>
import Auswahl from '../common/Auswahl'
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'InventoryBalanceList',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Auswahl
  },
  data () {
    // 这里存放数据
    return {
      auswahl: {
        show: false
      },
      spCode: '',
      spName: '',
      type: '',
      handleClose: '',
      total: 0,
      size: 10,
      currentPage: 1,
      formInline: {
      },

      value1: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        dai: '00001',
        bei: 'xiixii'
      }],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    angelegt () {
      this.auswahl.show = true;
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
    // 导出
    herleiten () {
      axios
        .get(base + '/commodity/excelRepertory', { responseType: 'arraybuffer' })
        .then(res => {
          let blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
          let objectUrl = URL.createObjectURL(blob);
          window.location.href = objectUrl;
        })
    },

    // 添加到表
    Details (data) {
      this.spCode = data.spCode,
        this.spName = data.spName
    },
    // 查询
    chaxun () {
      axios
        .post(base + '/commodity/getRepertory', {
          page: this.currentPage,
          size: this.size,
          deptCode: this.deptCode,
          startDate: this.date_s,
          endDate: this.date_e
        }).then(res => {
          this.tableData = res.data.d
          this.total = res.data.t
        })
    },
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
@import './../../assets/css/table.css';
.app {
    width: 100% !important;
}
.block {
    width: 50%;
    margin: auto;
}
.btn {
    font-weight: 600;
}
</style>
