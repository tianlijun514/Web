<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="formInline.user" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="教练">
                <el-input v-model="num.coachNumber"></el-input>
            </el-form-item>

            <el-form-item label="会员号">
                <el-input v-model="num.memberId"></el-input>
            </el-form-item>

            <span class="demonstration">日期范围</span>
            <el-date-picker
                v-model="num.date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>

            <el-form-item label="状态">
                <el-select v-model="num.states">
                    <el-option label="全部" value></el-option>
                    <el-option label="1-已核销" value="4"></el-option>
                    <el-option label="3-已签名" value="3"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="日期类型">
                <el-select v-model="num.dateType">
                    <el-option label="上课日期" value="1"></el-option>
                    <el-option label="签名日期" value="2"></el-option>
                </el-select>
            </el-form-item>

            <el-button type="primary" @click="search">查询</el-button>
        </el-form>
        <span class="searchRst">查询结果：共{{bySignature.total}}条记录/显示{{num.page}}页</span>
        <el-table :data="bySignature.object" border style="width: 100%">
            <el-table-column type="index" label="预约号" width="80"></el-table-column>
            <el-table-column prop="Mname" label="门店名称" width="110"></el-table-column>
            <el-table-column prop="contractNumber" label="合同编号" width="100"></el-table-column>
            <el-table-column prop="memberName" label="会员名称" width="110"></el-table-column>
            <el-table-column prop="courseName" label="课程" width="100"></el-table-column>
            <el-table-column prop="coachName" label="教练" width="100"></el-table-column>
            <el-table-column prop="classDate" label="上课时间" width="120"></el-table-column>
            <el-table-column prop="appointmentDate" label="预约时间" width="120"></el-table-column>
            <el-table-column prop="verificationDate" label="签名时间"></el-table-column>
            <el-table-column prop="states" label="状态" width="120"></el-table-column>
            <el-table-column prop="bayNum" label="购买课时" width="100"></el-table-column>
            <el-table-column prop="realPrice" label="购买金额" width="100"></el-table-column>
            <el-table-column label="签名" width="120">
              <template slot-scope="scope">
                <img class="img" :src="scope.row.signaturePhoto" alt="">
              </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="num.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="bySignature.total"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'chat9',
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
                memberId: '',
                coachNumber: '',
                states: '',
                dateType: '',
                date: ''
            }
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({bySignature:state=>state.bySignature})
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getBySignature']),
        search() {
            this.getBySignature(this.num);
        },
        handleSizeChange(val) {
            this.num.size=val
            this.getBySignature(this.num);
        },
        handleCurrentChange(val) {
            this.num.page=val
            this.getBySignature(this.num);
        },
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getBySignature(this.num);
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
.img{
  width: 34px;
  height: 34px;
}
@import './../../assets/css/table.css';
</style>
