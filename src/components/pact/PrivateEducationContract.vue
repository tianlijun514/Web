<!-- vue快捷创建组件 -->
<template>
  <div class="pact">
    <el-form ref="form" :model="form" label-width="80px" class="formbox">
      <div class="shenfen">
        <el-form-item label="会员卡号">
          <el-input @blur="blurfns" v-model="form.kahao"></el-input>
        </el-form-item>

        <el-form-item label="会员编号" class="lefty">
          <el-input type="text" v-model="form.number"></el-input>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="会员姓名">
          <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="合同终止日" label-width="82px" style=" margin-left: 26px">
          <el-input type="text" v-model="form.date"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="销售类型" v-show="type">
        <el-select v-model="form.region" class="input_width" :v-model="form.medicine" @change="xiaoshou">
          <el-option label="1-新合同" value="1"></el-option>
          <el-option label="6-升级" value="2"></el-option>
        </el-select>
      </el-form-item>
      <!-- v-show='conmen'  -->
      <div class="conment" v-if="conmen=='2'">
        <div class="shenfen">
          <el-form-item label="原合同号">
            <el-input type="text" disabled></el-input>
          </el-form-item>
          <div style="margin-left: 40px;">
            <span class="demonstration">销售日期</span>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width: 205px" disabled></el-date-picker>
          </div>
        </div>

        <el-form-item label="课程">
          <el-input v-model="form.name" class="width_box" disabled></el-input>
        </el-form-item>

        <div class="block">
          <span class="demonstration">日期范围</span>
          <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" class="width_box" disabled></el-date-picker>
        </div>

        <div class="shenfen">
          <el-form-item label="合同课时">
            <el-input type="text" disabled></el-input>
          </el-form-item>
          <el-form-item label="合同金额" class="lefty">
            <el-input type="text" disabled></el-input>
          </el-form-item>
        </div>

        <div class="shenfen">
          <el-form-item label="剩余课时">
            <el-input type="text" disabled></el-input>
          </el-form-item>
          <el-form-item label="剩余金额" class="lefty">
            <el-input type="text" disabled></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="shenfen">
        <el-form-item label="定金编号" class="phone">
          <el-input type="text" v-model="form.number2" disabled></el-input>
        </el-form-item>
        <button type="primary" @click="alerts()" class="btnte">...</button>
        <el-form-item label="定金金额" style=" margin-left: -2px">
          <el-input type="text" v-model="form.money" disabled></el-input>
        </el-form-item>
      </div>
      <div class="shenfen">
        <el-form-item label="私教课程">
          <el-select v-model="form.region" style="width: 189px;">
            <el-option label="F00001 - 常规" value="1"></el-option>
            <el-option label="F00002 - 拉伸" value="2"></el-option>
            <el-option label="F00003 - 康复" value="3"></el-option>
            <el-option label="F00004 - 拳击" value="4"></el-option>
            <el-option label="F00005 - 普拉提" value="5"></el-option>
            <el-option label="F00006 - 筋膜放松" value="6"></el-option>
            <el-option label="F00007 - 维密课程" value="7"></el-option>
            <el-option label="F00008 - 力量举" value="8"></el-option>
            <el-option label="F00009 - 体态纠正" value="9"></el-option>
            <el-option label="F00010 - 青少年体适能" value="10"></el-option>
            <el-option label="F00011 - 产后恢复" value="11"></el-option>
            <el-option label="F00012 - 精准发力" value="12"></el-option>
            <el-option label="F00013 - 特色拳击" value="13"></el-option>
            <el-option label="F00014 - 肌肉工程" value="14"></el-option>
            <el-option label="F00015 - 脂肪杀手" value="15"></el-option>
            <el-option label="F00017 - 游泳课" value="16"></el-option>
            <el-option label="F00019 - 包一年私教" value="17"></el-option>
            <el-option label="F00020 - 包季度私教" value="18"></el-option>
            <el-option label="F00021 - 包半年私教" value="19"></el-option>
            <el-option label="F00024 - 体适能" value="20"></el-option>
            <el-option label="F00025 - 包9月私教" value="21"></el-option>
            <el-option label="F00026 - 特色瑜伽" value="22"></el-option>
            <el-option label="F00027 - 悬挂课程TRX" value="23"></el-option>
            <el-option label="F00031 - 产中训练" value="24"></el-option>
            <el-option label="F00032 - 经理课程" value="25"></el-option>
            <el-option label="F00033 - 健美" value="26"></el-option>
            <el-option label="F00036 - 极速瘦身" value="27"></el-option>
            <el-option label="F00037 - 少儿体适能" value="28"></el-option>
            <el-option label="F00038 - 空中瑜伽" value="29"></el-option>
            <el-option label="F00041 - 健美备赛" value="30"></el-option>
            <el-option label="F00042 - 功能性" value="31"></el-option>
            <el-option label="F00043 - 功能训练" value="32"></el-option>
            <el-option label="F00044 - 综合课程" value="33"></el-option>
            <el-option label="F00045 - 一月套课" value="34"></el-option>
            <el-option label="F00046 - Eptc " value="35"></el-option>
            <el-option label="F00047 - 三月套课" value="36"></el-option>
            <el-option label="F00048 - 抽奖私教课" value="37"></el-option>
            <el-option label="F00049 - 全年巩固计划" value="38"></el-option>
            <el-option label="F00050 - 半年进步计划" value="39"></el-option>
            <el-option label="F00051 - 季度成效计划" value="40"></el-option>
            <el-option label="F00052 - 高频筋膜枪放松" value="41"></el-option>
            <el-option label="F00053 - 关节稳定" value="42"></el-option>
            <el-option label="F00054 - 局部疼痛管理" value="43"></el-option>
            <el-option label="F00055 - 维密美腿" value="44"></el-option>
            <el-option label="F00056 - 维密橄榄背" value="45"></el-option>
            <el-option label="F00057 - 马甲线S" value="46"></el-option>
            <el-option label="F00058 - 极致美臀" value="47"></el-option>
            <el-option label="F00059 - 维密美人肩" value="48"></el-option>
            <el-option label="F00060 -  麒麟臂" value="49"></el-option>
            <el-option label="F00061 -  雕像胸" value="50"></el-option>
            <el-option label="F00062 - 王字腹" value="51"></el-option>
            <el-option label="F00063 - 蝴蝶背" value="52"></el-option>
            <el-option label="F00064 - 男性功能" value="53"></el-option>
            <el-option label="F00065 - 教练学习课程" value="54"></el-option>
            <el-option label="F00066 - 核心" value="55"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上课教练" label-width="82px" class="type_box">
          <el-select v-model="form.coach" style="width: 188px;">
            <el-option label="B01171 - 伍一 - 一星级" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="购买数量">
          <el-input type="text" v-model="form.number3"></el-input>
        </el-form-item>
        <el-form-item label="指导价范围" label-width="82px" style="margin-left: 26px">
          <el-input type="text" v-model="form.scope"></el-input>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="合同起日">
          <el-input suffix-icon="el-icon-date" v-model="form.date1" style="width: 188px;"></el-input>
        </el-form-item>

        <el-form-item label="合同迄日" style="margin-left: 28px;">
          <el-input suffix-icon="el-icon-date" v-model="form.date2" style="width: 188px;"></el-input>
        </el-form-item>
      </div>
      <div class="shenfen">
        <el-form-item label="实际售价">
          <el-input type="text" v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="应收金额" style="margin-left: 28px">
          <el-input type="text" v-model="form.priceMoney"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" style="width: 482px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认并提交</el-button>
      </el-form-item>
    </el-form>
    <Dialog :dialog="dialog" :contract="contract"></Dialog>
  </div>
