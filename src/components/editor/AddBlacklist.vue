<!-- vue快捷创建组件 -->
<template>
  <section class='appa'>
    <el-form class="comeny">
      <el-form-item label="证件类型:" style="margin-left: 16px;">
        <el-select v-model="formInline.regions" style="margin-left: -4px">
          <el-option label="身份证" value="02"></el-option>
          <el-option label="护照" value="01"></el-option>
          <el-option label="回乡证" value="02"></el-option>
        </el-select>
      </el-form-item>

      <div class="conka">
        <p class="texty">证件号：</p>
        <input type="text" class="inputbox">
      </div>
      <div class="conka">
        <p class="texty">姓名：</p>
        <input type="text" class="inputbox">
      </div>

      <div class="conka">
        <p class="texty">手机：</p>
        <input type="text" class="inputbox">
      </div>

      <div class="conka">
        <p class="texty">备注：</p>
        <textarea name="" id="" style='width:54%;border-color:#dcdfe6;'></textarea>
      </div>
      <div class="meny">
        <button type="primary" @click="emint()" class="buns">确认并提交</button>
      </div>
    </el-form>

  </section>
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
      formInline: {
        user: '',
        region: ''
      },
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

    emint () {
      close.log('1111')
    }

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
.appa {
    width: 30% !important;
    background: white;
    height: 340px;
}
.comeny {
    width: 100%;
    margin: 12px 0px 0px 0px;
    height: 340px;
    padding-top: 20px;
}
.conka {
    display: flex;
    height: 45px;
}

.texty {
    font-size: 14px;
    color: #606266;
    height: 33px;
    line-height: 33px;
    width: 70px;
    margin-left: 15px;
    text-align: end;
}


.inputbox {
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

.buns {
    background: black;
    color: white;
    border: none;
    margin: auto;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
}
.meny {
    width: 120px;
    margin: 20px auto;
}
</style>
