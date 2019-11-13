<!-- vue快捷创建组件 -->
<template>
<div class='app'>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="门店">
    <el-input v-model="formInline.user"></el-input>
  </el-form-item>
   <el-form-item label="状态">
    <el-select v-model="formInline.regions" >
      <el-option label="未支付" value="xiaoshou"></el-option>
      <el-option label="已支付" value="shi"></el-option>
      <el-option label="已完成" value="buka"></el-option>
      <el-option label="超时失效" value="hui"></el-option>
      <el-option label="余额不足" value="yu"></el-option>
    </el-select>
  </el-form-item>


    <span class="demonstration">日期范围</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
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
    <div class="block">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
    </div>

</div>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
name:'boxhy',
props: {

},
// import引入的组件需要注入到对象中才能使用
components: {

},
data() {
// 这里存放数据
return {
   currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
 formInline: {
  user: '',
  region: ''
},
  pickerOptions: {
    shortcuts: [{
    onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
    }
    }, {
        onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
    }
    }, {
        onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit('pick', [start, end]);
    }
    }]
   },
value1: '',
value2: '',
 tableTitle: [
        { title: '序号', data: 'num' },
        { title: '门店名称', data: 'storeName' },
        { title: '卡号', data: 'telNo' },
        { title: '销售日期', data: 'userName' },
        { title: '会籍类型', data: 'userNo' },
        { title: '有效日期起', data: 'userCardNo' },
        { title: '状态', data: 'sex' },
        { title: '制卡日期', data: 'cardClass' },
        { title: '领卡日期', data: 'cardNo' },
        { title: '会员编号', data: 'photo' },
        { title: '会员姓名', data: 'cardPhoto' },

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
        carcu:'10'

      },]
}
},
// 监听属性 类似于data概念
computed: {},
// 监控data中的数据变化
watch: {},
// 方法集合
methods: {
 onSubmit() {
  console.log('submit!');
  },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
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
<style>
.el-form-item__content{
  width: 100px !important;
}
@import './../../assets/css/table.css';
.block{
    width: 50%;
    margin: auto
}  
.demonstration{
    height: 32px;
    vertical-align: middle;
    line-height: 32px !important;
    font-size: 14px;
    color: #606266;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
