<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="num.store" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="日期类型">
                <el-select v-model="num.dateType">
                    <el-option label="销售日期" value="1"></el-option>
                    <el-option label="制卡日期" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="日期">
                <el-date-picker
                    v-model="date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-formate="timestamp"
                ></el-date-picker>
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="num.type">
                    <el-option label="全部" value></el-option>
                    <el-option
                        v-for="(item,index) in memberSalesType"
                        :label="item.label"
                        :value="item.value"
                        :key="index+'a'"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="合同号">
                <el-input v-model="num.contract"></el-input>
            </el-form-item>
            <el-form-item label="销售员">
                <el-input v-model="num.sales"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <span class="searchRst">查询结果：共{{membersSales.t}}条记录/显示{{num.page}}页</span>
        <el-table :data="membersSales.d" border style="width: 100%;text-align:center">
            <el-table-column label="序号" type="index" align="center"></el-table-column>
            <el-table-column prop="storeName" label="门店名称"></el-table-column>
            <el-table-column prop="name" label="会员姓名">
                <template slot-scope="scope">
                    <span class="name" @click="show(scope.row)">{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="shellDate" label="销售日期"></el-table-column>
            <el-table-column prop="cardName" label="会籍类型"></el-table-column>
            <el-table-column prop="shellName" label="销售类别"></el-table-column>
            <el-table-column prop="startDate" label="开始日期"></el-table-column>
            <el-table-column prop="endDate" label="结束日期"></el-table-column>
            <el-table-column prop="giveDate" label="赠后日期"></el-table-column>
            <el-table-column prop="terDate" label="终止日期"></el-table-column>
            <el-table-column prop="terCause" label="终止原因"></el-table-column>
            <el-table-column prop="surplusNum" label="次卡剩余次数"></el-table-column>
            <el-table-column prop="payAmount" label="付款金额"></el-table-column>
            <el-table-column prop="reserveAmount" label="定金金额"></el-table-column>
            <el-table-column prop="inAmount" label="转入金额"></el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="membersSales.t"
            ></el-pagination>
        </div>
        <Dialog :showData="showData" :dialogShow="dialogShow" @dialogShowData="dialogShowData" />
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
import Dialog from './memberDialog'
export default {
    name: 'boxhj',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {
        Dialog
    },
    data() {
        // 这里存放数据
        return {
            num: {
                page: 1,
                size: 10,
                contract: '',
                store: '',
                sales: '',
                dateType: '1',
                type: '',
                date1: '',
                date2: ''
            },
            date: '',
            showData:'',
            dialogShow:false
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ membersSales: state => state.membersSales, memberSalesType: state => state.memberSalesType })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getMembersSales', 'getCoachInformation']),
        
        show(e){
            this.showData=e.memberId
            this.dialogShow=true
        },
        dialogShowData(e){
            this.dialogShow=e
        },
        search() {
            if (this.date) {
                this.getDate(this.date);
            }
            this.getMembersSales(this.num);
        },
        getDate(e) {
            let date = new Date(e[0]);
            let date2 = new Date(e[1]);
            this.num.date1 = String(date.getTime());
            this.num.date2 = String(date2.getTime());
        },
        handleLook(e) {
            console.log(e);
        },
        handleSizeChange(val) {
            this.num.size = val;
            this.getMembersSales(this.num);
        },
        handleCurrentChange(val) {
            this.num.page = val;
            this.getMembersSales(this.num);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.date = [new Date(), new Date()];
        this.getDate(this.date);
        this.getMembersSales(this.num);
        this.getCoachInformation('S0001');
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
<style lang="scss" scoped>
@import './../../assets/css/table.css';
.app {
    width: 100%;
}
.block {
    width: 550px;
    margin: auto;
}
.name {
    color: #e67e22;
    cursor: pointer;
}

</style>
