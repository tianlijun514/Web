<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="领用部门">
        <el-select v-model="deptCode" style="width: 185px;" @change="fahuo">
          <el-option v-for='item in type_list' :key="item.id" :label="item.name" :value="item.number"></el-option>
        </el-select>
      </el-form-item>

      <span class="demonstration">日期</span>
      <el-date-picker v-model="value1" type="daterange" @change='datas' range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>

      <el-button type="primary" @click="chauxn" style="margin-left: 10px">查询</el-button>

      <el-button type="text" @click="outerVisible = true" class="btn">商品领用</el-button><br>

      <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="deptCode" label="领用部门编号"></el-table-column>
        <el-table-column prop="deptName" label="领用部门名称"></el-table-column>
        <el-table-column prop="spCode" label="商品编码"></el-table-column>
        <el-table-column prop="spName" label="商品名称"></el-table-column>
        <el-table-column prop="spUnitName" label="单位"></el-table-column>
        <el-table-column prop="typeCode" label="领用类型"></el-table-column>
        <el-table-column prop="spNum" label="数量"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
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
              <el-form-item label="商品类型">
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

    <Cuswku :cuswku="cuswku"></Cuswku>
  </div>

</template>

<script>
import Cuswku from '../common/Cuswku'
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
    Cuswku
  },
  data () {
    // 这里存放数据
    return {
      cuswku: {
        show: false
      },
      date_s: '',
      date_e: '',
      total: 0,
      size: 10,
      currentPage: 1,
      deptCode: '',
      value1: '',






      type: '',
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
      mendian: [{
        value: '01',
        label: '培训测试店'
      }],
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
    // handlebriefaClo(){
    //   this.show=false
    // },
    // zeroize (obj) {
    //   return lut = obj < 10 ? "0" + obj : obj
    // },


    datas (even) {
      // this.zeroize(even[0])
      var mydata = even[0]
      var y = mydata.getFullYear();
      var m = (mydata.getMonth() + 1 < 10 ? '0' + (mydata.getMonth() + 1) : mydata.getMonth() + 1);
      var d = mydata.getDate() + 1 < 10 ? '0' + mydata.getDate() : mydata.getDate();
      this.date_s = y + "-" + m + "-" + d;
      console.log(this.date_s)
      var enddata = even[1]
      var y = enddata.getFullYear();
      var d = enddata.getDate() + 1 < 10 ? '0' + enddata.getDate() : enddata.getDate();
      var m = (enddata.getMonth() + 1 < 10 ? '0' + (enddata.getMonth() + 1) : enddata.getMonth() + 1);
      this.date_e = y + "-" + m + "-" + d;
      console.log(this.date_e)

    },

    angelegt () {
      this.cuswku.show = true;
    },
    // 获取类型
    fahuo (e) {
      this.staat = e
    },
    // 查询

    chauxn () {
      axios
        .post(base + `/commodity/getSpReceiveInfo`, {
          page: this.currentPage,
          size: this.size,
          deptCode: this.deptCode,
          startDate: this.date_s,
          endDate: this.date_e
        }).then(res => {
          console.log(res.data)
          this.tableData = res.data.d
          this.total = res.data.t
        })
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
    axios
      .get(base + '/store/getStoreList').then((res) => {
        this.type_list = res.data.queryResult.list
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
