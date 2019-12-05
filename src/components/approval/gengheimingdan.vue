<!-- vue快捷创建组件 -->
<template>
  <div class='pact'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">

      <div class="shenfen">

        <el-form-item label="证件号" label-width='82px'>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

          <el-input v-model="input" style="width: 255px"></el-input>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="姓名">
          <el-input v-model="input1" class="kuang"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width='82px'>
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="操作">
        <el-radio-group v-model="form.resource">
          <el-radio label="启用黑名单"></el-radio>
          <el-radio label="解除黑名单" style="margin-left: 25px;"></el-radio>
        </el-radio-group>
      </el-form-item>
      
      <el-form-item label="申请原因">
        <el-input type="textarea" v-model="form.desc" class='whinth'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存申请</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'gengheimingdan',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      input: '',
      input1: '',
      value1: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      options: [{
        value: '1',
        label: '身份证'
      }, {
        value: '2',
        label: '护照'
      }, {
        value: '3',
        label: '回乡证'
      }],
      value: ''
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

.kuang {
    width: 187px;
}
.whinth {
    width: 461px;
}
</style>
