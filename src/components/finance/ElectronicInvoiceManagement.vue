<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="spCode"></el-input>
      </el-form-item>

      <el-form-item label="会员编号">
        <el-input v-model="spName"></el-input>
      </el-form-item>

      <el-form-item label="合同类型">
        <el-select v-model="value">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="合同号">
        <el-input v-model="mnemonic"></el-input>
      </el-form-item>

      <el-form-item label="发票订单号">
        <el-select v-model="type">
          <el-option v-for="item in Verkaufen" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <span class="demonstration">日期</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <el-button type="text" @click='test_click2("add")' class="btn">新增</el-button>

      <el-button type="primary" @click="chaxun">导出</el-button>

      <!-- 添加弹框 -->
      <el-dialog :title="title" :visible.sync="dialogVisible" width="40%">
        <el-form :model="numberValidateForm" ref="numberValidateForm">

          <div class="shenfen">
            <el-form-item label="合同类型">
              <el-select v-model="couponSelected" style="width:187px;" @change="xuanzhe">
                <el-option v-for="item in Verkaufen" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="合同编号" v-if="bianhao">
              <el-input v-model="input"></el-input>
            </el-form-item>
            <el-form-item label="流水号" v-if="liushui" style="margin-left: 14px;">
              <el-input v-model="input"></el-input>
            </el-form-item>
          </div>

          <el-form-item label="销售日期">
            <el-input size="medium" suffix-icon="el-icon-date" v-model="input2" style="width:187px;">
            </el-input>
          </el-form-item>

          <el-form-item label="销售门店">
            <el-input v-model="input"></el-input>
          </el-form-item>

          <div style="margin-left: 28px">
            <el-form-item label="内容">
              <el-input v-model="input" style="width:452px;"></el-input>
            </el-form-item>
          </div>

          <el-form-item label="会员姓名">
            <el-input v-model="input"></el-input>
          </el-form-item>

          <el-form-item label="金额" style="margin-left: 28px">
            <el-input v-model="input"></el-input>
          </el-form-item>

          <el-form-item label="发票类型">
            <el-select v-model="numberValidateForm.subjectCode" style="width: 185px;">
              <el-option v-for="item in dan" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="发票号" style="margin-left: 18px">
            <el-input v-model="input"></el-input>
          </el-form-item>

          <div class="fapiao">
            <el-form-item label="发票图片">
              <el-input v-model="input" style="width:380px;"></el-input>
            </el-form-item>

            <!-- <el-upload type="text" @click='hochladen' class="btn"></el-upload> -->
            <el-upload action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="1" :file-list="fileList">
              <el-button size="small" type="primary">上传...</el-button>
            </el-upload>
          </div>

          <div style="margin-left: 28px">
            <el-form-item label="说明">
              <el-input v-model="input" style="width:452px;"></el-input>
            </el-form-item>
          </div>
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
      <el-table-column prop="spCode" label="商品编码" width="90"></el-table-column>
      <el-table-column prop="spName" label="商品名称" width="100"></el-table-column>
      <el-table-column prop="typeCode" label="商品类别" width="100"></el-table-column>
      <el-table-column prop="unit" label="计量单位" width="100"></el-table-column>
      <el-table-column prop="price" label="标准售价" width="100"></el-table-column>
      <el-table-column prop="empPrice" label="员工价" width="100"></el-table-column>
      <el-table-column prop="vipPrice" label="会员价" width="100"></el-table-column>
      <el-table-column prop="cgPrice" label="采购价" width="100"></el-table-column>
      <el-table-column prop="cgContractNum" label="采购合同号" width="100"></el-table-column>
      <el-table-column prop="putawayDate" label="上架日期" width="100"></el-table-column>
      <el-table-column prop="soldoutDate" label="下架日期" width="100"></el-table-column>
      <el-table-column prop="type" label="卖品/非卖品" width="100"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column prop="status" label="状态" width="100"></el-table-column>

      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click='test_click2("edit",scope.row)'>修改</el-button>
          <!-- <el-button type="text" size="small" @click='handleClose(scope.row,scope.$index)'>删除</el-button> -->
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
  name: 'business2',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      input2: '',
      input: '',
      fileList: [],

      couponSelected: '',
      bianhao: true,
      liushui: false,
      value1: '',
      dialogVisible: false,
      currentPage: 1,
      spCode: '',
      spName: '',
      mnemonic: '',
      type: '',
      size: 10,
      total: 0,
      form: {
        name: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      id: '',
      title: '',
      option: '',
      Vertrag: [{
        value: 'H001',
        label: 'H001 - 荷花池批发市场-经销'
      }],
      dan: [{
        value: '1',
        label: '1-公司'
      }, {
        value: '2',
        label: '2-个人'
      }],
      type_list: [{
        value: '001',
        label: '全部'
      }, {
        value: '002',
        label: '11111 - 22222'
      }, {
        value: '003',
        label: '222 - 222'
      }, {
        value: '004',
        label: 'L001 - 饮料类'
      }, {
        value: '005',
        label: 'L002 - 会籍办卡类'
      }, {
        value: '006',
        label: 'L003 - 工本费'
      }, {
        value: '007',
        label: 'L004 - 锁'
      }, {
        value: '008',
        label: 'sp1001 - 运动饮料'
      }],
      options: [{
        value: '11',
        label: '全部'
      }, {
        value: '12',
        label: '会籍'
      }, {
        value: '13',
        label: '私教'
      }, {
        value: '14',
        label: '租箱'
      }, {
        value: '15',
        label: '会籍停卡'
      }, {
        value: '16',
        label: '会籍转让'
      }, {
        value: '17',
        label: '会籍转店'
      }, {
        value: '18',
        label: '会籍补卡'
      }, {
        value: '19',
        label: '会籍补卡'
      }],

      Verkaufen: [{
        value: '1',
        label: '会籍',
      }, {
        value: '2',
        label: '私教',
      }, {
        value: '3',
        label: '租箱',
      }, {
        value: '4',
        label: '会籍停卡',
      }, {
        value: '5',
        label: '会籍转让',
      },
      {
        value: '6',
        label: '会籍转店',
      },
      {
        value: '7',
        label: '会籍补卡',
      },
      {
        value: '8',
        label: '私教转让',
      }],
      value: '',
      numberValidateForm: {

        name: '',
        remark: ''
      },
      tableData: [{}],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    xuanzhe (e) {
      this.liushui = false;
      this.bianhao = true;
      if (e == 2) {
        this.liushui = false;
        this.bianhao = true;
      } else if (e == 3 || e == 7) {
        console.log(this.liushui)
        this.liushui = true;
        this.bianhao = false;
      }
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
    handleRemove (file, fileList) {
      console.log(file, fileList);
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
    this.chaxun(),
      this.couponSelected = this.Verkaufen[0].label;
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
<style>
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
.shenfen {
    display: flex;
}
.el-upload--text {
    height: 35px !important;
    width: 65px !important;
}
.fapiao {
    display: flex;
}
</style>
