<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item label="门店">
        <el-input v-model="deptCode"></el-input>
      </el-form-item>

      <el-form-item label="OA订单号">
        <el-input v-model="oaCode"></el-input>
      </el-form-item>

      <el-form-item label="入库状态">
        <el-select v-model="status">

          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-button type="primary" @click="Statistische">查询</el-button>

      <el-button type="text" @click='test_click2("add")' class="btn">新增入库商品</el-button>
      <br>
      <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
      <el-table :data="tableDataOa" border style="width: 100%">
        <el-table-column fixed prop="id" label="采购单号" v-model.number="id"></el-table-column>
        <el-table-column prop="oaCode" label="OA单号"></el-table-column>
        <el-table-column prop="cgDate" label="采购日期"></el-table-column>
        <el-table-column prop="deptCode" label="部门编号" v-model="deptCode"></el-table-column>
        <el-table-column prop="deptName" label="部门名称"></el-table-column>
        <el-table-column prop="status" label="入库状态">
          <template slot-scope="scope">
            <span>{{scope.row.status==1?'入库完了':'未入库'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="printStatus" label="打印状态">
          <template slot-scope="scope">
            <span>{{scope.row.printStatus==1?'未打印':'已打印'}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="210">
          <template slot-scope="scope">
            <el-button type="primary" size="small">打印</el-button>
            <el-button @click='test_click2("edit",scope.row)' type="primary" size="small">修改</el-button>
            <el-button type="primary" size="small" @click='queren(scope.row.id,scope.row.deptCode)'>确定</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </el-form>

    <!-- 新增退货商品弹框 -->
    <el-dialog :title="title" :visible.sync="outerVisible">
      <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
        <div>
          <el-form-item label="OA订单号" prop="oaCode" :rules="[{ required: true, message: 'OA订单号不能为空'}]">
            <el-input v-model.number="numberValidateForm.oaCode" autocomplete="off" style="width: 160px"></el-input>
          </el-form-item>
        </div>

        <el-button type="primary" @click="angelegt()" style="margin: 20px 130px" v-show="shang">+添加商品</el-button>
        <div>
          <span>入库商品明细</span>
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
          <el-button type="primary" @click="submitForm('numberValidateForm')" style="margin: 20px 130px">提交</el-button>
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
      shang: true,
      // table: {},
      id: '',
      deptCode: '',
      handleClose: '',
      outerVisible: false,
      shanchu: false,
      currentPage: 1,
      size: 10,
      total: 0,
      title: '',
      deptCode: '',
      oaCode: '',
      status: '',
      numberValidateForm: {
        oaCode: '',
        cgRkSps: [],
      },
      options: [{
        value: '1',
        label: '入库完了'
      }, {
        value: '2',
        label: '未入库'
      }],
      value1: '',
      tableDataOa: [{}],
      tableData: [],
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

    // 判断是新增还在修改页面
    test_click2: function (e, b) {
      if (e == 'add') {
        this.title = '新增商品入库数量'
        this.option = 'addCgRk'
        this.outerVisible = true
        this.shanchu = true
      } else {
        if (b.status == 2) {
          console.log(b)
          this.shang = false
          this.shanchu = false
          this.outerVisible = true
          this.title = '编辑商品入库数量'
          this.option = 'updateCgRk'
          this.numberValidateForm.oaCode = b.oaCode
          axios 
          .get(base + '/commodity/getCgRkInfo/' + b.oaCode ).then(res=>{
            this.numberValidateForm.cgRkSps = res.data.d
          })
          
        } else {
          this.$message({
            message: '入库完成，不能再入库',
            type: 'warning'
          });

        }
      }
      console.log(this.option)
    },

    // 确认是否入库
    queren (id, code) {
      axios
        .get(base + '/commodity/affirmCgRk/' + id + '/' + code).then(res => {
          console.log(res.data)
          if (res.data.c == 10000) {
            this.$message({
              message: '采购入库成功',
              type: 'success'
            });
            this.Statistische()
          } else {
            this.$message.error('入库单已经入库完了，不能再入库');
          }
        })
    },


    // 添加到数据库
    submitForm (numberValidateForm) {
      this.$refs[numberValidateForm].validate((valid) => {
        if (valid) {
          axios.post(base + `/commodity/` + this.option, this.numberValidateForm)
            .then(res => {
              if (res.data.c== 10000) {
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

    // 添加到表
    Details (data) {
      this.numberValidateForm.cgRkSps.push(
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
    Statistische () {
      let a
      a = this.status ? parseInt(this.status) : ''
      axios
        .post(base + '/commodity/getCgRk', {
          page: this.currentPage,
          size: this.size,
          deptCode: this.deptCode,
          oaCode: this.oaCode,
          status: a
        }).then(res => {
          this.tableDataOa = res.data.d
          this.total = res.data.t
        })
    },

    // 删除添加到表格数据
    delect (index) {
      this.numberValidateForm.splice(index, 1);
      console.log(11)
    }
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
</style>
