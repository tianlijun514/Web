<!-- vue快捷创建组件 -->
<template>
    <div class="boxs">
        <el-form ref="form" :model="form" label-width="80px" class="formbox">
            <div class="shenfen">
                <el-form-item label="会员类型">
                    <el-select v-model="form.membersType" @change="typehui" class="hname">
                        <el-option label="1-新会员" value="1"></el-option>
                        <el-option label="2-老会员" value="2"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="会员卡号" v-if="card=='2'">
                    <el-input
                        v-model="form.membersId"
                        class="hname"
                        @change="search(form.membersId)"
                    ></el-input>
                </el-form-item>
            </div>

            <div class="shenfen">
                <el-form-item label="会员姓名">
                    <el-input
                        v-model="form.membersName"
                        class="hname"
                        :disabled="card=='2'?true:false"
                    ></el-input>
                </el-form-item>

                <el-form-item label="性别">
                    <el-select v-model="form.gender" class="hname" :disabled="card=='2'?true:false">
                        <el-option label="男" value="man"></el-option>
                        <el-option label="女" value="woman"></el-option>
                    </el-select>
                </el-form-item>
            </div>

            <div class="shenfen">
                <el-form-item label="证件号">
                    <el-select v-model="form.idType" class="hname" :disabled="card=='2'?true:false">
                        <el-option label="身份证" value="身份证"></el-option>
                        <el-option label="护照" value="护照"></el-option>
                        <el-option label="回乡证" value="回乡证"></el-option>
                    </el-select>
                </el-form-item>
                <el-input
                    v-model="form.userId"
                    style="width: 280px;"
                    :disabled="card=='2'?true:false"
                ></el-input>
            </div>

            <el-form-item label="手机号码">
                <el-input v-model="form.phone" class="hname"></el-input>
            </el-form-item>

            <div class="shenfen">
                <el-form-item label="定金类型">
                    <el-select v-model="form.conventionType" @change="dingjin" class="hname">
                        
                        <el-option label="会籍定金" value="1"></el-option>
                        <el-option label="私教定金" value="2"></el-option>
                        <el-option label="停转补定金" value="3"></el-option>
                        <el-option label="转让定金" value="4"></el-option>
                        <el-option label="租箱定金" value="5"></el-option>
                        <el-option label="商品定金" value="6"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="定金金额">
                    <el-input v-model="form.conventionMoney" class="hname"></el-input>
                </el-form-item>
            </div>

            <div v-if="wieder=='1'">
                <div class="shenfen">
                    <el-form-item label="营销活动">
                        <el-select v-model="form.activity" class="hname" @change="cardSearch">
                            <el-option label="不参加营销活动" value="0"></el-option>
                            <el-option label="参加营销活动" value="1"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="卡种类型">
                        <el-select v-model="form.cardType" class="hname">
                            <el-option
                                v-for="(item,index) in activity"
                                :label="item.label"
                                :value="item.value"
                                :key="index"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </div>

                <el-form-item label="卡种价格">
                    <el-input v-model.number="form.cardPrice" class="hname"></el-input>
                </el-form-item>
            </div>

            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.desc" style="width:480px"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认并提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
import { type } from 'os';
export default {
    name: 'indexdj',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            wieder: '',
            card: false,
            input: '',
            form: {
                membersType: '',
                membersId: '',
                membersName: '',
                gender: '',
                idType: '',
                userId: '',
                phone: '',
                conventionType: '2',
                conventionMoney: '',
                activity: '',
                cardType: '',
                cardPrice: '',
                desc: ''
            },
            type:[],
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({activity:state=>state.silent.activity})
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getByCardId', 'reserveMoneySell','getByActivity']),
        onSubmit() {
            if(this.form.membersType=='1'){
                if(!this.form.membersName){
                    this.$message('请输入会员姓名')
                    return
                }else if(!this.form.gender){
                    this.$message('请选择性别')
                    return
                }else if(!this.form.idType){
                    this.$message('请选择证件类型')
                    return
                }else if(!this.form.userId){
                    this.$message('请输入证件号')
                    return
                }
                
            }else if(this.form.membersType=='2'){
                if(!this.form.membersId){
                    this.$message('请输入会员卡号')
                    return
                }else{
                    if(!this.form.membersName && !this.form.gender && !this.form.idType && !this.form.userId){
                        this.$message('您输入的会员卡号有误，请重新输入')
                        return
                    }
                }
            }else{
                this.$message('请选择会员类型')
                return
            }

            if(!this.form.phone){
                this.$message('请输入手机号码')
                return
            }else if(!this.form.conventionType){
                this.$message('请选择定金类型')
                return
            }else if(!this.form.conventionMoney){
                this.$message('请选择定金金额')
                return
            }else{
                if(this.form.conventionType=='1'){
                    if(!this.form.activity){
                        this.$message('请选择营销活动')
                        return
                    }else if(!this.form.cardType){
                        this.$message('请选择卡种类型')
                        return
                    }else if(!this.form.cardPrice){
                        this.$message('请输入卡种价格')
                        return
                    }
                }
            }
            this.reserveMoneySell(this.form).then(res => {
                if (res == 'yes') {
                    this.$message({ message: '添加私教定金成功', type: 'success' });
                    this.form.membersType = '';
                    this.form.membersId = '';
                    this.form.membersName = '';
                    this.form.gender = '';
                    this.form.region = '';
                    this.form.idType = '';
                    this.form.userId = '';
                    this.form.phone = '';
                    this.form.conventionMoney = '';
                    this.form.conventionType = '';
                    this.form.activity = '';
                    this.form.cardType = '';
                    this.form.cardPrice = '';
                    this.form.desc = '';
                }
            });
        },
        typehui(e) {
            this.card = e;
        },
        dingjin(e) {
            this.wieder = e;
        },
        search(e) {
            this.getByCardId(e).then(res => {
                if(!res.data.d){
                    this.$message('您输入的会员卡号有误，请重新输入')
                    return
                }
                this.form.membersName = res.data.d[0].member.name;
                res.data.d[0].member.name;
                if (res.data.d[0].member.zjType == '1') {
                    this.form.idType = '身份证';
                } else if (res.data.d[0].member.zjType == '2') {
                    this.form.idType = '护照';
                } else {
                    this.form.idType = '回乡证';
                }
                if (res.data.d[0].member.sex == '1') {
                    this.form.gender = 'man';
                } else {
                    this.form.gender = 'woman';
                }
                this.form.userId = res.data.d[0].member.zjNum;
            });
        },
        cardSearch(e){
            if(e=='1'){
                this.getByActivity(1)
            }else{
                this.getByActivity(0)
            }
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.form.conventionType=this.wieder
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
.boxs {
    width: 630px;
    background: white;
}
.formbox {
    padding: 25px;
}
.hname {
    width: 200px;
}

.shenfen {
    display: flex;
}
</style>
