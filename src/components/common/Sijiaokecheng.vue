<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-dialog title="私教课程预约" :visible.sync="sijiao.show" tooltip-effect="dark" width="50%" :close-on-click-modal="false" :close-on-press-escape="false" :modal-append-to-body="false">

        <el-form-item label="会员卡号">
          <el-input v-model="typeCode"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="chaxun">查询</el-button>
        </el-form-item>

        <br>

        <el-form-item label="会员姓名">
          <el-input v-model="typeCode" disabled></el-input>
        </el-form-item>

        <el-form-item label="会员编号">
          <el-input v-model="typeCode" disabled></el-input>
        </el-form-item>

        <el-form-item label="上课时间">
          <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" align="right" :picker-options="pickerOptions" style="width: 188px;">
          </el-date-picker>
        </el-form-item>

        <el-table :data="contract" border style="width: 100%;" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column prop="id" label="合同号" width="100"></el-table-column>
          <el-table-column prop="name" label="课程"></el-table-column>
          <el-table-column prop="zjNum" label="教练"></el-table-column>
          <el-table-column prop="phoneNum" label="剩余课时"></el-table-column>
          <el-table-column prop="reservePrice" label="有效期"></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button @click="sijiao.show = false">取 消</el-button>
          <el-button type="primary" @click="sijiao.show = false">确 定</el-button>
        </span>
      </el-dialog>

    </el-form>

  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Dialog',
  props: {
    sijiao: Object,
    contract: Array
  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      typeCode:'',
      value2:'',
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
      emit: ''
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleSelectionChange (val) {
      this.emit = val[0]
    },
    pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
    chaxun(){
      console.log(111)
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
@import './../../assets/css/table.css';
.el-dialog__body {
    padding: 10px 20px !important;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
 
}
</style>
