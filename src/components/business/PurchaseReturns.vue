<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <span class="demonstration">退货日期</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

      <el-button type="text" @click="outerVisible = true" class="btn">新增退货商品</el-button>

      <!-- 新增退货商品弹框 -->
      <el-dialog title="新增商品退货数量" :visible.sync="outerVisible">
        <div>
          <span class="demonstration">退货日期</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
        <el-button type="primary" @click="alerts()" style="margin: 20px 130px">+添加商品</el-button>
        <div>
          <span>退货商品明细</span>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="退货单号"></el-table-column>
            <el-table-column prop="name" label="退货日期"></el-table-column>
            <el-table-column prop="dai" label="退货部门编号"></el-table-column>
            <el-table-column prop="bei" label="退货部门名称"></el-table-column>
            <el-table-column prop="province" label="打印状态"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template>
                <el-button type="text" size="small">修改</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" style="margin: 20px 130px">提交</el-button>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
        </div>
      </el-dialog>

    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="退货单号"></el-table-column>
      <el-table-column prop="name" label="退货日期"></el-table-column>
      <el-table-column prop="dai" label="退货部门编号"></el-table-column>
      <el-table-column prop="bei" label="退货部门名称"></el-table-column>
      <el-table-column prop="province" label="打印状态"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
    <Auswahl :dialog="dialog"></Auswahl>
  </div>

</template>

<script>
import Auswahl from '../common/Auswahl'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'business6',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Auswahl
  },
  data () {
    // 这里存放数据
    return {
      dialog: {
        show: false
      },
      handleClose: '',
      outerVisible: false,
      innerVisible: false,
      currentPage: 5,
      formInline: {
        user: '',
        region: ''
      },
      ruleForm: {
        typebian: '',
        name: '',
        region: '',
        resource: '',
        desc: ''
      },

      value1: '',
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
    alerts () {
      this.dialog.show = true;
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
</style>
