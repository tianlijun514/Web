<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="领用类型编码">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item label="领用类型名称">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

      <el-button type="text" @click="dialogVisible = true" class="btn">新增</el-button>

      <!-- 添加弹框 -->
      <el-dialog title="新增" :visible.sync="dialogVisible" width="30%">
        <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
          <el-form-item label="类型编号" prop="bian" :rules="[{ required: true, message: '类型编号不能为空'}]">
            <el-input v-model.number="numberValidateForm.bian" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类型名称" prop="typename" :rules="[{ required: true, message: '类型名称不能为空'}]">
            <el-input v-model.number="numberValidateForm.typename" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="beizhu" style="margin-left: 39px;">
            <el-input v-model.number="numberValidateForm.beizhu" autocomplete="off"></el-input>
          </el-form-item>
          <br>
          <el-form-item style="margin-left:85px;">
            <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
<!-- ///// -->




  <!-- 添加弹框 -->
      <el-dialog title="修改2" :visible.sync="dialogVisible2" width="30%">
        <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
          <el-form-item label="类型编号" prop="bian" :rules="[{ required: true, message: '类型编号不能为空'}]">
            <el-input v-model.number="numberValidateForm.bian" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类型名称" prop="typename" :rules="[{ required: true, message: '类型名称不能为空'}]">
            <el-input v-model.number="numberValidateForm.typename" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="beizhu" style="margin-left: 39px;">
            <el-input v-model.number="numberValidateForm.beizhu" autocomplete="off"></el-input>
          </el-form-item>
          <br>
          <el-form-item style="margin-left:85px;">
            <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
        </span>
      </el-dialog>
<!-- ///// -->





    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="编码" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column prop="province" label="备注"></el-table-column>
      <el-table-column fixed="right" label="操作"  width="400">
        <template>
          <el-button @click="dialogVisible2 = true" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
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
  name: 'business',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      handleClose: '',
      dialogVisible: false,
         dialogVisible2: false,
      currentPage: 5,
      formInline: {
        user: '',
        region: ''
      },
      numberValidateForm: {
        bian: '',
        typename: '',
        beizhu: ''
      },
      value1: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
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
    },
    
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
    width: 55px;
}
</style>
