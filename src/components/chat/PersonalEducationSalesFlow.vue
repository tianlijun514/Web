<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="formInline.store" :disabled="true"></el-input>
            </el-form-item>

            <span class="demonstration">日期范围</span>
            <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>

            <el-form-item label="会员卡号">
                <el-input v-model="formInline.membersId"></el-input>
            </el-form-item>

            <el-form-item label="类型">
                <el-select v-model="formInline.type">
                    <el-option label="全部" value=""></el-option>
                    <el-option label="购买" value="1"></el-option>
                    <el-option label="转店" value="2"></el-option>
                    <el-option label="换教练" value="3"></el-option>
                    <el-option label="转让" value="4"></el-option>
                    <el-option label="升级" value="5"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="分类">
                <el-select v-model="formInline.classification">
                    <el-option label="全部" value></el-option>
                    <el-option
                        v-for="(item,index) in type"
                        :label="item.label"
                        :value="item.value"
                        :key="index+'a'"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="合同">
                <el-input v-model="formInline.contract"></el-input>
            </el-form-item>

            <el-form-item label="销售员工号">
                <el-input v-model="formInline.employees"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共{{contractSale.t}}条记录/显示{{formInline.page}}页</span>
        <el-table :data="contractSale.d" border style="width: 100%">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="Mname" label="门店名称" width="100"></el-table-column>
            <el-table-column prop="createDate" label="销售日期" width="110"></el-table-column>
            <el-table-column prop="salesType" label="销售类型" width="100"></el-table-column>
            <el-table-column prop="memberName" label="会员姓名" width="80"></el-table-column>
            <el-table-column prop="courseName" label="课程"></el-table-column>
            <el-table-column prop="coachName" label="教练" width="120"></el-table-column>
            <el-table-column prop="bayNum" label="数量" width="120"></el-table-column>
            <el-table-column prop="actualPrice" label="金额" width="100"></el-table-column>
            <el-table-column prop="createDate" label="付款时间" width="140"></el-table-column>
            <el-table-column prop="reserveMoney" label="定金金额" width="80"></el-table-column>
            <el-table-column prop="startDate" label="开始日期" width="100"></el-table-column>
            <el-table-column prop="endDate" label="结束日期" width="100"></el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="contractSale.t"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'chat1',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {
        ...mapState({})
    },
    data() {
        // 这里存放数据
        return {
            formInline: {
                page: 1,
                size: 10,
                employees: '',
                contract: '',
                classification: '',
                type: '',
                membersId: '',
                date1: '',
                date2: '',
                store: ''
            },
            date: ''
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ contractSale: state => state.silent.contractSale, type: state => state.silent.privateCourseType })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['postContractSales', 'postPrivateCourseInformation']),
        getDate(e) {
            let date = new Date(e[0]);
            let date2 = new Date(e[1]);
            this.formInline.date1 = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            this.formInline.date2 = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate();
        },
        onSubmit() {
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.formInline.date1=''
              this.formInline.date2=''
            }
            this.postContractSales(this.formInline);
        },
        handleSizeChange(val) {
            this.size = val;
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.formInline.date1=''
              this.formInline.date2=''
            }
            this.postContractSales(this.formInline);
        },
        handleCurrentChange(val) {
            this.page = val;
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.formInline.date1=''
              this.formInline.date2=''
            }
            this.postContractSales(this.formInline);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.postContractSales(this.formInline);
        this.postPrivateCourseInformation('K0001');
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
