<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <div class="ruchun">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">入场</el-button>
        </el-form-item>

      </el-form>

      <div class="shfen">
        <button type="primary" @click="onSubmit" class="btoom">读取身份证信息</button>
        <el-checkbox v-model="checked" class="zibo">自动读卡</el-checkbox>
        <span class="tuty">下载读卡器</span>
      </div>

    </div>
    <div class="katable">
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="卡号" width="80">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="入场时间">
          </el-table-column>
        </el-table>
      </template>

    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'editor',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      checked: true,
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        date: '20',
        name: '王小虎',
        address: '2018-12-23'
      }, {
        date: '20',
        name: '王小虎',
        address: '2018-12-23'
      }, {
        date: '20',
        name: '王小虎',
        address: '2018-12-23'
      }, {
        date: '20',
        name: '王小虎',
        address: '2018-12-23'
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
@import './../../assets/css/table.css';
.ruchun {
    width: 40%;
    height: 300px;
    background: white;
}
.katable {
    margin-left: 20px;
    width: 40%;
}
.app {
    width: 100%;
    display: flex;
    margin-top: 10px;
}
.demo-form-inline {
    padding: 10px;
}
.btoom {
    width: 120px !important;
    height: 35px !important;
    margin-left: 10px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
}
.shfen {
    display: flex;
    height: 37px;
}
.zibo {
    height: 37px;
    line-height: 37px;
    margin-left: 15px;
}
.tuty {
    height: 37px;
    line-height: 37px;
    font-size: 14px;
    margin-left: 15px;
}
</style>
