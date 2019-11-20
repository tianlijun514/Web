<!-- vue快捷创建组件 -->
<template>
  <div class='pact'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">
      <div class="shenfen">
        <el-form-item label="教练工号">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label-width='82px' label="教练姓名" style="margin-left: 28px">
          <input type="text" class="input_box">
        </el-form-item>
      </div>
      <div class="shenfen">
        <div class="block">
          <span class="demonstration">销售日期</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width: 201px">
          </el-date-picker>
        </div>

        <el-form-item label="销售类别" style="margin-left: 28px" label-width='82px'>
          <input type="text" class="input_box">
        </el-form-item>
      </div>

      <el-form-item label="私教合同号" label-width='82px'>
        <input type="text" class="input_box">
      </el-form-item>

      <div class="shenfen">
        <el-form-item label="会员姓名">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label-width='82px' label="会员编号" style="margin-left: 28px">
          <input type="text" class="input_box">
        </el-form-item>
      </div>
      <div class="shenfen">
        <el-form-item label="课程">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label-width='82px' label="教练" style="margin-left: 28px">
          <input type="text" class="input_box">
        </el-form-item>
      </div>

      <div class="block">
        <span class="demonstration">日期范围</span>
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="shenfen">
        <el-form-item label="合同金额">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label-width='82px' label="付款金额" style="margin-left: 28px">
          <input type="text" class="input_box">
        </el-form-item>
      </div>
      <div class="shenfen">
        <el-form-item label="合同课时">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label-width='82px' label="剩余课时" style="margin-left: 28px">
          <input type="text" class="input_box">
        </el-form-item>
      </div>
      <div class="shenfen">
        <el-form-item label="选择门店">
          <el-select v-model="form.regions" class="sex">
            <el-option label="A00006 - 红牌楼店" value="01"></el-option>
            <el-option label="A00007 - 花郡店" value="02"></el-option>
            <el-option label="A00008 - 万象城店" value="03"></el-option>
            <el-option label="A00009 - 新城市店" value="04"></el-option>
            <el-option label="A00014 - 阳光新业店" value="05"></el-option>
            <el-option label="A00016 - 龙湖店" value="06"></el-option>
            <el-option label="A00017 - 王府井店" value="07"></el-option>
            <el-option label="A00023 - 天誉店" value="08"></el-option>
            <el-option label="A00024 - 伊藤店" value="09"></el-option>
            <el-option label="A00025 - 金牛店" value="10"></el-option>
            <el-option label="A00026 - 瑞安店" value="11"></el-option>
            <el-option label="A00027 - 339店" value="12"></el-option>
            <el-option label="A00028 - 镏金店" value="13"></el-option>
            <el-option label="A00029 - 紫荆店" value="14"></el-option>
            <el-option label="A00030 - 魅力城" value="15"></el-option>
            <el-option label="A00031 - 二十四城" value="16"></el-option>
            <el-option label="A00032 - 东城国际店" value="17"></el-option>
            <el-option label="C001 - 管理中心" value="18"></el-option>
            <el-option label="test - 培训测试店" value="19"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="shenfen">
        <el-form-item label="选择教练">
          <el-select v-model="form.region" class="sex">
            <el-option label="B01171 - 伍一 - 一星级" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认并提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'indexdj',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
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
.el-form-item__label {
    width: 82px !important;
}
label {
    display: inline-block;
    width: 82px !important;
    text-align: left;
    padding: 1px;
    margin: 1px;
    color: #000;
}
.el-form-item__content {
    margin-left: 85px !important;
}
.demonstration {
    height: 32px;
    vertical-align: middle;
    line-height: 32px !important;
    font-size: 14px;
    color: #606266;
    padding: 0 10px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.pact {
    width: 670px !important;
    background: white;
}
.formbox {
    width: 90%;
    padding: 25px;
    margin: auto;
}
.hname {
    width: 82% !important;
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
    margin-left: 15px !important;
    margin-bottom: 15px !important;
}
.el-date-range-picker {
    width: 510px !important;
    z-index: 500;
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
