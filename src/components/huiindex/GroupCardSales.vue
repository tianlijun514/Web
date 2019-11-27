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
            <div class="conments">
              <el-form-item label="定金编号" style="width:237px">
                <el-input v-model="input" style="width: 155px"></el-input>
              </el-form-item>
              <button type="primary" @click="alerts()" class="btnte">...</button>
            </div>
            <el-form-item label="定金金额" class="phone">
              <el-input v-model="input"></el-input>
            </el-form-item>
          </div>

          <div class="conments">
            <div class="yingbut" >
              <el-form-item label="营销活动">
                <el-select v-model="form.region" style="width: 185px">
                  <el-option v-for="item in regionOptions" :key="item.value" :label="item.label" :value="item.value" @click.native="OpenRegion(item.value)">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <el-form-item label="会籍类型">
              <el-select v-model="typeHui" style="width: 187px">
                <el-option v-for="item in typeHuiOptions" :key="item.value" :label="item.label" :value="item.value" @click.native="OpenType(item.value)">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <el-form-item label="销售类型">
            <el-select v-model="form.region" style="width: 185px">
              <el-option label="1-新合同" value="0" @click.native="OpenRegion(0)"></el-option>
              <el-option label="2-升级" value="1" @click.native="OpenRegion(1)"></el-option>
              <el-option label="3-续会" value="3"></el-option>
            </el-select>
          </el-form-item>

          <div class='conments'>
            <el-form-item label="有效期">
              <el-input v-model="typeHuiList.periodDate"></el-input>
            </el-form-item>

            <el-form-item label="赠送天数">
              <el-input v-model="typeHuiList.giveDate"></el-input>
            </el-form-item>

          </div>
          <div class="block">
            <span class="demonstration">日期范围</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </div>

          <div class='conments'>
            <el-form-item label="指导价">
              <el-input input type="text"  v-model="typeHuiList.guidingPrice"/>
            </el-form-item>
            <el-form-item label="总价">
              <el-input type="text"  v-model="typeHuiList.totalPrice"/>
            </el-form-item>

          </div>
          <div class='conments'>
            <el-form-item label="实际售价">
              <el-input v-model="input"></el-input>
            </el-form-item>
            <el-form-item label="应收金额">
              <el-input v-model="input"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.desc" style="width: 450px"></el-input>
          </el-form-item>
        </el-form>

      </div>
      <div class="aptable">
        <span class="titex">您选择的营销活动附带赠品信息</span>
        <el-table :data="bianta" border style="width: 58%">
          <el-table-column prop="biu" label="编号" width="50"></el-table-column>
          <el-table-column prop="nbm" label="名称"></el-table-column>
        </el-table>
        <span class="titex">可使用门店</span>
        <el-table :data="mendata" border style="width: 58%">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="menx" label="门店" width="145">
          </el-table-column>
          <el-table-column prop="miao" label="描述">
          </el-table-column>

        </el-table>
      </div>

    </div>
    <div class="conments">
      <div class="boxst">卡号列表</div>
      <a href="javascript:;" class="file">上传会员信息(Excel文件)
        <input id="upload" type="file" @change="importfxx(this)" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
      </a>
      <a href="javascript:;" class="file">上传会员照片(zip文件)
        <input id="upload1" type="file" @change="importfxx(this)" />
      </a>
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
  { value: '1', label: 'H1002 - 闪电狼会员1月0元' },
  { value: '2', label: 'L210 - 连锁金卡12月2398' },
  { value: '3', label: 'L216 - 连锁金卡1年赠卡' },
  { value: '4', label: 'L293 - 连锁金卡3月0' },
  { value: '5', label: 'M80471 - 单店100次卡  3000' },
  { value: '6', label: 'N10265 - 单店12月1+X卡 0' },
  { value: '7', label: 'R1001 - 24城单店12月100次卡4000' },
  { value: '8', label: 'R1003 - 蓝色空间老卡1月0元' },
  { value: '9', label: 'R1004 - 蓝色空间老卡1月10次0元' },
  { value: '10', label: 'T1060 - 连锁金卡598续费2598' },
];
const optionType = [
  { value: '1', label: 'D0888 - 通用3月980不含24城游泳和天誉' },
  { value: '2', label: 'L201 - 连锁VIP12月卡38888' },
  { value: '3', label: 'L202 - 连锁金卡12月2598每年598续' },
  { value: '4', label: 'L204 - 连锁VIP12月卡3888' },
  { value: '5', label: 'L207 - 连锁金卡12月2298' },
  { value: '6', label: 'L208 - 连锁金卡5年3888' },
  { value: '7', label: 'L209 - 连锁金卡5年4888' },
  { value: '8', label: 'L211 - 连锁金卡12月2598' },
  { value: '9', label: 'L212 - 连锁金卡2月900' },
  { value: '10', label: 'L213 - 连锁金卡3月1200' },
  { value: '11', label: 'L214 - 连锁金卡6月1500' },
  { value: '12', label: 'L215 - 连锁金卡5年5888' },
  { value: '13', label: 'L217 - 连锁金卡4年3888' },
  { value: '14', label: 'L218 - 连锁金卡6月2198' },
  { value: '15', label: 'L219 - 连锁金卡3月1298' },
  { value: '16', label: 'L220 - 连锁金卡1月900' },
  { value: '17', label: 'L221 - 连锁金卡1月680' },
  { value: '18', label: 'L227 - 连锁金卡3年3888' },
  { value: '19', label: 'L231 - 连锁金卡三人同行家庭卡3年8400（儿童只游泳）' },
  { value: '20', label: 'L234 - 连锁金卡2月1000' },
  { value: '21', label: 'L260 - 连锁金卡6月1538' },
  { value: '22', label: 'L280 - 连锁金卡3月1000' },
];
const regionList = [
  { value: '0', label: '参加营销活动' },
  { value: '1', label: '不参加营销活动' },
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
      input:'',
      checked: true,
      //下拉框
      typeHui: '',
      typeHuiOptions: optionList,
      regionOptions: regionList,
      typeHuiList: {
        //有效期
        periodDate: '',
        //指导价
        guidingPrice: '',
        //总价
        totalPrice: '',
        //赠送天数
        giveDate: '',
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

    importfxx (obj) {
      let _this = this;
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.file = event.currentTarget.files[0];
      const rABS = false; //是否将文件读取为二进制字符串
      const f = this.file;
      const reader = new FileReader();
      //if (!FileReader.prototype.readAsBinaryString) {
      FileReader.prototype.readAsBinaryString = function (f) {
        let binary = "";
        let rABS = false; //是否将文件读取为二进制字符串
        let pt = this;
        let wb; //读取完成的数据
        let outdata;
        let reader = new FileReader();
        reader.onload = function (e) {
          let bytes = new Uint8Array(reader.result);
          let length = bytes.byteLength;
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          let XLSX = require('xlsx');
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
              type: 'base64'
            });
          } else {
            wb = XLSX.read(binary, {
              type: 'binary'
            });
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);//outdata就是你想要的东西
          this.da = [...outdata]
          let arr = []
          this.da.map(v => {
            let obj = {}
            obj.id = v.id
            obj.status = v.status
            arr.push(obj)
          })
          console.log(arr)
          let para = {
            //withList: JSON.stringify(this.da)
            withList: arr
          }
          _this.$message({
            message: '请耐心等待导入成功',
            type: 'success'
          });
          // withImport(para).then(res => {
          //   window.location.reload()
          // })
          //向后台发送请求

        }
        reader.readAsArrayBuffer(f);
      }
      if (rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
    },

    OpenType (value) {
      if (value == 1) {
        console.log(value);
        this.mendata = [{
          menx: '111111',
          miao: '111111',
          zixuan: '111111'
        }];
      } else if (value == 2) {
        this.mendata = [{
          menx: '2222222',
          miao: '222222',
          zixuan: '22222'
        }]
      } else {
        this.mendata = [{
          menx: '测试数据',
          miao: '222222',
          zixuan: '测试数据'
        }]
      }
      //生成随机数
      this.typeHuiList.periodDate = Math.floor(Math.random() * 10 + 1) + '年';
      this.typeHuiList.giveDate = Math.floor(Math.random() * 36 + 1) + '天';
      this.typeHuiList.totalPrice = this.typeHuiList.guidingPrice = Math.floor(Math.random() * 3000);
      const end = new Date();
      const start = new Date();
      this.value1 = [end, start]

    },
    //判断是否参加营销活动
    OpenRegion (value) {
      if (value == '0') {
        console.log(value);
        this.typeHuiOptions = optionType
        this.typeHui = '请选择'
        this.mendata = []
        this.value1 = []
        this.typeHuiList = {}
      } else if (value == '1') {
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
  @import './../../assets/css/table.css';
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
  width: 265px;
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

.block {
    margin-bottom: 15px;
}
.file {
    position: relative;
    display: inline-block;
    background: white;
    border: 1px solid #babdbe;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #333;
    text-decoration: none;
    text-indent: 0;
    font-size: 14px !important;
    line-height: 20px;
}
.file input {
    position: absolute;
    font-size: 20px !important;
    right: 0;
    top: 0;
    opacity: 0;
}
.file:hover {
    background: #aadffd;
    border-color: #78c3f3;
    color: #004974;
    text-decoration: none;
}
</style>
