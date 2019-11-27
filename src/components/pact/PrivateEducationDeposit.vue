<!-- vue快捷创建组件 -->
<template>
  <div class='boxs'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">

      <div  class="shenfen">
        <el-form-item label="会员类型">
          <el-select v-model="form.region" @change="typehui">
            <el-option label="1-新会员" value="1"></el-option>
            <el-option label="2-老会员" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="会员卡号" v-if="card=='2'">
          <el-input v-model="input" class="hname"></el-input>
        </el-form-item>

      </div>



      <div class='shenfen'>
        <el-form-item label="会员姓名">
          <el-input v-model="input" class="hname"></el-input>
        </el-form-item>

        <el-form-item label="性别" >
          <el-select v-model="form.regions">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="证件号">
          <el-select v-model="form.region1">
            <el-option label="身份证" value="shanghai"></el-option>
            <el-option label="护照" value="beijing"></el-option>
            <el-option label="回乡证" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-input v-model="form.name" style="width: 280px;"></el-input>
      </div>

      <el-form-item label="手机号码">
        <el-input v-model="input" class="hname"></el-input>
      </el-form-item>

      <div class="shenfen">
        <el-form-item label="定金类型">
          <el-select v-model="form.region2"  @change="dingjin">
            <el-option label="会籍定金" value="01"></el-option>
            <el-option label="私教定金" value="02"></el-option>
            <el-option label="停转补定金" value="03"></el-option>
            <el-option label="转让定金" value="04"></el-option>
            <el-option label="租箱定金" value="05"></el-option>
            <el-option label="商品定金" value="06"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="定金金额">
          <el-input v-model="input" class="hname"></el-input>
        </el-form-item>
      </div>

      <div v-if="wieder=='01'">
        <div class="shenfen">
          <el-form-item label="营销活动" >
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

        <el-form-item label="卡种价格">
          <el-input v-model="input" class="hname"></el-input>
        </el-form-item>

      </div>


      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" style="width:480px"></el-input>
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
      wieder: true,
      card: false,
      input:'',
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
    typehui (e) {
      this.card = e
      console.log(e)
    },
    dingjin (e) {
      this.wieder = e
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
.boxs {
    width:630px;
    background: white;
}
.formbox {
    padding: 25px;
 
}
.hname {
    width: 200px;
}

.shenfen {
    display: flex;
}

</style>
