<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-tabs type="border-card">
            <el-tab-pane label="个人资料">
                <el-row type="flex" class="row-bg" ustify="center">
                    <el-col :span="1"></el-col>
                    <el-col :span="5">
                        <el-form label-width="105px">
                            <el-form-item label="会员编号 :">
                                <span class="p1">{{memberInformation.id}}</span>
                            </el-form-item>
                            <el-form-item label="会员卡号 :">
                                <span class="p1">{{memberInformation.cardId}}</span>
                            </el-form-item>
                            <el-form-item label="中文姓名 :">
                                <span class="p1">{{memberInformation.name}}</span>
                            </el-form-item>
                            <el-form-item label="证件类型 :">
                                <span class="p1">{{memberInformation.zjType}}</span>
                            </el-form-item>
                            <el-form-item label="出生日期 :">
                                <span class="p1">{{memberInformation.birthday}}</span>
                            </el-form-item>
                            <el-form-item label="手机 :">
                                <span class="p1">{{memberInformation.phoneNum}}</span>
                            </el-form-item>
                            <el-form-item label="电子邮件 :">
                                <span class="p1">{{memberInformation.email}}</span>
                            </el-form-item>
                            <el-form-item label="备注 :">
                                <span class="p1">{{memberInformation.details}}</span>
                            </el-form-item>
                        </el-form>
                    </el-col>

                    <el-col :span="6">
                        <el-form label-width="105px" style="margin-top: 31px;">
                            <el-form-item label>
                                <span class="p1"></span>
                            </el-form-item>
                            <el-form-item label="通讯地址 :">
                                <span class="p1">{{memberInformation.address}}</span>
                            </el-form-item>
                            <el-form-item label="英文姓名 :">
                                <span class="p1">{{memberInformation.englishName}}</span>
                            </el-form-item>
                            <el-form-item label="证件号码 :">
                                <span class="p1">{{memberInformation.zjNum}}</span>
                            </el-form-item>
                            <el-form-item label="性别 :">
                                <span class="p1">{{memberInformation.sex}}</span>
                            </el-form-item>
                            <el-form-item label="国籍 :">
                                <span class="p1">{{memberInformation.nationality}}</span>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="4">
                        <div class="demo-fit">
                            <div class="block">
                                <img
                                    :src="'http://192.168.2.136:8083/getImage?path='+memberInformation.photoPath"
                                    width="100"
                                    height="100"
                                    alt
                                />
                                <!-- <el-avatar shape="square" :size="100" ></el-avatar> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-button size="mini" type="primary" class="gbtn" @click="lossCard(memberInformation.id,memberInformation.storedFlag)">{{memberInformation.storedFlag==0?'挂失储值卡':'取消挂失储值卡'}}</el-button>
            </el-tab-pane>

            <!-- 配置管理 -->
            <el-tab-pane label="合同">
                <el-tabs type="card">
                    <!-- 会籍合同 -->
                    <el-tab-pane label="会籍合同">
                        <el-table :data="tableData" border style="width: 100%">
                            <el-table-column type="index" label="序号" width="50"></el-table-column>
                            <el-table-column prop="contractId" label="合同号"></el-table-column>
                            <el-table-column prop="cardId" label="卡号"></el-table-column>
                            <el-table-column prop="cardTypeName" label="会籍类型"></el-table-column>
                            <el-table-column prop="guidePrice" label="指导价"></el-table-column>
                            <el-table-column prop="realPrice" label="实际售价"></el-table-column>
                            <el-table-column prop="price" label="付款金额"></el-table-column>
                            <el-table-column prop="reserveAmount" label="定金金额"></el-table-column>
                            <el-table-column prop="zrPrice" label="转入金额"></el-table-column>
                            <el-table-column prop="totalNum" label="总次数"></el-table-column>
                            <el-table-column prop="surplusNum" label="剩余次数"></el-table-column>
                            <el-table-column prop="surplusPrice" label="剩余价值"></el-table-column>
                            <el-table-column prop="shellType" label="销售类别"></el-table-column>
                            <el-table-column prop="startDate" label="会籍起日"></el-table-column>
                            <el-table-column prop="endDate" label="会籍迄日"></el-table-column>
                            <el-table-column prop="giveDate" label="赠后日期"></el-table-column>
                            <el-table-column prop="status" label="状态"></el-table-column>
                            <el-table-column prop="terDate" label="终止日期"></el-table-column>
                            <el-table-column prop="terCause" label="终止原因"></el-table-column>
                            <el-table-column prop="sotreName" label="销售门店"></el-table-column>
                            <el-table-column prop="shellDate" label="销售日期" width="130"></el-table-column>
                            <el-table-column prop="salesman" label="销售员"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <!-- 定金合同 -->
                    <el-tab-pane label="定金合同">
                        <template>
                            <el-table :data="jiaoseData" border style="width: 100%">
                                <el-table-column type="index" label="序号"></el-table-column>
                                <el-table-column prop="storeName" label="门店名称"></el-table-column>
                                <el-table-column prop="id" label="定金编码"></el-table-column>
                                <el-table-column prop="reserveType" label="定金类型"></el-table-column>
                                <el-table-column prop="price" label="定金金额"></el-table-column>
                                <el-table-column prop="shellDate" label="销售日期"></el-table-column>
                                <el-table-column prop="endDate" label="过期日期"></el-table-column>
                                <el-table-column prop="useDate" label="使用日期"></el-table-column>
                                <el-table-column prop="status" label="状态"></el-table-column>
                                <el-table-column prop="signature" label="签名"></el-table-column>
                                <el-table-column prop="salesman1" label="销售员"></el-table-column>
                            </el-table>
                        </template>
                    </el-tab-pane>
                    <!-- 租箱合同 -->
                    <el-tab-pane label="租箱合同">
                        <template>
                            <el-table :data="leasing" border style="width: 100%">
                                <el-table-column prop="id" label="流水号"></el-table-column>
                                <el-table-column prop="storeName" label="店名"></el-table-column>
                                <el-table-column prop="boxCode" label="租箱号"></el-table-column>
                                <el-table-column prop="shellDate" label="销售日期"></el-table-column>
                                <el-table-column prop="startTiem" label="租赁开始日期"></el-table-column>
                                <el-table-column prop="endTime" label="租赁结束日期"></el-table-column>
                                <el-table-column prop="payCash" label="支付押金"></el-table-column>
                                <el-table-column prop="payRental" label="支付租金"></el-table-column>
                                <el-table-column prop="returnDate" label="归还日期"></el-table-column>
                                <el-table-column prop="salesman1" label="销售员"></el-table-column>
                            </el-table>
                        </template>
                    </el-tab-pane>
                    <el-tab-pane label="私教合同">
                        <el-table :data="Sysing" border style="width: 100%">
                            <el-table-column type="index" label="序号" width="50"></el-table-column>
                            <el-table-column prop="syname" label="门店名称" width="120"></el-table-column>
                            <el-table-column prop="contractNumber" label="合同编号" width="120"></el-table-column>
                            <el-table-column prop="createDate" label="销售日期" width="120"></el-table-column>
                            <el-table-column prop="salesType" label="销售类型" width="120">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.salesType==1">购买</span>
                                    <span v-if="scope.row.salesType==2">转店</span>
                                    <span v-if="scope.row.salesType==3">换教练</span>
                                    <span v-if="scope.row.salesType==4">转让</span>
                                    <span v-if="scope.row.salesType==5">升级</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="states" label="状态" width="60">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.states==0">作废</span>
                                    <span v-if="scope.row.states==1">正常</span>
                                    <span v-if="scope.row.states==2">已签字未确认</span>
                                    <span v-if="scope.row.states==3">已签字已确认</span>
                                    <span v-if="scope.row.states==4">未打印</span>
                                    <span v-if="scope.row.states==5">已打印</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="courseName" label="课程" width="120"></el-table-column>
                            <el-table-column prop="coachName" label="教练" width="80"></el-table-column>
                            <el-table-column prop="bayNum" label="总课时" width="80"></el-table-column>
                            <el-table-column prop="YYKS" label="预约课时" width="80"></el-table-column>
                            <el-table-column prop="HXKS" label="核销课时" width="80"></el-table-column>
                            <el-table-column prop="SYKS" label="剩余课时" width="70"></el-table-column>
                            <el-table-column prop="realPrice" label="金额" width="120"></el-table-column>
                            <el-table-column prop="startDate" label="开始日期" width="120"></el-table-column>
                            <el-table-column prop="endDate" label="结束日期" width="120"></el-table-column>
                            <el-table-column prop="terminationDate" label="终止日期" width="120"></el-table-column>
                            <el-table-column prop="terminationMsg" label="终止原因" width="80"></el-table-column>
                            <el-table-column label="销售员" width="120">
                                <template slot-scope="scope">
                                    <span>{{scope.row.salesman1}},{{scope.row.salesman2}}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </el-tab-pane>

            <!-- 商品消费 -->
            <el-tab-pane label="商品消费">
                <template>
                    <el-table :data="shoping" border style="width: 100%">
                        <el-table-column prop="shname" label="店名" width="180"></el-table-column>
                        <el-table-column prop="shshang" label="商品"></el-table-column>
                        <el-table-column prop="shdan" label="单价"></el-table-column>
                        <el-table-column prop="shshu" label="数量"></el-table-column>
                        <el-table-column prop="shmoney" label="金额"></el-table-column>
                        <el-table-column prop="shdata" label="归还日期"></el-table-column>
                    </el-table>
                </template>
                <div class="block">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="0"
                    ></el-pagination>
                </div>
            </el-tab-pane>

            <!-- 出入场 -->
            <el-tab-pane label="出入场">
                <template>
                    <el-table :data="Coument.d" border style="width: 100%">
                        <el-table-column prop="storeName" label="店名" width="180"></el-table-column>
                        <el-table-column prop="cardId" label="卡号"></el-table-column>
                        <el-table-column prop="date" label="日期"></el-table-column>
                        <el-table-column prop="in" label="入场时间"></el-table-column>
                        <el-table-column prop="out" label="离开时间"></el-table-column>
                        <el-table-column prop="cardNum" label="消耗次数"></el-table-column>
                    </el-table>
                </template>
                <div class="block">
                    <el-pagination
                        @size-change="handleSizeChange1"
                        @current-change="handleCurrentChange1"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="Coument.t"
                    ></el-pagination>
                </div>
            </el-tab-pane>

            <!-- 私教核销 -->
            <el-tab-pane label="私教核销">
                <template>
                    <el-table :data="hexiao" border style="width: 100%">
                        <el-table-column prop="hxname" label="店名" width="180"></el-table-column>
                        <el-table-column prop="hxhao" label="私教合同号"></el-table-column>
                        <el-table-column prop="hxdata" label="预约日期"></el-table-column>
                        <el-table-column prop="hxtime" label="预定上课时间"></el-table-column>
                        <el-table-column prop="hxkecheng" label="课程"></el-table-column>
                        <el-table-column prop="hxjiao" label="教练"></el-table-column>
                        <el-table-column prop="hxday" label="核销时间"></el-table-column>
                        <el-table-column prop="hxtai" label="状态"></el-table-column>
                    </el-table>
                </template>
                <div class="block">
                    <el-pagination
                        @size-change="handleSizeChange2"
                        @current-change="handleCurrentChange2"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="10"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="0"
                    ></el-pagination>
                </div>
            </el-tab-pane>

            <!-- 停卡 -->
            <el-tab-pane label="卡">
                <el-tabs type="card">
                    <el-tab-pane label="停卡">
                        <template>
                            <el-table :data="tingka" border style="width: 100%">
                                <el-table-column type="index" label="流水号"></el-table-column>
                                <el-table-column prop="storeName" label="门店名称"></el-table-column>
                                <el-table-column prop="shellDate" label="销售日期"></el-table-column>
                                <el-table-column prop="oldContractId" label="合同号"></el-table-column>
                                <el-table-column prop="cardTypeName" label="回籍类型"></el-table-column>
                                <el-table-column prop="startDate" label="开始日期"></el-table-column>
                                <el-table-column prop="endDate" label="结束日期"></el-table-column>
                                <el-table-column prop="stopStart" label="停卡开始"></el-table-column>
                                <el-table-column prop="stopEnd" label="停卡结束"></el-table-column>
                                <el-table-column prop="openDate" label="开卡日期"></el-table-column>
                                <el-table-column prop="newContractId" label="新合同号"></el-table-column>
                                <el-table-column prop="serviceCharge" label="手续费"></el-table-column>
                            </el-table>
                        </template>
                    </el-tab-pane>
                    <!-- 补卡 -->
                    <el-tab-pane label="补卡">
                        <template>
                            <el-table :data="bkming" border style="width: 100%">
                                <el-table-column type="index" label="流水号" width="180"></el-table-column>
                                <el-table-column prop="storeName" label="门店名称"></el-table-column>
                                <el-table-column prop="shellDate" label="销售日期"></el-table-column>
                                <el-table-column prop="contractId" label="合同号"></el-table-column>
                                <el-table-column prop="oldCard" label="原卡号"></el-table-column>
                                <el-table-column prop="newCard" label="新卡号"></el-table-column>
                                <el-table-column prop="serviceCharge" label="手续费"></el-table-column>
                                <el-table-column prop="salesman" label="销售员"></el-table-column>
                            </el-table>
                        </template>
                    </el-tab-pane>
                    <!-- 储值卡 -->
                    <el-tab-pane label="储值卡">
                        <template>
                            <el-table :data="zhingbox" border style="width: 100%">
                                <el-table-column prop="storeName" label="门店名称"></el-table-column>
                                <el-table-column prop="cardId" label="储值卡号"></el-table-column>
                                <el-table-column prop="cardTypeName" label="储值类型"></el-table-column>
                                <el-table-column prop="startDate" label="赠送日期"></el-table-column>
                                <el-table-column prop="balance" label="余额"></el-table-column>
                                <el-table-column prop="endDate" label="有效期"></el-table-column>
                            </el-table>
                        </template>
                    </el-tab-pane>
                </el-tabs>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'hymesg',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            memberInformation: {},
            tableData: [],
            jiaoseData: [],
            leasing: [],
            Sysing: [],
            shoping: [],
            shopingSearch: {
                memberNumber: '',
                page: 1,
                size: 10
            },
            Coument: {},
            CoumentSearch: {
                memberNumber: '',
                page: 1,
                size: 10
            },
            hexiao: [],
            hexiaoSearch: {
                memberNumber: '',
                page: 1,
                size: 10
            },
            tingka: [],
            bkming: [],
            zhingbox: []
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({})
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions([
            'getMemberById',
            'getMembership',
            'getMemberReserve',
            'getMemberBox',
            'getEntrancesByMemberId',
            'getMemberStopCard',
            'getMemberRepair',
            'getMemberIdDetail',
            'getMemberStored',
            'getMemberUpdateStored',
        ]),
        handleSizeChange(val) {
            this.shopingSearch.size = val;
        },
        handleCurrentChange(val) {
            this.shopingSearch.page = val;
        },
        handleSizeChange1(val) {
            this.CoumentSearch.size = val;
        },
        handleCurrentChange1(val) {
            this.CoumentSearch.page = val;
        },
        handleSizeChange2(val) {
            this.hexiaoSearch.size = val;
        },
        handleCurrentChange2(val) {
            this.hexiaoSearch.page = val;
        },
        lossCard(e,index) {
            let title,
                number
            if(index==0){
                number=1
                title='挂失储值卡'
            }else{
                number=2
                title='取消挂失储值卡'
            }
            let object={number,card:e}
            this.$confirm('此操作将'+title+', 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(() => {
                this.getMemberUpdateStored(object).then(res=>{
                    if(res.i=='操作成功！'){
                        this.getMemberById(this.$route.query.id).then(res => {
                            this.memberInformation = res.data.d[0];
                        });
                        if(title=='挂失储值卡'){
                            this.$message({message:'挂失成功',type:'success'})
                        }else{
                            this.$message({message:'取消挂失成功',type:'success'})
                        }
                    }
                })
            })
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.shopingSearch.memberNumber = this.$route.query.id;
        this.CoumentSearch.memberNumber = this.$route.query.id;
        this.hexiaoSearch.memberNumber = this.$route.query.id;
        this.getMemberById(this.$route.query.id).then(res => {
            this.memberInformation = res.data.d[0];
        });
        this.getMembership(this.$route.query.id).then(res => {
            this.tableData = res.d;
        });
        this.getMemberReserve(this.$route.query.id).then(res => {
            this.jiaoseData = res.d;
        });
        this.getMemberBox(this.$route.query.id).then(res => {
            this.leasing = res.d;
        });
        this.getEntrancesByMemberId(this.CoumentSearch).then(res => {
            this.Coument = res;
        });
        this.getMemberStopCard(this.$route.query.id).then(res => {
            this.tingka = res.d;
        });
        this.getMemberRepair(this.$route.query.id).then(res => {
            this.bkming = res.d;
        });
        this.getMemberStored(this.$route.query.id).then(res => {
            this.zhingbox = res.d;
        });
        // this.getMemberIdDetail(this.$route.query.id).then(res=>{
        //     this.Sysing=res.d
        // })
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
<style  scoped>
@import './../../assets/css/table.css';
.el-col-4 {
    margin-top: 60px;
}
.gbtn {
    margin: auto;
    float: left;
    margin-left: 40%;
}
.has-gutter {
    text-align: center;
}
.block {
    width: 50%;
    margin: auto;
}
</style>
