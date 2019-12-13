<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="合同编号">
        <el-input v-model="code"></el-input>
      </el-form-item>

      <el-form-item label="结算方式">
        <el-select v-model="clearing">
          <el-option label="全部" value></el-option>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="送货方式">
        <el-select v-model="ps">
          <el-option label="全部" value></el-option>
          <el-option v-for="item in song" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <el-button type="primary" size="small" icon="view" @click='onAddMoney()'>添加</el-button>
    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="code" label="合同编号" width="150"></el-table-column>
      <el-table-column prop="supplier.name" label="供应商" width="120"></el-table-column>
      <el-table-column prop="clearing" label="结算方式">
        <template slot-scope="scope">
          <span>{{scope.row.clearing==1?'经销':'代销'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="startDate" label="合同开始日期"></el-table-column>
      <el-table-column prop="endDate" label="合同结算日期"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <span>{{scope.row.status==1?'有效':'无效'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="ps" label="送货方式">
            <template slot-scope="scope">
          <span>{{scope.row.ps==1?'配送':'直送'}}</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,scope.row)" type="text" size="small" class="btn">修改</el-button>
          <el-button @click="handledelete(scope.row,scope.$index)" type="text" size="small"  class="btn">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <Bian :dialog='dialog' :ruleForm='ruleForm' @update='chaxun'></Bian>
  </div>

</template>

<script>
import Bian from "../common/Bian";
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'business1',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Bian
  },
  data () {
    // 这里存放数据
    return {
      handleClose: '',
      dialogVisible: false,
      currentPage: 1,
      code: "",
      clearing: '',
      ps: '',
      size: 10,
      total: 0,
      ruleForm: {
        code: '',
        clearing: null,
        supplierCode: '',
        startDate: '',
        endDate: '',
        ps:null,
      },
      dialog: {
        show: false,
        title: "",
        option: "edit"
      },
      value1: '',
      tableData: [{}],
      options: [{
        value: '1',
        label: '经销'
      }, {
        value: '2',
        label: '代销'
      }],
      song: [{
        value: '1',
        label: '配送'
      }, {
        value: '2',
        label: '直送'
      }
      ]
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
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    // 查询
    chaxun () {
      let a
      let b
      a = this.clearing ? parseInt(this.clearing) : ''
      b = this.ps ? parseInt(this.ps) : ''
      axios
        .post(base + '/commodity/getSpContract', {
          page: this.currentPage,
          size: this.size,
          code: this.code,
          clearing: a,
          ps: b
        }).then(res => {
          this.tableData = res.data.d;
          this.total = res.data.t
        })
    },
    // 修改
    handleClick (index, row) {
      console.log(row)
      console.log(this.dialog)
      this.dialog = {
        show: true,
        title: '修改',
        option: 'edit'
      };
      this.ruleForm = {
        code: row.code,
      }

    },
    // 添加
    onAddMoney () {
      this.dialog = {
        show: true,
        title: '添加',
        option: 'add'
      };
      this.ruleForm = {
        code: '',
        clearing: '',
        supplierCode: '',
        startDate:'',
        endDate:'',
        ps:'',
      }
      this.dialog.show = true
    },
    // 删除
    handledelete (row, code) {
      this.$confirm('确定要删除此记录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete(base + `/commodity/deleteSpContract/${row.code}`).then(res => {
          if (res.data.c== 10000) {
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
