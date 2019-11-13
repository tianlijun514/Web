<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">

      <el-form-item label="选择类型">
        <el-select v-model="form.region" class="sex">
          <el-option label="停卡" value="shanghai"></el-option>
          <el-option label="补卡" value="beijing"></el-option>
            <el-option label="转店" value="za11"></el-option>
        </el-select>
      </el-form-item>
      <!-- <div class='divbin'> -->
        <el-form-item label="合同编号">
          <input type="text" class="input_box">
        </el-form-item>
        <!-- <el-form-item label="性别">
          <el-select v-model="form.regions" class="sex">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item> -->
      <!-- </div> -->
       <div class="shenfen">
        <el-form-item label="会员姓名">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label="会员编号">
          <input type="text" class="input_box">
        </el-form-item>
      </div>
      <el-form-item label="原会籍类型">
          <input type="text" class="input_box">
        </el-form-item>

 <div class="block">
            <span class="demonstration">合同日期范围</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            <input type="date"  placeholder='1'>
          </div>
          <div class="shenfen">
        <el-form-item label="合同价值">
          <input type="text" class="input_box">
        </el-form-item>
        <el-form-item label="剩余价值">
          <input type="text" class="input_box">
        </el-form-item>
      </div>





















      <div class="shenfen">
        <el-form-item label="证件号">
          <el-select v-model="form.region1" class="sex">
            <el-option label="身份证" value="shanghai"></el-option>
            <el-option label="护照" value="beijing"></el-option>
            <el-option label="回乡证" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-input v-model="form.name" class="sinxex"></el-input>
      </div>
      <el-form-item label="手机号码" class="phone">
        <input type="text" class="input_box">
      </el-form-item>
      <div class="dinglei">
        <el-form-item label="定金类型">
          <el-select v-model="form.region2" class="sex">
            <el-option label="会籍定金" value="hux"></el-option>
            <el-option label="私教定金" value="sijao"></el-option>
            <el-option label="停转补定金" value="tibox"></el-option>
            <el-option label="转让定金" value="zrj"></el-option>
            <el-option label="租箱定金" value="ding"></el-option>
            <el-option label="商品定金" value="shopng"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="定金金额" class="phone">
          <input type="text" class="input_box">
        </el-form-item>
      </div>
      <div class="conmeny">
        <el-form-item label="营销活动">
          <el-select v-model="form.region3">
            <el-option label="不参加营销活动" value="yin"></el-option>
            <el-option label="参加营销活动" value="yxbj"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="卡种类型">
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
      </div>
      <el-form-item label="卡种价格" class="phone">
        <input type="text" class="input_box">
      </el-form-item>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认并提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'indexdj',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
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
    width: 60% !important;
    background: white;
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
</style>
