<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="类型">
        <el-select v-model="formInline.regions">
          <el-option label="全部" value="01"></el-option>
          <el-option label="01 - 会籍" value="2"></el-option>
          <el-option label="02 - 私教" value="3"></el-option>
          <el-option label="03 - 定金" value="4"></el-option>
          <el-option label="04 - 停卡" value="5"></el-option>
          <el-option label="05 - 转让" value="6"></el-option>
          <el-option label="06 - 转店" value="7"></el-option>
          <el-option label="07 - 补卡" value="8"></el-option>
          <el-option label="08 - 租箱" value="9"></el-option>
          <el-option label="09 - K-Yoga" value="10"></el-option>
          <el-option label="10 - 私教预约" value="11"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="formInline.regions">
          <el-option label="全部" value="02"></el-option>
          <el-option label="已签未确认" value="01"></el-option>
          <el-option label="已签已确认" value="02"></el-option>
          <el-option label="已签未通过" value="03"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="销售员">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
      <el-form-item label="合同号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
      <el-form-item label="会员/姓名">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center">
        </el-table-column>
      </template>
      <el-table-column scope label="操作">
        <el-button size="mini" type="primary">确认</el-button>
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
        { title: '合同号', data: 'hyt' },
        { title: '类型', data: 'telNo' },
        { title: '会员编号', data: 'userName' },
        { title: '姓名', data: 'name' },
        { title: '日期', data: 'userNo' },
        { title: '状态', data: 'usy' },
        { title: '销售员', data: 'userCardNo' },
        { title: '销售员2', data: 'mone' },

      ],
      tableData: [{
        num: '00012',
        storeName: '天府四街分店',
        hyt: '刘小军',
        telNo: '2018-12-10',
        userName: '普通',
        name: '普通',
        userNo: '2018-12-12',
        usy: '2019-12-12',
        userCardNo: '2018-12-12',
        mone: '2019-12-12',

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
