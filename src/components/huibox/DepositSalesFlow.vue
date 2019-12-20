<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="num.store" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="定金类型">
                <el-select v-model="num.type">
                    <el-option label="全部" value=""></el-option>
                    <el-option
                        v-for="(item,index) in conventionType"
                        :label="item.label"
                        :value="item.value"
                        :key="index+'a'"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="日期类型">
                <el-select v-model="num.dateType">
                    <el-option label="销售日期" value="xiaoshou"></el-option>
                    <el-option label="使用日期" value="shi"></el-option>
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

            <el-form-item label="定金编号">
                <el-input v-model="num.reservationNumber"></el-input>
            </el-form-item>

            <el-form-item label="会员卡号">
                <el-input v-model="num.memberId"></el-input>
            </el-form-item>

            <el-form-item label="会员姓名">
                <el-input v-model="num.memberName"></el-input>
            </el-form-item>

            <el-form-item label="是否使用">
                <el-select v-model="num.regiong">
                  
                    <el-option label="全部" value=""></el-option>
                    <el-option
                        v-for="(item,index) in conventionState"
                        :label="item.label"
                        :value="item.value"
                        :key="index+'a'"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共{{reserves.t}}条记录/显示{{num.page}}页</span>
        <el-button size="mini" type="primary" class="dingdan">合并订单</el-button>

        <el-table :data="reserves.d" border style="width: 100%;text-align:center">
            <el-table-column type="selection" label="选择"></el-table-column>
            <el-table-column type="index" label="选择"></el-table-column>
            <el-table-column prop="storeName" label="门店名称"></el-table-column>
            <el-table-column prop="id" label="定金编号"></el-table-column>
            <el-table-column prop="cardId" label="会员卡号"></el-table-column>
            <el-table-column prop="member.name" label="会员姓名">
                <template slot-scope="scope">
                    <span class="name" @click="show(scope.row)">{{scope.row.member.name}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="reserveType" label="定金类型"></el-table-column>
            <el-table-column prop="reservePrice" label="定金金额"></el-table-column>
            <el-table-column prop="isTotal" label="全额定金"></el-table-column>
            <el-table-column prop="salesDate" label="销售日期"></el-table-column>
            <el-table-column prop="useDate" label="使用日期"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="signature" label="签名">
              <template slot-scope="scope">
                <span>{{scope.row.signature==1?'已签名':'未签名'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="jump(scope.row)">拆分订单</el-button>
                    <el-button size="mini" type="primary">退定金</el-button>
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
                :total="reserves.t"
            ></el-pagination>
        </div>
        <Dialog :showData="showData" :dialogShow="dialogShow" @dialogShowData="dialogShowData" />
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
import Dialog from './memberDialog'
export default {
    name: 'boxdj',
    props: {
        
    },
    // import引入的组件需要注入到对象中才能使用
    components: {
        Dialog
    },
    data() {
        // 这里存放数据
        return {
            value1: '',
            num: {
                page: 1,
                size: 10,
                regiong: '',
                memberId: '',
                memberName: '',
                reservationNumber: '',
                dateType: '',
                type:'',
                store:'',
                date1:'',
                date2:''
            },
            date:'',
            showData:'',
            dialogShow:false
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ reserves: state => state.reserves,conventionType:state=>state.conventionType ,conventionState:state=>state.conventionState })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getReserves','getCoachInformation']),
        search() {
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.getReserves(this.num);
        },
        show(e){
            this.showData=e.member.id
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
            this.getReserves(this.num);
        },
        handleCurrentChange(val) {
            this.page = val;
            if (this.date) {
                this.getDate(this.date);
            }else{
              this.num.date1=''
              this.num.date2=''
            }
            this.getReserves(this.num);
        },
        jump() {
            this.$router.push('./index1');
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getReserves(this.num);
        this.getCoachInformation('A0002')
        this.getCoachInformation('A0003')
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
.dingdan {
    float: right;
}
.name {
    color: #e67e22;
    cursor: pointer;
}
</style>
