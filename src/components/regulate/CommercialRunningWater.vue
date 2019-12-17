<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item label="领用部门">
        <el-select v-model="deptCode" @change="bumen">
          <el-option label="全部" value></el-option>
          <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.number"></el-option>
        </el-select>
      </el-form-item>

      <span class="demonstration">日期</span>
      <el-date-picker v-model="value1" @change='datas' type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd">
      </el-date-picker>

      <el-form-item style="margin-left: 10px">
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="herleiten">导出</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示第{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center">
        </el-table-column>
      </template>

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
import { base } from '../js/url'
export default {
  name: 'CommercialRunningWater',
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
      size: 10,
      value1: '',
      date_s: '',
      date_e: '',
      deptCode:'',
      tableTitle: [
        { title: '领用部门编号', data: 'deptCode' },
        { title: '领用部门名称', data: 'deptName' },
        { title: '商品编码', data: 'spCode' },
        { title: '商品名称', data: 'spName' },
        { title: '单位', data: 'spUnitName' },
        { title: '领用类型', data: 'name' },
        { title: '数量', data: 'spNum' },
        { title: '领用日期', data: 'receiveDate' },
        { title: '操作员', data: 'empName' },
        { title: '备注', data: 'remark' },
      ],
      options: [],
      value: '',
      tableData: [{}],

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
      // this.zeroize(even[0])
      var mydata = even[0]
      var y = mydata.getFullYear();
      var m = (mydata.getMonth() + 1 < 10 ? '0' + (mydata.getMonth() + 1) : mydata.getMonth() + 1);
      var d = mydata.getDate() + 1 < 10 ? '0' + mydata.getDate() : mydata.getDate();
      this.date_s = y + "-" + m + "-" + d;
      console.log(this.date_s)
      var enddata = even[1]
      var y = enddata.getFullYear();
      var d = enddata.getDate() + 1 < 10 ? '0' + enddata.getDate() : enddata.getDate();
      var m = (enddata.getMonth() + 1 < 10 ? '0' + (enddata.getMonth() + 1) : enddata.getMonth() + 1);
      this.date_e = y + "-" + m + "-" + d;
      console.log(this.date_e)

    },

    // 导出
    herleiten () {
      axios
        .get(base + '/commodity/excelSpReceive', { responseType: 'arraybuffer' })
        .then(res => {
          let blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
          let objectUrl = URL.createObjectURL(blob);
          window.location.href = objectUrl;
          console.log(res);
        })
    },

    // 查询
    chaxun () {
      axios
        .post(base + '/commodity/getSpReceiveInfo', {
          page:this.currentPage,
          size:this.size,
          deptCode: this.deptCode,
          startDate: this.date_s,
          endDate: this.date_e
        }).then(res => {
          console.log(res.data)
          this.tableData=res.data.d
          this.total=res.data.t
        })
    },

    // 类型
    bumen (e) {
      this.leixing=e
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun(),
      axios
        .get(base + '/store/getStoreList').then(res => {
          this.options=res.data.d
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
    width: 32%;
    margin: auto;
}
.APPX {
    width: 100%;
}
</style>
