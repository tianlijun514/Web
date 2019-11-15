<!-- vue快捷创建组件 -->
<template>
  <section class='appa'>
    <form class="comeny">
      <div class="conka">
        <p class="texty">会员卡号</p>
        <input type="text" class="inputbox">
      </div>
      <div class="conka">
        <p class="texty">会员姓名</p>
        <input type="text" class="inputbox">
        <p class="yuyuan">会员编号</p>
        <input type="text" class="inputbox">
      </div>
      <div class="conka">
        <p class="texty">定金编号</p>
        <input type="text" class="inputbox">

        <alertip v-show="alertipShow" @closeTip="alertipShow = false" :alertText="alertText"></alertip>
        <button type="primary" @click="alerts()" class="btnte">...</button>
        <p class="texty">定金金额</p>
        <input type="text" class="inputbox">
      </div>
      <div class="conka">
        <p class="texty">租箱号</p>
        <input type="text" class="inputbox">
        <p class="yuyuan">租用月数</p>
        <input type="text" class="inputbox">
      </div>
      <div class="buck">
        <P class="texty">日期范围</P>
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="conka">
        <p class="texty">应收租金</p>
        <input type="text" class="inputbox">
        <p class="yuyuan">实收租金</p>
        <input type="text" class="inputbox">
      </div>
      <div class="conka">
        <p class="texty">押金金额</p>
        <input type="text" class="inputbox">
        <p class="yuyuan">应收金额</p>
        <input type="text" class="inputbox">
      </div>
      <div class="meny">
            <eminy v-show="yume" @cumen="yume= false" :alertText="alertText"></eminy>
        <button type="primary" @click="emint()" class="buns">确认并提交</button>
      </div>
    </form>

  </section>
</template>

<script>
import eminy from './money'
import alertip from './zjding'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'indexdj',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    alertip,
    eminy
  },
  data () {
    // 这里存放数据
    return {
      value1: '',
      alertipShow: false,
      yume:false,
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
      this.alertipShow = true;
    },
    emint(){
      this.yume =true;
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
    width: 50% !important;
    background: white;
   
    height: 450px;
}
.comeny {
    width: 100%;
    margin: 12px 0px 0px 0px;
    height: 500px;
    padding-top: 20px;

}
.conka {
    display: flex;
    height: 45px;
}
.texty {
    font-size: 14px;
    height: 33px;
    line-height: 33px;
    width: 70px;
    margin-left: 15px;
}

.yuyuan {
    font-size: 14px;
    height: 33px;
    line-height: 33px;
    width: 70px;
    margin-left: 47px;
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

.btnte {
    width: 30px !important;
    height: 28px !important;
    margin-left: 2px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
}
.buck {
    display: flex;
    margin-left: 0px !important;
    margin-bottom: 15px !important;
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
.meny{
  width: 200px;
  margin: auto;
}
</style>
