<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="批次名称">
                <el-input v-model="formInline.name"></el-input>
            </el-form-item>
            <el-form-item label="条码">
                <el-input v-model="formInline.qr"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="formInline.regions">
                    <el-option label="全部" value="all"></el-option>
                    <el-option label="未使用" value="nouse"></el-option>
                    <el-option label="已使用" value="used"></el-option>
                    <el-option label="已作废" value="des"></el-option>
                </el-select>
            </el-form-item>
            <span class="demonstration">日期范围</span>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="primary">导出</el-button>
                <el-button type="primary" @click="delSelectedQr([0,1])">作废选择的二维码</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共0条记录/显示0页</span>
        <el-table :data="tableData" border style="width: 100%;text-align:center">
            <el-table-column type="selection" width="55"> </el-table-column>
            <template v-for="(item, index) in tableTitle">
                <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
            </template>
          
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
                { title: '条码', data: 'telNo' },
                { title: '卡种', data: 'userName' },
                { title: '有效期', data: 'userNo' },
                { title: '状态', data: 'userCardNo' },
                { title: '生成日期', data: 'sex' },
                { title: '使用日期', data: 'cardClass' },
                { title: '合同号', data: 'cardNo' },
                { title: '可入场次数', data: 'photo' },
                { title: '打印', data: 'cardPhoto' },
                { title: '打印时间', data: 'caryi' },
                { title: '打印人', data: 'printMan' }
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
                    printMan: '张晓雅'
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
                    printMan: '张晓雅'
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
        },
        delSelectedQr(indexArr){
          console.log(indexArr)
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
