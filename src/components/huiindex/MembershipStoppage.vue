<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">

      <el-form-item label="选择类型">
        <el-select v-model="form.region" class="sex">
          <el-option label="停卡" value="shanghai"></el-option>
          <el-option label="补卡" value="beijing"></el-option>
          <el-option label="转店" value="za11"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="合同编号">
        <input type="text" class="input_box">
      </el-form-item>
      <div class="shenfen">
        <el-form-item label="会员姓名">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label="会员编号" style="margin-left: 28px">
          <input type="text" class="input_box">
        </el-form-item>
      </div>
      <div style="margin-bottom: 15px;">
        <span class="yut">原会籍类型</span>
        <input type="text" class="input_box">
      </div>

      <div class="block">
        <span class="demonstration">合同日期范围</span>
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="shenfen">
        <el-form-item label="合同价值">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label="剩余价值" style="margin-left: 28px">
          <input type="text" class="input_box">
        </el-form-item>
      </div>
      <div class="minx">
        <el-form-item label="定金编号" class="phone">
          <input type="text" class="input_box">
        </el-form-item>
        <alertip v-show="alertipShow" @closeTip="alertipShow = false" :alertText="alertText"></alertip>
        <button type="primary" @click="alerts()" class="btnte">...</button>
        <el-form-item label="定金金额" class="phone">
          <input type="text" class="input_box">
        </el-form-item>
      </div>

      <el-form-item label="停卡月数" class="phone">
        <input type="text" class="input_box">
      </el-form-item>
      <div class="block">
        <span class="demonstration">停卡日期范围</span>
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="shenfen">
        <el-form-item label="手续费">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label="应收金额" style="margin-left: 28px">
          <input type="text" class="input_box">
        </el-form-item>
      </div>


      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
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
      dialog: {
        show : false
        },
      value1: '',
      alertipShow: false,
      alertText: '',
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
    width: 60% !important;
    background: white;
}
.formbox {
    width: 90%;
    padding: 25px;
    margin: auto;
}
.hname {
    width: 80% !important;
}
.divbin {
    display: flex !important;
}

.shenfen {
    display: flex;
}
.sinxex {
    width: 48.5% !important;
    margin-left: 5px;
}
.input_box {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 30px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 203px !important;
}
.dinglei {
    display: flex;
}
.conmeny {
    display: flex;
}
.yut {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.block {
    margin-left: -15px !important;
    margin-bottom: 15px !important;
}
.el-date-range-picker {
    width: 510px !important;
    z-index: 500;
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
