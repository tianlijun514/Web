<!-- vue快捷创建组件 -->
<template>
    <div class="pact">
        <el-form ref="form" :model="form" label-width="80px" class="formbox">
            <div class="shenfen">
                <el-form-item label="会员卡号">
                    <el-input @blur="blurfns" v-model="form.kahao" @change="search(form.kahao)"></el-input>
                </el-form-item>

                <el-form-item label="会员编号" class="lefty">
                    <el-input type="text" v-model="form.number" disabled></el-input>
                </el-form-item>
            </div>

            <div class="shenfen">
                <el-form-item label="会员姓名">
                    <el-input type="text" v-model="form.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="合同终止日" label-width="82px" style=" margin-left: 26px">
                    <el-input type="text" v-model="form.date" disabled></el-input>
                </el-form-item>
            </div>

            <el-form-item label="销售类型" v-show="type">
                <el-select
                    v-model="form.region"
                    class="input_width"
                    :v-model="form.medicine"
                    @change="xiaoshou"
                >
                    <el-option label="1-新合同" value="1"></el-option>
                    <el-option label="6-升级" value="2"></el-option>
                </el-select>
            </el-form-item>
            <!-- v-show='conmen'  -->
            <div class="conment" v-if="conmen=='2'">
                <div class="shenfen">
                    <el-form-item label="原合同号">
                        <el-input type="text" disabled></el-input>
                    </el-form-item>
                    <div style="margin-left: 40px;">
                        <span class="demonstration">销售日期</span>
                        <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择日期"
                            style="width: 205px"
                            disabled
                        ></el-date-picker>
                    </div>
                </div>

                <el-form-item label="课程">
                    <el-input v-model="form.name" class="width_box" disabled></el-input>
                </el-form-item>

                <div class="block">
                    <span class="demonstration">日期范围</span>
                    <el-date-picker
                        v-model="value1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        class="width_box"
                        disabled
                    ></el-date-picker>
                </div>

                <div class="shenfen">
                    <el-form-item label="合同课时">
                        <el-input type="text" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="合同金额" class="lefty">
                        <el-input type="text" disabled></el-input>
                    </el-form-item>
                </div>

                <div class="shenfen">
                    <el-form-item label="剩余课时">
                        <el-input type="text" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="剩余金额" class="lefty">
                        <el-input type="text" disabled></el-input>
                    </el-form-item>
                </div>
            </div>

            <div class="shenfen">
                <el-form-item label="定金编号" class="phone">
                    <el-input type="text" v-model="form.number2" disabled></el-input>
                </el-form-item>
                <button type="primary" @click="show()" class="btnte">...</button>
                <el-form-item label="定金金额" style=" margin-left: -2px">
                    <el-input type="text" v-model="form.money" disabled></el-input>
                </el-form-item>
            </div>
            <div class="shenfen">
                <el-form-item label="私教课程">
                    <el-select v-model="form.region" style="width: 189px;">
                        <el-option
                            v-for="(item,index) in form.course"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="上课教练" label-width="82px" class="type_box">
                    <el-select v-model="form.coach" style="width: 188px;">
                        <el-option
                            v-for="(item,index) in form.coachData"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'b'"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </div>

            <div class="shenfen">
                <el-form-item label="购买数量">
                    <el-input
                        type="text"
                        v-model.number="form.number3"
                        @change="searchPrice(form.number3)"
                    ></el-input>
                </el-form-item>
                <el-form-item label="指导价范围" label-width="82px" style="margin-left: 26px">
                    <el-input type="text" v-model="form.scope" disabled></el-input>
                </el-form-item>
            </div>

            <div class="shenfen">
                <el-form-item label="合同起日">
                    <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>

                <el-form-item label="合同迄日">
                    <el-date-picker v-model="form.date2" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
            </div>
            <div class="shenfen">
                <el-form-item label="实际售价">
                    <el-input type="text" v-model.number="form.price"></el-input>
                </el-form-item>
                <el-form-item label="应收金额" style="margin-left: 28px">
                    <el-input type="text" v-model.number="form.priceMoney"></el-input>
                </el-form-item>
            </div>

            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.desc" style="width: 482px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认并提交</el-button>
            </el-form-item>
        </el-form>

        <div class="aptable">
            <span class="titex">礼物列表</span>
            <el-table
                :data="coachStore"
                border
                style="width: 80%"
                @selection-change="handleSelectionChange"
                height="300"
                ref="dataTable"
            >
                <el-table-column type="selection" label="选择"></el-table-column>
                <el-table-column prop="number" label="编号"></el-table-column>
                <el-table-column prop="name" label="名称"></el-table-column>
            </el-table>
        </div>

        <Dialog :dialog="dialog" @data="childData"></Dialog>
    </div>
</template>

