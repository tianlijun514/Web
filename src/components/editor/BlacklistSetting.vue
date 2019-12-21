<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="证件号/姓名">
        <el-input v-model="str"></el-input>
      </el-form-item>

      <el-form-item label="状态">
        <el-select v-model="status">
          <el-option label="全部" value></el-option>
          <el-option v-for="item in song" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click='test_click2("add")'>新增</el-button>
      </el-form-item>

    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="papersType" label="证件类型" width="100"></el-table-column>
      <el-table-column prop="papersNum" label="证件号" width="220"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="手机" width="180"></el-table-column>
      <el-table-column prop="status" label="状态" width="180"></el-table-column>
      <el-table-column scope label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary">启用</el-button>
          <el-button size="mini" type="primary" @click='test_click2("edit",scope.row)'>修改</el-button>
          <el-button size="mini" type="primary">删除</el-button>
          <el-button size="mini" type="primary">解除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="uys">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <!-- 添加弹框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm" label-width="80px">
        <el-form-item label="证件类型">
          <el-select v-model="numberValidateForm.papersType" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号">
          <el-input v-model="numberValidateForm.papersNumber" autocomplete="off" class="code"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="numberValidateForm.name" autocomplete="off" class="code"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="numberValidateForm.phone" autocomplete="off" class="code"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="numberValidateForm.remark" autocomplete="off" type="textarea" class="code"></el-input>
        </el-form-item>
        <br>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>

import axios from "axios";
import { base } from '../js/url'
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
      dialogVisible: false,
      currentPage: 1,
      size: 10,
      total: 0,
      status: '',
      str: '',
      title: '',
      numberValidateForm: {
        papersType: '',
        papersNumber: '',
        name: '',
        phone: '',
        remark: ''
      },

      value1: '',
      tableData: [{
        num: '00012',
        storeName: '天府四街分店',
        name: '2019-12-12',
        telNo: '2019-12-12',
        userName: '2018-12-10',
      }],
      options: [{
        value: '1',
        label: '身份证'
      }, {
        value: '2',
        label: '护照'
      }, {
        value: '3',
        label: '回乡证'
      }],
      value: '',
      song: [{
        value: '1',
        label: '有效'
      }, {
        value: '0',
        label: '无效'
      }
      ]

    }
  },
  // 监听属性 类似于data概念
  computed: {

  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

    handleSizeChange (val) {
      this.size = val;
      this.chaxun();
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.chaxun();
    },
    // 查询
    chaxun () {
      let a
      a = this.status ? parseInt(this.status) : null
      axios
        .post(base + '/blacklist/queryList/' + this.currentPage + '/' + this.size, {
          str: this.str,
          status: a
        }).then(res => {
          this.tableData = res.data.d
          this.total = res.data.t
        })
    },

    // 判断是新增还是修改
    test_click2: function (e, b) {
      this.dialogVisible = true
      if (e == 'add') {
        this.title = '新增'
        this.option = 'add'
      } else {
        this.title = '编辑'
        this.option = 'update'
        this.numberValidateForm.papersType = b.papersType,
        this.numberValidateForm.papersNumber = b.papersNum
      }
    },
    // 添加
    submitForm (numberValidateForm) {
      this.$refs[numberValidateForm].validate((valid) => {
        let a
        a = this.papersType ? parseInt(this.papersType) : ''
        if (valid) {
          axios.post(base + `/blacklist/` + this.option, this.numberValidateForm)
            .then(res => {
              if (res.data.c == 10000) {
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
.uys {
    width: 50%;
    margin: auto;
}
.APPX {
    width: 100%;
}
.code {
    width: 203px;
}
</style>
