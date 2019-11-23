<!-- vue快捷创建组件 -->
<template>

  <div class='app'>
    <el-dialog title="收银台" :visible.sync="money.show" width="50%" :close-on-click-modal="false" :close-on-press-escape="false" :modal-append-to-body="false">

      <div class="conka">
        <div class="con">
          <p class="texty">销售员1</p>
          <input type="text" class="inputbox">
          <p class="yuyuan">销售员2</p>
          <input type="text" class="inputbox">
        </div>

      </div>

      <div class="monyq">

        <div class="con">
          <p class="texty">现金</p>
          <input type="text" class="inputbox">
          <p class="yuyuan">支付宝</p>
          <input type="text" class="inputbox">
        </div>

        <div class="con">
          <p class="texty">刷卡</p>
          <input type="text" class="inputbox">
          <p class="yuyuan">微信</p>
          <input type="text" class="inputbox">
        </div>
      </div>
      <div class="pacy">
        <p class="sy">应收金额：</p>
        <p class="zning">50:00</p>
        <p class="sy" style="width:65px">找零：</p>
        <p class="zning">22:00</p>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="money.show = false">取 消</el-button>
        <el-button type="primary" @click="money.show = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Money',

  props: {
    money: Object
  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // cumen () {
    //   this.$emit('cumen')//分发事件
    // }
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
<style  scoped>
@import './../../assets/css/table.css';
.tip {
    width: 100%;
    height: 980px;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 300;
}
.yang {
    width: 40%;
    height: 380px;
    overflow: hidden;
    position: fixed;
    left: 27%;
    top: 20%;
    background: #fff;
    border: 8px solid rgba(177, 174, 174, 0.89);
    padding: 0px;
}

.btnte {
    width: 60px !important;
    height: 30px !important;
    margin-left: 2px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
}
.pack {
    margin-top: 10px;
    margin-left: 40%;
}
.conka {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 3px solid #7b824c;
    height: 45px;
    padding: 10px;
    width: 630px;
    margin: auto;
    margin-bottom: 20px;
}
.con {
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
}
.monyq {
    border: 3px solid #d2885b;
    height: 90px;
    margin-top: 17px;
    padding: 10px;
    margin: auto;
    width: 630px;
      margin-bottom: 20px;
}

.pacy {
    display: flex;
    border: 3px solid #f8a800;
    background-color: #ffedc5;
    height: 30px;
  
    padding: 10px;
    margin: auto;
    width: 630px;
}

.texty {
    font-size: 14px;
    height: 33px;
    line-height: 33px;
    width: 70px;
    margin-left: 3px;
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

.yuyuan {
    font-size: 14px;
    height: 33px;
    line-height: 33px;
    width: 70px;
    margin-left: 47px;
}

.sy {
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 19px;
}
.zning {
    width: 235px;
    height: 30px;
    line-height: 30px;
    font-size: 17px;
}
</style>
