<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="名称">
        <el-input v-model="typeCode"></el-input>
      </el-form-item>

      <!-- <el-form-item label="分类名称">
        <el-input v-model="nameme"></el-input>
      </el-form-item> -->
      <el-form-item label="门店">
        <el-select v-model="value" style="width: 188px;">
          <el-option v-for="item in eine" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <!-- <el-button type="text" @click="dialogVisible = true" class="btn">新增</el-button> -->
      <el-button type="primary" size="small" icon="view" @click='onAddMoney()'>新增</el-button>
    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="typeCode" label="编号" width="150"></el-table-column>
      <el-table-column prop="typeName" label="名称" width="120"></el-table-column>
      <el-table-column prop="subjectCode" label="门店"></el-table-column>
      <el-table-column prop="remark" label="金额"></el-table-column>
      <el-table-column prop="typeName" label="启用时间" width="120"></el-table-column>
      <el-table-column prop="subjectCode" label="结束时间"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="handledelete(scope.row,scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <Vorverkauf :diao='diao' :ruleForm='ruleForm' @update='chaxun'></Vorverkauf>
  </div>

</template>

<script>
import Vorverkauf from "../common/Vorverkauf";
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'PresaleSetting',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Vorverkauf
  },
  data () {
    // 这里存放数据
    return {
      value: '',
      handleClose: '',
      dialogVisible: false,
      currentPage: 1,
      typeCode: '',
      nameme: '',
      size: 10,
      total: 0,
      currentPage: 1,
      ruleForm: {
        typeCode: '',
        typeName: '',
        subjectCode: '',
        isDepositCard: null,
        remark: '',
      },
      diao: {
        show: false,
        title: "",
        option: "edit"
      },
      value1: '',
      tableData: [{}],
      eine: [{
        value: '01',
        label: '全部'
      }, {
        value: '02',
        label: '会籍定金'
      }, {
        value: '03',
        label: '私教定金'
      }, {
        value: '04',
        label: '停转补定金'
      }, {
        value: '05',
        label: '转让定金'
      }, {
        value: '06',
        label: '租箱定金'
      }, {
        value: '07',
        label: '商品定金'
      }],
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
      this.chaxun();
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
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
        typeCode: row.typeCode,
        typeName: row.typeName,
        subjectCode: row.subjectCode,
        isDepositCard: row.isDepositCard,
        remark: row.remark,
        // id: row._id,
      }

    },
    // 添加
    onAddMoney () {
      this.diao = {
        show: true,
        title: '添加',
        option: 'add'
      };
      this.ruleForm = {
        typeCode: '',
        typeName: '',
        subjectCode: '',
        isDepositCard: null,
        remark: '',
        // id: '',
      }
      this.diao.show = true
    },
    // 删除
    handledelete (row, typeCode) {
      this.$confirm('确定要删除此记录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete(base + `/commodity/deleteSpType/${row.typeCode}`).then(res => {
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
