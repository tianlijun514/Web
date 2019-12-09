<!-- vue快捷创建组件 -->
<template>
  <div class='pact'>
    <el-form ref="form" label-width="80px" class="formbox" :rules="form_rules">
      <div class="box">
        <el-form-item label="门店">
          <input type="text" class="input_box" v-model="storeName">
        </el-form-item>

        <el-form-item label="姓名" prop='name'>
          <input type="text" class="input_box" v-model="name">
        </el-form-item>
      </div>

      <div class="box" style="margin-left: -3px;">
        <el-form-item label-width='82px' label="手机" prop='phone'>
          <input type="text" class="input_box" v-model="phone">
        </el-form-item>

        <el-form-item label="证件号" label-width='82px' prop='idCard'>
          <input type="text" class="input_box" v-model="idCard">
        </el-form-item>
      </div>

      <div class="box">
        <div class="block" style="margin-left: 28px">
          <span class="demonstration">来访日期</span>
          <el-date-picker v-model="date" type="date" style="width: 201px">
          </el-date-picker>
        </div>

        <el-form-item label="时间">
          <el-select v-model="timeHorizon" style="width: 204px">
            <el-option label="上午" value="1"></el-option>
            <el-option label="下午" value="2"></el-option>
            <el-option label="晚上" value="3"></el-option>
          </el-select>
        </el-form-item>
      </div>

      <div class="box">
      <el-form-item label="访客类型">
        <el-select v-model="type">
          <el-option label="APP SHOW" value="1"></el-option>
          <el-option label="WALK IN" value="2"></el-option>
          <el-option label="DATE IN" value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="销售员" label-width='82px' prop='shellUser'>
        <input type="text" class="input_box" v-model="shellUser">
      </el-form-item>
      </div>



      <!-- <el-form-item label="备注">
        <el-input type="textarea" v-model="form.record" class="textar"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认并提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import { url } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'fang',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      name: '',
      shellUser: '',
      storeName: '',
      phone: '',
      idCard: '',
      date: '',
      timeHorizon: '',
      type: '',
      form_rules: {
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" }
        ],
        idCard: [
          { required: true, message: "证件号不能为空", trigger: "blur" }
        ],
        shellUser: [{ required: true, message: "销售员不能为空", trigger: "blur" }]
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
      axios
        .post(url + `/visit/addRec`, {
          name: this.name,
          phone: this.phone,
          idCard: this.idCard,
          date: this.date,
          timeHorizon: this.timeHorizon,
          type: this.type,
          shellUser: this.shellUser,
          storeName: this.storeName
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 10000) {
            // this.pojo = {}
            //跳转页面 
            this.$router.push("./editor4");
          } else {
            alert('添加失败！');
          }
        })
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
    width: 650px !important;
    background: white;
}
.formbox {
    padding: 20px;
}
.box {
    display: flex;
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

.block {
    margin-left: 15px !important;
    margin-bottom: 15px !important;
}
</style>
