<!-- vue快捷创建组件 -->
<template>
  <div class='appmm'>
    <!-- <div ref="print">
        qqqqqq
    </div>
    <button @click="print()">打印</button> -->
    <div class="conments">
      <div class="appx">
        <el-form ref="form" :model="form" label-width="80px" class="formbox">

          <div class="conments">
            <div class="minx">
              <el-form-item label="定金编号" class="phone">
                <input type="text" class="input_box">
              </el-form-item>
              <button type="primary" @click="alerts()" class="btnte">...</button>
            </div>
            <el-form-item label="定金金额" class="phone">
              <input type="text" class="input_box">
            </el-form-item>
          </div>
          <div class="conments">
            <div class="yingbut">
              <el-form-item label="营销活动">
                <el-select v-model="form.region">
                  <el-option
                          v-for="item in regionOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          @click.native="OpenRegion(item.value)"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <el-form-item label="会籍类型">
              <el-select v-model="typeHui">
                <el-option
                        v-for="item in typeHuiOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        @click.native="OpenType(item.value)"
                >
                </el-option>
              </el-select>

            </el-form-item>

          </div>

          <el-form-item label="销售类型">
            <el-select v-model="form.region" class="sex" >
              <el-option label="1-新合同" value="0" @click.native="OpenRegion(0)"></el-option>
              <el-option label="2-升级" value="1" @click.native="OpenRegion(1)"></el-option>
              <el-option label="3-续会" value="3"></el-option>
            </el-select>
          </el-form-item>

          <div class='divbin'>
            <el-form-item label="有效期">
              <input type="text" class="input_box" v-model="typeHuiList.periodDate">
            </el-form-item>
            <el-form-item label="赠送天数">
              <input type="text" class="input_box" v-model="typeHuiList.giveDate">
            </el-form-item>

          </div>
          <div class="block">
            <span class="demonstration">日期范围</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </div>

          <div class='divbin'>
            <el-form-item label="指导价">
              <input type="text" class="input_box" v-model="typeHuiList.guidingPrice">
            </el-form-item>
            <el-form-item label="总价">
              <input type="text" class="input_box" v-model="typeHuiList.totalPrice">
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
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>

      </div>
      <div class="aptable">
        <span class="titex">您选择的营销活动附带赠品信息</span>
        <el-table :data="bianta" border style="width: 58%">
          <el-table-column prop="biu" label="编号" width="50"></el-table-column>
          <el-table-column prop="nbm" label="名称" width="297"></el-table-column>
        </el-table>
        <span class="titex">可使用门店</span>
        <el-table :data="mendata" border style="width: 58%">
          <el-table-column
                  type="selection"
                  width="55">
          </el-table-column>
          <el-table-column
                  prop="menx"
                  label="门店"
                  width="145">
          </el-table-column>
          <el-table-column
                  prop="miao"
                  label="描述"
                  width="147">
          </el-table-column>

        </el-table>
      </div>

    </div>
    <div class="conments">
      <div class="boxst">卡号列表</div>
      <!-- <el-upload class="upload-demo"> -->
      <el-button size="small" type="primary">上传会员信息(Excel文件)</el-button>
      <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
      <!-- </el-upload> -->
      <!-- <el-upload class="avatar-uploader"> -->
      <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
      <el-button size="small" type="primary">上传会员照片(zip文件)</el-button>
      <p></p>
      <!-- </el-upload> -->
    </div>

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
    <Dialog :dialog="dialog"></Dialog>

  </div>
</template>

<script>

