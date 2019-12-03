<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="门店">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="OA订单号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="入库状态">
        <el-select v-model="formInline.regions">
          <el-option label="入库完了" value="02"></el-option>
          <el-option label="未入库" value="03"></el-option>
        </el-select>
      </el-form-item>

      <el-button type="primary" @click="onSubmit">查询</el-button>

      <el-button type="text" @click="outerVisible = true" class="btn">新增商品入库</el-button>

      <!-- 新增退货商品弹框 -->
      <el-dialog title="新增商品入库数量" :visible.sync="outerVisible">
        <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
          <div>
            <el-form-item label="OA订单号" prop="bian" :rules="[{ required: true, message: 'OA订单号不能为空'}]">
              <el-input v-model.number="numberValidateForm.bian" autocomplete="off"></el-input>
            </el-form-item>
          </div>

          <el-button type="primary" @click="angelegt()" style="margin: 20px 130px">+添加商品</el-button>
          <div>
            <span>入库商品明细</span>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column fixed prop="date" label="商品编码"></el-table-column>
              <el-table-column prop="name" label="商品名称"></el-table-column>
              <el-table-column prop="dai" label="单位"></el-table-column>
              <el-table-column prop="bei" label="数量"></el-table-column>
              <el-table-column fixed="right" label="操作" width="150">
                <template>
                  <el-button type="text" size="small">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button type="primary" @click="submitForm('numberValidateForm')" style="margin: 20px 130px">提交</el-button>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
        </div>
      </el-dialog>

    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="采购单号"></el-table-column>
      <el-table-column prop="name" label="OA单号"></el-table-column>
      <el-table-column prop="dai" label="部门编号"></el-table-column>
      <el-table-column prop="bei" label="部门名称"></el-table-column>
      <el-table-column prop="province" label="入库状态"></el-table-column>
      <el-table-column prop="province" label="打印状态"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small">打印</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">确定</el-button>
        </template>
      </el-table-column>
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
      auswahl: {
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
      numberValidateForm: {
        bian: ''
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
    angelegt  () {
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
</style>
