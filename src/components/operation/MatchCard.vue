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
                    <el-form-item label="等级">
                        <el-select v-model="form.level" class="sex">
                            <el-option
                                v-for="(item,index) in level"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-select v-model="form.type" class="sex">
                            <el-option
                                v-for="(item,index) in type"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'b'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="开始卡号">
                                <el-input type="text" v-model="form.id" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="结束卡号">
                                <el-input type="text" v-model="form.id" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('form')">预览卡号</el-button>
                        <el-button type="primary" @click="onSubmit('form')">提交配卡</el-button>
                        <el-button type="primary" @click="onSubmit('form')">查询配卡</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="aptable">
                <el-table
                    :data="coachStore"
                    border
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                    height="300"
                    ref="dataTable"
                >
                    <el-table-column prop="number" label="卡号"></el-table-column>
                    <el-table-column prop="name" label="收卡门店"></el-table-column>
                </el-table>
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
                level: '',
                type: '',
                state: '在职',
                desc: '',
                type2: '',
                storeId: []
            },
            tableData: [
                {
                    id: 1,
                    name: '222'
                },
                {
                    id: 2,
                    name: '222'
                },
                {
                    id: 3,
                    name: '222'
                },
                {
                    id: 4,
                    name: '222'
                }
            ]
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
        ...mapActions([]),
        onSubmit(form) {},
        handleSelectionChange(a) {}
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
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
    // display: flex;
    // padding: 20px;
    width: 70%;
    margin: 20px;
    border: 10px solid #f4f4f4;
}
.aptable {
    width: 90% !important;
    margin: 20px;
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
    width: 70%;
    position: absolute;
    left: 0;
    top: 500px;
}
</style>
