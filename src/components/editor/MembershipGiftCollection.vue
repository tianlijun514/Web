<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true"  class="demo-form-inline">
      <el-form-item label="会员卡号">
        <el-input v-model="cardId"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>
      <el-form-item>
        
        <el-button type="primary" @click="onSubmit">领取</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column label="选择" width="180" type="selection"></el-table-column>
      <el-table-column prop="contractId" label="合同号" width="180"></el-table-column>
      <el-table-column prop="giftNumber" label="礼品编号" width="180"></el-table-column>
      <el-table-column prop="name" label="礼品名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'MembershipGiftCollection',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      cardId: '',
      tableData: []
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
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    // 查询
    chaxun () {
      axios
        .get(base + '/member/queryGifts', {
          params: {
            cardId: this.cardId,
          }
        }).then(res => {
          this.tableData=res.data.d
        })
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun()
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
.app {
    width: 100%;
}
.uys {
    width: 50%;
    margin: auto;
}
</style>
