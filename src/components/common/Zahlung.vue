<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog title="定金延期申请 - 审批历史" :visible.sync="antrage.show" :close-on-click-modal='false' :close-on-press-escape='false' :modal-append-to-body="false" width="30%">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="申请原因" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark" class="texta" disabled></el-input>
        </el-form-item>

        <el-form-item label="初审日期">
          <el-input suffix-icon="el-icon-date" v-model="input1" disabled class="databox"></el-input>
        </el-form-item>

        <el-form-item label="初审意见" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark" class="texta" disabled></el-input>
        </el-form-item>

        <el-form-item label="审核日期">
          <el-input suffix-icon="el-icon-date" v-model="input1" disabled class="databox"></el-input>
        </el-form-item>

        <el-form-item label="审核意见" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark" class="texta" disabled></el-input>
        </el-form-item>

        <el-form-item label="终审日期">
          <el-input suffix-icon="el-icon-date" v-model="input1" disabled  class="databox"></el-input>
        </el-form-item>

        <el-form-item label="终审意见" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark" class="texta" disabled></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm()">返回</el-button>
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
    antrage: Object,
  },
  // import引入的组件需要注入到对象中才能使用
  components: {
  },
  data () {
    // 这里存放数据
    return {
      input1:'',
      ruleForm: '',
      value1: '',
      typeCode: '',
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

    submitForm (ruleForm) {
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
.texta {
    width: 270px !important;
}

.databox{
  width: 185px !important;
}

.btn {
    background: #333;
    color: white;
    width: 55px;
}
</style>
