<!-- vue快捷创建组件 -->
<template>
    <div class="APPX">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="num.store" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="日期范围">
                <el-date-picker
                    v-model="date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    size="mini"
                ></el-date-picker>
            </el-form-item>

            <el-form-item label="教练">
                <el-input v-model="num.coachName"></el-input>
            </el-form-item>

            <el-form-item label="会员">
                <el-input v-model="num.memberId"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="xinzheng">新增</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共{{replaceCoach.t}}条记录/显示{{num.page}}页</span>
        <el-table :data="replaceCoach.d" border style="width: 100%;text-align:center">
            <template v-for="(item,index) in tableTitle">
                <el-table-column :key="index" :prop="item.data" :label="item.title" align="center"></el-table-column>
            </template>
            <!-- <el-table-column scope label="操作"> -->
            <!-- <el-button size="mini" type="primary">打印</el-button> -->
            <!-- </el-table-column> -->
        </el-table>
        <div class="uys">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="replaceCoach.t"
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
            formInline: {
                user: '',
                region: ''
            },

            value1: '',
            tableTitle: [
                { title: '门店名称', data: 'storeName' },
                { title: '日期', data: 'oldDate' },
                { title: '合同编号', data: 'contractNumber' },
                { title: '会员编号', data: 'memberId' },
                { title: '会员名称', data: 'memberName' },
                { title: '课程', data: 'courseName' },
                { title: '教练', data: 'oldCoach' },
                { title: '新教练', data: 'coachName' }
            ],
            tableData: [
                {
                    num: '00012',
                    storeName: '天府四街分店',
                    name: '2019-12-12',
                    telNo: '2019-12-12',
                    userName: '2018-12-10',
                    userNo: '0001242',
                    userCardNo: '刘小军',
                    sex: '普通',
                    cardClass: '普通'
                }
            ],
            num: {
                size: 10,
                page: 1,
                coachName: '',
                store: '',
                date1: '',
                date2: '',
                memberId: ''
            },
            date: ''
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ replaceCoach: state => state.replaceCoach })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getReplaceCoach']),
        onSubmit() {
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.getReplaceCoach(this.num);
        },
        getDate(e) {
            let date = new Date(e[0]);
            let date2 = new Date(e[1]);
            this.num.date1 = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            this.num.date2 = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate();
        },
        handleSizeChange(val) {
            this.size = val;
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.getReplaceCoach(this.num);
        },
        handleCurrentChange(val) {
            this.page = val;
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.getReplaceCoach(this.num);
        },
        xinzheng() {
            this.$router.push('./drillen');
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getReplaceCoach(this.num);
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
.uys {
    width: 50%;
    margin: auto;
}
.APPX {
    width: 100%;
}
</style>
