<!-- vue快捷创建组件 -->
<template>
  <div class="conmeny">
    <div class="demit">
      <el-form class="shenfen">
        <el-form-item label="会籍合同号" label-width="100px" style="width: 60%">
          <el-input v-model="input"></el-input>
        </el-form-item>

        <el-form-item style="margin-left: 10px">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class='pacuk'>
      <el-form ref="form" :model="form" label-width="80px" class="formbox">
        <el-form-item label="合同编号">
          <el-input v-model="input" class="insin" disabled></el-input>
        </el-form-item>
        <div class="shenfen">

          <div class="bluck">
            <el-form-item label="销售日期">
              <el-input style="width: 185px" suffix-icon="el-icon-date" v-model="input1" disabled></el-input>
            </el-form-item>
          </div>

          <el-form-item label="销售类别">
            <el-input v-model="input" disabled class="mday"></el-input>
          </el-form-item>
        </div>
        <div class="shenfen">
          <el-form-item label="会员姓名">
            <el-input v-model="input" disabled class="mday"></el-input>
          </el-form-item>
          <el-form-item label="会员编号">
            <el-input v-model="input" disabled class="mday"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="会籍类型">
          <el-input v-model="input" class="insin" disabled></el-input>
        </el-form-item>

        <div class="shenfen">
          <el-form-item label="合同起日">
            <el-input style="width: 185px" suffix-icon="el-icon-date" v-model="input1" disabled></el-input>
          </el-form-item>

          <el-form-item label="合同迄日">
            <el-input style="width: 185px" suffix-icon="el-icon-date" v-model="input1" disabled></el-input>
          </el-form-item>
        </div>

        <div class="shenfen">
          <el-form-item label="合同金额">
            <el-input v-model="input" disabled class="mday"></el-input>
          </el-form-item>
          <el-form-item label="定金金额">
            <el-input v-model="input" disabled class="mday"></el-input>
          </el-form-item>
        </div>
        <div class="shenfen">
          <el-form-item label="转入金额">
            <el-input v-model="input" disabled class="mday"></el-input>
          </el-form-item>
          <el-form-item label="付款金额">
            <el-input v-model="input" disabled class="mday"></el-input>
          </el-form-item>
        </div>
        <div class="minx">
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
      input1: '',
      input: '',
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
.insin {
    width: 450px;
}
.conmeny {
    width: 100%;
}
.demit {
    height: 40px;
    width: 500px;
}
.pacuk {
    width: 580px !important;
    background: white;
    margin-top: 15px;
    padding: 15px;
}
.shenfen {
    display: flex;
}

.bluck {
    width: 266px;
    display: flex;
}
.mday {
    width: 184px;
}
.po {
    width: 40px;
    margin-left: 10px;
    height: 25px;
    line-height: 26px;
    font-size: 14px;
    color: #606266;
}
</style>
