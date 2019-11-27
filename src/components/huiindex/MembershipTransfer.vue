<!-- vue快捷创建组件 -->
<template>
  <div class='pacuk'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">
      <div class="shenfen">
        <el-form-item label="合同编号">
          <el-input v-model="input"></el-input>
        </el-form-item>
        <el-form-item label="会员卡号">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>


      <div class="conment">
        <div class="shenfen">
          <el-form-item label="会员姓名" >
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
          <el-form-item label="会员编号">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>
        <div style="margin-bottom: 15px;">
          <el-form-item label="原会籍类型" label-width="82px">
            <el-input v-model="input" style="width: 449px" disabled></el-input>
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
          <el-form-item label="合同迄日">
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
          <el-form-item label="剩余价值">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="minx">
        <el-form-item label="定金编号"  style="width:237px">

          <el-input v-model="input" style="width: 157px" disabled></el-input>
        </el-form-item>
        <button type="primary" @click="alerts()" class="btnte">...</button>

        <el-form-item label="定金金额">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>

      <div class="minx">
        <el-form-item label="转入会员" >
          <el-select v-model="form.region" style="width: 185px" @change="zhuanru">
            <el-option label="1-新会员" value="1"></el-option>
            <el-option label="2-老会员" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="会员编号" v-if="bian=='2'">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <div class="minx">
        <el-form-item label="会员卡号" style="width:237px">
          <el-input v-model="input" style="width: 157px"></el-input>
        </el-form-item>

        <button type="primary" @click="kamony()" class="btnte">...</button>
        <el-form-item label="会员姓名">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="证件号">
          <el-select v-model="form.region">
            <el-option label="身份证" value="shanghai"></el-option>
            <el-option label="护照" value="beijing"></el-option>
            <el-option label="回乡证" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-input v-model="input" style="width: 250px"></el-input>
      </div>

      <div class="shenfen">
        <el-form-item label="性别">
          <el-input v-model="input"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <div class="zhao">
        <div class="zjin">
          <p class="po">照片</p>
          <button type="primary" class="btnzhao">照片</button>
        </div>
        <div class="shenfen">
          <p class="comui">证件照</p>
          <button type="primary" class="btnzhao">证件</button>
        </div>
      </div>

      <div class="shenfen">
        <el-form-item label="手续费">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
        <el-form-item label="应收金额">
          <el-input v-model="input" disabled></el-input>
        </el-form-item>
      </div>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" style="width:450px;"></el-input>
      </el-form-item>

      <el-form-item class="divbin">
        <el-button type="primary" @click="onSubmit">确认并提交</el-button>
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
    kabox,
    Dialog
  },
  data () {
    // 这里存放数据
    return {
      bian:false,
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
      this.dialog.show = true;
    },
    kamony(){
      this.ka.show= true;
    },
    zhuanru(e){
      this.bian=e;
      console.log(e)
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
  .conment {
    border: 3px solid rgb(255, 239, 206);
    padding-top: 10px;
    margin-bottom: 10px;
  }

.pacuk {
    width: 610px !important;
    background: white;
}
.formbox {
    width: 90%;
    padding: 25px;
    margin: auto;
}

.zhao {
    display: flex;
    margin-bottom: 15px;
}
.po {
    width: 40px;
    margin-left: 40px;
    height: 25px;
    line-height: 26px;
    font-size: 14px;
    color: #606266;
}
.comui {
    width: 58px;
    margin-left: 54px;
    height: 25px;
    line-height: 26px;
    font-size: 14px;
    color: #606266;

}
.btnzhao {
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
    width: 50px;
    height: 25px;
}
.zjin{
  display: flex;
  width: 280px;
}
.shenfen {
    display: flex;
    width: 100%;
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
