<!-- vue快捷创建组件 -->
<template>
    <div class="app">
      <el-dialog title="生成二维码" :visible.sync="dialog.show" width="680px" :close-on-click-modal="false" :close-on-press-escape="false" :modal-append-to-body="false">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="90px">
              <div>
                 <el-form-item label="类型">
               
                    <el-select v-model="formInline.regions">
                    <el-option label="购买合同" value="1"></el-option>
                    <el-option label="直接入场" value="2"></el-option>
                </el-select>
                 
            </el-form-item>
           
              <el-form-item label="批次名称">
                <el-input v-model="formInline.name" suffix-icon=“xxxx”></el-input>
            </el-form-item>
              </div>
            <div v-if="formInline.regions==1">
               <el-form-item label="卡种">
                <el-select v-model="formInline.cardType">
                    <el-option label="请选择" value="all"></el-option>
                </el-select>
            </el-form-item>
            </div>
            <div v-if="formInline.regions==2">
              <el-form-item label="合同号">
                <el-input v-model="formInline.name" suffix-icon=“xxxx”></el-input>
                 </el-form-item>
              <el-form-item label="可入场次数">
                <el-input v-model="formInline.name" suffix-icon=“xxxx”></el-input>
                 </el-form-item>
            </div>
           <div>
              <el-form-item label="生成数量">
                <el-input v-model="formInline.name" suffix-icon=“xxxx”></el-input>
            </el-form-item>
            <el-form-item label="有效期">
                <el-input v-model="formInline.name" suffix-icon=“xxxx”></el-input>
            </el-form-item>
           </div>
            <div style="width:100%">
              <el-form-item label="备注">
                <el-input type="textarea" resize="none" style="width:530px !important" :autosize="{ minRows: 3, maxRows: 6}" v-model="formInline.name"></el-input>
            </el-form-item>
            </div>
        </el-form>
      <span slot="footer" class="dialog-footer" >
          <el-button @click="dialog.show = false">取 消</el-button>
          <el-button type="primary" @click="dialog.show = false">二维码生成</el-button>
      </span>
    </el-dialog>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="批次名称">
                <el-input v-model="formInline.name"></el-input>
            </el-form-item>
            <el-form-item label="卡种">
                <el-select v-model="formInline.regions">
                    <el-option label="全部" value="all"></el-option>
                </el-select>
            </el-form-item>
            <span class="demonstration">日期范围</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="primary">导出</el-button>
                <el-button type="primary" @click="dialog.show = true">二维码生成</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共0条记录/显示0页</span>
        <el-table :data="tableData" border style="width: 100%;text-align:center">
           
            <template v-for="(item, index) in tableTitle">
                <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
            </template>
            <el-table-column align="center" width="160">
               <template slot-scope="scope">
        <el-button
          size="mini"
           type="primary"
          @click="handleEdit(scope.$index, scope.row)">详细</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="handleDelete(scope.$index, scope.row)">打印</el-button>
      </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
    name: 'boxQr',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            dialog:{
              show:false
            },
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            formInline: {
                name: '',
                regions: '',
                qr:''
            },
            value1: '',
            tableTitle: [
                { title: '序号', data: 'num' },
                { title: '批次名称', data: 'storeName' },
                { title: '卡种', data: 'telNo' },
                { title: '有效期', data: 'userName' },
                { title: '数量', data: 'userNo' },
                { title: '生成日期', data: 'userCardNo' },
                { title: '生成人', data: 'sex' },
                { title: '合同号', data: 'cardClass' },
                { title: '入场次数', data: 'cardNo' },
                { title: '打印', data: 'photo' },
                { title: '打印时间', data: 'cardPhoto' },
                { title: '打印人', data: 'caryi' },
                { title: '备注', data: 'caryi' },
              
            ],
            tableData: [
                {
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
                    caryi: '备注',
                  
                },
                {
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
                    caryi: '备注',
                  
                }
            ]
        };
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
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, // 生命周期 - 创建之前
    beforeMount() {}, // 生命周期 - 挂载之前
    beforeUpdate() {}, // 生命周期 - 更新之前
    updated() {}, // 生命周期 - 更新之后
    beforeDestroy() {}, // 生命周期 - 销毁之前
    destroyed() {}, // 生命周期 - 销毁完成
    activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.el-form-item__content {
    width: 100px !important;
}
@import './../../assets/css/table.css';
.block {
    width: 50%;
    margin: auto;
}
</style>
