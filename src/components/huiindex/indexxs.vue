<!-- vue快捷创建组件 -->
<template>
  <div class='app'>

    <div class="conments">
      <div class="appx">
        <el-form ref="form" :model="form" label-width="80px" class="formbox">
          <el-form-item label="销售类型">
            <el-select v-model="form.region" class="sex">
              <el-option label="1-新合同" value="hex"></el-option>
              <el-option label="2-升级" value="shenji"></el-option>
              <el-option label="3-续会" value="xuhj"></el-option>
            </el-select>
          </el-form-item>
          <div class="minx">
            <el-form-item label="定金编号" class="phone">
              <input type="text" class="input_box">
            </el-form-item>
            <alertip v-show="alertipShow" @closeTip="alertipShow = false" :alertText="alertText"></alertip>
            <button type="primary" @click="alerts()" class="btnte">...</button>
          </div>
          <el-form-item label="定金金额" class="phone">
            <input type="text" class="input_box">
          </el-form-item>
          <div class="yingbut">
            <el-form-item label="营销活动">
              <el-select v-model="form.region" class="sex">
                <el-option label="参加营销活动" value="hex"></el-option>
                <el-option label="不参加营销活动" value="shenji"></el-option>
              </el-select>
            </el-form-item>
            <!-- <el-button type="primary">扫描条码</el-button> -->
            <el-button type="primary" @click="open">扫描条码</el-button>
            <el-button type="primary" @click="yaoming">会员邀请码</el-button>
          </div>
          <el-form-item label="会籍类型">
            <el-select v-model="form.region3">
              <el-option label="H1002 - 闪电狼会员1月0元" value="yin"></el-option>
              <el-option label="L210 - 连锁金卡12月2398" value="yxbj"></el-option>
              <el-option label="L216 - 连锁金卡1年赠卡" value="yin"></el-option>
              <el-option label="L293 - 连锁金卡3月0" value="yxbj"></el-option>
              <el-option label="M80471 - 单店100次卡  3000" value="yin"></el-option>
              <el-option label="N10265 - 单店12月1+X卡 0" value="yxbj"></el-option>
              <el-option label="R1001 - 24城单店12月100次卡4000" value="yin"></el-option>
              <el-option label="R1003 - 蓝色空间老卡1月0元" value="yxbj"></el-option>
              <el-option label="R1004 - 蓝色空间老卡1月10次0元" value="yin"></el-option>
              <el-option label="T1060 - 连锁金卡598续费2598" value="yxbj"></el-option>
            </el-select>
          </el-form-item>

          <div class='divbin'>
            <el-form-item label="有效期">
              <input type="text" class="input_box">
            </el-form-item>
            <el-form-item label="赠送天数">
              <input type="text" class="input_box">
            </el-form-item>

          </div>
          <div class="block">
            <span class="demonstration">日期范围</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </div>

          <div class='divbin'>
            <el-form-item label="指导价">
              <input type="text" class="input_box">
            </el-form-item>
            <el-form-item label="总价">
              <input type="text" class="input_box">
            </el-form-item>

          </div>
          <div class='divbin'>
            <el-form-item label="实际售价">
              <input type="text" class="input_box">
            </el-form-item>
            <el-form-item label="应收金额">
              <input type="text" class="input_box">
            </el-form-item>

          </div>

          <el-form-item label="市场渠道">
            <el-select v-model="form.regions" class="sex">
              <el-option label="线上-点评／美团" value="11"></el-option>
              <el-option label="线上-支付宝口碑" value="12"></el-option>
              <el-option label="线上-天猫" value="13"></el-option>
              <el-option label="线上-微信" value="14"></el-option>
              <el-option label="线下-预约访客" value="15"></el-option>
              <el-option label="线下-朋友介绍" value="16"></el-option>
              <el-option label="线下-广告得知" value="17"></el-option>
              <el-option label="其他" value="18"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>

        </el-form>

      </div>
      <div class="aptable">
        <span class="titex">您选择的营销活动附带赠品信息</span>
        <el-table :data="bianta" border style="width: 58%">
          <el-table-column prop="biu" label="编号" width="50"></el-table-column>
          <el-table-column prop="nbm" label="名称" width="320"></el-table-column>
        </el-table>
        <span class="titex">可使用门店</span>
        <el-table :data="mendata" border style="width: 58%">
          <el-table-column prop="menx" label="门店" width="120"></el-table-column>
          <el-table-column prop="miao" label="描述" width="120"></el-table-column>
          <el-table-column prop="zixuan" label="自选门店" width="120"></el-table-column>
        </el-table>
      </div>

    </div>

    <div>卡号列表</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="卡号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="证件类型"></el-table-column>
      <el-table-column prop="zjx" label="证件号"></el-table-column>
      <el-table-column prop="zpj" label="照片"></el-table-column>
      <el-table-column prop="zjzap" label="证件照"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="phones" label="手机"></el-table-column>
      <el-table-column prop="mun" label="生日"></el-table-column>
    </el-table>
    <el-form>
      <el-form-item class="miet">
        <el-button type="primary" @click="onSubmit">确认并提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import alertip from './zjding'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'indexxs',

  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    alertip
  },
  data () {
    // 这里存放数据
    return {
      value1: '',
      alertipShow: false,
      alertText: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        zjx: '11111',
        zpj: '22222',
        zjzap: '33333',
        sex: '44444',
        phones: '55555',
        mun: '66666'

      }],

      bianta: [{
        biu: '110',
        nbm: '11111111111111111'
      }],
      mendata: [{
        menx: 'ssssss',
        miao: '2222222222222',
        zixuan: 'xxxxxxxxxxx'
      }]
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
      this.alertipShow = true;
    },
    open () {
      this.$prompt('条码', '扫描条码', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的条码是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    yaoming () {
      this.$prompt('条码', '扫描邀请码', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邀请码是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
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
<style >
.miet{
  margin-left: 40% !important;
  margin-top: 30px;
}
.titex{
  font-size: 13px;
}
.conments {
    display: flex;
}
.aptable {
    width: 48% !important;

}
.app {
    width: 100% !important;
    background: white;
}
.appx {
    width: 48% !important;

}
.formbox {
    width: 90%;
    padding: 25px;
    margin: auto;
}
.hname {
    width: 80% !important;
}
.divbin {
    display: flex !important;
}

.shenfen {
    display: flex;
}
.sinxex {
    width: 48.5% !important;
    margin-left: 5px;
}
.input_box {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 30px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.dinglei {
    display: flex;
}
.conmeny {
    display: flex;
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
.yingbut {
    display: -webkit-box;
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
    margin-left: 13px;
}
.el-date-range-picker {
    width: 510px !important;
    z-index: 500;
}
.block {
    margin-bottom: 15px;
}
</style>
