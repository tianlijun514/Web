<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">

      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>

      <el-form-item style="margin-left: 10px;">
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">Excel导出</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="typeCode" label="序号"></el-table-column>
      <el-table-column prop="typeName" label="区域"></el-table-column>
      <el-table-column prop="subjectCode" label="会所名称"></el-table-column>
      <el-table-column prop="typeCode" label="销售姓名"></el-table-column>
      <el-table-column prop="typeName" label="入职日期"></el-table-column>
      <el-table-column prop="subjectCode" label="工作岗位"></el-table-column>
      <el-table-column prop="typeName" label="新购会员数"></el-table-column>
      <el-table-column prop="subjectCode" label="新购会员金额"></el-table-column>
      <el-table-column prop="typeCode" label="续会会员数"></el-table-column>
      <el-table-column prop="typeName" label="续会会员金额"></el-table-column>
      <el-table-column prop="subjectCode" label="升级会员数"></el-table-column>
      <el-table-column prop="subjectCode" label="升级会员金额"></el-table-column>
      <el-table-column prop="typeName" label="调整会员数"></el-table-column>
      <el-table-column prop="subjectCode" label="调整会员金额"></el-table-column>
      <el-table-column prop="typeCode" label="合计金额"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'MembershipSalesRanking',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
  },
  data () {
    // 这里存放数据
    return {
      currentPage: 1,
      value1: '',
      typeCode: '',
      size: 10,
      total: 0,
      options: [{
        value: '0',
        label: '全部'
      }, {
        value: '1',
        label: '01-Trail Balance试算平衡表'
      }, {
        value: '2',
        label: '02-Cashier Report总表'
      }, {
        value: '3',
        label: '03-剩余定金统计'
      }, {
        value: '4',
        label: '04-剩余PT分析'
      }, {
        value: '5',
        label: '05-剩余有效会籍人数'
      }, {
        value: '6',
        label: '06-DPR收入日'
      }, {
        value: '7',
        label: '07-DPR收入月'
      }, {
        value: '8',
        label: '08-日DPR统计'
      }, {
        value: '9',
        label: '09-月DPR统计'
      }
      ],
      value: '',
      tableData: [{}],
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
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      // this.chaxun();
    },
    // 查询
    chaxun () {
      axios
        .post(base + '/commodity/getSpType', {
          page: this.currentPage,
          size: this.size,
          typeCode: this.typeCode,
          name: this.nameme,
        }).then(res => {
          // console.log(res.data)
          this.tableData = res.data.queryResult.list;
          this.total = res.data.queryResult.total
        })
    },

    // 删除
    // handledelete (row, typeCode) {
    //   this.$confirm('确定要删除此记录吗?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     axios.delete(base + `/commodity/deleteSpType/${row.typeCode}`).then(res => {
    //       console.log(res.data)
    //       if (res.data.code == 10000) {
    //         this.$message({
    //           message: '操作成功',
    //           type: 'success'
    //         });
    //         this.chaxun();
    //       } else {
    //         this.$message.error('删除失败');
    //       }
    //     })
    //   })
    // },

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // this.chaxun()
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
    width: 32%;
    margin: auto;
}

</style>
