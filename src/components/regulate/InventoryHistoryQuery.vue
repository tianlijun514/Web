<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="门店">
        <el-input v-model="spCode"></el-input>
      </el-form-item>

      <el-form-item label="商品" style="">
        <el-input v-model="spCode" style="width: 110px;"></el-input>
        <el-input v-model="spCode" style="width: 110px;"></el-input>
      </el-form-item>

      <button type="primary" @click="angelegt()" class="ange">...</button>

      <span class="demonstration">保存月份</span>
      <el-date-picker v-model="value2" type="month" placeholder="选择月" style="width: 150px;"></el-date-picker>

      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button type="primary" @click="onSubmit">导出</el-button>

    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="门店编号"></el-table-column>
      <el-table-column prop="name" label="门店名称"></el-table-column>
      <el-table-column prop="dai" label="商品编码"></el-table-column>
      <el-table-column prop="bei" label="商品名称"></el-table-column>
      <el-table-column prop="dai" label="单位"></el-table-column>
      <el-table-column prop="bei" label="数量"></el-table-column>
      <el-table-column prop="dai" label="保存月份"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
    <Auswahl :auswahl="auswahl"></Auswahl>
  </div>

</template>

<script>
import Auswahl from '../common/Auswahl'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'InventoryHistoryQuery',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Auswahl
  },
  data () {
    // 这里存放数据
    return {
      auswahl: {
        show: false
      },
      spCode: '',
      type: '',
      handleClose: '',
      currentPage: 5,
      formInline: {
        user: '',
        region: ''
      },
      value2: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        dai: '00001',
        bei: 'xiixii'
      }],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    angelegt () {
      this.auswahl.show = true;
    },
    onSubmit () {
      console.log('submit!');
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
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
.app {
    width: 100% !important;
}
.block {
    width: 50%;
    margin: auto;
}
.btn {
    background: #333;
    color: white;
    width: 100px;
}
.conment {
    height: 140px;
}
.ange {
    width: 15px;
    height: 24px;
    margin-left: -8px;
    font-weight: 600;
}
.demonstration{
  margin-left: 15px;
}
</style>
