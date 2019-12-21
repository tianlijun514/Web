<!-- vue快捷创建组件 -->
<template>
  <div class='boxs'>
    <el-tabs type="border-card">
      <el-tab-pane label="定金销售" v-if="!isState">
        <el-form ref="form" :model="form" label-width="80px" class="formbox">

          <div class="shenfen">
            <el-form-item label="会员类型">
              <el-select v-model="form.memberType" @change="typehui">
                <el-option label="1-新会员" value="1"></el-option>
                <el-option label="2-老会员" value="2"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="会员卡号" v-if="card=='2'">
              <el-input v-model="form.memberId" class="hname"></el-input>
            </el-form-item>
          </div>

          <div class='shenfen'>
            <el-form-item label="会员姓名">
              <el-input v-model="form.memberName" class="hname" :disabled="card=='2'?true:false"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="form.sex" :disabled="card=='2'?true:false">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="shenfen">
            <el-form-item label="证件号">
              <el-select v-model="form.certificate" :disabled="card=='2'?true:false">
                <el-option label="身份证" value="shanghai"></el-option>
                <el-option label="护照" value="beijing"></el-option>
                <el-option label="回乡证" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-input v-model="form.name" class="sinxex" :disabled="card=='2'?true:false"></el-input>
          </div>

          <el-form-item label="手机号码">
            <el-input v-model="input" class="hname"></el-input>
          </el-form-item>

          <div class="shenfen">
            <el-form-item label="定金类型">
              <el-select v-model="form.region2" @change="dingjin">
                <el-option label="会籍定金" value="1"></el-option>
                <el-option label="私教定金" value="2"></el-option>
                <el-option label="停转补定金" value="3"></el-option>
                <el-option label="转让定金" value="4"></el-option>
                <el-option label="租箱定金" value="5"></el-option>
                <el-option label="商品定金" value="6"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="定金金额">
              <el-input v-model="input" class="hname"></el-input>
            </el-form-item>
          </div>

          <div v-if="wieder=='2'">
            <div class="shenfen">
              <el-form-item label="营销活动">
                <el-select v-model="form.region3">
                  <el-option label="不参加营销活动" value="yin"></el-option>
                  <el-option label="参加营销活动" value="yxbj"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="卡种类型" style="width:50%">
                <el-select v-model="cardtype">
                  <el-option
                        v-for="(item,index) in card"
                        :label="item.label"
                        :value="item.value"
                        :key="index"
                    ></el-option>
                </el-select>
              </el-form-item>
            </div>

            <el-form-item label="卡种价格" style="width:50%">
              <el-input v-model="input" class="hname"></el-input>
            </el-form-item>
          </div>

          <el-form-item label="备注" style="width:100%">
            <el-input type="textarea" v-model="form.desc" style="width: 480px"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认并提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
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
      wieder: false,
      input: '',
      cardtype: '', //下拉框
      card: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      card:[],
      isState:false,
    }
  },
  // 监听属性 类似于data概念
  computed: {
    ...mapState({})
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    ...mapActions(['getByActivity']),
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
@import './../../assets/css/table.css';
.boxs {
    background: white;
}
.block {
    width: 50%;
    margin: auto;
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
.sinxex {
    width: 280px !important;
    margin-left: 5px;
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
    font-weight: 600;
}
.btn {
    width: 45px !important;
    height: 28px !important;
    margin-left: 10px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
}
</style>
