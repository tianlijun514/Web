<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <div class="block">
        <span class="demonstration">月份</span>
        <el-date-picker v-model="value2" type="month" placeholder="选择月">
        </el-date-picker>
      </div>

      <el-form-item>
        <el-button type="primary" @click="getDayNumByYearMonth">查询</el-button>
        <el-button type="primary" @click="getDayNumByYearMonth">新增</el-button>
        <el-button type="primary" @click="getDayNumByYearMonth">按月新增</el-button>
      </el-form-item>
    </el-form>
    <div id="div_list">
      <table class="list">
        <tbody>
        <tr>
          <th class="title">授课时间</th>
          <th v-for="(item,index) in tableHeader" :key="index+'a'">12/{{item}}</th>
        </tr>
        <tr class="line1" v-for="(item,index) in tableHed" :key="index+'b'">
          <td class="no">{{item}}</td>
          <td v-for="(item,index) in tableHtd" :key="index+'c'">{{item}}</td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
let tableTh = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00",
  "18:00","19:00","20:00","21:00","22:00"];
let tableTd = ["1"," ","4","","3","9","6","","7","6",
  "2","3","5","7","6","1"," "," ","5",
  "7"," "," "," ","","6"," ","2","8",
  "9","2","4"];
export default {
  name: 'app',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      formInline: {
        user: '测试门店',
        region: ''
      },
      value2: '',
      year : '',
      month : '',
      tableData:[],
      tableHeader:'',
      tableHed : tableTh,
      tableHtd : tableTd,
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    dateDef(){
      let dt = new Date();
      this.value2 = dt.getFullYear()+"-"+(dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1);
    },
      //根据年月得到天数
    getDayNumByYearMonth(){
      let date = new Date(this.value2);
      let year = date.getFullYear();
      let month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
      this.year = year;
        this.month = month;
      if(this.month==1||this.month==3||this.month==5||this.month==7||this.month==8||this.month==10||this.month==12) {
        this.tableHeader = 31;
      }else if(this.month==4||this.month==6||this.month==9||this.month==11){
        this.tableHeader = 30
      }else if(this.month==2){
        //是否是闰年
        if(this.year/4 == 0 && this.year/100 != 0 || this.year/400 == 0){
          this.tableHeader = 29 ;
        }else{
          this.tableHeader = 28;
        }
      }
      tableTd.length = this.tableHeader;


    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.dateDef();
    this.getDayNumByYearMonth();
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
.demo-form-inline {
    display: flex;
}
table.list th {
  background-color: #000;
  color: #fff;
  font-size: 13px;
  font-weight: normal;
}
table.list th, table.list td {
  padding: 2px 20px;
  
  line-height: 20px;
  height: 35px;
  text-align: center;
  font-size: 12px;
}
.title{
  white-space : nowrap ;
  padding: 0 8px !important;
}
th {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;

}
table.list tr.line1 {
  background-color: #fff;
}
table.list {
  width: 100%;
  border: 0;
  border-collapse: collapse;
}
table.list td.no {
  color: #bebebe;
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
}
table.list tr.line2 {
  background-color: #f4f4f4;
}
</style>
