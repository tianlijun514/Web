<!-- vue快捷创建组件 -->
<template>
    <div class="tableBox">
        <span class="searchRst">查询结果：共0条记录/显示0页</span>

        <el-table :data="tableData" border style="width: 100%;text-align:center">
            <template v-for="(item,index) in tableTitle">
                <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
            </template>
            <el-table-column scope label="详细">
                <el-button
                    size="mini"
                    type="primary"
                    @click="handleLook(scope.$index, scope.row)"
                >查看</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
    name: 'tableBox',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            tableTitle: [
                { title: '序号', data: 'num' },
                { title: '门店名称', data: 'storeName' },
                { title: '会员编号', data: 'userNo' },
                { title: '会员卡编号', data: 'userCardNo' },
                { title: '会员姓名', data: 'userName' },
                { title: '性别', data: 'sex' },
                { title: '证件类型', data: 'cardClass' },
                { title: '证件号', data: 'cardNo' },
                { title: '手机', data: 'telNo' },
                { title: '照片', data: 'photo' },
                { title: '证件照', data: 'cardPhoto' }
            ],
            tableData:[{
                num: '00012',
                storeName: '天府四街分店',
                userNo: '0001242',
                userCardNo: '0001242313',
                userName: '刘小军',
                sex: '男',
                cardClass: '身份证',
                cardNo: '511181199403246214',
                telNo: '15842456124',
                photo: '有',
                cardPhoto: '有'
            },{
                num: '00012',
                storeName: '天府四街分店',
                userNo: '0001242',
                userCardNo: '0001242313',
                userName: '刘小军',
                sex: '男',
                cardClass: '身份证',
                cardNo: '511181199403246214',
                telNo: '15842456124',
                photo: '有',
                cardPhoto: '有'
            }]
        };
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        
        handleLook(index, row) {
            console.log(index, row);
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
<style>
@import './../../assets/css/table.css';
</style>
