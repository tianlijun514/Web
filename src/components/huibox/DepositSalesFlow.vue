<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="定金类型">
        <el-select v-model="formInline.region">
          <el-option label="全部" value="shanghai"></el-option>
          <el-option label="会籍定金" value="beijing"></el-option>
          <el-option label="私教定金" value="sijiao"></el-option>
          <el-option label="停转补定金" value="tingbox"></el-option>
          <el-option label="转让定金" value="zhaun"></el-option>
          <el-option label="租箱定金" value="xiang"></el-option>
          <el-option label="商品定金" value="shoping"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="日期类型">
        <el-select v-model="formInline.regions">
          <el-option label="销售日期" value="xiaoshou"></el-option>
          <el-option label="使用日期" value="shi"></el-option>
        </el-select>
      </el-form-item>
      
      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>

      <el-form-item label="定金编号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="会员卡号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="会员姓名">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="是否使用">
        <el-select v-model="formInline.regiong">
          <el-option label="全部" value="regbox"></el-option>
          <el-option label="未使用" value="rewei"></el-option>
          <el-option label="已使用" value="reshi"></el-option>
          <el-option label="退定金" value="retui"></el-option>
          <el-option label="锁定" value="resuo"></el-option>
          <el-option label="已合并" value="rehe"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>

    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
      </template>
    </el-table>
    
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="40">
      </el-pagination>
    </div>
  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'boxdj',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      currentPage: 1,
      formInline: {
        user: '',
        region: ''
      },
      value1: '',
      tableTitle: [
        { title: '序号', data: 'num' },
        { title: '门店名称', data: 'storeName' },
        { title: '定金编号', data: 'userNo' },
        { title: '会员卡号', data: 'userCardNo' },
        { title: '会员姓名', data: 'userName' },
        { title: '定金类型', data: 'sex' },
        { title: '定金金额', data: 'cardClass' },
        { title: '全额定金', data: 'cardNo' },
        { title: '销售日期', data: 'telNo' },
        { title: '使用日期', data: 'photo' },
        { title: '状态', data: 'cardPhoto' },
        { title: '签名', data: 'caryi' },
        { title: '备注', data: 'carcu' },
        { title: '操作', data: 'carmoney' }
      ],
      tableData: [{
        num: '00012',
        storeName: '天府四街分店',
        userNo: '0001242',
        userCardNo: '刘小军',
        userName: '2018-12-10',
        sex: '普通',
        cardClass: '普通',
        cardNo: '2018-12-12',
        telNo: '2019-12-12',
        photo: '2018-12-01',
        cardPhoto: '2018-12-23',
        caryi: '备注',
        carcu: '10',
        carmoney: '2222'
      },]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
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
.app {
    width: 100%;
}

.block {
    width: 550px;
    margin: auto;
}
</style>
