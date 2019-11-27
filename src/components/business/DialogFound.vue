<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog :title="dialog.title" :visible.sync="dialog.show" :close-on-click-modal='false' :close-on-press-escape='false' :modal-append-to-body="false" width="30%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="类型编号" prop="typebian">
          <el-input v-model="ruleForm.typebian"></el-input>
        </el-form-item>

        <el-form-item label="类型名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="财务分类" prop="region">
          <el-select v-model="ruleForm.region" style="width: 185px;">
            <el-option v-for="(formtype, index) in type_list" :key="index" :label="formtype" :value="formtype"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="储值卡支付" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="备注" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
      type_list: [
        '大商品',
        'C0001 - 小商品'
      ],
      value1: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        dai: '00001',
        bei: 'xiixii'
      }],
      rules: {
        typebian: [
          { required: true, message: '类型编号不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '类型名称不能为空', trigger: 'blur' }
        ],
        region: [
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
    onSubmit () {
      console.log('submit!');
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    submitForm (ruleForm) {
      this.$refs[ruleForm].validate(valid => {
          let url;
          if(this.dialog.option=='add'){
                url = 'addSpType'
          }else{
            url = 'updateSpType/'+this.ruleForm.id
          }
        // const url = this.dialog.option=='add'? 'addSpType' :`updateSpType/${this.ruleForm.id}`
        if (valid) {
          console.log(this.ruleForm)
          this.$axios.post(`/commodity/${url}`,this.ruleForm).then(res => {
            this.$message({
              message: '添加成功',
              type: 'success'
            });
            //隐藏对话框
            this.dialog.show = false;
            this.$emit('update');
          })
        }
      })
    },
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
