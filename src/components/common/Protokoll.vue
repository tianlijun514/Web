<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog title="跟进记录" :visible.sync="protokollieren.show" tooltip-effect="dark" width="50%" :close-on-click-modal="false" :close-on-press-escape="false" :modal-append-to-body="false">
      <template>
        <el-table :data="kamaing" border style="width: 100%">
          <el-table-column prop="time" label="跟进时间" width="100"></el-table-column>
          <el-table-column prop="address" label="跟进内容"></el-table-column>
          <el-table-column prop="reack" label="跟进人" width="100"></el-table-column>
        </el-table>
      </template>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="protokollieren.show = false">取 消</el-button>
        <el-button type="primary" @click="protokollieren.show = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Dialog',
  props: {
    protokollieren: Object,
    contract: Array
  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      kamaing: [{
        time: '2016-05-02',
        reack: '王小虎',
        address: '上海市普陀区'
      }],
      currentPage: 1,
      size: 10,
      total: 0,
      emit: ''
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
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
.block {
    width: 55%;
    margin: auto;
}
 .el-dialog__body {
    padding: 10px 20px !important;

}
</style>
