<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="类型">
        <el-select v-model="regions">
          <el-option label="全部" value="01" ></el-option>
          <el-option label="02 - 私教" value="02" ></el-option>
          <el-option label="03 - 定金" value="03" ></el-option>
          <el-option label="04 - 停卡" value="04" ></el-option>
          <el-option label="05 - 转让" value="05" ></el-option>
          <el-option label="06 - 转店" value="06" ></el-option>
          <el-option label="07 - 补卡" value="07" ></el-option>
          <el-option label="08 - 租箱" value="08" ></el-option>
          <el-option label="09 - K-Yoga" value="09" ></el-option>
          <el-option label="10 - 私教预约" value="10" ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="regions">
          <el-option label="未打印" value="1" ></el-option>
          <el-option label="已打印" value="2" ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="合同号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <span class="demonstration">日期</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>



      <el-form-item label="会员/姓名">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="yuhao" label="序号" width="80"></el-table-column>
      <el-table-column prop="Mname" label="门店名称"></el-table-column>
      <el-table-column prop="Hebian" label="合同号"></el-table-column>
      <el-table-column prop="name" label="合同类型"></el-table-column>
      <el-table-column prop="kecheng" label="会员编号"></el-table-column>
      <el-table-column prop="jiaolian" label="会员姓名"></el-table-column>
      <el-table-column prop="yutime" label="日期"></el-table-column>
      <el-table-column prop="hetime" label="状态"></el-table-column>
      <el-table-column prop="timey" label="打印时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">合同打印</el-button>

        </template>
      </el-table-column>
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
  name: 'chat4',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      regions:'',
      currentPage: 5,
      formInline: {
        user: '',
        region: ''
      },
      value1: '',
      tableData: [{
        yuhao: '00012',
        Mname: '天府四街分店',
        Hebian: '0001242',
        name: '刘小军',
        kecheng: '2018-12-10',
        jiaolian: '普通',
        yutime: '普通',
        hetime: '2018-12-12',
        timey: '2019-12-12'
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
