<!-- vue快捷创建组件 -->
<template>
    <div class="pact">
        <el-form ref="form" :model="form" label-width="80px" class="formbox">
            <el-form-item label="私教合同号" label-width="82px">
                <el-input v-model="form.contract" style="width: 187px;" @change="search"></el-input>
            </el-form-item>

            <div class="conment">
                <div class="shenfen">
                    <div class="block">
                        <span class="demonstration">销售日期</span>
                        <el-input
                            suffix-icon="el-icon-date"
                            v-model="form.date"
                            :disabled="true"
                            style="width: 185px;"
                        ></el-input>
                    </div>

                    <el-form-item label="销售类别" label-width="82px">
                        <el-input v-model="form.date1" :disabled="true"></el-input>
                    </el-form-item>
                </div>

                <div class="shenfen">
                    <el-form-item label="会员姓名">
                        <el-input v-model="form.name" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label-width="82px" label="会员编号">
                        <el-input v-model="form.number" :disabled="true"></el-input>
                    </el-form-item>
                </div>

                <div class="shenfen">
                    <el-form-item label="课程">
                        <el-input v-model="form.course" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label-width="82px" label="教练">
                        <el-input v-model="form.coach" :disabled="true"></el-input>
                    </el-form-item>
                </div>

                <div class="shenfen">
                    <el-form-item label="合同起日">
                        <el-input
                            suffix-icon="el-icon-date"
                            v-model="form.date1"
                            :disabled="true"
                            style="width: 185px;"
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="合同迄日">
                        <el-input
                            suffix-icon="el-icon-date"
                            v-model="form.date2"
                            :disabled="true"
                            style="width: 185px;"
                        ></el-input>
                    </el-form-item>
                </div>
                <div class="shenfen">
                    <el-form-item label="合同金额">
                        <el-input v-model="form.money" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label-width="82px" label="付款金额">
                        <el-input v-model="form.money2" :disabled="true"></el-input>
                    </el-form-item>
                </div>
                <div class="shenfen">
                    <el-form-item label="合同课时">
                        <el-input v-model="form.class" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label-width="82px" label="剩余课时">
                        <el-input v-model="form.restClass" :disabled="true"></el-input>
                    </el-form-item>
                </div>
            </div>

            <div class="shenfen">
                <el-form-item label="选择教练">
                    <el-select v-model="form.region" style="width: 188px;">
                        <el-option
                            v-for="(item,index) in coach"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </div>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.desc" style="width: 460px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认并提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
import axios from 'axios';
import { url } from '../js/url';
export default {
    name: 'indexdj',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            input: '',
            input1: '',
            currentPage: 1,
            size: 10,
            value1: '',
            form: {
                contract: '',
                category: '',
                number: '',
                course: '',
                coach: '',
                money: '',
                money2: '',
                class: '',
                restClass: '',
                name: '',
                region: '',
                date: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            coach: []
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
        ...mapActions(['postContractMembers', 'postqueryCoachBySelect', 'addReplaceCoach']),
        onSubmit() {
            if(!this.form.contract){
                this.$message('请输入私教合同号')
                return
            }else if(!this.form.name){
                this.$message('私教合同号错误，请重新输入')
                return
            }
            let object = {};
            let date = new Date();
            object.remarks = this.form.desc;
            object.date =
                date.getFullYear() +
                '-' +
                (date.getMonth() + 1) +
                '-' +
                date.getDate() +
                ' ' +
                date.getHours() +
                ':' +
                date.getMinutes() +
                ':' +
                date.getSeconds();
            object.oldCoach = this.form.coachNumber;
            object.coach = this.form.region;
            object.number = this.form.contract;
            this.addReplaceCoach(object).then(res => {
                if (res == 'yes') {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                    this.$router.push('/pact3')
                    this.form.date = '';
                    this.form.date1=''
                    this.form.date2=''
                    this.form.coach=''
                    this.form.course=''
                    this.form.class=''
                    this.form.restClass=''
                    this.form.money=''
                    this.form.money2=''
                    this.form.name=''
                    this.form.number=''
                    this.form.coachNumber=''
                    this.form.contract=''
                }
            });
        },
        search() {

            this.postContractMembers(this.form.contract).then(res => {
                if(res[0]){
                    this.form.date = res[0].createDate;
                    this.form.date1 = res[0].startDate;
                    this.form.date2 = res[0].endDate;
                    this.form.coach = res[0].coachName;
                    this.form.course = res[0].courseName;
                    this.form.class = res[0].bayNum;
                    this.form.restClass = res[0].residueNumber;
                    this.form.money = res[0].realPrice;
                    this.form.money2 = res[0].actualPrice;
                    this.form.name = res[0].memberName;
                    this.form.number = res[0].memberId;
                    this.form.coachNumber = res[0].coachNumber;
                }
                
            });
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.postqueryCoachBySelect().then(res => {
            for (let i = 0; i < res.length; i++) {
                this.coach.push({ label: res[i].name, value: res[i].number });
            }
        });
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
.conment {
    border: 3px solid rgb(255, 239, 206);
    padding-top: 10px;
    margin-bottom: 10px;
    width: 580px;
}
.demonstration {
    height: 32px;
    vertical-align: middle;
    line-height: 32px !important;
    font-size: 14px;
    color: #606266;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.pact {
    width: 670px !important;
    background: white;
}
.formbox {
    width: 90%;
    padding: 25px;
    margin: auto;
}

.shenfen {
    display: flex;
}

.block {
    margin-left: 15px !important;
    margin-bottom: 15px !important;
}
</style>
