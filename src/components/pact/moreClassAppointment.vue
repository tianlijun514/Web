<!-- vue快捷创建组件 -->
<template>
  <div class='pact'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">
      <div class="shenfen">
        <el-form-item label="教练工号">
          <el-input v-model="input"></el-input>
        </el-form-item>
        <el-form-item label-width='82px' label="教练姓名" class="block">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>
      <div class="shenfen">
        <div class="block">
          <span class="demonstration">上课日期</span>
          <el-date-picker
                  style="width: 466px;"
                  v-model="value1"
                  type="datetimerange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00']">
          </el-date-picker>
        </div>
      </div>

      <div class="shenfen">
        <el-form-item label="会员卡号1">
          <el-input v-model="input"></el-input>
        </el-form-item>
        <el-form-item label-width='82px' label="会员姓名1" class="block">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="私教课程1">
        <el-select v-model="form.regions" style="width: 466px;">
          <el-option label="A00006 - 红牌楼店" value="02" ></el-option>
        </el-select>
      </el-form-item>

      <div class="shenfen">
        <el-form-item label="会员卡号2">
          <el-input v-model="input"></el-input>
        </el-form-item>
        <el-form-item label-width='82px' label="会员姓名2" class="block">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="私教课程2">
        <el-select v-model="form.regions" style="width: 466px;">
          <el-option label="A00006 - 红牌楼店" value="02" ></el-option>
        </el-select>
      </el-form-item>

      <div class="shenfen">
        <el-form-item label="会员卡号3">
          <el-input v-model="input"></el-input>
        </el-form-item>
        <el-form-item label-width='82px' label="会员姓名3" class="block">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="私教课程3">
        <el-select v-model="form.regions" style="width: 466px;">
          <el-option label="A00006 - 红牌楼店" value="02" ></el-option>
        </el-select>
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
      input:'',
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
  .block {
    margin-left: 20px !important;

  }
label {
    display: inline-block;
    width: 82px !important;
    text-align: left;
    padding: 1px;
    margin: 1px;
    color: #000;
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
    margin-left: 15px !important;
    margin-bottom: 15px !important;
}

</style>