<script>
import Dialog from '../common/Dialog';
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import axios from 'axios';
import { base } from '../js/url';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'indexdj',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {
        Dialog
    },
    data() {
        // 这里存放数据
        return {
            input1: '',
            medicine: '',
            kahao: '',
            value1: '',
            conmen: false,
            type: false,
            dialog: {
                show: false
            },
            form: {
                kahao: '',
                name: '',
                scope: '',
                number3: '',
                priceMoney: '',
                price: '',
                number: '',
                number2: '',
                region: '',
                date: '',
                money: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                coach: '',
                course: [],
                coachData: []
            },
            currentPage: 1,
            size: 10,
            coachStore:[]
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
        ...mapActions(['getByCardId']),
        handleSelectionChange(){

        },
        async onSubmit() {
            let date = new Date();
            let now = new Date(this.form.date1);
            let now2 = new Date(this.form.date2);
            this.form.date1 = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
            this.form.date2 = now2.getFullYear() + '-' + (now2.getMonth() + 1) + '-' + now2.getDate();
            this.form.array = this.form.scope.split('-');
            this.form.scope1 = parseFloat(this.form.array[0]);
            this.form.scope2 = parseFloat(this.form.array[1]);
            await axios
                .post(base + '/coachContract/addCoachContract', {
                    cardNumber: this.form.kahao,
                    memberId: this.form.number,
                    reserveId: this.form.number2,
                    reserveMoney: this.form.money,
                    courseNumber: this.form.region,
                    coachNumber: this.form.coach,
                    bayNum: this.form.number3,
                    maxPrice: this.form.scope2,
                    minPrice: this.form.scope1,
                    startDate: this.form.date1,
                    endDate: this.form.date2,
                    actualPrice: this.form.price,
                    realPrice: this.form.priceMoney,
                    remarks: this.form.desc,
                    gifts: [],
                    createDate: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
                    salesType: 1,
                    states: 1,
                    singnatureType: 1,
                    operatorUser: '测试销售员',
                    store_number: '1234',
                    contractType: 2,
                    memberNumber:''
                })
                .then(res => {
                    if (res.data.data == '添加私教合同成功') {
                        this.$message({message:'添加私教合同成功',type:'success'});
                        this.form.kahao = '';
                        this.form.number = '';
                        this.form.number2 = '';
                        this.form.money = '';
                        this.form.region = '';
                        this.form.coach = '';
                        this.form.number3 = '';
                        this.form.scope = '';
                        this.form.date1 = '';
                        this.form.price = '';
                        this.form.date2 = '';
                        this.form.priceMoney = '';
                        this.form.desc = '';
                    }
                });
        },

        childData(data) {
            this.form.number2 = data.id;
            this.form.money = data.reservePrice;
        },
        blurfns() {
            if (this.kahao != '') {
                this.type = true;
            } else {
                this.conmen = '1';
                this.type = false;
            }
        },
        xiaoshou(e) {
            this.conmen = e;
        },
        async getCourse() {
            await axios.post(base + '/course/queryCourseBySelect', {}).then(res => {
                this.form.course = [];
                for (let i = 0; i < res.data.queryResult.list.length; i++) {
                    this.form.course.push({ label: res.data.queryResult.list[i].name, value: res.data.queryResult.list[i].number });
                }
            });
        },
        async getCoach() {
            await axios.post(base + '/coach/queryCoachBySelect', {}).then(res => {
                this.form.coachData = [];
                for (let i = 0; i < res.data.queryResult.list.length; i++) {
                    this.form.coachData.push({ label: res.data.queryResult.list[i].name, value: res.data.queryResult.list[i].number });
                }
            });
        },
        search(e) {
            this.getByCardId(e)
                .then(res => {
                    this.form.number = res.data.data.memberId;
                    this.form.name = res.data.data.member.name;
                    this.form.date = res.data.data.endDate;
                });
        },
        searchPrice(e) {
            this.form.scope = '0.00-' + parseInt(e) * 1000 + '.00';
        },
        show() {
            this.dialog.show = true;
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getCourse();
        this.getCoach();
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
.input_width {
    width: 203px;
}
.type_box {
    margin-left: 25px;
    width: 267px;
}
.conment {
    border: 3px solid rgb(255, 239, 206);
    padding-top: 10px;
    margin-bottom: 10px;
}
.width_box {
    width: 515px;
}
.lefty {
    margin-left: 28px !important;
}

.demonstration {
    height: 32px;
    vertical-align: middle;
    line-height: 32px !important;
    font-size: 14px;
    color: #606266;
    padding: 0 10px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.pact {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: white;
}
.formbox {
    width: 45%;
    padding: 25px;
    margin: auto;
}
.aptable{
  width: 35%;
}

.shenfen {
    display: flex;
}

.block {
    margin-left: 15px !important;
    margin-bottom: 15px !important;
}

.btnte {
    width: 28px !important;
    height: 28px !important;
    margin-left: 2px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
    font-weight: 600;
}
</style>
