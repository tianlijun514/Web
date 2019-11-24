<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">

      <el-form-item label="选择类型">
        <el-select v-model="form.region"  style="width: 185px">
          <el-option label="停卡" value="shanghai"></el-option>
          <el-option label="补卡" value="beijing"></el-option>
          <el-option label="转店" value="za11"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="合同编号">
        <el-input v-model="input" style="width: 185px"></el-input>
      </el-form-item>
      <div class="shenfen">
        <el-form-item label="会员姓名">
          <el-input v-model="input"></el-input>
        </el-form-item>
        <el-form-item label="会员编号" style="margin-left: 28px">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>
      <div style="margin-bottom: 15px;">
        <el-form-item label="原会籍类型" label-width="82px">
          <el-input v-model="input" style="width: 185px"></el-input>
        </el-form-item>
      </div>

      <div class="block">
        <span class="demonstration">合同日期范围</span>
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="shenfen">
        <el-form-item label="合同价值">
          <el-input v-model="input"></el-input>
        </el-form-item>
        <el-form-item label="剩余价值" style="margin-left: 28px">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>
      <div class="minx">
        <el-form-item label="定金编号" class="phone">
          <el-input v-model="input"></el-input>
        </el-form-item>

        <button type="primary" @click="alerts()" class="btnte">...</button>
        <el-form-item label="定金金额" class="phone">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="停卡月数" class="phone">
        <el-input v-model="input" style="width: 185px"></el-input>
      </el-form-item>
      <div class="block">
        <span class="demonstration">停卡日期范围</span>
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="shenfen">
        <el-form-item label="手续费">
          <el-input v-model="input"></el-input>
        </el-form-item>
        <el-form-item label="应收金额" style="margin-left: 28px">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>


      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" style="width: 480px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认并提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

     <Dialog :dialog="dialog"></Dialog>
  </div>
</template>
<script>
import Dialog from '../common/Dialog'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'indexdj',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Dialog
  },
  data () {
    // 这里存放数据
    return {
      input:'',
      dialog: {
        show : false
        },
      value1: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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
    alerts () {
      // this.alertipShow = true;
      this.dialog.show = true;
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
.demonstration {
    height: 32px;
    vertical-align: middle;
    line-height: 32px !important;
    font-size: 14px;
    color: #606266;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.app {
    width: 630px !important;
    background: white;
}
.formbox {
    width: 90%;
    padding: 25px;
    margin: auto;
}


.shenfen {
    display: flex;
}

.block {
    margin-left: -15px !important;
    margin-bottom: 15px !important;
}

.minx {
    display: flex;
}
.btnte {
    width: 25px !important;
    height: 28px !important;
    margin-left: 2px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
}
</style>
