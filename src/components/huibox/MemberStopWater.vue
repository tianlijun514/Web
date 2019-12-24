<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="num.store" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="类型">
                <el-select v-model="num.type">
                    <el-option label="停卡" value="1"></el-option>
                    <el-option label="转店" value="2"></el-option>
                    <el-option label="补卡" value="3"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="合同号">
                <el-input v-model="num.contract"></el-input>
            </el-form-item>

            <span class="demonstration">日期范围</span>
            <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>

            <el-form-item label="会员编号">
                <el-input v-model="num.memberNumber"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <span class="searchRst">查询结果：共{{membershipScrs.t}}条记录/显示{{num.page}}页</span>

        <el-table :data="membershipScrs.d" border style="width: 100%;text-align:center">
            <el-table-column prop="storeName" label="门店名称"></el-table-column>
            <el-table-column prop="shellDate" label="销售日期"></el-table-column>
            <el-table-column prop="name" label="会员姓名">
              <template slot-scope="scope">
                <span class="name"  @click="show(scope.row)">{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="contractId" label="合同号"></el-table-column>
            <el-table-column prop="cardType" label="会籍类型"></el-table-column>
            <el-table-column prop="startDate" label="开始日期"></el-table-column>
            <el-table-column prop="endDate" label="结束日期"></el-table-column>
            <el-table-column prop="stopStar" label="停卡开始"></el-table-column>
            <el-table-column prop="stopEnd" label="停卡结束"></el-table-column>
            <el-table-column prop="cdStartDate" label="开卡日期"></el-table-column>
            <el-table-column prop="newContractId" label="新合同号"></el-table-column>
            <el-table-column prop="serviceCharge" label="手续费">
              <template slot-scope="scope">
                <span class="poundage">{{scope.row.serviceCharge}}</span>
              </template>
            </el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="membershipScrs.t"
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
    name: 'boxhy',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {
      Dialog
    },
    data() {
        // 这里存放数据
        return {
            currentPage: 5,
            formInline: {
                user: '',
                region: ''
            },
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
            date: '',
            showData:'',
            dialogShow:false
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ membershipScrs: state => state.silent.membershipScrs })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['postMembershipScrs']),
        search() {
            this.postMembershipScrs(this.num);
        },
        handleLook(e) {
            this.$router.push({ path: '/hymesg', query: { id: e.memberId } });
        },
        show(e){
            this.showData=e.memberId
            this.dialogShow=true
        },
        dialogShowData(e){
            this.dialogShow=e
        },
        handleSizeChange(val) {
            this.num.size = val;
            this.postMembershipScrs(this.num);
        },
        handleCurrentChange(val) {
            this.num.page = val;
            this.postMembershipScrs(this.num);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.postMembershipScrs(this.num);
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
.poundage{
    font-size: 16px;
    color: #e74c3c;
}
.name{
    color: #369;
    text-decoration: none;
    cursor: pointer;
}
.name:hover{
    color: #e30;
    text-decoration: underline;
}
</style>
