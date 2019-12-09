<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="销售员">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="合同类型">
        <el-select v-model="formInline.regions">
          <el-option label="全部" value="01"></el-option>
          <el-option label="会籍" value="2"></el-option>
          <el-option label="私教" value="3"></el-option>
          <el-option label="定金" value="4"></el-option>
          <el-option label="停卡" value="5"></el-option>
          <el-option label="转让" value="6"></el-option>
          <el-option label="转店" value="7"></el-option>
          <el-option label="补卡" value="8"></el-option>
          <el-option label="租箱" value="9"></el-option>
          <el-option label="K-Yoga" value="10"></el-option>
          <el-option label="私教预约" value="11"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="合同号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="序号" width="50"></el-table-column>
      <el-table-column prop="name" label="门店名称" width="120"></el-table-column>
      <el-table-column prop="province" label="合同号" width="120"> </el-table-column>
      <el-table-column prop="city" label="合同类型" width="120"></el-table-column>
      <el-table-column prop="address" label="会员编号" width="120"></el-table-column>
      <el-table-column prop="zip" label="会员姓名" width="120"> </el-table-column>
      <el-table-column prop="dy" label="日期" width="120"></el-table-column>
      <el-table-column prop="prov" label="状态" width="120"> </el-table-column>
      <el-table-column prop="ci" label="销售员" width="120"></el-table-column>
      <el-table-column prop="ty" label="销售员2" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150"><template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看合同</el-button>
          <el-button type="text" size="small">上传签名</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="uys">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>

  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'inexhetong',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      currentPage: 5,
      formInline: {
        user: '',
        region: ''
      },

      value1: '',
      tableData: [{
        date: '20',
        name: '王小虎',
        province: '0000000',
        city: '普陀区',
        address: '01111111',
        zip: '111111',
        dy:'111111',
        prov:'11111',
        ci:'11111',
        ty:'222222'
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
@import './../../assets/css/table.css';
.uys {
    width: 50%;
    margin: auto;
}
.APPX {
    width: 100%;
}
</style>
