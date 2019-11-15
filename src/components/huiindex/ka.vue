<!-- vue快捷创建组件 -->
<template>
  <div class='tip'>
    <div class="yang">
      <p class="tites">选择会员卡号</p>
      <div class="shenfen">
        <el-form-item label="合同编号" style="width:50%">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </div>
      <el-table :data="tableData" border style="width: 100%;text-align:center">

        <el-table-column scope label="选择">
          <!-- <button @click="handleLook(scope.$index, scope.row)" class="btns">查看</button> -->
          <el-checkbox v-model="checked"></el-checkbox>
        </el-table-column>
        <template v-for="(item,index) in tableTitle">
          <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
        </template>
      </el-table>

      <div class="pack">
        <button class="btnte">确定</button>
        <button @click="cumen" class="btnte" style=" margin-left: 5%;">取消</button>
      </div>

    </div>

  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'ka',

  props: {},//接收传的值
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      checked: true,
      tableTitle: [
        { title: '卡号', data: 'num' },
        { title: '配卡日期', data: 'storeName' },
        { title: '状态', data: 'userNo' },

      ],
      tableData: [{
        num: '00012',
        storeName: '天府四街分店',
        userNo: '0001242',
        userCardNo: '0001242313',

      }, {
        num: '00012',
        storeName: '天府四街分店',
        userNo: '0001242',
        userCardNo: '0001242313',

      }]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    cumen () {
      this.$emit('cumen')//分发事件
    },
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
    overflow: auto;

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
.shenfen {
    display: flex;
    width: 100%;
    margin-top: 10px;
}
.pack{
  margin: auto;
  width: 30%;
}
</style>
