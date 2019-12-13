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
        <span class="searchRst">查询结果：共{{courseRemain.total}}条记录/显示{{num.page}}页</span>
        <el-table :data="courseRemain.object" border style="width: 100%">
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="Mname" label="门店名称" width="100"></el-table-column>
            <el-table-column prop="contractNumber" label="合同编号" width="90"></el-table-column>
            <el-table-column prop="memberName" label="会员姓名" width="90"></el-table-column>
            <el-table-column prop="courseName" label="课程"></el-table-column>
            <el-table-column prop="coachName" label="教练" width="90"></el-table-column>
            <el-table-column prop="bayNum" label="总课时" width="80"></el-table-column>
            <el-table-column prop="YYKS" label="预约课时" width="100"></el-table-column>
            <el-table-column prop="HXKS" label="核销课时" width="100"></el-table-column>
            <el-table-column prop="SYKS" label="剩余课时" width="80"></el-table-column>
            <el-table-column prop="startDate" label="有效期起日" width="100"></el-table-column>
            <el-table-column prop="endDate" label="有效期迄日" width="100"></el-table-column>
            <el-table-column prop="states" label="合同状态"></el-table-column>
            <el-table-column prop="salesman1" label="销售员" width="80"></el-table-column>
            <el-table-column prop="createDate" label="销售日期" width="100"></el-table-column>
            <el-table-column prop="realPrice" label="金额" width="80"></el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10,20,30]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="courseRemain.total"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'chat6',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
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
                courseType: '',
                contractNumber: '',
                memberId: '',
                coachNumber: '',
                salesman: ''
            }
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ courseRemain: state => state.courseRemain, privateCourseType: state => state.privateCourseType })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getCourseRemain', 'getCoachInformation']),
        search() {
            this.getCourseRemain(this.num);
        },
        handleSizeChange(val) {
            this.num.size=val
            this.getCourseRemain(this.num);
        },
        handleCurrentChange(val) {
            this.num.page=val
            this.getCourseRemain(this.num);
        },
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getCourseRemain(this.num);
        this.getCoachInformation('K0001');
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
