<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <div class="angelegt">
        <el-button type="primary" @click="angelegt()">+添加商品</el-button>
      </div>

      <span class="tite">报损商品列表</span><br>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="商品编码"></el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="dai" label="单位"></el-table-column>
        <el-table-column prop="bei" label="标准单价"></el-table-column>
        <el-table-column prop="bei" label="数量">
          <input type="text" class="int">
        </el-table-column>
        <el-table-column label="折扣类别" width="125px">
          <template>
            <el-select v-model="type" style="width: 95px;">
              <el-option v-for='item in type_list' :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="bei" label="折扣单价">
          <input type="text"  class="int">
        </el-table-column>
        <el-table-column prop="bei" label="小计金额">
          <input type="text"  class="int inpuy">
        </el-table-column>
        <el-table-column prop="bei" label="折扣备注"  width="100">
          <input type="text" class="zhe">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="heji">
        <el-form-item label="合计金额">
          <el-input type="text" disabled class="inpuy"></el-input>
        </el-form-item>
        <el-form-item label="定金金额">
          <el-input type="text" disabled></el-input>
        </el-form-item>

      </div>

      <div class="minx">
        <el-form-item label="定金编号">
          <el-input type="text" disabled></el-input>
        </el-form-item>
        <button type="primary" @click="alerts()" class="btnte">...</button>

      </div>

      <div class="angelegt">
        <el-button type="primary" @click="submitForm('numberValidateForm')">确认并提交</el-button>
      </div>

    </el-form>
    <Auswahl :auswahl="auswahl"></Auswahl>
    <Dialog :dialog="dialog"></Dialog>
  </div>

</template>

<script>
import Auswahl from '../common/Auswahl'
import Dialog from '../common/Dialog'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Merchandising',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Auswahl,
    Dialog
  },
  data () {
    // 这里存放数据
    return {
      auswahl: {
        show: false
      },
      dialog: {
        show: false
      },
      formInline: {
        user: '',
        region: ''
      },
      numberValidateForm: {
        bian: ''
      },
      type: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        dai: '00001',
        bei: 'xiixii'
      }],
      type_list: [{
        value: '01',
        label: '默认售价'
      }, {
        value: '02',
        label: '员工价'
      }, {
        value: '03',
        label: '会员价'
      }, {
        value: '04',
        label: '备用价1'
      }, {
        value: '05',
        label: '备用价2'
      }, {
        value: '06',
        label: '备用价3'
      }],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    angelegt () {
      this.auswahl.show = true;
    },
    alerts () {
      this.dialog.show = true;
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
    width: 70% !important;
}

.btnte {
    background: #333;
    color: white;
    width: 20px;
    border: none;
    height: 25px;
    line-height: 25px;
    border-radius: 2px;
    font-weight: 600;
}

.angelegt {
    height: 30px;
    margin: 30px auto;
    width: 80px;
}
.tite {
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}

.heji {
    width: 270px;
    float: right;
    height: 35px;
}
.minx {
    width: 300px;
    float: right;
    margin-top: 50px;
}
.inpuy {
    border: 2px solid #ffff00;
}
.int{
  width: 55px
}
.zhe{
    width: 75px
}
</style>
