<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item label="领用部门">
        <el-select v-model="value">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
import { url } from '../js/url'
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
      tableTitle: [
        { title: '领用部门编号', data: 'num' },
        { title: '领用部门名称', data: 'storeName' },
        { title: '商品编码', data: 'name' },
        { title: '商品名称', data: 'phone' },
        { title: '单位', data: 'idCard' },
        { title: '领用类型', data: 'date' },
        { title: '数量', data: 'timeHorizon' },
        { title: '领用日期', data: 'type' },
        { title: '操作员', data: 'shellUser' },
        { title: '备注', data: 'shellUser' },
      ],
      options: [{
        value: 'A00006',
        label: '红牌楼店'
      }, {
        value: 'A00007',
        label: '花郡店'
      }, {
        value: 'A00008',
        label: '万象城店'
      }, {
        value: 'A00009',
        label: '新城市店'
      }, {
        value: 'A00014',
        label: '阳光新业店'
      }, {
        value: 'A00006',
        label: '龙湖店'
      }, {
        value: 'A00007',
        label: '王府井店'
      }, {
        value: 'A00008',
        label: '天誉店'
      }, {
        value: 'A00009',
        label: '伊藤店'
      }, {
        value: 'A00014',
        label: '金牛店'
      }, {
        value: 'A00009',
        label: '瑞安店'
      }, {
        value: 'A00014',
        label: '339店'
      }, {
        value: 'A00006',
        label: '镏金店'
      }, {
        value: 'A00007',
        label: '紫荆店'
      }, {
        value: 'A00008',
        label: '魅力城'
      }, {
        value: 'A00031',
        label: '二十四城'
      }, {
        value: 'A00032',
        label: '东城国际店'
      }, {
        value: 'C001',
        label: '管理中心'
      }, {
        value: 'test',
        label: '培训测试店'
      }
      ],
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
@import './../../assets/css/table.css';
.uys {
    width: 32%;
    margin: auto;
}
.APPX {
    width: 100%;
}
</style>
