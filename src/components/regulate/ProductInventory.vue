<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item label="盘点部门">
        <el-select v-model="deptCode" @change="pandian">
          <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.number">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="herleiten">导出</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="herleiten">导出全部库存</el-button>
      </el-form-item>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="deptCode" label="门店编号"></el-table-column>
        <el-table-column prop="deptName" label="门店名称"></el-table-column>
        <!-- <template slot-scope="scope">
          <el-table-column prop="repertoryId" label="库存id" v-model.number="repertoryId()"></el-table-column>
        </template> -->
        <el-table-column prop="spCode" label="商品编码"></el-table-column>
        <el-table-column prop="spName" label="商品名称"></el-table-column>
        <el-table-column prop="unitName" label="单位"></el-table-column>
        <el-table-column prop="number" label="当前库存数量"></el-table-column>
        <el-table-column prop="province" label="当前盘点数量">
          <template slot-scope="scope">
            <input v-model.number="scope.row.number2" autocomplete="off" class="pan" @change="inexv(scope.row)">
          </template>
        </el-table-column>
        <el-table-column prop="subRepNum" label="盘点提交库存数量">
        </el-table-column>
        <el-table-column prop="subNum" label="盘点提交数量"></el-table-column>
        <el-table-column prop="ykNum" label="盈亏数量"></el-table-column>
        <el-table-column prop="nowDate" label="当前盘点时间" width="95"></el-table-column>
        <el-table-column prop="subDate" label="盘点提交时间" width="95"></el-table-column>
      </el-table>
      <div class="vorlegen">

        <el-form-item>
          <el-button type="primary" @click="herleiten">确认并保存</el-button>
        </el-form-item>
        <!-- 
        <template slot-scope="scope"> -->
        <el-button type="primary" @click="inventur">提交盘点数据</el-button>
        <!-- </template> -->

        <el-form-item>
          <el-button type="primary" @click="herleiten">清除盘点数据</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="herleiten">按盘盈亏数量更新库存</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import axios from "axios";
import { base } from '../js/url'
export default {
  name: 'ProductInventory',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      currentPage: 1,
      total: 0,
      size: 10,
      bian: '',
      // shuliang:0,
      deptCode: '',
      tableData: [],
      options: [],
      pandianbox: [],
      repertoryId: null,
      subNum: null,
      date_s: '',
      subNum: "0",
      good: {}
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    inexv (e) {
      this.good = e
    },
    // 提交盘点数据
    inventur () {
      // console.log(this.good)
      var mydata = new Date();
      var y = mydata.getFullYear();
      var m = (mydata.getMonth() + 1 < 10 ? '0' + (mydata.getMonth() + 1) : mydata.getMonth() + 1);
      var d = mydata.getDate() + 1 < 10 ? '0' + mydata.getDate() : mydata.getDate();
      this.date_s = y + "-" + m + "-" + d;

      // let forData = this.tableData;
      // for (let i = 0; i <= forData.lenght; i++) {
      //   console.log(forData[i]);
      // }

      let nok = [{        repertoryId: this.good.repertoryId,
        subNum: this.good.number2,
        nowDate: this.date_s
      }]
      axios
        .post(base + '/commodity/subRepertoryPd',
          nok
        ).then(res => {
          // if (res.data.c == 10000) {
          //   this.$message({
          //     message: '操作成功',
          //     type: 'success'
          //   });
          //   this.chaxun();
          // } else {
          //   this.$message.error('操作失败');
          // }
          console.log(res.data)
        })
    },
    // 商品盘点表导出
    herleiten () {
      axios
        .get(base + '/commodity/excelRepertoryPd', { responseType: 'arraybuffer' })
        .then(res => {
          let blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
          let objectUrl = URL.createObjectURL(blob);
          window.location.href = objectUrl;
        })
    },
    // 全部商品盘点表
    herleiten () {
      axios
        .get(base + '/commodity/excelAllRepertoryPd', { responseType: 'arraybuffer' })
        .then(res => {
          let blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
          let objectUrl = URL.createObjectURL(blob);
          window.location.href = objectUrl;
        })
    },

    // 查询
    chaxun () {
      axios
        .post(base + '/commodity/getRepertoryPd', {

          page: this.currentPage,
          size: this.size,
          deptCode: this.deptCode,

        }).then(res => {
          console.log(res.data)
          this.tableData = res.data.d;
          for (let i in this.tableData) {
            this.tableData[i].number2 = 0
          }
          this.total = res.data.t;
        })
    },
    // 获取门店类型
    pandian (e) {
      this.mendian = e
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun(),
      axios
        .get(base + '/store/getStoreList').then(res => {
          this.options = res.data.d
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
<style scoped>
@import './../../assets/css/table.css';
.APPX {
    width: 100%;
}
.vorlegen {
    margin: 40px auto;
    width: 40%;
}
.pan {
    width: 65px;
    height: 20px;
}
</style>
