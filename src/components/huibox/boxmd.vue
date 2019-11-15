<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="合同号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="hetong">
      <span class="titec">合同门店：</span>
      <span class="biv">00006红牌楼</span>
    </div>
    <div class="hetong">
      <span class="titec">会籍类型：</span>
      <span class="biv">M80028-奇門连锁赠送2年卡</span>
    </div>
    <span class="titec">指定使用门店</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="50"></el-table-column>
      <el-table-column prop="name" label="门店编号" width="150"></el-table-column>
      <el-table-column prop="address" label="门店名称"  width="200"></el-table-column>
    </el-table>

    <span class="titec">指定区域: 100001-全城门店</span>
    <el-table :data="quandata" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="50"></el-table-column>
      <el-table-column prop="name" label="门店编号" width="150"></el-table-column>
      <el-table-column prop="address" label="门店名称"  width="200"></el-table-column>
    </el-table>

  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'boxhy',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {

      formInline: {
        user: '',
        region: ''
      },
      value1: '',
      tableData: [{
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      quandata: [{
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
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
.el-form-item__content {
    width: 100px !important;
}
@import './../../assets/css/table.css';
.block {
    width: 50%;
    margin: auto;
}
.hetong {
    height: 30px;
    line-height: 30px;
}
.el-table, 
.el-table__expanded-cell {
    background-color: rgb(240, 240, 240);
}
 .titec{
   font-size: 15px;
 }
  .biv{
    font-size: 14px;
  }
</style>
