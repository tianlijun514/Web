<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="TB-总表生成日期">
        <el-date-picker v-model="value1" type="date"></el-date-picker>
      </el-form-item>
      <el-button type="primary" size="small" icon="view" @click='onAddMoney()'>生成TB总表</el-button><br>

      <el-form-item label="Cashier Report总表生成日期">
        <el-date-picker v-model="value1" type="date"></el-date-picker>
      </el-form-item>
      <el-button type="primary" size="small" icon="view" @click='onAddMoney()'>生成Cashier Report总表</el-button><br>

      <el-form-item label="DPR日报表生成日期">
        <el-date-picker v-model="value1" type="date"></el-date-picker>
      </el-form-item>
      <el-button type="primary" size="small" icon="view" @click='onAddMoney()'>生成DPR日报表</el-button><br>

      <el-form-item label="剩余定金统计报表生成月份">
        <el-date-picker v-model="value2" type="month"></el-date-picker>
      </el-form-item>
      <el-button type="primary" size="small" icon="view" @click='onAddMoney()'>生成剩余定金统计报表</el-button><br>

      <el-form-item label="DPR月报表生成月份">
        <el-date-picker v-model="value2" type="month"></el-date-picker>
      </el-form-item>
      <el-button type="primary" size="small" icon="view" @click='onAddMoney()'>生成DPR月报表</el-button><br>

      <el-form-item label="DPR日期">
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      </el-form-item>
      <el-button type="primary" size="small" icon="view" @click='onAddMoney()'>DPR期间报表生成</el-button>
    </el-form>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'app',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      value1: '',
      value2: '',
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

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
<style  scoped>
.app{
 width: 100%;

}
.demo-form-inline{
 background: white;
  width: 98%;
  padding: 15px;
}
</style>
