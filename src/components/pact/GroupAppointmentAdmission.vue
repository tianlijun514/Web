<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="类型">
        <el-select v-model="formInline.regions">
          <el-option label="1对多" value="wdy"></el-option>
          <el-option label="1对1" value="yp"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="会员卡号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="手机号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onetable">1对1小团操预约</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="alstable">1对多小团操预约</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center">

        </el-table-column>

      </template>
      <!-- <el-table-column scope label="操作" type="selection"> -->
      <!-- <el-button size="mini" type="primary">打印</el-button> -->
      <!-- </el-table-column> -->

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
      tableTitle: [
        { title: '姓名', data: 'num' },
        { title: '手机号', data: 'storeName' },
        { title: '类型', data: 'telNo' },
        { title: '课程', data: 'userName' },
        { title: '教练', data: 'userNo' },
        { title: '预约时间', data: 'sex' },
        { title: '上课时间', data: 'cardClass' },
        { title: '状态', data: 'cardNo' },
        { title: '操作', data: 'hao' },

      ],
      tableData: [{
        num: '00012',
        storeName: '天府四街分店',
        userNo: '0001242',
        userName: '2018-12-10',
        sex: '普通',
        cardClass: '普通',
        cardNo: '2018-12-12',
        telNo: '2019-12-12',
        hao: '2018-12-12',

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

    onetable () {
      this.$router.push('./onetable')
    },
    alstable () {
      this.$router.push('./alstable')
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
