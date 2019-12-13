<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog title="商品选择" :visible.sync="auswahl.show" width="70%" :close-on-click-modal="false" :close-on-press-escape="false" :modal-append-to-body="false">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="商品名称">
          <el-input v-model="spName"></el-input>
        </el-form-item>

        <el-form-item label="助记符">
          <el-input v-model="mnemonic"></el-input>
        </el-form-item>
        <el-form-item label="商品类别">
          <el-select v-model="typeCode" @change="leixing">
            <el-option label="全部" value></el-option>
            <el-option v-for="item in type_list" :key="item.id" :label="item.typeName" :value="item.typeCode">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form>
      <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
      <el-table :data="tableData" border style="width: 100%" @row-click="handdle">
        <el-table-column prop="spCode" label="商品编码" width="80"></el-table-column>
        <el-table-column prop="spName" label="商品名称" width="110"></el-table-column>
        <el-table-column prop="unit" label="单位" width="100"></el-table-column>
        <el-table-column prop="price" label="标准售价"></el-table-column>
        <el-table-column prop="empPrice" label="员工价"></el-table-column>
        <el-table-column prop="vipPrice" label="会员价" width="100"></el-table-column>
        <el-table-column prop="sparePrice1" label="备用价1" width="100"></el-table-column>
        <el-table-column prop="sparePrice2" label="备用价2" width="100"></el-table-column>
        <el-table-column prop="sparePrice3" label="备用价3" width="120"></el-table-column>
        <el-table-column prop="ku" label="库存" width="120" ></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Auswahl',
  props: {
    auswahl: Object,
    table:Object

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      box:false,
      currentPage: 1,
      mnemonic: '',
      typeCode: '',
      spName: '',
      type_list: [],
      size: 10,
      total: 0,
      tableData: [{}]
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
      this.chaxun();
    },
    handdle (row, event,column) {
      console.log(row, event, column) 
      this.$emit('tapecode',row)
      this.auswahl.show=false

      
    },

    // 查询
    chaxun () {
      let a
      a = this.typeCode ? parseInt(this.typeCode) : ''
      axios.
        post(base + '/commodity/getSpInfo', {
          page: this.currentPage,
          size: this.size,
          spName: this.spName,
          mnemonic: this.mnemonic,
          typeCode: a
        }).then(res => {
          this.tableData = res.data.d
          this.total = res.data.t
        })

    },
    leixing (e) {
      this.staat = e
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun()
    axios
      .post(base + '/commodity/getAllSpType').then((res) => {
        this.type_list = res.data
      })
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
