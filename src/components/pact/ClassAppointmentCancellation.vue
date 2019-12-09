<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="日期">
        <el-date-picker v-model="valueDate" type="date" format="yyyy - MM - dd " value-format="yyyy - MM - dd">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="会员卡号">
        <el-input v-model="typeCode"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="yuyue">预约</el-button>
      </el-form-item>

    </el-form>

    <span class="c-btn-link" @click="beforeDate(valueDate)">《前一天 </span>
    <span class="time">{{dateTime}} </span>
    <span class="c-btn-link" @click="afterDate(valueDate)">后一天》</span>

    <el-table :data="tableData" border style="width: 20%">
      <el-table-column fixed prop="typeCode" label="授课时间"></el-table-column>
      <el-table-column prop="typeName" label="伍一-B01171"></el-table-column>
    </el-table>
    <Sijiaokecheng :sijiao="sijiao"></Sijiaokecheng>
  </div>
</template>

<script>
import Sijiaokecheng from '../common/Sijiaokecheng'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'app',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Sijiaokecheng
  },
  data () {
    // 这里存放数据
    return {
      sijiao: {
        show: false
      },
      dateTime: '',
      typeCode: '',
      valueDate: '',
      tableData: [{
        typeCode: '7:00'
      }, {
        typeCode: '8:00'
      }, {
        typeCode: '9:00'
      }, {
        typeCode: '10:00'
      }, {
        typeCode: '11:00'
      }, {
        typeCode: '12:00'
      }, {
        typeCode: '13:00'
      }, {
        typeCode: '14:00'
      }, {
        typeCode: '15:00'
      }, {
        typeCode: '16:00'
      }, {
        typeCode: '17:00'
      }, {
        typeCode: '18:00'
      }, {
        typeCode: '19:00'
      }, {
        typeCode: '20:00'
      }, {
        typeCode: '21:00'
      }, {
        typeCode: '22:00'
      }, {
        typeCode: '23:00'
      }, {
        typeCode: '24:00'
      },
      ],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    datas (even) {
      var mydata = even;
      var y = mydata.getFullYear();
      var m = mydata.getMonth() + 1;
      var d = mydata.getDate();
      this.dateTime = y + "-" + m + "-" + d;
    },
    beforeDate (date) {
      this.valueDate = new Date(this.valueDate.setDate(this.valueDate.getDate() - 1));
      this.datas(date)
    },
    afterDate (date) {
      this.valueDate = new Date(this.valueDate.setDate(this.valueDate.getDate() + 1))
      this.datas(date)
    },
    chaxun () {
      console.log('2222')
    },
    yuyue () {
      this.sijiao.show = true;
    },

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

    this.valueDate = new Date();
    this.datas(this.valueDate);
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
<style  scoped>
.c-btn-link {
    font-size: 14px;
    color: #369;
}
.time {
    font-size: 14px;
}
</style>
