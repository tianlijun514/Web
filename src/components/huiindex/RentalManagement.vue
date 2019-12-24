<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="租箱号">
                <el-input v-model="num.boxId"></el-input>
            </el-form-item>

            <el-form-item label="状态">
                <el-select v-model="num.status">
                    <el-option label="全部" value></el-option>
                    <el-option label="空闲" value="1"></el-option>
                    <el-option label="已租" value="3"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="类型">
                <el-select v-model="num.type">
                    <el-option
                        v-for="item in boxType"
                        :key="item.id"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>

            <span class="demonstration">归还日期</span>
            <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>

            <el-form-item style="margin-left: 10px">
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <span class="searchRst">查询结果：共{{box.t}}条记录/显示第{{num.page}}页</span>

        <el-table :data="box.d" border style="width: 100%;text-align:center">
            <el-table-column prop="reserveType" label="箱号"></el-table-column>
            <el-table-column prop="reservePrice" label="名称"></el-table-column>
            <el-table-column prop="isTotal" label="押金"></el-table-column>
            <el-table-column prop="salesDate" label="年租金"></el-table-column>
            <el-table-column prop="useDate" label="月租金"></el-table-column>
            <el-table-column prop="status" label="类型"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="status" label="会员"></el-table-column>
            <el-table-column prop="status" label="开始日期"></el-table-column>
            <el-table-column prop="status" label="结束日期"></el-table-column>
            <el-table-column prop="status" label="支付押金"></el-table-column>
            <el-table-column prop="status" label="支付租金"></el-table-column>
            <el-table-column scope label="操作">
                <el-button size="mini" type="primary" @click="Look">租借</el-button>
            </el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="box.t"
            ></el-pagination>
        </div>
    </div>
</template>
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'indexzuji',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            tableData: [],
            num: {
                page: 1,
                size: 10,
                boxId: '',
                date1: '',
                date2: '',
                status: '',
                type: ''
            },
            date: ''
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({box:state=>state.silent.box,boxType:state=>state.silent.boxType})
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['postBox','postPrivateCourseInformation']),
        datas(e) {
            this.num.date1 = e[0].getFullYear() + '-' + Number(e[0].getMonth() + 1) + '-' + e[0].getDate();
            this.num.date2 = e[1].getFullYear() + '-' + Number(e[1].getMonth() + 1) + '-' + e[1].getDate();
        },
        search() {
            if (this.date) {
                this.datas(this.date);
            } else {
                this.num.date1 = '';
                this.num.date2 = '';
            }
            this.postBox(this.num);
        },
        handleSizeChange(val) {
            if (this.date) {
                this.datas(this.date);
            } else {
                this.num.date1 = '';
                this.num.date2 = '';
            }
            this.size = val;
            this.postBox(this.num);
        },
        handleCurrentChange(val) {
            if (this.date) {
                this.datas(this.date);
            } else {
                this.num.date1 = '';
                this.num.date2 = '';
            }
            this.size = val;
            this.postBox(this.num);
        },
        Look() {
            this.$router.push('./zuboss');
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.postBox(this.num);
        this.postPrivateCourseInformation('R0001')
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
