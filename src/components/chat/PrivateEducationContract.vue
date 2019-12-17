<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="num.store"></el-input>
            </el-form-item>

            <el-form-item label="类型">
                <el-select v-model="num.type">
                    <el-option label="全部" value></el-option>
                    <el-option label="购买" value="1"></el-option>
                    <el-option label="转让" value="4"></el-option>
                    <el-option label="转店" value="2"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="状态">
                <el-select v-model="num.state">
                    <el-option label="未打印" value="4"></el-option>
                    <el-option label="已打印" value="5"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="合同号">
                <el-input v-model="num.contract"></el-input>
            </el-form-item>

            <span class="demonstration">日期</span>
            <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>

            <el-form-item label="会员/姓名">
                <el-input v-model="num.name"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共{{coachPrint.t}}条记录/显示{{num.page}}页</span>
        <el-table :data="coachPrint.d" border style="width: 100%">
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="Mname" label="门店名称"></el-table-column>
            <el-table-column prop="contractNumber" label="合同号"></el-table-column>
            <el-table-column label="合同类型">
                <template slot-scope="scope">
                    <span v-if="scope.row.salesType==1">购买</span>
                    <span v-if="scope.row.salesType==2">转店</span>
                    <span v-if="scope.row.salesType==4">转让</span>
                </template>
            </el-table-column>
            <el-table-column prop="memberId" label="会员编号"></el-table-column>
            <el-table-column prop="memberName" label="会员姓名"></el-table-column>
            <el-table-column prop="createDate" label="日期"></el-table-column>
            <el-table-column prop="hetime" label="状态">
                <template slot-scope="scope">
                    <span>{{scope.row.states==4?'未打印':'已打印'}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="timey" label="打印时间">
                <template slot-scope="scope">
                    <span v-show="scope.row.states==4">{{scope.row.printTime}}</span>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">合同打印</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="1"
                layout="total, sizes, prev, pager, next, jumper"
                :total="coachPrint.t"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'chat4',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            regions: '',
            date: '',
            tableData: [
                {
                    yuhao: '00012',
                    Mname: '天府四街分店',
                    Hebian: '0001242',
                    name: '刘小军',
                    kecheng: '2018-12-10',
                    jiaolian: '普通',
                    yutime: '普通',
                    hetime: '2018-12-12',
                    timey: '2019-12-12'
                }
            ],
            num: {
                page: 1,
                size: 10,
                contract: '',
                state: '',
                type: '',
                date1: '',
                date2: '',
                name: '',
                store: ''
            }
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ coachPrint: state => state.coachPrint })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getCoachPrint']),
        search() {
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.getCoachPrint(this.num);
        },
        getDate(e) {
            let date = new Date(e[0]);
            let date2 = new Date(e[1]);
            this.num.date1 = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            this.num.date2 = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate();
        },
        handleSizeChange(val) {
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.num.size = val;
            this.getCoachPrint(this.num);
        },
        handleCurrentChange(val) {
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.num.page = val;
            this.getCoachPrint(this.num);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getCoachPrint(this.num);
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
