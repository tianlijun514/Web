<!-- vue快捷创建组件 -->
<template>
    <div class="appmm">
        <div class="conments">
            <div class="appx">
                <el-form ref="form" :model="form" label-width="80px" class="formbox demo-ruleForm">
                    <el-form-item label="门店">
                        <el-select v-model="form.store" class="sex" v-show="isAdd">
                            <el-option
                                v-for="(item,index) in store"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                        <div v-show="!isAdd">{{form.store}}</div>
                    </el-form-item>
                    <el-form-item label="教室编号">
                        <el-input type="text" v-model="form.number" class="input_box" v-show="isAdd" />
                        <div v-show="!isAdd">{{form.number}}</div>
                    </el-form-item>
                    <el-form-item label="名称">
                        <el-input type="text" v-model="form.name" class="input_box" />
                    </el-form-item>
                    <el-form-item label="最多人数">
                        <el-input type="number" v-model="form.maxMan" class="input_box" />
                    </el-form-item>

                    <el-form-item label="类型">
                        <el-select v-model="form.type" class="sex">
                            <el-option
                                v-for="(item,index) in classRoomType"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'b'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="form.remarks"></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-radio-group v-model="form.states">
                            <el-radio label="正常"></el-radio>
                            <el-radio label="停用"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item class="btn">
                        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

import { mapActions, mapState } from 'vuex';
export default {
    name: 'indexxs',

    props: {},
    // import引入的组件需要注入到对象中才能使用
    data() {
        // 这里存放数据
        return {
            form: {
                number: '',
                name: '',
                store: '',
                maxMan: '',
                states: '正常',
                type: '',
                remarks:'',
            },
            isAdd: true,
            store: []
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ type: state => state.coachType,classRoomType:state=>state.classRoomType })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getCoachInformation', 'addClassRoom', 'getStore','updateClassRoom']),
        onSubmit() {
            if(this.isAdd){
                console.log(this.form)
                this.addClassRoom(this.form).then(res=>{
                    if (res == 'yes') {
                                this.$message({
                                    message: '新增教室成功',
                                    type: 'success'
                                });
                                this.$router.push('/parameters7')
                                this.form.number = '';
                                this.form.name = '';
                                this.form.store = '';
                                this.form.type = '';
                                this.form.state = '正常';
                                this.form.maxMan = '';
                                this.form.remarks = '';
                            }
                })
            }else{
                this.form.id=this.$route.query.data.id
                this.updateClassRoom(this.form).then(res=>{
                    console.log(res)
                })
            }
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getCoachInformation('J0001');
        this.getCoachInformation('J0002');
        this.getCoachInformation('J0003')
        this.getStore().then(res => {
            this.store = [];
            for (let i = 0; i < res.length; i++) {
                this.store.push({ label: res[i].number + '-' + res[i].name, value: res[i].number });
            }
        });
        console.log(this.$route.query.data)
        if(this.$route.query.data){
            this.form=this.$route.query.data
            this.form.store=this.$route.query.data.storeNumber+'-'+this.$route.query.data.store.name
            this.form.states=this.$route.query.data.states==1?'正常':'停用'
            this.isAdd=false
        }
        
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
<style lang="scss" scoped>
@import './../../assets/css/table.css';
.miet {
    margin-left: 40% !important;
    margin-top: 30px;
}
.titex {
    font-size: 13px;
}
.conments {
    display: flex;
    // padding: 20px;
    width: 40%;
    margin: 20px;
    border: 10px solid #f4f4f4;
}
.aptable {
    width: 48% !important;
    margin-top: 20px;
    margin-left: 20px;
}
.appmm {
    width: 100% !important;
    background: white;
    height: 100%;
    overflow: hidden;
    position: relative;
}
.appx {
    width: 90% !important;
}
.formbox {
    width: 90%;
    padding: 25px;
    margin: auto;
}
.hname {
    width: 80% !important;
}
.divbin {
    display: flex !important;
}

.shenfen {
    display: flex;
}
.sinxex {
    width: 48.5% !important;
    margin-left: 5px;
}
.dinglei {
    display: flex;
}
.conmeny {
    display: flex;
}
.minx {
    display: flex;
}
.yingbut {
    display: -webkit-box;
}
.el-date-range-picker {
    width: 510px !important;
    z-index: 500;
}
.block {
    margin-bottom: 15px;
}
.btn {
    display: flex;
    justify-content: center;
    width: 35%;
    position: absolute;
    left: 0;
    top: 500px;
}
</style>
