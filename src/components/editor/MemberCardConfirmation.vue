<!-- vue快捷创建组件 -->
<template>
  <div class='APPX'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="storeCode"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="status">
          <el-option label="已制卡" value="2"></el-option>
        </el-select>
      </el-form-item>

      <span class="demonstration">日期范围</span>
      <el-date-picker v-model="value1" @change='datas' type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>

      <el-form-item style="margin-left: 10px">
        <el-button type="primary" @click="chauxn">查询</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共{{total}}条记录/显示{{currentPage}}页</span>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="序号" type="index" width="50"></el-table-column>
      <el-table-column prop="storeName" label="门店名称" width="100"></el-table-column>
      <el-table-column prop="cardId" label="卡号" width="120"></el-table-column>
      <el-table-column prop="shellDate" label="销售日期" width="140"></el-table-column>
      <el-table-column prop="cardTypeName" label="会籍类型" width="100"></el-table-column>
      <el-table-column prop="startDate" label="有效日期起" width="140"></el-table-column>
      <el-table-column prop="endDate" label="有效日期止" width="180"></el-table-column>
      <el-table-column prop="remark" label="状态" width="100"></el-table-column>
      <el-table-column prop="makeDate" label="制卡日期" width="140"></el-table-column>
      <el-table-column prop="memberId" label="会员编号"></el-table-column>
         <el-table-column prop="name" label="会员姓名" width="120" >
        <template slot-scope="scope">
          <span class="name" @click="show(scope.row)">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="lingka(scope.row,scope.$index)">会员领卡</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="uys">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  <Dialog :showData="showData" :dialogShow="dialogShow" @dialogShowData="dialogShowData" />
  </div>

</template>

<script>
import Dialog from '../huibox/memberDialog'
import axios from "axios";
import { base, url } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'inexhetong',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
Dialog
  },
  data () {
    // 这里存放数据
    return {
      status: '',
      storeCode: '',
      date_s: '',
      date_e: '',
      size: 10,
      total: 0,
      value1: '',
      currentPage: 1,
      tableData: [],
      showData: '',
      dialogShow: false
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    datas (even) {
      var mydata = even[0]
      var y = mydata.getFullYear();
      var m = (mydata.getMonth() + 1 < 10 ? '0' + (mydata.getMonth() + 1) : mydata.getMonth() + 1);
      var d = mydata.getDate() + 1 < 10 ? '0' + mydata.getDate() : mydata.getDate();
      this.date_s = y + "-" + m + "-" + d;
      var enddata = even[1]
      var y = enddata.getFullYear();
      var d = enddata.getDate() + 1 < 10 ? '0' + enddata.getDate() : enddata.getDate();
      var m = (enddata.getMonth() + 1 < 10 ? '0' + (enddata.getMonth() + 1) : enddata.getMonth() + 1);
      this.date_e = y + "-" + m + "-" + d;
    },
      // 名字详情跳转
    show (e) {
      this.showData = e.memberId
      this.dialogShow = true
    },
    dialogShowData (e) {
      this.dialogShow = e
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.chaxun();
    },
    handleClick (row) {
      console.log(row);
    },

    // 领卡
    lingka (row, cardId) {
      // console.log(row)
      axios.get(base + `/card/receiveCard`, {
        params: {
          cardId: row.cardId
        }
      }).then(res => {
        if (res.data.c == 10000) {
          this.$message({
            message: '领卡成功',
            type: 'success'
          });
          this.chauxn();
        } else {
          this.$message.error('领卡失败');
        }
      })
    },

    // 查询
    chauxn () {
      let a
      a = this.status ? parseInt(this.status) : ''
      axios
        .post(base + '/card/queryCards/' + this.currentPage + '/' + this.size, {
          status: a,
          storeCode: this.storeCode,
          type: 2,
          startDate: this.date_s,
          endDate: this.date_e
        }
        ).then(res => {
          this.tableData = res.data.d
          this.total = res.data.t
        })
    },

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chauxn()
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
.el-form-item__content {
    width: 100px !important;
}
@import './../../assets/css/table.css';
.uys {
    width: 50%;
    margin: auto;
}
.APPX {
    width: 100%;
}
.name {
    color: #e67e22;
    cursor: pointer;
}
</style>
