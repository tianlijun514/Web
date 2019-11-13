<!-- vue快捷创建组件 -->
<template>
  <div class='tip'>
    <div class="yang">
      <p class="tites">定金合同选择</p>
      <el-table :data="tableData" border style="width: 100%;margin-top: 10px">
        <el-table-column prop="date" label="选择" width="50"></el-table-column>
        <el-table-column prop="hao" label="编号" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="zjxm" label="证件号码"></el-table-column>
        <el-table-column prop="phonex" label="手机"></el-table-column>
        <el-table-column prop="moneys" label="金额"></el-table-column>
        <el-table-column prop="bian" label="会员编号" width="120"></el-table-column>
      </el-table>
      <div class="pack">
        <button class="btnte">确定</button>
        <button @click="closeTip" class="btnte" style=" margin-left: 5%;">取消</button>
      </div>

    </div>

  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'app',

  props: {},//接收传的值
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      tableData: [{
        date: '0',
        hao: '1',
        name: '王小虎',
        zjxm: '123123123111',
        phonex: '12515121412',
        moneys: '20',
        bian: '0101101',

      }
      ]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    closeTip () {
      this.$emit('closeTip')//分发事件
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
    width: 55%;
    height: 300px;
    overflow: hidden;
    position: fixed;
    left: 27%;
    top: 20%;
    background: #fff;
    border: 8px solid rgba(177, 174, 174, 0.89);
    padding: 0px;
}
.tites {
    width: 100% !important;
    background: #333;
    color: white;
    height: 30px;
    line-height: 30px;
    text-indent: 15px;
    font-weight: 600;
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
  
    margin-top:10px;
    margin-left: 40%;
}
</style>
