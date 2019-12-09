<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="领用类型编码">
        <el-input v-model="typeCode"></el-input>
      </el-form-item>

      <el-form-item label="领用类型名称">
        <el-input v-model="namebox"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <el-button type="text" @click='test_click2("add")' class="btn">新增</el-button>
      <!-- 添加弹框 -->
      <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
        <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm" :rules="rules">
          <el-form-item label="类型编号" prop="typeCode">
            <el-input v-model.number="numberValidateForm.typeCode" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类型名称" prop="name">
            <el-input v-model.number="numberValidateForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="remark" style="margin-left: 39px;">
            <el-input v-model.number="numberValidateForm.remark" autocomplete="off"></el-input>
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

    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="typeCode" label="编码" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column fixed="right" label="操作" width="400">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click='test_click2("edit",scope.row)'>修改</el-button>
          <el-button type="text" size="small" @click='handleClose(scope.row,scope.$index)'>删除</el-button>
        </template>
      </el-table-column>
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
  name: 'business',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      dialogVisible: false,
      currentPage: 1,
      typeCode: '',
      namebox: '',
      size: 10,
      total: 0,
      id: '',
      title: '',
      option: '',
      numberValidateForm: {
        typeCode: '',
        name: '',
        remark: ''
      },
      value1: '',
      tableData: [{}],
      rules: {
        typeCode: [
          { required: true, message: '类型编号不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '类型名称不能为空', trigger: 'blur' }
        ]
      }
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
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.chaxun();
    },

    //删除
    handleClose (row, typeCode) {
      this.$confirm('确定要删除此记录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete(base + `/commodity/deleteReceiveType/${row.typeCode}`).then(res => {
          console.log(res.data)
          if (res.data.code == 10000) {
            this.$message({
              message: '操作成功',
              type: 'success'
            });
            this.chaxun();
          } else {
            this.$message.error('删除失败');
          }
        })
      })
    },


    test_click2: function (e, b) {
      this.dialogVisible = true
      if (e == 'add') {
        this.title = '新增'
        this.option = 'addReceiveType'
      } else {
        this.title = '编辑'
        this.option = 'updateReceiveType'
        this.numberValidateForm.typeCode = b.typeCode,
          this.numberValidateForm.name = b.name,
          this.numberValidateForm.remark = b.remark
        console.log(b.name)
      }
      console.log(this.option)
      console.log(e);   // 输出结果：123
    },

    // 查询
    chaxun () {
      axios.
        post(base + '/commodity/getReceiveType', {
          page: this.currentPage,
          size: this.size,
          name: this.namebox,
          typeCode: this.typeCode
        }).then(res => {
          console.log(res.data)
          this.tableData = res.data.queryResult.list
          this.total = res.data.queryResult.total
        })

    },
    // 添加
    submitForm (numberValidateForm) {
      console.log(111)
      this.$refs[numberValidateForm].validate((valid) => {
        console.log(valid)
        if (valid) {
          axios.post(base + `/commodity/` + this.option, {
            // data:this.numberValidateForm
            remark: this.numberValidateForm.remark,
            name: this.numberValidateForm.name,
            typeCode: this.numberValidateForm.typeCode
          })
            .then(res => {
              if (res.data.code == 10000) {
                this.$message({
                  message: '操作成功',
                  type: 'success'
                });
                this.dialogVisible = false;
                this.numberValidateForm = {}
                this.chaxun()
              } else {
                this.$message.error('添加失败，请重新再试！');
              }
            })
        }
      });
    },
    resetForm (numberValidateForm) {
      this.$refs[numberValidateForm].resetFields();
    },

  },


  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun()
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
