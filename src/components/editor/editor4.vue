<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
      <el-form-item label="会员姓名">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
      <el-form-item label="证件号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="销售员">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
     
      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="xinzheng">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">导出</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center">

        </el-table-column>

      </template>
      <el-table-column scope label="操作">
        <!-- <el-button size="mini" type="primary">打印</el-button> -->
      </el-table-column>
    </el-table>
    <div class="uys">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formInline: {
        user: '',
        region: ''
      },

      value1: '',
      tableTitle: [
        { title: '序号', data: 'num' },
        { title: '门店名称', data: 'storeName' },
        { title: '姓名', data: 'name' },
        { title: '手机号', data: 'telNo' },
        { title: '证件号', data: 'userName' },
        { title: '来访日期', data: 'userNo' },
        { title: '时段', data: 'userCardNo' },
        { title: '类型', data: 'sex' },
        { title: '销售员', data: 'cardClass' },
      ],
      tableData: [{
        num: '00012',
        storeName: '天府四街分店',
        name: '2019-12-12',
        telNo: '2019-12-12',
        userName: '2018-12-10',
        userNo: '0001242',
        userCardNo: '刘小军',
        sex: '普通',
        cardClass: '普通',
      },]
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
    xinzheng () {
      this.$router.push('./fang')
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
.uys {
    width: 50%;
    margin: auto;
}
.APPX {
    width: 100%;
}
</style>
