<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-dialog :title="diao.title" :visible.sync="diao.show" :close-on-click-modal='false' :close-on-press-escape='false' :modal-append-to-body="false" width="33%">
      <el-form :model="ruleForm" ref="ruleForm" label-width="85px" class="demo-ruleForm">
        <el-form-item label="编号">
          <el-input v-model="ruleForm.typeCode" class="inputbox"></el-input>
        </el-form-item>

        <el-form-item label="名称">
          <el-input v-model="ruleForm.typeName" class="inputbox"></el-input>
        </el-form-item>

        <el-form-item label="门店">
          <el-select v-model="value" style="width: 188px;">
            <el-option v-for="item in eine" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="金额">
          <el-input v-model="ruleForm.typeName" class="inputbox"></el-input>
        </el-form-item>

        <span class="demonstration">日期范围</span>
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd">
        </el-date-picker>

        <el-form-item label="状态" style="margin-top: 10px;">
          <el-radio-group v-model="ruleForm.isDepositCard">
            <el-radio label="2">不能购买</el-radio>
            <el-radio label="1">可购买</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="备注">
          <el-input type="textarea" v-model="ruleForm.remark" style="width: 350px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加·</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>

</template>

<script>
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Vorverkauf',
  props: {
    diao: Object,
    ruleForm: Object
  },
  // import引入的组件需要注入到对象中才能使用
  components: {
  },
  data () {
    // 这里存放数据
    return {
      type: null,
      eine: [{
        value: '01',
        label: '全部'
      }, {
        value: '02',
        label: '会籍定金'
      }, {
        value: '03',
        label: '私教定金'
      }, {
        value: '04',
        label: '停转补定金'
      }, {
        value: '05',
        label: '转让定金'
      }, {
        value: '06',
        label: '租箱定金'
      }, {
        value: '07',
        label: '商品定金'
      }],
      value1: '',
      value:'',
      tableData: [{}],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },

    leibox (e) {
      this.staat = e
    },

    submitForm (ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        // let url;
        // if(this.dialog.option=='add'){
        //       url = 'addSpType'
        // }else{
        //   url = 'updateSpType/'+this.ruleForm.id
        // }
        const url = this.dialog.option == 'add' ? `addSpType` : `updateSpType/`
        if (valid) {
          console.log(this.ruleForm)
          this.ruleForm.isDepositCard = parseInt(this.ruleForm.isDepositCard)
          axios.post(base + `/commodity/${url}`, this.ruleForm)
            .then(res => {
              if (res.data.code == 10000) {
                this.$message({
                  message: '操作成功',
                  type: 'success'
                });
                //隐藏对话框
                this.dialog.show = false;
                this.$emit('update');
              } else {
                this.$message.error('操作失败，请重新再试！');
              }

            })
        }
      })
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    axios
      .post(base + '/commodity/getAllSpType').then((res) => {
        console.log(res.data)
        this.type_list = res.data
      })
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
.app {
    width: 100% !important;
}
.block {
    width: 50%;
    margin: auto;
}
.btn {
    background: #333;
    color: white;
    width: 55px;
}
.demonstration {
    margin-left: 17px;
}
.inputbox {
    width: 188px;
}
</style>
