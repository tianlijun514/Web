<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item label="盘点部门">
        <el-select v-model="value">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="herleiten">导出</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="herleiten">导出全部库存</el-button>
      </el-form-item>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="退货单号"></el-table-column>
        <el-table-column prop="name" label="门店编号"></el-table-column>
        <el-table-column prop="dai" label="门店名称"></el-table-column>
        <el-table-column prop="bei" label="商品编码"></el-table-column>
        <el-table-column prop="province" label="商品名称"></el-table-column>
        <el-table-column prop="province" label="单位"></el-table-column>
        <el-table-column prop="province" label="当前库存数量"></el-table-column>
        <el-table-column prop="province" label="当前盘点数量">
          <template>
            <el-input v-model="bian" autocomplete="off"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="bei" label="盘点提交库存数量"></el-table-column>
        <el-table-column prop="province" label="盘点提交数量"></el-table-column>
        <el-table-column prop="province" label="盈亏数量"></el-table-column>
        <el-table-column prop="province" label="当前盘点时间"></el-table-column>
        <el-table-column prop="province" label="盘点提交时间"></el-table-column>
      </el-table>
      <div class="vorlegen">

        <el-form-item>
          <el-button type="primary" @click="herleiten">确认并保存</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="herleiten">提交盘点数据</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="herleiten">清除盘点数据</el-button>
        </el-form-item>

           <el-form-item>
        <el-button type="primary" @click="herleiten">按盘盈亏数量更新库存</el-button>
      </el-form-item>
      </div>
    </el-form>
  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import axios from "axios";
import { url } from '../js/url'
export default {
  name: 'ProductInventory',
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
      bian: '',
      inoutmen: '',
      date_s: '',
      date_e: '',
      value: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        dai: '00001',
        bei: 'xiixii'
      }],
      options: [{
        value: '01',
        label: '全部'
      }, {
        value: '02',
        label: '11111 - 22222'
      }, {
        value: '03',
        label: '222 - 222'
      }, {
        value: '04',
        label: 'L001 - 饮料类'
      }, {
        value: '05',
        label: 'L002 - 会籍办卡类'
      }, {
        value: '06',
        label: 'L003 - 工本费'
      }, {
        value: '07',
        label: 'L004 - 锁'
      }, {
        value: '08',
        label: 'sp1001 - 运动饮料'
      }],
      Verkaufen: [{
        value: '1',
        label: '卖品',
      }, {
        value: '2',
        label: '非卖品',
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
@import './../../assets/css/table.css';
.APPX {
    width: 100%;
}
.vorlegen{
  margin:  40px auto;
  width: 40%;
}
</style>
