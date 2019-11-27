<!-- vue快捷创建组件 -->
<template>
  <div class='pact'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">

      <el-form-item label="私教合同号" label-width='82px'>
        <el-input v-model="input" style="width: 187px;"></el-input>
      </el-form-item>

      <div class="conment">
        <div class="shenfen">
          <div class="block">
            <span class="demonstration">销售日期</span>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width: 183px" >
            </el-date-picker>
          </div>

          <el-form-item label="销售类别" label-width='82px'>
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>

        <div class="shenfen">
          <el-form-item label="会员姓名">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
          <el-form-item label-width='82px' label="会员编号">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>

        <div class="shenfen">
          <el-form-item label="课程">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
          <el-form-item label-width='82px' label="教练">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>

        <div class="shenfen">
          <el-form-item label="合同起日">
            <el-input  suffix-icon="el-icon-date" v-model="input1" disabled style="width: 185px;"></el-input>
          </el-form-item>

          <el-form-item label="合同迄日">
            <el-input  suffix-icon="el-icon-date" v-model="input1" disabled style="width: 185px;"></el-input>
          </el-form-item>
        </div>
        <div class="shenfen">
          <el-form-item label="合同金额">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
          <el-form-item label-width='82px' label="付款金额">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>

        <div class="shenfen">
          <el-form-item label="合同课时">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
          <el-form-item label-width='82px' label="剩余课时">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="shenfen">
        <el-form-item label="定金编号" class="phone">
          <el-input type="text"  disabled style="width: 160px"></el-input>
        </el-form-item>
        <button type="primary" @click="alerts()" class="btnte">...</button>
        <el-form-item label="定金金额" class="phone">
          <el-input type="text"  disabled></el-input>
        </el-form-item>
      </div>

      <el-form-item label="转入卡号">
        <el-input v-model="input" style="width: 187px;"></el-input>
      </el-form-item>

      <div class="shenfen">
        <el-form-item label="会员编号">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
        <el-form-item label-width='82px' label="会员姓名">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" style="width: 459px;"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认并提交</el-button>
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
    name: 'prvate',
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
        input:'',
        input1:'',
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
  .conment {
    border: 3px solid rgb(255, 239, 206);
    padding-top: 10px;
    margin-bottom: 10px;
    width: 580px;
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
    padding: 0 12px 0 0;
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

  .shenfen {
    display: flex;
  }

  .block {
    margin-left: 15px !important;
    margin-bottom: 15px !important;
  }
  .btnte {
    width: 28px !important;
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
