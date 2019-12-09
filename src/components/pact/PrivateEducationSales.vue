<!-- vue快捷创建组件 -->
<template>
  <div class='pact'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">
      <div class="shenfen">
        <el-form-item label="会员姓名">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
        <el-form-item  label="会员编号" class="block">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="会员姓名">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
        <el-form-item label="合同终止日" label-width="82px" style="margin-left: 18px">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>
      <div class="shenfen">
        <el-form-item label="定金编号">
          <el-input v-model="input" disabled style="width: 160px"></el-input>
        </el-form-item>
        <button type="primary" @click="alerts()" class="btnte">...</button>

        <el-form-item label="定金金额" class="block">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>
      <div class="shenfen">
        <el-form-item label="私教礼包">
          <el-select v-model="form.region"  style="width: 188px;">
            <el-option label="SJ001 - 私教送健身包" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="私教课程" class="block">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="上课教练">
          <el-select v-model="form.region" style="width: 188px;">
            <el-option label="B01171 - 伍一 - 一星级" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程数量" class="block">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="开始日期">
          <el-input  suffix-icon="el-icon-date" v-model="input1" disabled style="width: 187px;"></el-input>
        </el-form-item>

        <el-form-item label="结束日期" class="block">
          <el-input  suffix-icon="el-icon-date" v-model="input1" disabled style="width: 187px;"></el-input>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="实际售价">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
        <el-form-item label="应收金额" class="block">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" style="width: 475px;"></el-input>
      </el-form-item>

      <span class="demonstration">礼包包含商品</span>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="名称">
        </el-table-column>
        <el-table-column prop="name" label="数量" width="180">
        </el-table-column>
        <el-table-column prop="address" label="库存" width="180">
        </el-table-column>
      </el-table>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="btny">确认并提交</el-button>
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
  name: 'pact7',
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
      input1:'',
      value1: '',
      dialog: {
        show : false
      },
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
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路'
      }]
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
    margin-left: 20px !important;
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
  font-weight: 600;
}
.btny {
    margin-top: 20px;
    margin-left: 180px;
}
</style>
