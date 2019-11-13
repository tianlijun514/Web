<!-- vue快捷创建组件 -->
<template>
<div class='app'>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="门店">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
      <el-form-item label="会员卡号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
      <el-form-item label="会员编号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
      <el-form-item label="K-Yoga卡号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
      <el-form-item label="会员姓名/证件号/手机号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>
      <el-form-item label="合同号">
        <el-input v-model="formInline.user"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <span class="searchRst">查询结果：共0条记录/显示0页</span>

        <el-table :data="tableData" border style="width: 100%;text-align:center">
      <template v-for="(item,index) in tableTitle">
        <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
      </template>
    </el-table>
</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
name:'boxhj',
props: {

},
// import引入的组件需要注入到对象中才能使用
components: {

},
data() {
// 这里存放数据
return {
  formInline: {
        user: '',
        region: ''
      },
       tableTitle: [
        { title: '序号', data: 'num' },
        { title: '门店名称', data: 'storeName' },
        { title: '合同编号', data: 'userNo' },
        { title: '会员姓名', data: 'userCardNo' },
        { title: '销售日期', data: 'userName' },
        { title: '会籍类型', data: 'sex' },
        { title: '销售类别', data: 'cardClass' },
        { title: '开始日期', data: 'cardNo' },
        { title: '结束日期', data: 'telNo' },
        { title: '赠后日期', data: 'photo' },
        { title: '终止日期', data: 'cardPhoto' },
        { title: '终止原因', data: 'caryi' },
        { title: '次卡剩余次数', data: 'carcu' },
        { title: '付款金额', data: 'carmoney' },
        { title: '定金金额', data: 'djmoney' },
        { title: '转入金额', data: 'zrmoney' }
      ],
         tableData: [{
        num: '00012',
        storeName: '天府四街分店',
        userNo: '0001242',
        userCardNo: '刘小军',
        userName: '2018-12-10',
        sex: '普通',
        cardClass: '普通',
        cardNo: '2018-12-12',
        telNo: '2019-12-12',
        photo: '2018-12-01',
        cardPhoto: '2018-12-23',
        caryi:'备注',
        carcu:'10',
        carmoney:'2222',
        djmoney:'100',
        zrmoney:'5000'
      },]
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
created() {

},
// 生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, // 生命周期 - 创建之前
beforeMount() {}, // 生命周期 - 挂载之前
beforeUpdate() {}, // 生命周期 - 更新之前
updated() {}, // 生命周期 - 更新之后
beforeDestroy() {}, // 生命周期 - 销毁之前
destroyed() {}, // 生命周期 - 销毁完成
activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
@import './../../assets/css/table.css';

</style>
