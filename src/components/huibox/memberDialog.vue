<!-- vue快捷创建组件 -->
<template>
    <div>
        <el-dialog title="会员信息" :visible.sync="isShow" width="40%" :before-close="handleClose" @close="handShow">
            <div class="dialog">
                <div class="dialogHeader">
                    <div>
                        <img :src="'http://192.168.2.136:8083/getImage?path='+isData.photoPath" alt width="120" height="120" />
                    </div>
                    <div>
                        <span @click="jump">会员详情</span>
                    </div>
                </div>
                <div class="dialogContent">
                    <el-form class="demo-form-inline" label-width="80px">
                        <el-form-item label="会员编号">
                            <div>{{isData.id}}</div>
                        </el-form-item>
                        <el-form-item label="会员卡号">
                            <div>{{isData.cardId}}</div>
                        </el-form-item>
                        <el-form-item label="会员姓名">
                            <div>{{isData.name}}</div>
                        </el-form-item>
                        <el-form-item label="性别">
                            <div>{{isData.sex}}</div>
                        </el-form-item>
                        <el-form-item label="会籍类型">
                            <div>{{isData.cardTypeName}}</div>
                        </el-form-item>
                        <el-form-item label="会员有效期">
                            <div>{{isData.endDate}}</div>
                        </el-form-item>
                        <el-form-item label="备注">
                            <div>{{isData.remark}}</div>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">取 消</el-button>
                <el-button type="primary" @click="yes">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    props:['showData','dialogShow'],
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            isShow: false,
            isData:{}
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({})
    },
    // 监控data中的数据变化
    watch: {
        showData(newData,oldData){
            this.getBrief(newData).then(res=>{
                this.isData=res.data.d[0]
                this.isData.sex=this.isData.sex==1?'男':'女'
            })
        },
        dialogShow(newData,oldData){
            this.isShow=newData
        }
    },
    // 方法集合
    methods: {
        ...mapActions(['getBrief']),
        handleClose(done) {
            done();
        },
        yes(){
            // this.$emit('dialogShowData',false)
            console.log(this.memberId)
        },
        handShow(){
            this.$emit('dialogShowData',false)
        },
        jump(){
            this.$emit('dialogShowData',false)
            this.$router.push({path:'/hymesg',query:{id:this.isData.id}})
        }
        
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        
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
    activated() {
    } // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped >
.el-form-item__content {
    width: 100px !important;
}
@import './../../assets/css/table.css';
.uys {
    width: 50%;
    margin: auto;
}
.APPX {
    width: 100%;
}
.dialog{
    display: flex;
    justify-content: space-between;
    .dialogHeader{
        width: 40%;
        &>div:first-of-type{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 100px;
        }
        &>div:last-of-type{
            text-align: center;
            height: 40px;
            line-height: 40px;
            span{
                color: #369;
                cursor: pointer;
            }
            span:hover{
                color: #e30;
            }
        }
    }
    .dialogContent{
        width: 50%;
    }
}
</style>
