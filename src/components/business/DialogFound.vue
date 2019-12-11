<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog :title="dialog.title" :visible.sync="dialog.show" :close-on-click-modal='false' :close-on-press-escape='false' :modal-append-to-body="false" width="30%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="类型编号" prop="typeCode">
          <el-input v-model="ruleForm.typeCode"></el-input>
        </el-form-item>

        <el-form-item label="类型名称" prop="typeName">
          <el-input v-model="ruleForm.typeName"></el-input>
        </el-form-item>
 
          <el-form-item label="科目编码">
        <el-select v-model="type" @change="leibox">
          <el-option v-for='item in type_list' :key="item.id" :label="item.typeName" :value="item.number"></el-option>
        </el-select>
      </el-form-item>

        <el-form-item label="储值卡支付" prop="isDepositCard">
          <el-radio-group v-model="ruleForm.isDepositCard">
            <el-radio label="2">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark"></el-input>
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
      type:null,
      type_list: [],
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
          this.ruleForm.isDepositCard = parseInt(this.ruleForm.isDepositCard)
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
