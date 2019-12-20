<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="num.store" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="会员卡号">
                <el-input v-model="num.memberId"></el-input>
            </el-form-item>

            <el-form-item label="合同号">
                <el-input v-model="num.contract"></el-input>
            </el-form-item>

            <el-form-item label="会员姓名">
                <el-input v-model="num.name"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <span class="searchRst">查询结果：共{{numCards.t}}条记录/显示{{num.page}}页</span>
        <el-table :data="numCards.d" border style="width: 100%;text-align:center">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="cardId" label="会员卡号"></el-table-column>
            <el-table-column prop="shellDate" label="会员姓名">
              <template slot-scope="scope">
                    <span class="name" @click="show(scope.row)">{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="contractId" label="合同编号"></el-table-column>
            <el-table-column prop="cardTypeName" label="会籍类型"></el-table-column>
            <el-table-column prop="totalNum" label="总次数"></el-table-column>
            <el-table-column prop="surplusNum" label="剩余次数"></el-table-column>
            <el-table-column prop="startDate" label="开始日期"></el-table-column>
            <el-table-column prop="endDate" label="结束日期"></el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="numCards.t"
            ></el-pagination>
        </div>
        <Dialog :showData="showData" :dialogShow="dialogShow" @dialogShowData="dialogShowData" />
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
import Dialog from './memberDialog';
export default {
    name: 'boxsy',
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
                memberId: '',
                name: '',
                store: '',
            },
            tableData: [
                {
                    num: '00012',
                    storeName: '天府四街分店',
                    userNo: '0001242',
                    userCardNo: '刘小军',
                    name: '2018-12-10',
                    sex: '普通',
                    cardClass: '普通',
                    cardNo: '2018-12-12',
                    telNo: '2019-12-12',
                    photo: '2018-12-01',
                    cardPhoto: '2018-12-23'
                }
            ],
            showData: '',
            dialogShow: false
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({numCards:state=>state.numCards})
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getNumCards']),
        search() {
            this.getNumCards(this.num);
        },
        show(e){
            this.showData=e.memberId
            this.dialogShow=true
        },
        dialogShowData(e){
            this.dialogShow=e
        },
        handleSizeChange(val) {
            this.size = val;
            this.getNumCards(this.num);
        },
        handleCurrentChange(val) {
            this.page = val;
            this.getNumCards(this.num);
        },
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getNumCards(this.num);
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
.name {
    color: #e67e22;
    cursor: pointer;
}
</style>
