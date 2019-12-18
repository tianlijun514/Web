<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true"  class="demo-form-inline">

      <el-form-item label="报损部门">
        <el-input v-model="deptCode"></el-input>
      </el-form-item>

      <span class="demonstration">日期</span>
      <el-date-picker v-model="value1" type="daterange" @change='datas' range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>

      <el-button type="primary" @click="chaxun" style="margin-left: 10px">查询</el-button>

      <el-button type="text" @click="outerVisible = true" class="btn">报损溢</el-button>
      <br>
      <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="spBreakage.deptCode" label="报损部门编号"></el-table-column>
        <el-table-column prop="spBreakage.deptName" label="报损部门名称"></el-table-column>
        <el-table-column prop="spCode" label="商品编码"></el-table-column>
        <el-table-column prop="spName" label="商品名称"></el-table-column>
        <el-table-column prop="spUnit" label="单位"></el-table-column>
        <el-table-column prop="spNum" label="数量"></el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">图片报损前</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">图片报损后</el-button>
          </template>
        </el-table-column>

      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
      <!-- 新增商品损益数量 -->
      <el-dialog title="新增商品损益数量" :visible.sync="outerVisible">
        <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
          <div class="conment">
            <el-form-item label="报损部门">
              <el-select v-model="numberValidateForm.deptCode" style="width: 185px;" @change="fahuo">
                <el-option v-for='item in type_list' :key="item.id" :label="item.name" :value="item.number"></el-option>
              </el-select>
            </el-form-item>

            <div>
              <el-form-item label="备注(会员编号)" prop="remark" label-width="70px">
                <el-input v-model.number="numberValidateForm.remark" autocomplete="off" type="textarea" style="margin-left: -70px;width: 300px;">
                </el-input>
              </el-form-item>
            </div>

          </div>
          <el-button type="primary" @click="angelegt()" style="margin: 20px 130px">+添加商品</el-button>
          <div>
            <span>报损商品列表</span><br>
            <span>报损数量输入整数：减少库存</span><br>
            <span>报损数量输入负数：增加库存</span>
            <el-table :data="numberValidateForm.spBreakageInfos" border style="width: 100%">
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
                  <el-button @click.native.prevent="deleteRow(scope.$index, numberValidateForm.spBreakageInfos)" type="primary">
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

    </el-form>
    <Auswahl :auswahl="auswahl" @tapecode="Details"></Auswahl>
  </div>

</template>

<script>
import Auswahl from '../common/Auswahl'
import axios from "axios";
import { base } from '../js/url'
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
      deptCode: '',
      date_s: '',
      date_e: '',
      total: 0,
      size: 10,
      currentPage: 1,
      numberValidateForm: {
        deptCode: '',
        remark: '',
        spBreakageInfos: [],
      },
      outerVisible: false,
      type_list: [],
      ruleForm: {
        typebian: '',
        name: '',
        region: '',
        resource: '',
        desc: ''
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
    // 添加到数据库
    submitForm (numberValidateForm) {
      this.$refs[numberValidateForm].validate((valid) => {
        if (valid) {
          axios.post(base + `/commodity/addSpBreakage`, this.numberValidateForm)
            .then(res => {
              console.log(res.data)
              if (res.data.c == 10000) {
                this.$message({
                  message: '操作成功',
                  type: 'success'
                });
                this.outerVisible = false;
                this.numberValidateForm = {}
                this.chaxun()
              } else {
                this.$message.error('添加失败，请重新再试！');
              }
            })
        }
      });
    },
    // 添加到表
    Details (data) {
      this.numberValidateForm.spBreakageInfos.push(
        {
          spCode: data.spCode,
          spNum: this.spNum,
          unitName: data.unitName,
          spName: data.spName,
          spNum: 1,
        }

      )
    },
    // 查询
    chaxun () {
      axios
        .post(base + '/commodity/getSpBreakageInfo', {
          page: this.currentPage,
          size: this.size,
          deptCode: this.deptCode,
          startDate: this.date_s,
          endDate: this.date_e
        }).then(res => {
          this.tableData = res.data.d
          this.total=res.data.t
        })
    },

    // 获取类型
    fahuo (e) {
      this.staat = e
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun()
    axios
      .get(base + '/store/getStoreList').then((res) => {
        this.type_list = res.data.d
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
.shu {
    width: 100px;
    height: 30px;
}
</style>
