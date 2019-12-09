<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog :title="sverfahren.title" :visible.sync="sverfahren.show" :close-on-click-modal='false' :close-on-press-escape='false' :modal-append-to-body="false" width="30%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="编号" prop="typeCode">
          <el-input v-model="ruleForm.typeCode"></el-input>
        </el-form-item>

        <el-form-item label="名称" prop="typeName">
          <el-input v-model="ruleForm.typeName"></el-input>
        </el-form-item>

        <el-form-item label="类别">
          <el-select v-model="type" @change="leibox">
            <el-option v-for='item in type_list' :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="审批环节">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="初审"></el-checkbox>
            <el-checkbox label="复审"></el-checkbox>
            <el-checkbox label="终审"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="状态" style="margin-top: -15px;">
          <el-radio-group v-model="ruleForm.isDepositCard">
            <el-radio label="2">启用</el-radio>
            <el-radio label="1">停用</el-radio>
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
    sverfahren: Object,
    ruleForm: Object
  },
  // import引入的组件需要注入到对象中才能使用
  components: {
  },
  data () {
    // 这里存放数据
    return {
      checkList: ['初审', '复审',"终审"],
      type: null,
      type_list: [{
        value: '0',
        label: '全部'
      }, {
        value: '1',
        label: '会籍'
      }, {
        value: '2',
        label: '私教'
      }, {
        value: '3',
        label: '定金'
      }, {
        value: '4',
        label: 'APP'
      }, {
        value: '5',
        label: '营运'
      }],
      value1: '',
      tableData: [{}],
      rules: {
        typeCode: [
          { required: true, message: '编号不能为空', trigger: 'blur' }
        ],
        typeName: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
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
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },

    leibox (e) {
      this.staat = e
    },

    submitForm (ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        const url = this.sverfahren.option == 'add' ? `addSpType` : `updateSpType/`
        if (valid) {
          console.log(this.ruleForm)
          this.ruleForm.isDepositCard = parseInt(this.ruleForm.isDepositCard)
          axios.post(base + `/commodity/${url}`, this.ruleForm)
            .then(res => {
              if (res.data.code == 10000) {
                this.$message({
                  message: '操作成功',
                  type: 'success'
                });
                //隐藏对话框
                this.sverfahren.show = false;
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
