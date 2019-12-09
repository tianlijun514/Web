<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="领用部门">
        <el-select v-model="type" style="width: 185px;">
          <el-option v-for='item in type_list' :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>

      <span class="demonstration">日期</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>

      <el-button type="primary" @click="onSubmit" style="margin-left: 10px">查询</el-button>

      <el-button type="text" @click="outerVisible = true" class="btn">商品领用</el-button>

      <!-- 新增商品领用数量 -->
      <el-dialog title="新增商品损益数量" :visible.sync="outerVisible">
        <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
          <div class="conment">
            <el-form-item label="领用部门">
              <el-select v-model="type" style="width: 185px;">
                <el-option v-for='item in mendian' :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>

            <div>
              <el-form-item label="领用类型">
                <el-select v-model="type" style="width: 185px;">
                  <el-option v-for='item in type_list' :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </div>

            <div style="margin-left: 27px;">
              <el-form-item label="备注" prop="bian">
                <el-input v-model.number="numberValidateForm.bian" autocomplete="off" type="textarea" style="width: 300px;">
                </el-input>
              </el-form-item>
            </div>

          </div>

          <el-button type="primary" @click="angelegt()" style="margin: 20px 130px">+添加商品</el-button>
          <div>
            <span>领用商品列表</span>
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

            <el-button type="primary" @click="submitForm('numberValidateForm')" style="margin: 20px 130px">确认并提交</el-button>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
        </div>
      </el-dialog>

    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="领用部门编号"></el-table-column>
      <el-table-column prop="name" label="领用部门名称"></el-table-column>
      <el-table-column prop="dai" label="商品编码"></el-table-column>
      <el-table-column prop="bei" label="商品名称"></el-table-column>
      <el-table-column prop="dai" label="单位"></el-table-column>
      <el-table-column prop="dai" label="领用类型"></el-table-column>
      <el-table-column prop="bei" label="数量"></el-table-column>
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
  name: 'CommodityReportDamage',
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
      type: '',
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
      mendian: [{
        value: '01',
        label: '培训测试店'
      }],
      type_list: [{
        value: '01',
        label: '健身'
      }, {
        value: '02',
        label: '锁'
      }],
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
.conment {
    height: 140px;
}
</style>
