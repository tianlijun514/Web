<!-- vue快捷创建组件 -->
<template>
    <div class="APPX">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="num.store" :disabled="true"></el-input>
            </el-form-item>

            <span class="demonstration">日期范围</span>
            <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>

            <el-form-item label="教练工号">
                <el-input v-model="num.coachNumber"></el-input>
            </el-form-item>
            <el-form-item label="会员卡号">
                <el-input v-model="num.cardId"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共{{verification.t}}条记录/显示{{num.page}}页</span>
        <el-table :data="verification.d" border style="width: 100%;text-align:center">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="name" label="门店名称"></el-table-column>
            <el-table-column prop="contractNumber" label="合同编号"></el-table-column>
            <el-table-column prop="memberName" label="会员名称"></el-table-column>
            <el-table-column prop="courseName" label="课程"></el-table-column>
            <el-table-column prop="coachName" label="教练"></el-table-column>
            <el-table-column prop="appointmentDate" label="预约时间" width="130"></el-table-column>
            <el-table-column prop="classDate" label="上课时间" width="130"></el-table-column>
            <el-table-column prop="states" label="状态">
              <template slot-scope="scope">
                <span v-if="scope.row.states==1">已预约</span>
                <span v-else-if="scope.row.states==2">取消预约</span>
                <span v-else-if="scope.row.states==3">已签名</span>
                <span v-else-if="scope.row.states==4">已核销</span>
                <span v-else-if="scope.row.states==5">取消核销</span>
              </template>
            </el-table-column>
            <el-table-column prop="print" label="是否打印">
              <template slot-scope="scope">
                <span>{{scope.row.print==1?'是':'否'}}</span>
              </template> 
            </el-table-column>
        </el-table>
        <div class="uys">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="verification.t"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'inexhetong',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            radio: 1,
            date: '',
            num: {
                size: 10,
                page: 1,
                store: '',
                date1: '',
                date2: '',
                coachNumber: '',
                cardId: ''
            },
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ verification: state => state.verification })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getVerification']),
        getDate(e) {
            let date = new Date(e[0]);
            let date2 = new Date(e[1]);
            this.num.date1 = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            this.num.date2 = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate();
        },
        search() {
            if (this.date) {
                this.getDate(this.date);
            }
            this.getVerification(this.num);
        },
        handleSizeChange(val) {
            this.size = val;
            if (this.date) {
                this.getDate(this.date);
            }
            this.getVerification(this.num);
        },
        handleCurrentChange(val) {
            this.page = val;
            if (this.date) {
                this.getDate(this.date);
            }
            this.getVerification(this.num);
        },
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getVerification(this.num);
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
.uys {
    width: 50%;
    margin: auto;
}
.APPX {
    width: 100%;
}
/deep/.el-radio__label {
    display: none;
}
</style>
