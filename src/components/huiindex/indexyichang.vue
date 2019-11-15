<!-- vue快捷创建组件 -->
<template>
  <div class="conmeny">
    <div class="demit">
      <el-form class="shenfen">
        <el-form-item label="会籍合同编号" style="width:70%">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class='pacuk'>
      <el-form ref="form" :model="form" label-width="80px" class="formbox">
        <el-form-item label="合同编号" style="width:50%">
          <input type="text" class="input_box">
        </el-form-item>
        <div class="shenfen">
          <div class="bluck">
            <span class="demonstration" style="margin-left: 11px;width: 74px">销售日期</span>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <el-form-item label="销售类别" style="width:50%;margin-left: 30px">
            <input type="text" class="input_box">
          </el-form-item>
        </div>
        <div class="shenfen">
          <el-form-item label="会员姓名" style="width:50%">
            <input type="text" class="input_box">
          </el-form-item>
          <el-form-item label="会员编号" style="width:50%">
            <input type="text" class="input_box">
          </el-form-item>
        </div>
        <el-form-item label="会籍类型" style="width:50%">
          <input type="text" class="input_box">
        </el-form-item>
        <div class="mday">
          <span class="demonstration">日期范围</span>
          <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="shenfen">
          <el-form-item label="合同金额" style="width:50%">
            <input type="text" class="input_box">
          </el-form-item>
          <el-form-item label="定金金额" style="width:50%">
            <input type="text" class="input_box">
          </el-form-item>
        </div>
        <div class="shenfen">
          <el-form-item label="转入金额" style="width:50%">
            <input type="text" class="input_box">
          </el-form-item>
          <el-form-item label="付款金额" style="width:50%">
            <input type="text" class="input_box">
          </el-form-item>
        </div>
        <div class="minx">
          <el-form-item label="定金编号" style="width:50%">
            <input type="text" class="input_box" style="width:150px !important">
          </el-form-item>
          <span class="po">合同状态：正常</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'indexyichang',
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
.conmeny {
    width: 100%;
}
.demit {
    height: 40px;
    width: 500px;
}
.pacuk {
    width: 50% !important;
    background: white;
    margin-top: 15px;
}
.shenfen {
    display: flex;
    width: 100%;
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
    width: 200px !important;
}
.formbox {
    padding-top: 15px;
}
.bluck {
    margin-bottom: 15px;
    margin-bottom: 15px;
    width: 280px;
    display: flex;
}
.mday {
    margin-left: 10px !important;
    margin-bottom: 15px !important;
}
.po {
    width: 40px;
    margin-left: 10px;
    font-size: 15px;
    height: 25px;
    line-height: 26px;
    font-size: 14px;
    color: #606266;
}
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
</style>
