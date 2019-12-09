<!-- vue快捷创建组件 -->
<template>
  <div class='pacuk'>
    <el-form ref="form" :model="form" label-width="80px" class="formbox">
      <div class="shenfen">
        <el-form-item label="合同编号">
          <el-input v-model="input"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-select v-model="form.region" style="width: 185px" @change="zhuanru">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="中文姓名">
          <el-input v-model="input" class="minx"></el-input>
        </el-form-item>

        <el-form-item label="英文姓名">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <div style=" display: flex;">
        <el-form-item label="证件号">
          <el-select v-model="form.region" style="width: 185px">
            <el-option label="身份证" value="shanghai"></el-option>
            <el-option label="护照" value="beijing"></el-option>
            <el-option label="回乡证" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-input v-model="input" style="width: 268px"></el-input>
      </div>

      <div class="shenfen">
        <el-form-item label="出生日期">
          <el-date-picker v-model="value1" type="date" style="width: 185px">
          </el-date-picker>

        </el-form-item>
        <el-form-item label="国籍">
          <el-input style="width: 185px" v-model="input1">
          </el-input>
        </el-form-item>
      </div>

      <div class="shenfen">
        <el-form-item label="手机">
          <el-input v-model="input" class="minx"></el-input>
        </el-form-item>

        <el-form-item label="联系电话">
          <el-input v-model="input"></el-input>
        </el-form-item>
      </div>

      <el-form-item label="电子邮件" >
        <el-input v-model="form.desc" style="width:450px;"></el-input>
      </el-form-item>

      <el-form-item label="通讯地址">
        <el-input v-model="form.desc" style="width:450px;"></el-input>
      </el-form-item>

      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" style="width:450px;"></el-input>
      </el-form-item>

      <el-form-item label="监护人会员号" label-width="96px" style="margin-left: -17px;">
        <el-input v-model="input" class="minx"></el-input>
      </el-form-item>

      <!-- <button type="primary" @click="kamony()" class="btnte">...</button> -->

      <div class="zhao">
        <div class="zjin">
          <p class="po">照片</p>
          <button type="primary" class="btnzhao" @click="dialogVisible = true">更换..</button>
          <!-- <el-button type="text" >点击打开 Dialog</el-button> -->
        </div>
        <div class="shenfen">
          <p class="comui">证件照</p>
          <button type="primary" class="btnzhao" @click="dialog = true">更换..</button>

        </div>
      </div>

      <el-form-item label="申请原因">
        <el-input type="textarea" v-model="form.desc" style="width:450px;"></el-input>
      </el-form-item>

      <el-form-item class="divbin">
        <el-button type="primary" @click="onSubmit">保存申请</el-button>
      </el-form-item>
      <el-dialog title="上传会员照片" :visible.sync="dialogVisible" width="30%">
        111111

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 2 -->
      <el-dialog title="上传证件" :visible.sync="dialog" width="30%">
        22222

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialog= false">取 消</el-button>
          <el-button type="primary" @click="dialog = false">确 定</el-button>
        </span>
      </el-dialog>
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
      dialogVisible: false,
      dialog: false,
      bian: false,
      input1: '',
      input: '',
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
    zhuanru (e) {
      this.bian = e;
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
.zjin {
    display: flex;
    width: 280px;
}
.shenfen {
    display: flex;
    width: 100%;
}

.minx {
    width: 185px;
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
</style>
