<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="formInline.user" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="分类">
                <el-select v-model="num.courseType" class="sex">
                    <el-option
                        v-for="(item,index) in privateCourseType"
                        :label="item.label"
                        :value="item.value"
                        :key="index+'a'"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="合同号">
                <el-input v-model="num.contractNumber"></el-input>
            </el-form-item>

            <el-form-item label="会员卡号">
                <el-input v-model="num.memberId"></el-input>
            </el-form-item>

            <span class="demonstration">统计日期</span>
            <el-date-picker v-model="num.monthDate" type="date" placeholder="选择日期"></el-date-picker>

            <el-form-item label="教练工号">
                <el-input v-model="num.coachNumber"></el-input>
            </el-form-item>

            <el-form-item label="销售员工号">
                <el-input v-model="num.salesman"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共{{courseCount.total}}条记录/显示{{num.page}}页</span>
        <el-table :data="courseCount.object" border style="width: 100%">
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="Mname" label="门店名称" width="100"></el-table-column>
            <el-table-column prop="memberName" label="会员姓名" width="90"></el-table-column>
            <el-table-column prop="coachName" label="教练" width="90"></el-table-column>
            <el-table-column prop="contractNumber" label="合同编号" width="90"></el-table-column>
            <el-table-column prop="salesType" label="销售类型"></el-table-column>
            <el-table-column prop="createDate" label="购买日期" width="100"></el-table-column>
            <el-table-column prop="endDate" label="截止日期" width="100"></el-table-column>
            <el-table-column prop="realPrice" label="购买金额" width="80"></el-table-column>
            <el-table-column prop="bayNum" label="购买课时" width="100"></el-table-column>
            <el-table-column prop="SYJY" label="上月结余" width="100"></el-table-column>
            <el-table-column prop="BYXG" label="本月新购" width="80"></el-table-column>
            <el-table-column prop="BYXH" label="本月消耗"></el-table-column>
            <el-table-column prop="ZCKS" label="转出课时" width="80"></el-table-column>
            <el-table-column prop="unitPrice" label="课时单价" width="100"></el-table-column>
            <el-table-column prop="states" label="合同状态" width="80"></el-table-column>
            <el-table-column prop="ZHSK" label="上次上课" width="80"></el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10,20,30,40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="courseCount.total"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'chat7',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            value1: '',
            currentPage: 5,
            formInline: {
                user: '',
                region: ''
            },
            num: {
                page: 1,
                size: 10,
                courseType: '',
                contractNumber: '',
                memberId: '',
                coachNumber: '',
                salesman: '',
                monthDate:''
            }
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ courseCount:state=>state.courseCount, privateCourseType: state => state.privateCourseType })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getCourseCount', 'getCoachInformation']),
        search() {
            this.getCourseCount(this.num);
        },
        handleSizeChange(val) {
            this.num.size=val
            this.getCourseCount(this.num);
        },
        handleCurrentChange(val) {
            this.num.page=val
            this.getCourseCount(this.num);
        },
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
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
.app {
    width: 100% !important;
}
.block {
    width: 50%;
    margin: auto;
}
@import './../../assets/css/table.css';
</style>
