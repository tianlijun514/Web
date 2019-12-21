<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog :title="gliederstatistik.title" :visible.sync="gliederstatistik.show" tooltip-effect="dark" width="90%" :close-on-click-modal="false" :close-on-press-escape="false" :modal-append-to-body="false">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-row :gutter="24">
          <el-col :span="3">
            <el-input type="text" v-model="form.name" placeholder="会员姓名"></el-input>
          </el-col>

          <el-col :span="3" class="boxing">
            <el-form-item>
              <el-input type="text" placeholder="会员姓名" v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="3" class="boxing">
            <el-form-item>
              <el-input type="text" placeholder="会员卡号" v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="3" class="boxing">
            <el-form-item>
              <el-input type="text" placeholder="会员手机号" v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">
            <el-button type="primary" @click="shousuo" style="margin-left: -15px;">搜索</el-button>
          </el-col>

          <!-- <el-col :span="2" class="boxing">
            <el-form-item>
              <el-input type="text" placeholder="会员类型" v-model="form.phone"></el-input>
            </el-form-item>
          </el-col> -->
          <!-- 
          <el-col :span="2" class="boxing">
            <el-form-item>
              <el-input type="text" placeholder="所属会籍" v-model="form.phone"></el-input>
            </el-form-item>
          </el-col> -->

          <!-- <el-col :span="2" class="boxing">
            <el-form-item>
              <el-input type="text" placeholder="跟进教练" v-model="form.phone"></el-input>
            </el-form-item>
          </el-col> -->

          <el-col :span="6">
            <el-select v-model="value1" multiple placeholder="请选择" style="width: 250px;">
              <el-option label="全部" value></el-option>
              <el-option v-for="item in list_type" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4" class="boxing">
            <el-dropdown>
              <span class="el-dropdown-link">
                短信/导出<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>发送(短信)</el-dropdown-item>
                <el-dropdown-item>导出(Excel)</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>

        </el-row>
      </el-form>
      <!-- 树状图 -->
      <el-row :gutter="24">
        <el-col :span="24">
          <el-card shadow="hover">
            <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
          </el-card>
        </el-col>
      </el-row>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="date" label="数据归类" width="100"></el-table-column>
        <el-table-column prop="hao" label="数据汇总" width="100"></el-table-column>

        <el-table-column prop="zjNum" label="照片" width="80">
          <img src="../../assets/img/img.jpg" alt="" style="width:40px;height:40px;border-radius: 50%;">
        </el-table-column>

        <el-table-column prop="name" label="会员姓名" width="100"></el-table-column>
        <el-table-column prop="zjxm" label="会员类型" width="100"></el-table-column>
        <el-table-column prop="userId" label="卡种（时间卡 私教卡 次卡 储值卡）">
          <template slot-scope="scope">
            <el-button @click="katime(scope.row)">2020-09-07</el-button>
            <el-button @click="katime(scope.row)">已失效,余2次</el-button>
            <el-button @click="katime(scope.row)">次卡</el-button>
            <el-button @click="katime(scope.row)">储值卡</el-button>
          </template>
        </el-table-column>

        <el-table-column prop="userId" label="跟进记录">
          <template slot-scope="scope">
            <div class="cell" @click="verfolgen(scope.row)">
              <p>说了消课送电影票的事，以及后期有问题可以找我</p>
              <div style="display: flex;">
                <p style="width: 315px">说了消课送电影票的事</p>
                <span>2019-04-08</span>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button @click="gliederstatistik.show = false">取 消</el-button>
        <el-button type="primary" @click="gliederstatistik.show = false">确 定</el-button>
      </span>
    </el-dialog>
    <Huiyuanka :aufstka='aufstka'></Huiyuanka>
    <Protokoll :protokollieren='protokollieren'></Protokoll>

  </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
import Huiyuanka from '../common/Huiyuanka'
import Protokoll from '../common/Protokoll'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Dialog',
  props: {
    gliederstatistik: Object,
    contract: Array
  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Schart,
    Huiyuanka,
    Protokoll
  },
  data () {
    // 这里存放数据
    return {
      value1: '',
      currentPage: 1,
      size: 10,
      total: 0,
      aufstka: {
        show: false,
        option: "edit"
      },
      protokollieren: {
        show: false,
        option: "edit"
      },
      tableData: [{
        date: '本店入会会员',
        hao: '1',
        name: '王小虎',
        zjxm: '普卡三年',
        phonex: '12515121412',
        moneys: '20',
        userId: '时间时间'
      }],

      form: {
        phone: '',
        name: '',
      },
      name: localStorage.getItem('ms_username'),
      emit: '',
      options: {
        type: 'bar',
        title: {
          text: '会员数统计'
        },
        xRorate: 25,
        labels: ['本店入会会员', '本店通卡会员', '异店通卡会员', '全部会员'],
        datasets: [
          {
            data: [234, 278, 270, 190, 230]
          }
        ]
      },
      list_type: [{
        value: '1',
        label: '本店入会会员'
      }, {
        value: '2',
        label: '本店通卡会员'
      }, {
        value: '3',
        label: '异店通卡会员'
      }, {
        value: '4',
        label: '全部会员'
      }],

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    shousuo () {
      console.log(123)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    katime () {
      this.aufstka = {
        show: true,
        option: 'add'
      };
      this.aufstka.show = true
    },
    verfolgen () {
      this.protokollieren = {
        show: true,
        option: 'add'
      };
      this.protokollieren.show = true
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
/* @import './../../assets/css/table.css'; */
.el-dialog__body {
    padding: 10px 20px !important;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
.schart {
    width: 100%;
    height: 300px;
}
.boxing {
    padding: 0 !important;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.block {
    width: 32%;
    margin: auto;
}
.cell {
    text-align: initial !important;
}
</style>
