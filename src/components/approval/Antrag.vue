<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form ref="form" :model="form" label-width="80px" class="seeion">
      <el-row :gutter="24">
        <el-col :span="6">
          <span class="ziliao">当前会员资料</span>
          <el-form-item label="会员编号:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="中文姓名:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="证件号码:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="出生日期:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="手机:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="电子邮件:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="通讯地址:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="备注:">
            <div>1111111</div>
          </el-form-item>
          <div style="display: flex;">
            <el-form-item label="照片:">
              <div style="width: 128px;">1111111</div>
            </el-form-item>
            <el-form-item label="证件照:">
              <div>1111111</div>
            </el-form-item>
          </div>
          <el-form-item label="监护人会员号:">
            <div>1111111</div>
          </el-form-item>
        </el-col>
        <el-col :span="6" class="name">
          <el-form-item label="性别:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="英文姓名:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="国籍:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="联系电话:">
            <div>1111111</div>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <span class="ziliao">申请变更资料</span>
          <el-form-item label="会员编号:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="中文姓名:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="证件号码:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="出生日期:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="手机:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="电子邮件:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="通讯地址:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="备注:">
            <div>1111111</div>
          </el-form-item>
          <div style="display: flex;">
            <el-form-item label="照片:">
              <div style="width: 128px;">1111111</div>
            </el-form-item>
            <el-form-item label="证件照:">
              <div>1111111</div>
            </el-form-item>
          </div>
          <el-form-item label="监护人会员号:">
            <div>1111111</div>
          </el-form-item>
        </el-col>
        <el-col :span="6" style="margin-top: 26px;">
          <el-form-item label="性别:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="英文姓名:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="国籍:">
            <div>1111111</div>
          </el-form-item>
          <el-form-item label="联系电话:">
            <div>1111111</div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  <el-button type="primary" @click="herleiten" style="margin-left: 32%;">审批历史</el-button>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: '',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {

  },
  data () {
    // 这里存放数据
    return {
      form: {

      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
herleiten(){

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
<style  scoped>
.app {
    background: white;
    height: 750px;
    padding: 20px 20px;
}
.seeion {
    border: 5px solid #ffefce;
    margin-bottom: 10px;
    padding: 20px 20px;
    width: 800px;
    height: 600px;
}
.ziliao {
    font-size: 15px;
    font-weight: 500;
}
.name {
    margin-top: 26px;
    border-right: 1px solid #ecc;
    height: 555px;
}
</style>
