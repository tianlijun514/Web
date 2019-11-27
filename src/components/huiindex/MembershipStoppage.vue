<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">

      <el-form-item label="选择类型">
        <el-select v-model="form.region"  style="width: 185px" @change="xuanzhe">
          <el-option label="停卡" value="1"></el-option>
          <el-option label="转店" value="2"></el-option>
          <el-option label="补卡" value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="合同编号">
        <el-input v-model="input" style="width: 185px"></el-input>
      </el-form-item>

      <div class="conment">
        <div class="shenfen">
          <el-form-item label="会员姓名">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
          <el-form-item label="会员编号" style="margin-left: 25px">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>
        <div style="margin-bottom: 15px;">
          <el-form-item label="原会籍类型" label-width="82px">
            <el-input v-model="input" style="width: 473px" disabled></el-input>
          </el-form-item>
        </div>
        <div class="shenfen">
          <el-form-item label="合同起日">
            <el-input
                    style="width: 185px"
                    suffix-icon="el-icon-date"
                    v-model="input1" disabled>
            </el-input>

          </el-form-item>
          <el-form-item label="合同迄日" style="margin-left: 25px">
            <el-input
                    style="width: 185px"
                    suffix-icon="el-icon-date"
                    v-model="input1" disabled>
            </el-input>

          </el-form-item>
        </div>


        <div class="shenfen">
          <el-form-item label="合同价值">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
          <el-form-item label="剩余价值" style="margin-left: 25px">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>
      </div>


      <div class="minx">
        <el-form-item label="定金编号">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
        <button type="primary" @click="alerts()" class="btnte">...</button>
        <el-form-item label="定金金额">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>

      <div v-if="ting">
        <el-form-item label="停卡月数">
          <el-input v-model="input" style="width: 185px"></el-input>
        </el-form-item>
        <div class="block">
          <span class="demonstration">停卡日期范围</span>
          <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>


      <div v-if="zhuandian" >
          <el-form-item label="转出店门" label-width="82px">
            <el-input v-model="input" style="width: 473px" disabled></el-input>
          </el-form-item>
        <el-form-item label="转入门店">
          <el-select v-model="form.regions"  style="width: 475px">
            <el-option label="A00006 - 红牌楼店" value="A00006"></el-option>
            <el-option label="A00007 - 花郡店" value="A00007"></el-option>
            <el-option label="A00008 - 万象城店" value="A00008"></el-option>
            <el-option label="A00009 - 新城市店" value="A00009"></el-option>
            <el-option label="A00014 - 阳光新业店" value="A00014"></el-option>
            <el-option label="A00016 - 龙湖店" value="A00016"></el-option>
            <el-option label="A00017 - 王府井店" value="A00017"></el-option>
            <el-option label="A00023 - 天誉店" value="A00023"></el-option>
            <el-option label="A00024 - 伊藤店" value="A00024"></el-option>
            <el-option label="A00025 - 金牛店" value="A00025"></el-option>
            <el-option label="A00026 - 瑞安店" value="A00026"></el-option>
            <el-option label="A00027 - 339店" value="A00027"></el-option>
            <el-option label="A00028 - 镏金店" value="A00028"></el-option>
            <el-option label="A00029 - 紫荆店" value="A00029"></el-option>
            <el-option label="A00030 - 魅力城" value="A00030"></el-option>
            <el-option label="A00031 - 二十四城" value="A00031"></el-option>
            <el-option label="A00032 - 东城国际店" value="A00032"></el-option>
            <el-option label="C001 - 管理中心" value="C001"></el-option>
            <el-option label="test - 培训测试店" value="test"></el-option>
          </el-select>
        </el-form-item>
      </div>

        <div class="minx" v-if="huiyuan">
          <el-form-item label="新会员卡号" label-width="82px">
            <el-input v-model="input"></el-input>
          </el-form-item>
          <button type="primary" @click="kamony()" class="btnte">...</button>
        </div>

      <div class="shenfen">
        <el-form-item label="手续费">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
        <el-form-item label="应收金额" style="margin-left: 28px">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" style="width: 480px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认并提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

     <Dialog :dialog="dialog"></Dialog>
    <kabox :ka="ka"></kabox>

  </div>
</template>
<script>
import Dialog from '../common/Dialog'
import kabox from './ka'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'indexdj',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Dialog,
    kabox
  },
  data () {
    // 这里存放数据
    return {
      ting:true,
      zhuandian:false,
      huiyuan:false,
      input1:'',
      input:'',
      dialog: {
        show : false
        },
      ka: {
        show :false
      },
      value1: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
    alerts () {
      // this.alertipShow = true;
      this.dialog.show = true;
    },
    kamony(){
      this.ka.show= true;
    },
    xuanzhe(e){
      this.zhuandian = false;
      this.huiyuan = false;
      this.ting = true;
     if(e==2) {
       this.zhuandian = true;
       this.huiyuan = false;
       this.ting = false;

     }else if (e==3){
       this.zhuandian = false;
       this.huiyuan = true;
       this.ting = false;
     }
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
  .conment {
    border: 3px solid rgb(255, 239, 206);
    padding-top: 10px;
    margin-bottom: 10px;
  }
.demonstration {
    height: 32px;
    vertical-align: middle;
    line-height: 32px !important;
    font-size: 14px;
    color: #606266;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.app {
    width: 630px !important;
    background: white;
}
.formbox {
    width: 90%;
    padding: 25px;
    margin: auto;
}


.shenfen {
    display: flex;
}

.block {
    margin-left: -15px !important;
    margin-bottom: 15px !important;
}

.minx {
    display: flex;
}
.btnte {
    width: 25px !important;
    height: 28px !important;
    margin-left: 2px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
}
</style>
