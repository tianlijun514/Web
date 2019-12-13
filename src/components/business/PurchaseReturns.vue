<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <span class="demonstration">退货日期</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期" @change='datas'></el-date-picker>
      <el-form-item style="margin-left: 10px">
        <el-button type="primary" @click="Statistische">查询</el-button>
      </el-form-item>

      <el-button type="text" @click='test_click2("add")' class="btn">新增退货商品</el-button>

    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="退货单号" v-model.number='id'></el-table-column>
      <el-table-column prop="tkDate" label="退货日期"></el-table-column>
      <el-table-column prop="deptCode" label="退货部门编号"></el-table-column>
      <el-table-column prop="deptName" label="退货部门名称"></el-table-column>
      <el-table-column prop="printStatus" label="打印状态">
        <template slot-scope="scope">
          <span>{{scope.row.printStatus==1?'未打印':'已打印'}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="primary" size="small">打印</el-button>
          <el-button @click='test_click2("edit",scope.row)' type="primary" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <!-- 新增退货商品弹框 -->
    <el-dialog :title="title" :visible.sync="outerVisible">
      <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
        <div class="tui">
          <span class="demonstration">退货日期</span>
          <el-date-picker v-model="numberValidateForm.tkDate" type="date" placeholder="选择日期"></el-date-picker>
        </div>
        <el-button type="primary" @click="angelegt()" style="margin: 20px 130px" v-show="shang">+添加商品</el-button>
        <div>
          <span>退货商品明细</span>
          <el-table :data="numberValidateForm.cgTkSps" border style="width: 100%">
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
          <el-button type="primary" style="margin: 20px 130px" @click="submitForm('numberValidateForm')">提交</el-button>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <Auswahl :auswahl="auswahl" @tapecode="Details"></Auswahl>
  </div>

</template>

<script>
import axios from "axios";
import { base } from '../js/url'
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
      value1: '',
      date_s: '',
      currentPage: 1,
      size: 10,
      total: 0,
      title: '',
      printStatus: '',
      id: '',
      numberValidateForm: {
        tkDate: '',
        cgTkSps: [],
      },
      shang: true,
      outerVisible: false,

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
    datas (even) {
      console.log(even)
      // console.log(new Date())
      var mydata = even
      var y = mydata.getFullYear();
      var m = mydata.getMonth() + 1;
      var d = mydata.getDate();
      this.date_s = y + "-" + m + "-" + d;
    },
    angelegt () {
      this.auswahl.show = true;
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.Statistische();
    },


    // 移除表格数据
    deleteRow (index, rows) {
      rows.splice(index, 1);
    },

    // 查询
    Statistische () {
      axios
        .post(base + '/commodity/getCgTk', {
          page: this.currentPage,
          size: this.size,
          tkDate: this.date_s,
        }).then(res => {
          this.tableData = res.data.d
          this.total = res.data.t
        })
    },
    // 添加到表
    Details (data) {
      console.log(data)
      this.numberValidateForm.cgTkSps.push(
        {
          spCode: data.spCode,
          spNum: this.spNum,
          unitName: data.unitName,
          spName: data.spName,
          spNum: 1,
        }

      )
    },

    // 判断是新增还在修改页面
    test_click2: function (e, b) {
      if (e == 'add') {
        this.title = '新增商品入库数量'
        this.option = 'addCgTk'
        this.outerVisible = true
        this.shang = true
      } else {
        if (b.printStatus == 1) {
          // console.log(b.cgTkSps)
          this.shang = false
          this.shanchu = false
          this.outerVisible = true
          this.title = '编辑商品入库数量'
          this.option = 'updateCgTk'
          this.numberValidateForm.tkDate = b.tkDate
          this.numberValidateForm.id = b.id
          axios
            .get(base + '/commodity/getCgTkInfo/' + b.id).then(res => {
              console.log(res.data)
              this.numberValidateForm.cgTkSps = res.data.d
            })
        } else {
          this.$message({
            message: '退货单已经打印完成，不能修改退货数',
            type: 'warning'
          });
        }
      }



    },


    // 添加到数据库
    submitForm (numberValidateForm) {
      this.$refs[numberValidateForm].validate((valid) => {
        if (valid) {
          // let date = new Date(this.numberValidateForm.tkDate)
          // this.numberValidateForm.tkDate= date.setFullYear()+'-'+date.getMonth() + 1 +'-'+date.getDate()
          axios.post(base + `/commodity/` + this.option, this.numberValidateForm)
            .then(res => {
              if (res.data.c == 10000) {
                this.$message({
                  message: '操作成功',
                  type: 'success'
                });
                this.outerVisible = false;
                this.numberValidateForm = {}
                this.Statistische()
              } else {
                this.$message.error('添加失败，请重新再试！');
              }
            })
        }
      });
    },

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
  this.Statistische()
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
.shu {
    width: 100px;
    height: 25px;
}
.tui{
  height: 50px;
}
</style>
