<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="日期">
        <el-date-picker v-model="valueDate" type="date">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="会员卡号">
        <el-input v-model="typeCode"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="chaxun">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="yuyue">预约</el-button>
      </el-form-item>

    </el-form>

    <span class="c-btn-link" @click="beforeDate(valueDate)" v-loading.fullscreen.lock="fullscreenLoading">《前一天 </span>
    <span class="time">{{dateTime}} </span>
    <span class="c-btn-link" @click="afterDate(valueDate)" v-loading.fullscreen.lock="fullscreenLoading">后一天》</span>
    <div id="div_list">
            <table class="list">
                <tbody>
                    <tr>
                        <th class="title">授课时间</th>
                        <th v-for="(item,index) in tableHed" :key="index+'a'">{{item}}</th>
                    </tr>
                    <tr class="line1" v-for="(item,index) in appointmentByCoach" :key="index+'b'">
                        <td class="no">{{item.name}}</td>
                        <td
                            v-for="(item2,index2) in item.data"
                            :key="index2+'c'"
                        >{{item2.appointments[0]?item2.appointments[0].courseNumber:''}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    <Sijiaokecheng :sijiao="sijiao" @fun="fun"></Sijiaokecheng>
  </div>
</template>

<script>
let tableTh = [
  '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
];
import Sijiaokecheng from '../common/Sijiaokecheng'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'app',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Sijiaokecheng
  },
  data () {
    // 这里存放数据
    return {
      sijiao: {
        show: false
      },
      dateTime: '',
      typeCode: '',
      valueDate: '',
      tableHed: tableTh,
      fullscreenLoading:false
    }
  },
  // 监听属性 类似于data概念
  computed: {
    ...mapState({appointmentByCoach:state=>state.appointmentByCoach})
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    ...mapActions(['getAppointmentByCoach']),
    datas (even) {
      var mydata = even;
      var y = mydata.getFullYear();
      var m = mydata.getMonth() + 1;
      var d = mydata.getDate();
      this.dateTime = y + "-" + m + "-" + d;
      this.fullscreenLoading=true
      this.getAppointmentByCoach(this.dateTime).then(res=>{
        this.fullscreenLoading=false
      })
    },
    beforeDate (date) {
      this.valueDate = new Date(this.valueDate.setDate(this.valueDate.getDate() - 1));
      this.datas(date)
    },
    afterDate (date) {
      this.valueDate = new Date(this.valueDate.setDate(this.valueDate.getDate() + 1))
      this.datas(date)
    },
    chaxun () {
      this.datas(this.valueDate)
    },
    yuyue () {
      this.sijiao.show = true;
    },
    fun(data){
      if(data=='yes'){
        this.valueDate = new Date(this.valueDate.setDate(this.valueDate.getDate() + 1))
        this.datas(this.valueDate)
      }
    }

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.valueDate = new Date();
    this.datas(this.valueDate);
    
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
table.list th,
table.list td {
    padding: 2px 20px;

    line-height: 20px;
    height: 35px;
    text-align: center;
    font-size: 12px;
}
.title {
    white-space: nowrap;
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
#div_list {
    padding-bottom: 50px;
}
.c-btn-link {
    font-size: 14px;
    color: #369;
    cursor: pointer;
}
.time {
    font-size: 14px;
}
</style>
