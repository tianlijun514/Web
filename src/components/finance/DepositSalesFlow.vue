<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item label="门店">
        <el-input v-model="inoutmen"></el-input>
      </el-form-item>

      <el-form-item label="定金类型">
        <el-select v-model="value" style="width: 188px;">
          <el-option v-for="item in eine" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="日期类型">
        <el-select v-model="value" style="width: 188px;">
          <el-option v-for="item in daytype" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" @change='datas' type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd">
      </el-date-picker>

      <el-form-item label="定金编号">
        <el-input v-model="inoutmen"></el-input>
      </el-form-item>

      <el-form-item label="会员卡号">
        <el-input v-model="inoutmen"></el-input>
      </el-form-item>

      <el-form-item label="会员姓名">
        <el-input v-model="inoutmen"></el-input>
      </el-form-item>

      <el-form-item label="是否使用">
        <el-select v-model="value" style="width: 188px;">
          <el-option v-for="item in anwenden" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
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
  name: 'DepositSalesFlow',
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
      inoutmen: '',
      value: '',
      value1: '',
      date_s: '',
      date_e: '',
      eine: [{
        value: '01',
        label: '全部'
      }, {
        value: '02',
        label: '会籍定金'
      }, {
        value: '03',
        label: '私教定金'
      }, {
        value: '04',
        label: '停转补定金'
      }, {
        value: '05',
        label: '转让定金'
      }, {
        value: '06',
        label: '租箱定金'
      }, {
        value: '07',
        label: '商品定金'
      }],
      daytype: [{
        value: '1',
        label: '销售日期'
      }, {
        value: '2',
        label: '使用日期'
      }],
      anwenden: [{
        value: '3',
        label: '全部'
      }, {
        value: '4',
        label: '未使用'
      }, {
        value: '5',
        label: '已使用'
      }, {
        value: '6',
        label: '退定金'
      }, {
        value: '7',
        label: '锁定'
      }, {
        value: '8',
        label: '已合并'
      },
      ],
      tableTitle: [
        { title: '序号', data: 'num' },
        { title: '门店名称', data: 'storeName' },
        { title: '定金编号', data: 'name' },
        { title: '会员卡号', data: 'phone' },
        { title: '会员姓名', data: 'idCard' },
        { title: '商品名称', data: 'timeHorizon' },
        { title: '定金类型', data: 'type' },
        { title: '定金金额', data: 'shellUser' },
        { title: '全额定金', data: 'shellUser' },
        { title: '销售日期', data: 'phone' },
        { title: '使用日期', data: 'idCard' },
        { title: '状态', data: 'timeHorizon' },
        { title: '签名', data: 'type' },
        { title: '备注', data: 'shellUser' },

      ],
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
.el-form-item__content {
    width: 100px !important;
}
@import './../../assets/css/table.css';
.uys {
    width: 32%;
    margin: auto;
}
.APPX {
    width: 100%;
}
</style>
