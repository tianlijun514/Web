<!-- vue快捷创建组件 -->
<template>
    <div class="appmm">
        <div class="conments">
            <div class="appx">
                <el-form
                    ref="form"
                    :model="form"
                    :rules="rules"
                    label-width="80px"
                    class="formbox demo-ruleForm"
                >
                    <el-form-item label="编号" prop="id">
                        <el-input type="text" v-model="form.id" class="input_box" />
                    </el-form-item>
                    <el-form-item label="名称" prop="name">
                        <el-input type="text" v-model="form.name" class="input_box" />
                    </el-form-item>
                    <el-form-item class="btn">
                        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                        <el-button type="primary" @click="go()">返回</el-button>
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
                id: '',
                name: '',
            },
            rules: {
                name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
                id: [{ required: true, message: '请输入编号', trigger: 'blur' }]
            },
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
        ...mapActions(['addStoreLevel','updateStoreLevel']),
        onSubmit(form) {
            this.$refs[form].validate(valid => {
                if (!valid) {
                    return;
                } else {
                    if(this.$route.query.data){
                        this.updateStoreLevel(this.form).then(res => {
                            if(res=='yes'){
                                this.$message({
                                    message: '修改门店权限成功',
                                    type: 'success'
                                });
                                this.form.id=''
                                this.form.name=''
                                this.$router.go(-1)
                            }
                        });
                    }else{  
                        this.addStoreLevel(this.form).then(res => {
                            if(res=='yes'){
                                this.$message({
                                    message: '添加门店权限成功',
                                    type: 'success'
                                });
                                this.form.id=''
                                this.form.name=''
                                this.$router.go(-1)
                            }
                        });
                    }
                    
                }
            });
        },
        go(){
            this.form.id=''
            this.form.name=''
            this.$router.go(-1)
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        if(this.$route.query.data){
            this.form.name=this.$route.query.data.name
            this.form.id=this.$route.query.data.code
        }
    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
    },
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
    top: 240px;
}
</style>