import Dialog from '../common/Dialog'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
const optionList = [
  {value: '1', label: 'H1002 - 闪电狼会员1月0元'},
  {value: '2', label: 'L210 - 连锁金卡12月2398'},
  {value: '3', label: 'L216 - 连锁金卡1年赠卡'},
  {value: '4', label: 'L293 - 连锁金卡3月0'},
  {value: '5', label: 'M80471 - 单店100次卡  3000'},
  {value: '6', label: 'N10265 - 单店12月1+X卡 0'},
  {value: '7', label: 'R1001 - 24城单店12月100次卡4000'},
  {value: '8', label: 'R1003 - 蓝色空间老卡1月0元'},
  {value: '9', label: 'R1004 - 蓝色空间老卡1月10次0元'},
  {value: '10', label: 'T1060 - 连锁金卡598续费2598'},
];
const optionType = [
          {value: '1',label: 'D0888 - 通用3月980不含24城游泳和天誉'},
          {value: '2',label: 'L201 - 连锁VIP12月卡38888'},
          {value: '3',label: 'L202 - 连锁金卡12月2598每年598续'},
          {value: '4',label: 'L204 - 连锁VIP12月卡3888'},
          {value: '5',label: 'L207 - 连锁金卡12月2298'},
          {value: '6',label: 'L208 - 连锁金卡5年3888'},
          {value: '7',label: 'L209 - 连锁金卡5年4888'},
          {value: '8',label: 'L211 - 连锁金卡12月2598'},
          {value: '9',label: 'L212 - 连锁金卡2月900'},
          {value: '10',label: 'L213 - 连锁金卡3月1200'},
          {value: '11',label: 'L214 - 连锁金卡6月1500'},
          {value: '12',label: 'L215 - 连锁金卡5年5888'},
          {value: '13',label: 'L217 - 连锁金卡4年3888'},
          {value: '14',label: 'L218 - 连锁金卡6月2198'},
          {value: '15',label: 'L219 - 连锁金卡3月1298'},
          {value: '16',label: 'L220 - 连锁金卡1月900'},
          {value: '17',label: 'L221 - 连锁金卡1月680'},
          {value: '18',label: 'L227 - 连锁金卡3年3888'},
          {value: '19',label: 'L231 - 连锁金卡三人同行家庭卡3年8400（儿童只游泳）'},
          {value: '20',label: 'L234 - 连锁金卡2月1000'},
          {value: '21',label: 'L260 - 连锁金卡6月1538'},
          {value: '22',label: 'L280 - 连锁金卡3月1000'},
        ];
const regionList = [
          {value: '0',label: '参加营销活动'},
          {value: '1',label: '不参加营销活动'},
        ];
export default {

  name: 'indextuanka',

  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Dialog,

  },
  data () {
    // 这里存放数据
    return {
      checked: true,
      //下拉框
      typeHui: '',
      typeHuiOptions: optionList,
      regionOptions: regionList,
      typeHuiList:{
        //有效期
        periodDate :'',
        //指导价
        guidingPrice : '',
        //总价
        totalPrice:'',
        //赠送天数
        giveDate :'',
      },

      dialog: {
        show: false
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
      }],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},

  // 方法集合
  methods: {

    OpenType(value){
      if(value == 1){
        console.log(value);
        this.mendata = [{
          menx: '111111',
          miao: '111111',
          zixuan: '111111'
        }];
      }else if(value == 2){
        this.mendata=[{
          menx: '2222222',
          miao: '222222',
          zixuan: '22222'
        }]
      }else {
        this.mendata=[{
          menx: '测试数据',
          miao: '222222',
          zixuan: '测试数据'
        }]
      }
      //生成随机数
      this.typeHuiList.periodDate =  Math.floor(Math.random()*10+1)+'年';
      this.typeHuiList.giveDate = Math.floor(Math.random()*36+1)+'天';
      this.typeHuiList.totalPrice=this.typeHuiList.guidingPrice = Math.floor(Math.random()*3000);
      const end = new Date();
      const start = new Date();
      this.value1 = [end,start]

    },
    //判断是否参加营销活动
    OpenRegion(value){
     if(value == '0'){
       console.log(value);
       this.typeHuiOptions = optionType
       this.typeHui = '请选择'
       this.mendata = []
       this.value1 = []
       this.typeHuiList = {}
     }else if(value == '1'){
       console.log(value);
       this.typeHuiOptions = optionList
       this.typeHui = '请选择'
       this.mendata = [],
       this.typeHuiList = {}
       this.value1 = []
     }
     //导入
    },
    // print () {
    //   this.$print(this.$refs.print) // 使用
    // },
    onSubmit () {
      console.log('submit!');
    },
    alerts () {
      this.dialog.show = true;
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
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
.boxst {
    width: 100px;
    font-size: 17px;
    margin-left: 10px;
}
.miet {
    margin-left: 40% !important;
    margin-top: 30px;
}
.titex {
    font-size: 13px;
}
.conments {
    display: flex;
}
.aptable {
    width: 48% !important;
}
.appmm {
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
    width: 100%;
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
