<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog :title="dialog.title" :visible.sync="dialog.show" :close-on-click-modal='false' :close-on-press-escape='false' :modal-append-to-body="false" width="30%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="合同编号" prop="typeCode">
          <el-input v-model="ruleForm.typeCode" style="width: 185px;"></el-input>
        </el-form-item>

        <el-form-item label="结算方式">
          <el-select v-model="type" style="width: 185px;">
            <el-option v-for='item in type_list' :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="供应商编号">
          <el-select v-model="type" style="width: 185px;">
            <el-option v-for='item in gongying' :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>


         
          <el-form-item label="开始日期">
           <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width:187px;" prop="shangdata">
          </el-date-picker>
          </el-form-item>

             <el-form-item label="结束日期">
           <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width:187px;" prop="shangdata">
          </el-date-picker>
          </el-form-item>


       

        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark" style="width: 185px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加·</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>

</template>

<script>
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'logfound',
  props: {
    dialog: Object,
    ruleForm: Object
  },
  // import引入的组件需要注入到对象中才能使用
  components: {
  },
  data () {
    // 这里存放数据
    return {
      type: null,
      type_list: [{
          value: '02',
          label: '经销'
        }, {
          value: '03',
          label: '代销'
        }
      ],

      gongying: [{
          value: '21321',
          label: '21321 - 3213'
        }, {
          value: 'C00001',
          label: 'C00001 - 测试商品'
        },
        {
          value: 'G0001',
          label: 'G0001 - 荷花池批发市场'
        }


      ],
      value1: '',
      tableData: [{}],
      rules: {
        typeCode: [
          { required: true, message: '类型编号不能为空', trigger: 'blur' }
        ],
        typeName: [
          { required: true, message: '类型名称不能为空', trigger: 'blur' }
        ],
        subjectCode: [
          { required: true, message: '请选择财务分类', trigger: 'change' }
        ]
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },

    leibox (e) {
      this.staat = e
    },

    submitForm (ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        // let url;
        // if(this.dialog.option=='add'){
        //       url = 'addSpType'
        // }else{
        //   url = 'updateSpType/'+this.ruleForm.id
        // }
        const url = this.dialog.option == 'add' ? `addSpType` : `updateSpType/`
        if (valid) {
          console.log(this.ruleForm)
          // this.ruleForm.isDepositCard = parseInt(this.ruleForm.isDepositCard)
          axios.post(base + `/commodity/${url}`, this.ruleForm)
            .then(res => {
              if (res.data.code == 10000) {
                this.$message({
                  message: '操作成功',
                  type: 'success'
                });
                //隐藏对话框
                this.dialog.show = false;
                this.$emit('update');
              } else {
                this.$message.error('操作失败，请重新再试！');
              }

            })
        }
      })
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    axios
      .post(base + '/commodity/getAllSpType').then((res) => {
        console.log(res.data)
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
</style>
