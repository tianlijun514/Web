<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

   <el-form-item label="供应商">
        <el-select v-model="formInline.regions">
          <el-option label="全部" value="01"></el-option>
          <el-option label="21321 - 3213" value="02"></el-option>
          <el-option label="C00001 - 测试商品" value="03"></el-option>
          <el-option label="G0001 - 荷花池批发市场" value="04"></el-option>
        </el-select>
      </el-form-item>

        <span class="demonstration">日期范围</span>
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>

        <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="yuhao" label="部门编号" width="80"></el-table-column>
      <el-table-column prop="Mname" label="部门名称" width="110"></el-table-column>
      <el-table-column prop="shang" label="合同编号" width="100"></el-table-column>
      <el-table-column prop="name" label="供应商" width="110"></el-table-column>
      <el-table-column prop="yutime" label="商品编号" width="100"></el-table-column>
      <el-table-column prop="Hebian" label="商品名称" width="100"></el-table-column>
      <el-table-column prop="kecheng" label="课程"></el-table-column>
      <el-table-column prop="yuan" label="数量" width="100"></el-table-column>
         <el-table-column prop="hetime" label="金额" width="120"></el-table-column>
      <el-table-column prop="jiedata" label="退货日期" width="120"></el-table-column>
      <el-table-column prop="yuyue" label="操作员" width="120"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  // 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  // 例如：import 《组件名称》 from '《组件路径》';

  export default {
    name: 'business8',
    props: {

    },
    // import引入的组件需要注入到对象中才能使用
    components: {

    },
    data () {
      // 这里存放数据
      return {
          value1:'',
        currentPage: 5,
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          yuhao: '00012',
          Mname: '天府四街分店',
          shang:'11111',
          Hebian: '0001242',
          name: '刘小军',
          kecheng: '2018',
          yuan: '11111',
          jiaolian: '普通',
          yutime: '普通',
          hetime: '2018-12',
          yuyue: '2019-12-12'
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
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`);
      },
      handleClick (row) {
        console.log(row);
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
