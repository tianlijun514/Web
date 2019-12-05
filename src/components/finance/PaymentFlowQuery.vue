<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="销售类型">
        <el-select v-model="value" style="width: 188px;">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="付款方式">
        <el-select v-model="value" style="width: 188px;">
          <el-option v-for="item in eine" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="销售员">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>

      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button type="primary" @click="onSubmit">导出</el-button>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%" :summary-method="getSummaries" show-summary>
      <el-table-column prop="yuhao" label="序号" width="80"></el-table-column>
      <el-table-column prop="Mname" label="单号" width="110"></el-table-column>
      <el-table-column prop="shang" label="门店名称" width="100"></el-table-column>
      <el-table-column prop="name" label="销售日期" width="110"></el-table-column>
      <el-table-column prop="yutime" label="销售类型" width="100"></el-table-column>
      <el-table-column prop="Hebian" label="合同号" width="100"></el-table-column>
      <el-table-column prop="kecheng" label="金额"></el-table-column>
      <el-table-column prop="yuan" label="付款方式" width="100"></el-table-column>
      <el-table-column prop="hetime" label="销售员1" width="120"></el-table-column>
      <el-table-column prop="jiedata" label="销售员2" width="120"></el-table-column>
      <el-table-column prop="yuyue" label="收银员" width="120"></el-table-column>
      <el-table-column prop="yuyue" label="备注" width="80"></el-table-column>
    </el-table>

    <el-table :data="tablefukuan" border style="width: 30%;margin-top: 20px;">
      <el-table-column prop="xuhao" label="序号" width="80"></el-table-column>
      <el-table-column prop="fukuan" label="付款方式" width="150"></el-table-column>
      <el-table-column prop="money" label="金额"></el-table-column>
    </el-table>

    <el-table :data="tabletype" border style="width: 30%;margin-top: 20px;">
      <el-table-column prop="xuhao" label="序号" width="80"></el-table-column>
      <el-table-column prop="fukuan" label="销售类型" width="150"></el-table-column>
      <el-table-column prop="money" label="金额"></el-table-column>
    </el-table>

    <el-table :data="tableday" border style="width: 30%;margin-top: 20px;">
      <el-table-column prop="xuhao" label="门店名称" width="120"></el-table-column>
      <el-table-column prop="fukuan" label="日期" width="150"></el-table-column>
      <el-table-column prop="money" label="备注"></el-table-column>
    </el-table>
  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'PaymentFlowQuery',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      value: '',
      value1: '',
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        yuhao: '00012',
        Mname: '天府四街分店',
        shang: '11111',
        Hebian: '0001242',
        name: '刘小军',
        kecheng: '2018',
        amount1: '234',
        amount2: '3.2',
        amount3: 10,
        yuan: '11111',
        jiaolian: '普通',
        yutime: '普通',
        hetime: '2018-12',
        yuyue: '2019-12'
      }],
      tablefukuan: [{
        xuhao: '11',
        fukuan: '支付宝',
        money: '1111'
      }],
      tabletype: [{
        xuhao: '11',
        fukuan: '支付宝',
        money: '1111'
      }],
      tableday: [{
        xuhao: '11',
        fukuan: '支付宝',
        money: '1111'
      }],
      options: [{
        value: '01',
        label: '01 - 科目代码'
      }, {
        value: '02',
        label: '02 - 调整代码'
      }, {
        value: '03',
        label: '03 - 退款代码'
      }],
      eine: [{
        value: '01',
        label: '全部'
      }, {
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
      },
      ]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onSubmit () {
      console.log('submit!');
    },
    getSummaries (param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 1) {
          sums[index] = '合计';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += ' 元';
        } else {
          // sums[index] = 'N/A';
        }
      });

      return sums;
    }

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

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
