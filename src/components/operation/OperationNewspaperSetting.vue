<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-dialog
            title="生成二维码"
            :visible.sync="dialog.show"
            width="450px"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :modal-append-to-body="false"
        >
            <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="90px">
                <div>
                    <el-form-item label="门店">
                        <el-select v-model="formInline.regions">
                            <el-option label="购买合同" value="1"></el-option>
                            <el-option label="直接入场" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div>
                    <span style="display:inline-block;width:90px;text-align:right;padding:0 12px;box-sizing:border-box">开始日期</span>
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                </div>
                <div>
                    <el-form-item label="数据规则">
                        <template>
                            <el-checkbox v-model="checked0">包含会籍(不含定金)</el-checkbox>
                           <div style="border-bottom:1px solid #cdcdcd;padding:5px 0">
                              <template v-if="checked0">
                                <el-radio v-model="radio" label="1">全部卡种</el-radio>
                                <el-radio v-model="radio" label="2"><el-input size="mini" style="width:50px" maxlength="2" v-model="cardTime"></el-input>年内卡种</el-radio>
                                 <div>
                                    <el-checkbox >不包含全市卡通</el-checkbox>
                                 </div>
                               </template>
                           
                           </div>
                            <el-checkbox v-model="checked1">包含私教(不含定金)</el-checkbox>
                                <div style="border-bottom:1px solid #cdcdcd;padding:5px 0">
                                   <template v-if="checked1">
                                <el-radio v-model="radio1" label="3">不限金额</el-radio>
                                <el-radio v-model="radio1" label="4">金额≤<el-input size="mini" style="width:70px" maxlength="5" v-model="cardCoin"></el-input></el-radio>
                                <div>
                                    <el-checkbox >只含常规私教</el-checkbox>
                                 </div>
                               </template>
                                </div>
                                <div style="border-bottom:1px solid #cdcdcd;padding:5px 0">
                                   <el-checkbox v-model="checked2">包含商品(不含礼品卡)</el-checkbox>
                                </div>
                                <div style="border-bottom:1px solid #cdcdcd;padding:5px 0">
                                   <el-checkbox v-model="checked3">会籍定金</el-checkbox>
                                   <el-checkbox v-model="checked4">私教定金</el-checkbox>
                                   <el-checkbox v-model="checked5">其他定金</el-checkbox>
                                </div>
                                <div>
                                   <el-checkbox v-model="checked6">租箱</el-checkbox>
                                   <el-checkbox v-model="checked7">停转补</el-checkbox>
                                </div>
                        </template>
                    </el-form-item>
                     <el-form-item label="备注">
                        <el-input type="textarea" resize="none" v-model="text1"  :autosize="{ minRows: 3, maxRows: 6}"></el-input>
                    </el-form-item>
                     <el-form-item label="上传">
                        <el-radio v-model="radio2" label="5">上传</el-radio>
                        <el-radio v-model="radio2" label="6">不上传</el-radio>
                    </el-form-item>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show = false">取 消</el-button>
                <el-button type="primary" @click="dialog.show = false">提交</el-button>
            </span>
        </el-dialog>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="门店">
                <el-select v-model="formInline.regions">
                    <el-option label="全部" value="all"></el-option>
                    <el-option label="店名" value="all"></el-option>
                    <el-option label="店名" value="all"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="primary" @click="dialog.show = true">新增</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共0条记录/显示0页</span>
        <el-table :data="tableData" border style="width: 100%;text-align:center">
            <template v-for="(item, index) in tableTitle">
    <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
</template>
            <el-table-column align="center" width="160">
                <el-button size="mini" type="primary" @click="dialog.show = true">修改</el-button>
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
            checked0:false,
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false,
            checked5:false,
            checked6:false,
            checked7:false,
            radio:false,
            radio1:false,
            radio2:false,
            cardTime:'',
            cardCoin:'',
            text1:'',
            dialog: {
                show: false
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
                { title: '序号', data: 'num' },
                { title: '门店编号', data: 'storeName' },
                { title: '门店名称', data: 'telNo' },
                { title: '开始日期', data: 'userName' },
                { title: '结束日期', data: 'userNo' },
                { title: '数据规则', data: 'userCardNo' },
                { title: '状态', data: 'sex' }
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
                    telNo: '2019-12-12'
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
                    telNo: '2019-12-12'
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
