<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="发货部门">
        <el-select v-model="fhDeptCode" style="width: 185px;" @change="fahuo">
          <el-option label="全部" value></el-option>
          <el-option v-for='item in type_list' :key="item.id" :label="item.name" :value="item.number"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="收货部门">
        <el-select v-model="shDeptCode" style="width: 185px;" @change="shouhuo">
          <el-option label="全部" value></el-option>
          <el-option v-for='item in type_shou' :key="item.id" :label="item.name" :value="item.number"></el-option>
        </el-select>
      </el-form-item>

      <span class="demonstration">发货日期</span>
      <el-date-picker v-model="value1" @change='datas' type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd">
      </el-date-picker>

      <el-button type="primary" @click="chauxn" style="margin-left: 10px">查询</el-button>

      <el-button type="text" @click="outerVisible = true" class="btn">新增商品入库</el-button>

      <!-- 新增配送商品出库 -->
      <el-dialog title="新增配送商品出库" :visible.sync="outerVisible">
        <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
          <div class="conment">
            <el-form-item label="发货部门">
              <el-select v-model="fhDeptCode" style="width: 185px;">
                <el-option v-for='item in type_list' :key="item.id" :label="item.name" :value="item.number"></el-option>
              </el-select>
            </el-form-item>

            <div>
              <el-form-item label="发货日期" prop="bian">
                <el-input v-model.number="numberValidateForm.bian" autocomplete="off"></el-input>
              </el-form-item>
            </div>

            <el-form-item label="收货部门">
              <el-select v-model="shDeptCode" style="width: 185px;">
               <el-option v-for='item in type_shou' :key="item.id" :label="item.name" :value="item.number"></el-option>
              </el-select>
            </el-form-item>

          </div>

          <el-button type="primary" @click="angelegt()" style="margin: 20px 130px">+添加商品</el-button>
          <div>
            <span>配送商品明细</span>
            <el-table :data="numberValidateForm.cgRkSps" border style="width: 100%">
            <el-table-column fixed prop="spCode" label="商品编码"></el-table-column>
            <el-table-column prop="spName" label="商品名称"></el-table-column>
            <el-table-column prop="unitName" label="单位"></el-table-column>
            <el-table-column prop="spNum" label="数量">
              <template slot-scope="scope">
                <input type="text" v-model.number="scope.row.spNum" class="shu">
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, numberValidateForm.cgRkSps)" type="primary" v-show="shanchu">
                  移除
                </el-button>
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
<!-- ------------ -->
    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="出库单号"></el-table-column>
      <el-table-column prop="fhDeptName" label="发货部门"></el-table-column>
      <el-table-column prop="fhDate" label="发货日期"></el-table-column>
      <el-table-column prop="shDeptName" label="收货部门"></el-table-column>
      <el-table-column prop="printStatus" label="打印状态">
        <template slot-scope="scope">
          <span>{{scope.row.printStatus==1?'未打印':'已打印'}}</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="primary" size="small">打印</el-button>
          <el-button @click="handleClick(scope.row)" type="primary" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <Cuswku :auswahl="auswahl"></Cuswku>
  </div>

</template>

<script>
import Cuswku from '../common/Cuswku'
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'DeliveryMerchandise',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Cuswku
  },
  data () {
    // 这里存放数据
    return {
      auswahl: {
        show: false
      },
      type: '',
      fhDeptCode: '',
      shDeptCode: '',
      date_s: '',
      date_e: '',
      size: 10,
      total: 0,
      currentPage: 1,


      handleClose: '',
      outerVisible: false,
      innerVisible: false,

      formInline: {
        user: '',
        region: ''
      },
      numberValidateForm: {
        bian: ''
      },
      type_list: [],
      type_shou: [],
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
     deleteRow (index, rows) {
      rows.splice(index, 1);
    },
    datas (even) {
      var mydata = even[0]
      var y = mydata.getFullYear();
      var m = mydata.getMonth() + 1;
      var d = mydata.getDate();
      this.date_s = y + "-" + m + "-" + d;
      var enddata = even[1]
      var y = enddata.getFullYear();
      var m = enddata.getMonth() + 1;
      var d = enddata.getDate();
      this.date_e = y + "-" + m + "-" + d;
    },
    angelegt () {
      this.auswahl.show = true;
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    // 获取类型
    fahuo (e) {
      this.staat = e
    },
    shouhuo (e) {
      this.stashouat = e
    },
    // 查询
    chauxn () {
      axios
        .post(base + '/commodity/getSpCk', {
          page: this.currentPage,
          size: this.size,
          startDate: this.date_s,
          endDate: this.date_e,
          fhDeptCode: this.fhDeptCode,
          shDeptCode: this.shDeptCode
        }).then(res => {
          this.tableData = res.data.d
          this.total=res.data.t
        })
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
    this.chauxn ()
    axios
      .get(base + '/store/getStoreList').then((res) => {
        this.type_list = res.data.queryResult.list
      }),
      axios
        .get(base + '/store/getStoreList').then((res) => {
          this.type_shou = res.data.queryResult.list
        })
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
