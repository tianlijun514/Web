<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="名称">
                <el-input v-model="formInline.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共0条记录/显示0页</span>
        <el-table :data="tableData" border style="width: 100%;text-align:center">
            <template v-for="(item, index) in tableTitle">
                <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
            </template>
            <el-table-column label="操作">
                <el-button type="primary" @click="dialog.show = true">修改</el-button>
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
            ></el-pagination>
        </div>
        <el-dialog
            title="修改短信模板"
            :visible.sync="dialog.show"
            width="400px"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :modal-append-to-body="false"
        >
            <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="90px">
                <div>
                    <el-form-item label="编号">
                        <el-input v-model="formInline.name" disabled="true" suffix-icon="“xxxx”"></el-input>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item label="名称">
                        <el-input v-model="formInline.name" disabled="true" suffix-icon="“xxxx”"></el-input>
                    </el-form-item>
                    <el-form-item label="可用变量">
                         <el-input
                            type="textarea"
                            resize="none"
                            style="width:216px"
                            maxlength="140"
                            disabled="true"
                            :autosize="{ minRows: 2, maxRows: 8}"
                            v-model="formInline.name"
                        ></el-input>
                    </el-form-item>
                </div>
                <div style="width:100%">
                    <el-form-item label="内容">
                        <el-input
                            type="textarea"
                            resize="none"
                            style="width:216px"
                            maxlength="140"
                            :autosize="{ minRows: 3, maxRows: 8}"
                            v-model="formInline.name"
                        ></el-input>
                    </el-form-item>
                </div>
                <div>
                  <el-form-item label="状态">
                     <el-radio v-model="radio" label="1">启用</el-radio>
                     <el-radio v-model="radio" label="2">停用</el-radio>
                  </el-form-item>
                </div>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show = false">取 消</el-button>
                <el-button type="primary" @click="dialog.show = false">提交</el-button>
            </span>
        </el-dialog>
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
          radio:false,
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
                qr: ''
            },
            value1: '',
            tableTitle: [
                { title: '编号', data: 'num' },
                { title: '名称', data: 'storeName' },
                { title: '内容', data: 'telNo' },
                { title: '状态', data: 'userName' }
            ],
            tableData: [
                {
                    num: '00012',
                    storeName: '天府四街分店',
                    userNo: '0001242',
                    userCardNo: '刘小军'
                },
                {
                    num: '00012',
                    storeName: '天府四街分店',
                    userNo: '0001242',
                    userCardNo: '刘小军'
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
        delSelectedQr(indexArr) {
            console.log(indexArr);
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
