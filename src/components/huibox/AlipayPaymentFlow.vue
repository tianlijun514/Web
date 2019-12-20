<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="formInline.user"></el-input>
            </el-form-item>

            <el-form-item label="状态">
                <el-select v-model="formInline.regions">
                    <el-option label="未支付" value="xiaoshou"></el-option>
                    <el-option label="已支付" value="shi"></el-option>
                    <el-option label="已完成" value="buka"></el-option>
                    <el-option label="已取消" value="quxiao"></el-option>
                    <el-option label="已退款" value="tuikuan"></el-option>
                </el-select>
            </el-form-item>

            <span class="demonstration">日期范围</span>
            <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>

            <el-form-item style="margin-left: 10px;">
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共0条记录/显示0页</span>

        <el-table :data="tableData" border style="width: 100%;text-align:center">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="cardType" label="门店名称"></el-table-column>
            <el-table-column prop="startDate" label="时间"></el-table-column>
            <el-table-column prop="endDate" label="条码"></el-table-column>
            <el-table-column prop="stopStar" label="金额"></el-table-column>
            <el-table-column prop="stopEnd" label="状态"></el-table-column>
            <el-table-column prop="cdStartDate" label="付款人时间"></el-table-column>
            <el-table-column prop="newContractId" label="付款人账号"></el-table-column>
            <el-table-column prop="newContractId" label="支付单号"></el-table-column>
            <el-table-column prop="newContractId" label="操作员"></el-table-column>
            <el-table-column prop="newContractId" label="合同类型"></el-table-column>
            <el-table-column prop="newContractId" label="相关单号"></el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="40"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'boxhy',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            date: '',
            formInline: {
                user: '',
                region: ''
            },
            value1: '',
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
                    caryi: '备注'
                }
            ],
            num: {
                page: 1,
                size: 10,
                contract: '',
                store: '',
                type: '1',
                membersNumber: '',
                date1: '',
                date2: ''
            },
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ membershipScrs: state => state.membershipScrs })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getPayTreasure']),
        search() {
            this.getPayTreasure(this.num);
        },
        handleLook(e) {
            this.$router.push({ path: '/hymesg', query: { id: e.memberId } });
        },
        show(e) {
            this.showData = e.memberId;
            this.dialogShow = true;
        },
        dialogShowData(e) {
            this.dialogShow = e;
        },
        handleSizeChange(val) {
            this.num.size = val;
            this.getPayTreasure(this.num);
        },
        handleCurrentChange(val) {
            this.num.page = val;
            this.getPayTreasure(this.num);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getPayTreasure(this.num);
    },
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
@import './../../assets/css/table.css';
.app {
    width: 100%;
}
.block {
    width: 550px;
    margin: auto;
}
</style>
