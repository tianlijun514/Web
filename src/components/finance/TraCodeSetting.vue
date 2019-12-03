<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="科目代码">
        <el-input v-model="spCode"></el-input>
      </el-form-item>

      <el-form-item label="科目名称">
        <el-input v-model="spName"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <el-button type="text" @click='test_click2("add")' class="btn">新增</el-button>
      <!-- 添加弹框 -->
      <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
        <el-form :model="numberValidateForm" ref="numberValidateForm">

          <el-form-item label="科目代码">
            <el-input v-model.number="numberValidateForm.typeCode" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="科目名称">
            <el-input v-model.number="numberValidateForm.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="类别" style="margin-left: 28px">
            <el-select v-model="value" style="width: 188px;">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

             <el-form-item label="调整代码">
            <el-input v-model.number="numberValidateForm.name" autocomplete="off"></el-input>
          </el-form-item>

             <el-form-item label="退款代码">
            <el-input v-model.number="numberValidateForm.name" autocomplete="off"></el-input>
          </el-form-item>

      

          <el-form-item label="分类" style="margin-left: 28px">
            <el-select v-model="numberValidateForm.subjectCode" style="width: 188px;">
              <el-option v-for="item in dan" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

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
      <el-table-column prop="spCode" label="科目代码"></el-table-column>
      <el-table-column prop="spName" label="科目名称"></el-table-column>
      <el-table-column prop="typeCode" label="类型"></el-table-column>
      <el-table-column prop="unit" label="调整代码"></el-table-column>
      <el-table-column prop="price" label="退款代码"></el-table-column>
      <el-table-column label="操作" width="120">
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
  name: 'TraCodeSetting',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      value1: '',
      dialogVisible: false,
      currentPage: 1,
      spCode: '',
      spName: '',
      type: '',
      status: '',
      size: 10,
      total: 0,
      id: '',
      title: '',
      option: '',
      dan: [{
        value: '1',
        label: '01 - 会籍'
      }, {
        value: '2',
        label: '02 - 私教'
      }, {
        value: '3',
        label: '03 - 商品'
      }, {
        value: '4',
        label: '09 - 支付方式'
      }],
      options: [{
        value: '01',
        label: '01 - 科目代码'
      }, {
        value: '02',
        label: '02 - 调整代码'
      }, {
        value: '03',
        label: '03 - 退款代码'
      }],
      value: '',
      numberValidateForm: {
        typeCode: '',
        name: '',
        remark: ''
      },
      value1: '',
      tableData: [{}],
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
        post(base + '/commodity/getSpInfo', {
          page: this.currentPage,
          size: this.size,
          spCode: this.spCode,
          spName: this.spName,
          mnemonic: this.mnemonic

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
.boxsize {
    margin-left: 15px;
}
.box {
    margin-left: 17px;
}
.demonstration {
    margin-left: 13px;
}

.leftin {
    margin-left: 25px;
}
</style>
