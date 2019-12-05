<!-- vue快捷创建组件 -->
<template>
  <div class='pact'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">
      <div class="shenfen">
        <div class="block">
          <span class="demonstration">日期</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width: 201px">
          </el-date-picker>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="授课时间" width="90"></el-table-column>
        <el-table-column prop="name" label="11/19"></el-table-column>
        <el-table-column prop="day" label="11/20"></el-table-column>
        <el-table-column prop="muy" label="11/21"></el-table-column>
        <el-table-column prop="tau" label="11/22"></el-table-column>
        <el-table-column prop="sum" label="11/23"></el-table-column>
        <el-table-column prop="sunm" label="11/24"></el-table-column>
        <el-table-column prop="address" label="11/25"></el-table-column>
        <el-table-column prop="buy" label="11/26"></el-table-column>
      </el-table>

    </el-form>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'huibox',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      value1: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [{
        date: '8:00',
        name: '11111',
        day:'2222',
        muy:'3333',
        tau:'444',
        sum:'5555',
        sunm:'6666',
        address:'777',
        buy:'8888',

      }]
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
@import './../../assets/css/table.css';
.demonstration {
    height: 32px;
    vertical-align: middle;
    line-height: 32px !important;
    font-size: 14px;
    color: #606266;
    padding: 0 10px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.shenfen {
    display: flex;
}
</style>
