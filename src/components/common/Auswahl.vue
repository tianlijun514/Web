<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog title="商品选择" :visible.sync="auswahl.show" width="70%" :close-on-click-modal="false" :close-on-press-escape="false" :modal-append-to-body="false">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="商品名称">
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>

        <el-form-item label="助记符">
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>

        <el-form-item label="商品类别">
          <el-select v-model="formInline.regions">
            <el-option label="全部" value="01"></el-option>
            <el-option label="111 - 11111" value="02"></el-option>
            <el-option label="222 - 222" value="03"></el-option>
            <el-option label="L001 - 饮料类" value="04"></el-option>
            <el-option label="L002 - 会籍办卡类" value="02"></el-option>
            <el-option label="L003 - 工本费" value="03"></el-option>
            <el-option label="L004 - 锁" value="04"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form>
      <span class="searchRst">查询结果：共0条记录/显示0页</span>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="yuhao" label="商品编码" width="80"></el-table-column>
        <el-table-column prop="Mname" label="商品名称" width="110"></el-table-column>
        <el-table-column prop="oading" label="单位" width="100"></el-table-column>
        <el-table-column prop="shang" label="标准售价"></el-table-column>
        <el-table-column prop="name" label="员工价"></el-table-column>
        <el-table-column prop="yutime" label="会员价" width="100"></el-table-column>
        <el-table-column prop="Hebian" label="备用价1" width="100"></el-table-column>
        <el-table-column prop="yuan" label="备用价2" width="100"></el-table-column>
        <el-table-column prop="hetime" label="备用价3" width="120"></el-table-column>
        <el-table-column prop="ku" label="库存" width="120"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>
    </el-dialog>

  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Auswahl',
  props: {
    auswahl: Object
  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      currentPage: 5,
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        date: '0',
        hao: '1',
        name: '王小虎',
        zjxm: '123123123111',
        phonex: '12515121412',
        moneys: '20',
        bian: '0101101',
        ku:'1211'

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
    onSubmit () {
      console.log('submit!');
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
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
.el-dialog__body {
    padding: 10px 20px !important;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
.block {
    width: 50%;
    margin: auto;
}
</style>
