<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item label="门店">
        <el-input v-model="inoutmen"></el-input>
      </el-form-item>

      <el-form-item label="销售类型">
        <el-select v-model="value" style="width: 188px;">
          <el-option v-for="item in Verkauft" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="付款方式">
        <el-select v-model="value" style="width: 188px;">
          <el-option v-for="item in Zahlungs" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="销售员">
        <el-input v-model="inoutmen"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

    </el-form>
    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center">
        </el-table-column>
      </template>
      <el-table-column scope label="操作">
        <!-- <el-button size="mini" type="primary">打印</el-button> -->
      </el-table-column>
    </el-table>
    <!-- 第二个表 -->
    <el-form :inline="true" class="demo-form-inline">
      <template>
        <el-table :data="modalitat" border style="width: 100%">
          <el-table-column fixed  prop="name" label="门店名称" width="120"></el-table-column>
          <el-table-column prop="date" label="日期" width="150"></el-table-column>
          <el-table-column prop="province" label="备注"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template>
              <el-button type="text" size="small" @click="dialogVisible = true">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog title="输入备注" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <el-input v-model="inoutmen"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>

      </template>
    </el-form>
  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import axios from "axios";
import { url } from '../js/url'
export default {
  name: 'PaymentFlowNote',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      dialogVisible: false,
      inoutmen: '',
      value: '',
      value1: '',
      date_s: '',
      date_e: '',
      Verkauft: [{
        value: '01',
        label: '全部'
      }, {
        value: '02',
        label: '01 - 会籍'
      }, {
        value: '03',
        label: '02 - 私教'
      }, {
        value: '04',
        label: '03 - 商品'
      }, {
        value: '05',
        label: '04 - 租箱'
      }, {
        value: '06',
        label: '05 - 停卡'
      }, {
        value: '03',
        label: '06 - 转卡?'
      }, {
        value: '04',
        label: '07 - 补卡'
      }, {
        value: '05',
        label: '08 - 定金'
      }, {
        value: '06',
        label: '09 - 转店'
      }, {
        value: '03',
        label: '10 - 转让'
      }, {
        value: '04',
        label: '11 - 小团操'
      }, {
        value: '05',
        label: '12 - K-Yoga'
      }, {
        value: '06',
        label: '20 - 退卡'
      }],
      Zahlungs: [
        {
          value: '02',
          label: '现金'
        }, {
          value: '03',
          label: '支付宝'
        }, {
          value: '04',
          label: '刷卡'
        }, {
          value: '05',
          label: '微信'
        }, {
          value: '06',
          label: '储值卡'
        }],

      tableTitle: [
        { title: '单号', data: 'num' },
        { title: '门店名称', data: 'storeName' },
        { title: '销售日期', data: 'name' },
        { title: '销售类型', data: 'phone' },
        { title: '合同号', data: 'idCard' },
        { title: '金额', data: 'timeHorizon' },
        { title: '付款方式', data: 'type' },
        { title: '销售员1', data: 'shellUser' },
        { title: '销售员2', data: 'shellUser' },
        { title: '收银员', data: 'phone' },
        { title: '备注', data: 'shellUser' },

      ],
      tableData: [{}],
      modalitat: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]

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
</style>
