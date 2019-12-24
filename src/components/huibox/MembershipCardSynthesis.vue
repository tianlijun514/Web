<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="num.store" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="状态">
                <el-select v-model="num.state">
                  <el-option label="全部" value=""></el-option>
                    <el-option label="2-已售未制卡" value="1"></el-option>
                    <el-option label="3-已制卡" value="2"></el-option>
                    <el-option label="4-门店已领卡" value="3"></el-option>
                    <el-option label="5-会员已领卡" value="4"></el-option>
                </el-select>
            </el-form-item>

            
            <el-form-item label="日期类型">
                <el-select v-model="num.type">
                    <el-option label="销售日期" value="1"></el-option>
                    <el-option label="制卡日期" value="2"></el-option>
                </el-select>
            </el-form-item>

            <span class="demonstration">日期范围</span>
            <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>
            <el-form-item label="卡号/会员">
                <el-input v-model="num.memberId"></el-input>
            </el-form-item>
            <el-form-item style="margin-left: 10px">
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>

        <span class="searchRst">查询结果：共{{makeCards.t}}条记录/显示{{num.page}}页</span>
        <el-table :data="makeCards.d" border style="width: 100%;text-align:center">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="storeName" label="门店名称"></el-table-column>
            <el-table-column prop="cardId" label="卡号"></el-table-column>
            <el-table-column prop="shellDate" label="销售日期"></el-table-column>
            <el-table-column prop="cardTypeName" label="会籍类型"></el-table-column>
            <el-table-column prop="endDate" label="有效日期起"></el-table-column>
            <el-table-column prop="remark" label="状态"></el-table-column>
            <el-table-column prop="makeDate" label="制卡日期"></el-table-column>
            <el-table-column prop="receiveDate" label="领卡日期"></el-table-column>
            <el-table-column prop="memberId" label="会员编号"></el-table-column>
            <el-table-column label="会员姓名">
              <template slot-scope="scope">
                    <span class="name" @click="show(scope.row)">{{scope.row.name}}</span>
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
                :total="makeCards.t"
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
    name: 'boxhy',
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
                state: '',
                memberId: '',
                type: '1',
                store: '',
                date1: '',
                date2: ''
            },
            date: '',
            showData: '',
            dialogShow: false
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ makeCards: state => state.silent.makeCards})
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['postMakeCards']),
        search() {
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.postMakeCards(this.num);
        },
        show(e){
            this.showData=e.memberId
            this.dialogShow=true
        },
        dialogShowData(e){
            this.dialogShow=e
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
            this.postMakeCards(this.num);
        },
        handleCurrentChange(val) {
            this.page = val;
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.postMakeCards(this.num);
        },
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.postMakeCards(this.num);
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
