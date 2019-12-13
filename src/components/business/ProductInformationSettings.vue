<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="商品编码">
        <el-input v-model="spCode"></el-input>
      </el-form-item>

      <el-form-item label="商品名称">
        <el-input v-model="spName"></el-input>
      </el-form-item>
      <el-form-item label="助记符">
        <el-input v-model="mnemonic"></el-input>
      </el-form-item>

      <el-form-item label="商品类别">
        <el-select v-model="typeCode">
          <el-option label="全部" value></el-option>
           <el-option v-for="item in type_list" :key="item.id" :label="item.typeName" :value="item.typeCode">
              </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="卖品/非卖品">
        <el-select v-model="type">
          <el-option v-for="item in Verkaufen" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="有效/无效品">
        <el-select v-model="status">
          <el-option v-for="item in effektiv" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="herleiten">导出Execl</el-button>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="upload">上传Execl</el-button>
      </el-form-item>

      <el-button type="text" @click='test_click2("add")' class="btn">新增</el-button>
      <!-- 添加弹框 -->
      <el-dialog :title="title" :visible.sync="dialogVisible" width="40%">
        <el-form :model="numberValidateForm" ref="numberValidateForm" :rules="rules">

          <el-form-item label="商品编码" prop="spCode">
            <el-input v-model="numberValidateForm.spCode" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="商品名称" prop="spName">
            <el-input v-model="numberValidateForm.spName" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="商品类别" prop="typeCode">
            <el-select v-model="numberValidateForm.typeCode" style="width: 187px;" @change="leixing">
              <el-option v-for="item in type_list" :key="item.id" :label="item.typeName" :value="item.typeCode">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="计量单位" prop="unit">
            <el-select v-model="numberValidateForm.unit" style="width: 125px;">
              <el-option v-for="item in dan" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-button type="text" @click='addieren' class="btn">增加</el-button> <!-- 添加计量单位 -->

          <el-form-item label="助记符" prop="mnemonic" class="boxsize">
            <el-input v-model="numberValidateForm.mnemonic" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="标准售价" prop="price">
            <el-input v-model.number="numberValidateForm.price" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="员工价" class="leftin">
            <el-input v-model.number="numberValidateForm.empPrice" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="会员价" class="leftin">
            <el-input v-model.number="numberValidateForm.vipPrice" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="备用价1" class="box">
            <el-input v-model.number="numberValidateForm.sparePrice1" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="备用价2" class="box">
            <el-input v-model.number="numberValidateForm.sparePrice2" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="备用价3" class="box">
            <el-input v-model.number="numberValidateForm.sparePrice3" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="采购价" prop="cgPrice" style="margin-left: 16px;">
            <el-input v-model.number="numberValidateForm.cgPrice" autocomplete="off"></el-input>
          </el-form-item>

          <div style=" display: flex">
            <el-form-item label="采购合同号">
              <el-select v-model="numberValidateForm.cgContractNum" style="width: 185px;margin-left: -3px;">
                <el-option v-for="item in Vertrag" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="卖品/非卖" prop="type">
              <el-select v-model="numberValidateForm.type" style="width:187px;">
                <el-option v-for="item in mai" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

          </div>

          <el-form-item label="上架日期" prop="putawayDate">
            <el-date-picker v-model="numberValidateForm.putawayDate" type="date" placeholder="选择日期" style="width:187px;" prop="shangdata">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="下架日期" prop="soldoutDate">
            <el-date-picker v-model="numberValidateForm.soldoutDate" type="date" placeholder="选择日期" style="width:187px;margin-left: 4px" prop="shangdata">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="备注" prop="remark" style="margin-left: 39px;">
            <el-input type="textarea" v-model="numberValidateForm.remark" autocomplete="off" style="width:465px"></el-input>
          </el-form-item>
          <br>
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
      <el-table-column prop="type" label="卖品/非卖品" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.type==1?'卖品':'非卖品'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column prop="status" label="状态" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.status==1?'有效':'无效'}}</span>
        </template>

      </el-table-column>

      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click='test_click2("edit",scope.row)' class="btn">修改</el-button>
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
      value1: '',
      dialogVisible: false,
      currentPage: 1,
      spCode: '',
      spName: '',
      mnemonic: '',
      typeCode:'',
      type: '',
      status: '',
      size: 10,
      total: 0,
      id: '',
      title: '',
      option: '',
      Vertrag: [{
        value: 'H001',
        label: 'H001 - 荷花池批发市场-经销'
      }],
      dan: [{
        value: '1',
        label: '瓶'
      }, {
        value: '2',
        label: '包'
      }, {
        value: '3',
        label: '件'
      }, {
        value: '4',
        label: '双'
      }, {
        value: '5',
        label: '支'
      }, {
        value: '6',
        label: '个'
      }, {
        value: '7',
        label: '袋'
      },
      {
        value: '8',
        label: '盒'
      }
      ],

      options: [{
        value: '02',
        label: '11111 - 22222'
      }, {
        value: '03',
        label: '222 - 222'
      }, {
        value: '04',
        label: 'L001 - 饮料类'
      }, {
        value: '05',
        label: 'L002 - 会籍办卡类'
      }, {
        value: '06',
        label: 'L003 - 工本费'
      }, {
        value: '07',
        label: 'L004 - 锁'
      }, {
        value: '08',
        label: 'sp1001 - 运动饮料'
      }],

      Verkaufen: [{
        value: '1',
        label: '卖品',
      }, {
        value: '2',
        label: '非卖品',
      }],
      mai: [{
        value: '1',
        label: '卖品',
      }, {
        value: '2',
        label: '非卖品',
      }],

      effektiv: [{
        value: '1',
        label: '有效',
      }, {
        value: '2',
        label: '无效',
      }],
      value: '',
      numberValidateForm: {
        spCode: '',
        spName: '',
        remark: '',
        typeCode: '',
        unit: '',
        mnemonic: '',
        price: null,
        empPrice: null,
        vipPrice: null,
        sparePrice1: null,
        sparePrice2: null,
        sparePrice3: null,
        cgPrice: null,
        cgContractNum: '',
        type: null,
        putawayDate: '',
        soldoutDate: '',
        remark: '',
      },
      type_list: [],
      value1: '',
      tableData: [{}],
      rules: {
        spCode: [
          { required: true, message: '商品编号不能为空', trigger: 'blur' }
        ],
        spName: [
          { required: true, message: '商品名称不能为空', trigger: 'blur' }
        ],
        typeCode: [
          { required: true, message: '请选择商品类型', trigger: 'blur' }
        ],
        unit: [
          { required: true, message: '请选择计量单位', trigger: 'blur' }
        ],
        mnemonic: [
          { required: true, message: '助记符不能为空', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '标准售价不能为空', trigger: 'blur' }
        ],
        cgPrice: [
          { required: true, message: '采购价不能为空', trigger: 'blur' }
        ],
        putawayDate: [
          { required: true, message: '上架日期不能为空', trigger: 'blur' }
        ],
        soldoutDate: [
          { required: true, message: '下架日期不能为空', trigger: 'blur' }
        ],
        typeing: [
          { required: true, message: '请选择卖品/非卖品', trigger: 'change' }
        ],
      }
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
    leixing () {
     this.numberValidateForm.typeCode
    },
    test_click2: function (e, b) {
      this.dialogVisible = true
      if (e == 'add') {
        this.title = '新增商品类型'
        this.option = 'addSpInfo'
      } else {
        this.title = '修改商品类型'
        this.option = 'updateSpInfo'
        this.numberValidateForm.typeCode = b.typeCode
        this.numberValidateForm.spCode = b.spCode,
        this.numberValidateForm.spName = b.spName
        this.numberValidateForm.unit = b.unit,
        this.numberValidateForm.mnemonic = b.mnemonic,
        this.numberValidateForm.price = b.price
        this.numberValidateForm.cgPrice = b.cgPrice,
        this.numberValidateForm.cgContractNum = b.cgContractNum
        this.numberValidateForm.type = b.type,
        this.numberValidateForm.putawayDate = b.putawayDate
        this.numberValidateForm.soldoutDate = b.soldoutDate,
        this.numberValidateForm.remark = b.remark
      }
    },

    // 计量单位新增
    addieren () {

    },

    // 查询
    chaxun () {
      axios.
        post(base + '/commodity/getSpInfo', {
          page: this.currentPage,
          size: this.size,
          spCode: this.spCode,
          spName: this.spName,
          mnemonic: this.mnemonic,
          typeCode:this.typeCode
        }).then(res => {
          this.tableData = res.data.d
          this.total = res.data.t
        })

    },
    // 添加
    submitForm (numberValidateForm) {
      this.$refs[numberValidateForm].validate((valid) => {
        if (valid) {
          this.numberValidateForm.type = parseInt(this.numberValidateForm.type)
          axios.post(base + `/commodity/` + this.option, this.numberValidateForm)
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
       // 导出
    herleiten () {
      axios
        .get(base + '/commodity/excelSpInfo',{responseType: 'arraybuffer'})
        .then(res => {
          let blob = new Blob ([res.data],{type:"application/vnd.ms-excel"});
          let objectUrl = URL.createObjectURL(blob);
          window.location.href=objectUrl;
        })
    },

    // 上传表
    upload(){
      // axios
      // .post(base+'/commodity/uploadSpExecl').then((res)=>{
      //   console.log(res)
      // })
    },
    resetForm (numberValidateForm) {
      this.$refs[numberValidateForm].resetFields();
    },

  },


  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun()
    axios
      .post(base + '/commodity/getAllSpType').then((res) => {
        this.type_list = res.data
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
    width: 55px;
}
.boxsize {
    margin-left: 15px;
}
.box {
    margin-left: 17px;
}

.leftin {
    margin-left: 25px;
}
</style>
