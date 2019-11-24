<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="分类">
        <el-select v-model="formInline.regions">
          <el-option label="全部" value="01"></el-option>
          <el-option label="PT" value="02"></el-option>
          <el-option label="游泳" value="03"></el-option>
          <el-option label="团操1对多" value="04"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="合同号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="会员卡号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>

      <el-form-item label="教练工号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="销售员工号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="yuhao" label="序号" width="80"></el-table-column>
      <el-table-column prop="Mname" label="门店名称" width="100"></el-table-column>
      <el-table-column prop="Hebian" label="合同编号" width="90"></el-table-column>
      <el-table-column prop="name" label="会员姓名" width="90"></el-table-column>
      <el-table-column prop="kecheng" label="课程"></el-table-column>
      <el-table-column prop="yutime" label="教练" width="90"></el-table-column>
      <el-table-column prop="hetime" label="总课时" width="80"></el-table-column>
      <el-table-column prop="yuyue" label="预约课时" width="100"></el-table-column>
      <el-table-column prop="keshi" label="核销课时" width="100"></el-table-column>
      <el-table-column prop="money" label="剩余课时" width="80"></el-table-column>
      <el-table-column prop="goudata" label="有效期起日" width="100"></el-table-column>
      <el-table-column prop="jiedata" label="有效期迄日" width="100"></el-table-column>
      <el-table-column prop="jiaolian" label="合同状态"></el-table-column>
      <el-table-column prop="yuan" label="销售员" width="80"></el-table-column>
      <el-table-column prop="xsdata" label="销售日期" width="100"></el-table-column>
      <el-table-column prop="jmoney" label="金额" width="80"></el-table-column>
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
  name: 'chat7',
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
      tableData: [{
        yuhao: '00012',
        Mname: '天府四街分店',
        Hebian: '0001242',
        name: '刘小军',
        kecheng: '2018',
        jiaolian: '普通',
        yutime: '普通',
        hetime: '2018-12',
        yuyue: '2019-12-12',
        keshi: '2018-12-01',
        money: '999',
        goudata: '备注',
        jiedata: '10',
        yuan: '11111',
        xsdata: '2222',
        jmoney: '333',


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
