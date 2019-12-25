<!-- vue快捷创建组件 -->
<template>
  <div class='pact'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">

      <el-form-item label="合同编号" label-width='82px'  v-show="Aufgeld=='2'">
        <el-input v-model="input" class="kuang"></el-input>
      </el-form-item>

      <div class="conment">
        <el-form-item label="合同编号" label-width='82px'  v-show="Aufgeld=='1'">
          <el-input v-model="input" class="kuang" disabled></el-input>
        </el-form-item>
        <div class="shenfen">
          <el-form-item label="销售日期">
            <el-input suffix-icon="el-icon-date" v-model="input1" disabled style="width: 185px;"></el-input>
          </el-form-item>

          <el-form-item label="销售类别" label-width='82px'>
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>

        <div class="shenfen">
          <el-form-item label="会员姓名">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>

          <el-form-item label-width='82px' label="会员编号">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>

        <el-form-item label="会籍类型">
          <el-input v-model="input" disabled style="width: 458px;"></el-input>
        </el-form-item>

        <div class="shenfen">
          <el-form-item label="合同起日">
            <el-input suffix-icon="el-icon-date" v-model="input1" disabled class="kuang"></el-input>
          </el-form-item>

          <el-form-item label="合同迄日" style="margin-left: 3px;">
            <el-input suffix-icon="el-icon-date" v-model="input1" disabled class="kuang"></el-input>
          </el-form-item>
        </div>

        <div class="shenfen">
          <el-form-item label="合同金额">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
          <el-form-item label-width='82px' label="定金金额">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>

        <div class="shenfen">
          <el-form-item label="转入金额">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
          <el-form-item label-width='82px' label="付款金额">
            <el-input v-model="input" disabled></el-input>
          </el-form-item>
        </div>
        <el-form-item label="原会籍类型" label-width="82px"  v-show="Aufgeld=='1'">
          <el-input v-model="input" disabled style="width: 460px;margin-left: -2px;"></el-input>
        </el-form-item>
        <el-form-item label="新会籍类型" label-width="82px"  v-show="Aufgeld=='1'">
          <el-input v-model="input" disabled style="width: 458px;margin-left: -2px;"></el-input>
        </el-form-item>

      </div>

      <el-form-item label="新会籍类型" label-width="82px"  v-show="Aufgeld=='2'">
        <el-select v-model="form.region" style="width: 458px;">
          <el-option label="A00006 - 红牌楼店" value="A00006"></el-option>
          <el-option label="A00007 - 花郡店" value="A00007"></el-option>
          <el-option label="A00008 - 万象城店" value="A00008"></el-option>
          <el-option label="A00009 - 新城市店" value="A00009"></el-option>
          <el-option label="A00014 - 阳光新业店" value="A000014"></el-option>
          <el-option label="A00016 - 龙湖店" value="A000016"></el-option>
          <el-option label="A00017 - 王府井店" value="A000017"></el-option>
          <el-option label="A00023 - 天誉店" value="A000023"></el-option>
          <el-option label="A00024 - 伊藤店" value="A000024"></el-option>
          <el-option label="A00025 - 金牛店" value="A000025"></el-option>
          <el-option label="A00026 - 瑞安店" value="A000026"></el-option>
          <el-option label="A00027 - 339店" value="A000027"></el-option>
          <el-option label="A00028 - 镏金店" value="A000028"></el-option>
          <el-option label="A00029 - 紫荆店" value="A000029"></el-option>
          <el-option label="A00030 - 魅力城" value="A000030"></el-option>
          <el-option label="A00031 - 二十四城" value="A000031"></el-option>
          <el-option label="A00032 - 东城国际店" value="A000032"></el-option>
          <el-option label="C001 - 管理中心" value="C001"></el-option>
          <el-option label="test - 培训测试店" value="0001"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="申请原因" v-show="Aufgeld=='2'">
        <el-input type="textarea" v-model="form.desc" style="width: 459px;"></el-input>
      </el-form-item>
      <el-form-item  v-show="Aufgeld=='2'">
        <el-button type="primary" @click="onSubmit">保存申请</el-button>
      </el-form-item>
      <el-form-item  v-show="Aufgeld=='1'">
        <el-button type="primary" @click="onSubmit">审批历史</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'prva',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      Aufgeld: '',
      input: '',
      input1: '',
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
  activated () { },// 如果页面有keep-alive缓存功能，这个函数会触发
  beforeRouteEnter (to, from, next) {
    console.log(from)
    let title
    if (from.meta.title == '我的申请') {
      title = '1'
    } else {
      title = '2'
    }
    next(vm => {
      vm.Aufgeld = title
    });
  }
}
</script>
<style scoped>
.conment {
    border: 3px solid rgb(255, 239, 206);
    padding-top: 10px;
    margin-bottom: 10px;
    width: 560px;
}

.pact {
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

.kuang {
    width: 187px;
}
</style>
