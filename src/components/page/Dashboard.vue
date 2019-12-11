<template>
  <div class="app">
    <el-row :gutter="24">
      <el-col :span="3" class="boxing">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content grid-con-1" style="background-color: rgb(86, 139, 248);margin-left: 3px" @click='onAddMoney()'>
            <div class="grid-cont-right">
              <div class="tite">
                <div style="width: 120px">本店会员</div>
                <i class="el-icon-setting top"></i>
              </div>
              <div class="grid-num center">6542</div>

            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3" class="boxing">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content grid-con-1" style="background-color: rgb(116, 105, 245);">
            <div class="grid-cont-right" @click='sijiao()'>
              <div class="tite">
                <div style="width: 120px">私教会员</div>
                <i class="el-icon-setting top"></i>
              </div>
              <div class="grid-num center">6542</div>

            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3" class="boxing">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content grid-con-1" style="background-color: rgb(60, 178, 199);">
            <div class="grid-cont-right" @click="abgelaufen">
              <div class="tite">
                <div style="width: 120px">未过期会员</div>
                <i class="el-icon-setting top"></i>
              </div>
              <div class="grid-num center">6542</div>

            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3" class="boxing">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content grid-con-1" style="background-color: rgb(150, 191, 63);">
            <div class="grid-cont-right" @click="Mitglieder">
              <div class="tite_box">
                <div style="width: 120px">新增会员</div>
                <i class="el-icon-setting top"></i>
              </div>
              <div class="xin">
                <span class="zheng">昨日新增</span>
                <span class="shu">111</span>
              </div>
              <div class="xin">
                <span class="zheng">7日新增</span>
                <span class="shu">111</span>
              </div>
              <div class="xin">
                <span class="zheng">30日新增</span>
                <span class="shu">111</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="3" class="boxing">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content grid-con-1" style="background-color: rgb(243, 88, 76);">
            <div class="grid-cont-right" @click="erwarten">
              <div class="tite">
                <div style="width: 120px">即将到期</div>
                <i class="el-icon-setting top"></i>
              </div>
              <div class="grid-num center">6542</div>

            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3" class="boxing">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content grid-con-1" style="background-color: rgb(212, 173, 0);">
            <div class="grid-cont-right" @click="mitglieder">
              <div class="tite">
                <div style="width: 120px">过期会员</div>
                <i class="el-icon-setting top"></i>
              </div>
              <div class="grid-num center">6542</div>

            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3" class="boxing">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content grid-con-1" style="background-color: rgb(240, 115, 53);">
            <div class="grid-cont-right" @click="geburtstag">
              <div class="tite">
                <div style="width: 120px">最近生日</div>
                <i class="el-icon-setting top"></i>
              </div>
              <div class="grid-num center">6542</div>

            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3" class="boxing">
        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="grid-content grid-con-1" style="background-color: rgb(116, 105, 245);">
            <div class="grid-cont-right" @click="Rangordnung">
              <div class="tite">
                <div style="width: 120px">会员评级</div>
                <i class="el-icon-setting top"></i>
              </div>
              <div class="grid-num center">6542</div>

            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-row :gutter="24">
        <el-col :span="3">
          <el-input type="text" v-model="form.name" placeholder="会员姓名"></el-input>
        </el-col>

        <el-col :span="3" class="boxing">
          <el-form-item>
            <el-input type="text" placeholder="手机号" v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="3" class="boxing">
          <el-form-item>
            <el-input type="text" placeholder="APP用户" v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="3" class="boxing">
          <el-form-item>
            <el-input type="text" placeholder="会员卡号" v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="2" class="boxing">
          <el-form-item>
            <el-input type="text" placeholder="会员类型" v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="2" class="boxing">
          <el-form-item>
            <el-input type="text" placeholder="所属会籍" v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="2" class="boxing">
          <el-form-item>
            <el-input type="text" placeholder="跟进教练" v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="2" class="boxing">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="所有性别" value="0"></el-option>
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-col>

        <el-col :span="2" class="boxing">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="所有类别" value="01"></el-option>
            <el-option label="已开卡" value="02"></el-option>
            <el-option label="未开卡" value="03"></el-option>
          </el-select>
        </el-col>

        <el-col :span="2">
          <el-button type="primary" @click="shousuo">搜索</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="typeCode" label="头像" width="50">
        <!-- <template> -->
        <div class="tou">
          <i class="el-icon-camera-solid"></i>
        </div>

        <!-- </template> -->
      </el-table-column>
      <el-table-column prop="typeName" label="会员姓名" width="100"></el-table-column>
      <el-table-column prop="shouji" label="手机号" width="100"></el-table-column>
      <el-table-column prop="xin" label="性别" width="50"></el-table-column>
      <el-table-column prop="app" label="APP用户"></el-table-column>
      <el-table-column prop="hui" label="会员卡号" width="95"></el-table-column>
      <el-table-column prop="shijina" label="添加时间" width="90"></el-table-column>
      <el-table-column prop="huiji" label="所属会籍" width="95"></el-table-column>
      <el-table-column prop="jiaolian" label="跟进教练" width="90"></el-table-column>
      <el-table-column prop="leixing" label="会员类型" width="90"></el-table-column>
      <el-table-column prop="shijian" label="时间卡" width="95"></el-table-column>
      <el-table-column prop="jiao" label="私教卡" width="100"></el-table-column>
      <el-table-column prop="ci" label="次卡" width="100"></el-table-column>
      <el-table-column prop="chu" label="储值卡" width="100"></el-table-column>
      <el-table-column prop="status" label="积分" width="80"></el-table-column>
      <el-table-column label="操作" width="90">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handledelete(scope.row,scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <!-- 树状图 -->
    <!-- <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
        </el-card>
      </el-col>
    </el-row> -->
    <Mitglieder :gliederstatistik='gliederstatistik'></Mitglieder>
  </div>
</template>

<script>
import Mitglieder from "../common/Mitglieder";
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
  name: 'dashboard',
  data () {
    return {
      gliederstatistik: {
        show: false,
        title: "",
        option: "edit"
      },
      tableData: [{
        typeCode: '11111',
        typeName: '哈哈哈哈',
        shouji: '157582541532',
        xin: '男',
        app: '娜娜娜娜',
        hui: '1909161659',
        shijina: '2019-09-16',
        huiji: '杨雨',
        jiaolian: '杨雨',
        leixing: '普卡两年',
        shijian: '2020-08-04',
        jiao: '已失效,余10次',
        ci: '已失效,余10次',
        chu: '已失效,余10次',
        status: '娜娜娜娜',
      }],
      form: {
        name: '',
        phone: '',
      },
      currentPage: 1,
      typeCode: '',
      nameme: '',
      size: 10,
      total: 0,
      value: '',
      name: localStorage.getItem('ms_username'),
      data: [
        {
          name: '2018/09/04',
          value: 1083
        },
        {
          name: '2018/09/05',
          value: 941
        },
        {
          name: '2018/09/06',
          value: 1139
        },
        {
          name: '2018/09/07',
          value: 816
        },
        {
          name: '2018/09/08',
          value: 327
        },
        {
          name: '2018/09/09',
          value: 228
        },
        {
          name: '2018/09/10',
          value: 1065
        }
      ],
      options: {
        type: 'bar',
        title: {
          text: '最近一周各品类销售图'
        },
        xRorate: 25,
        labels: ['周一', '周二', '周三', '周四', '周五'],
        datasets: [
          {
            label: '家电',
            data: [234, 278, 270, 190, 230]
          },
          {
            label: '百货',
            data: [164, 178, 190, 135, 160]
          },
          {
            label: '食品',
            data: [144, 198, 150, 235, 120]
          }
        ]
      },
      options2: {
        type: 'line',
        title: {
          text: '最近几个月各品类销售趋势图'
        },
        labels: ['6月', '7月', '8月', '9月', '10月'],
        datasets: [
          {
            label: '家电',
            data: [234, 278, 270, 190, 230]
          },
          {
            label: '百货',
            data: [164, 178, 150, 135, 160]
          },
          {
            label: '食品',
            data: [74, 118, 200, 235, 90]
          }
        ]
      }
    };
  },
  components: {
    Schart,
    Mitglieder
  },
  computed: {
    role () {
      return this.name === 'admin' ? '超级管理员' : '普通用户';
    }
  },
  // created() {
  //     this.handleListener();
  //     this.changeDate();
  // },
  // activated() {
  //     this.handleListener();
  // },
  // deactivated() {
  //     window.removeEventListener('resize', this.renderChart);
  //     bus.$off('collapse', this.handleBus);
  // },
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
    changeDate () {
      const now = new Date().getTime();
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      });
    },
    shousuo () {

    },
    onAddMoney () {
      this.gliederstatistik = {
        show: true,
        title: '会员数统计',
        option: 'add'
      };
      this.gliederstatistik.show = true
    },
    sijiao () {
      this.gliederstatistik = {
        show: true,
        title: '私教会员数统计',
        option: 'add'
      };
      this.gliederstatistik.show = true
    },
    abgelaufen () {
      this.gliederstatistik = {
        show: true,
        title: '未过期会员',
        option: 'add'
      };
      this.gliederstatistik.show = true
    },
    Mitglieder () {
      this.gliederstatistik = {
        show: true,
        title: '新增会员分析',
        option: 'add'
      };
    },
    erwarten () {
      this.gliederstatistik = {
        show: true,
        title: '即将到期会员分析',
        option: 'add'
      };
    },
    mitglieder () {
      this.gliederstatistik = {
        show: true,
        title: '过期会员分析',
        option: 'add'
      };
    },
    geburtstag () {
      this.gliederstatistik = {
        show: true,
        title: '最近生日会员',
        option: 'add'
      };
    },
    Rangordnung () {
      this.gliederstatistik = {
        show: true,
        title: '最近生日会员',
        option: 'add'
      };
    },

    // handleListener() {
    //     bus.$on('collapse', this.handleBus);
    //     // 调用renderChart方法对图表进行重新渲染
    //     window.addEventListener('resize', this.renderChart);
    // },
    // handleBus(msg) {
    //     setTimeout(() => {
    //         this.renderChart();
    //     }, 200);
    // },
    // renderChart() {
    //     this.$refs.bar.renderChart();
    //     this.$refs.line.renderChart();
    // }
  }
};
</script>


<style scoped>
@import './../../assets/css/table.css';
/* .tou {
    border: 1px solid red;
    width: 50px;
    height: 30px;
} */
.el-icon-camera-solid {
    font-size: 25px;
    cursor: pointer;
}
.block {
    width: 50%;
    margin: auto;
}
.paing {
}
.center {
    text-align: center;
}
.top {
    margin-top: 3px;
}
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 90px;
}

.grid-cont-right {
    flex: 1;

    font-size: 15px;
    color: #fff;
}

.grid-num {
    font-size: 30px;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: #efefef;
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: white;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: white;
    line-height: 5px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: white;
}

.schart {
    width: 100%;
    height: 300px;
}
.tite {
    display: flex;
    margin: -8px 10px 10px 10px;
}
.tite_box {
    display: flex;
    margin: 5px 10px 10px 10px;
}
.boxing {
    padding: 0 !important;
}
.xin {
    display: flex;
    margin-bottom: 5px;
    width: 155px;
}
.zheng {
    font-size: 10px;
    width: 45px;
    margin-left: 10px;
}
.shu {
    font-size: 10px;
    width: 80px;
    text-align: end;
}
.app {
    width: 99.5% !important;
}
</style>