</template>

<script>
import Dialog from '../common/Dialog';
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import axios from 'axios';
import { base } from '../js/url';
export default {
  name: 'indexdj',
  props: {},
  // import引入的组件需要注入到对象中才能使用
  components: {
    Dialog
  },
  data () {
    // 这里存放数据
    return {
      input1: '',
      medicine: '',
      kahao: '',
      value1: '',
      conmen: false,
      type: false,
      dialog: {
        show: false
      },
      contract: [],
      form: {
        kahao: '',
        name: '',
        scope: '',
        number3: '',
        priceMoney: '',
        price: '',
        number: '',
        number2: '',
        region: '',
        date: '',
        money: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        coach: ''
      },
      currentPage: 1,
      size: 10
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onSubmit () {
      console.log('submit!111111111');
    },
    async alerts () {
         this.dialog.show = true;
      await axios
        .post(base + '/reserveMoney/getReserves/1/10', {
          data: {
            reserveType: 2
          }
        })
        .then(res => {
          let array = res.data.queryResult.list;
          let list;
          this.contract = [];
          for (let i = 0; i < array.length; i++) {
            list = {
              id: array[i].id,
              name: array[i].member.name,
              zjNum: array[i].member.zjNum,
              phoneNum: array[i].member.phoneNum,
              reservePrice: array[i].reservePrice,
              userId: array[i].member.id
            };
            this.contract.push(list);
          }
       
        });
    },
    blurfns () {
      if (this.kahao != '') {
        this.type = true;
      } else {
        this.conmen = '1';
        this.type = false;
      }
    },
    xiaoshou (e) {
      this.conmen = e;
      console.log(e);
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.input_width {
    width: 203px;
}
.type_box {
    margin-left: 25px;
    width: 267px;
}
.conment {
    border: 3px solid rgb(255, 239, 206);
    padding-top: 10px;
    margin-bottom: 10px;
}
.width_box {
    width: 515px;
}
.lefty {
    margin-left: 28px !important;
}

.demonstration {
    height: 32px;
    vertical-align: middle;
    line-height: 32px !important;
    font-size: 14px;
    color: #606266;
    padding: 0 10px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.pact {
    width: 650px;
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
    margin-left: 15px !important;
    margin-bottom: 15px !important;
}

.btnte {
    width: 28px !important;
    height: 28px !important;
    margin-left: 2px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
    font-weight: 600;
}
</style>
