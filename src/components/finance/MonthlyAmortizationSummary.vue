<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">
      <span class="demonstration">统计月份</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>

      <div class="cha">
        <el-form-item>
          <el-button type="primary" @click="chaxun">查询</el-button>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="primary" @click="herleiten">导出</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="herleiten">下载详情报表</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="herleiten">下载精简报表</el-button>
      </el-form-item>

    </el-form>
    <el-table :data="tableData" border style="width: 40%;">
      <el-table-column prop="yuhao" label="序号" width="120"></el-table-column>
      <el-table-column prop="shang" label="门店编号" width="120"></el-table-column>
      <el-table-column prop="Mname" label="门店名称" width="150"></el-table-column>
      <el-table-column prop="amount1" label="摊销金额"></el-table-column>
    </el-table>
  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import axios from "axios";
import { url } from '../js/url'
export default {
  name: 'MonthlyAmortizationSummary',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      inoutmen: '',
      value1: '',
      date_s: '',
      date_e: '',
      tableData: [{
        yuhao: '00012',
        Mname: '天府四街分店',
        shang: '11111',
        amount1: '234',

      }],

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
      console.log(this.date_s)
      var enddata = even[1]
      var y = enddata.getFullYear();
      var m = enddata.getMonth() + 1;
      var d = enddata.getDate();
      this.date_e = y + "-" + m + "-" + d;
      console.log(this.date_e)
    },
    // 导出
    herleiten () {
      axios
        .get(url + '/visit/excel', { responseType: 'arraybuffer' })
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
          for (let i = 0; i < res.data.queryResult.list.length; i++) {
            res.data.queryResult.list[i].num = (this.currentPage - 1) * this.size + i + 1
          }
          this.tableData = res.data.queryResult.list;
          // console.log(this.tableData)
          this.total = res.data.queryResult.total;
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
.el-form-item__content {
    width: 100px !important;
}
@import './../../assets/css/table.css';
.APPX {
    width: 100%;
}
.cha {
    margin-left: 10px;
    display: inline;
}
</style>
