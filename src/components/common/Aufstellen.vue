<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog title="刷新报表数据" :visible.sync="aufstdialog.show" tooltip-effect="dark" width="50%" :close-on-click-modal="false"
     :close-on-press-escape="false" :modal-append-to-body="false" >
      <el-table :data="contract" border style="width: 100%;" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column prop="id" label="编号" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="zjNum" label="证件号码"></el-table-column>
        <el-table-column prop="phoneNum" label="手机"></el-table-column>
        <el-table-column prop="reservePrice" label="金额"></el-table-column>
        <el-table-column prop="userId" label="会员编号" width="120"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="aufstdialog.show = false">取 消</el-button>
        <el-button type="primary" @click="aufstdialog.show = false">确 定</el-button>
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
    aufstdialog: Object,
    contract:Array
  },
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
      ],
      emit:''
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleSelectionChange(val){
      this.emit=val[0]
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
@import './../../assets/css/table.css';
.el-dialog__body {
    padding: 10px 20px !important;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}

</style>
