<!-- vue快捷创建组件 -->
<template>
    <div class="appmm">
        <div class="box">
            <div class="conments">
                <div class="appx">
                    <el-form
                        ref="form"
                        :model="form"
                        label-width="80px"
                        class="formbox demo-ruleForm"
                    >
                        <el-form-item label="编号" prop="id">
                            <el-input type="text" v-model="form.name" class="input_box" />
                        </el-form-item>
                        <el-form-item label="名称" prop="name">
                            <el-input type="text" v-model="form.name" class="input_box" />
                        </el-form-item>
                        <el-form-item label="启用时间">
                            <el-date-picker v-model="form.name" type="date" placeholder="选择日期" style="width:50px;"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="结束时间">
                            <el-date-picker v-model="form.name" type="date" placeholder="选择日期" style="width:50px;"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="销售价格" prop="name">
                            <el-input type="text" v-model="form.name" class="input_box" />
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-radio-group v-model="form.name">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="form.name"></el-input>
                        </el-form-item>
                        <div class="border">
                            
                        </div>
                        <el-form-item label="课程类型">
                            <el-select v-model="form.name" class="sex">
                                <el-option
                                    v-for="(item,index) in type"
                                    :label="item.label"
                                    :value="item.value"
                                    :key="index+'a'"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="数量" prop="id">
                            <el-input type="text" v-model="form.name" class="input_box" />
                        </el-form-item>
                        <el-form-item label="价格" prop="name">
                            <el-input type="text" v-model="form.name" class="input_box" />
                        </el-form-item>
                        <el-form-item label="有效天数" prop="name">
                            <el-input type="text" v-model="form.name" class="input_box" />
                        </el-form-item>
                        <el-form-item label="教练等级">
                            <el-select v-model="form.name" class="sex">
                                <el-option
                                    v-for="(item,index) in type"
                                    :label="item.label"
                                    :value="item.value"
                                    :key="index+'a'"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="aptable">
                    <span class="titex">教练门店</span>
                    <el-table
                        :data="coachStore2"
                        border
                        style="width: 90%;"
                        @selection-change="handleSelectionChange"
                        ref="dataTable2"
                        height="400"
                    >
                        <el-table-column type="selection" label="选择"></el-table-column>
                        <el-table-column prop="number" label="编号"></el-table-column>
                        <el-table-column prop="name" label="名称"></el-table-column>
                    </el-table>
                </div>
            </div>
            <el-table
                :data="form.table"
                border
                style="width: 90%;margin: 0 auto;"
                @selection-change="handleSelectionChange"
                ref="dataTable"
            >
                <el-table-column prop="data" label="编号"></el-table-column>
                <el-table-column prop="minData" label="名称"></el-table-column>
                <el-table-column prop="maxData" label="数量"></el-table-column>
                <el-table-column prop="minPrice" label="总价"></el-table-column>
            </el-table>
            <div class="addBtn">
                <span @click="showTime">
                    <i class="el-icon-circle-plus"></i> 增加商品
                </span>
            </div>
        </div>
        <div class="btn">
            <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        </div>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="logForm" label-width="80px">
                <el-form-item label="教练等级">
                    <el-select v-model="logForm.coachLevel">
                        <el-option
                            v-for="(item,index) in level"
                            :label="item.label"
                            :value="item.value"
                            :key="index"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="最小数">
                    <el-input type="number" v-model="logForm.minData" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="最大数">
                    <el-input type="number" v-model="logForm.maxData" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="单价下限">
                    <el-input type="number" v-model="logForm.minPrice" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="单价上线">
                    <el-input type="number" v-model="logForm.maxPrice" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="有限天数">
                    <el-input type="number" v-model="logForm.days" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="no">取 消</el-button>
                <el-button type="primary" @click="addBtn">确 定</el-button>
            </div>
        </el-dialog>
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
                type2: '',
                state: '正常',
                desc: '',
                date1: '',
                date2: '',
                type: '',
                storeId: [],
                table: []
            },
            logForm: {
                name:''
            },
            dialogFormVisible: false,
            coachStore2: [],
            id: 0,
            level123:[],
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({
            
        })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions([]),
        onSubmit(form) {
            this.$refs[form].validate(valid => {
                if (!valid) {
                    return;
                } else {
                    
                }
            });
        },
        showTime() {
            this.form.table.push({})
        },
        deleteData(e) {
            
        },
        handleSelectionChange(a) {
            
        },
        no() {
            
        },
        addBtn() {
            
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
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
    width: 94%;
    margin: 20px;
}
.aptable {
    width: 48% !important;
    margin-top: 20px;
    margin-left: 20px;
}
.appmm {
    width: 100% !important;
    background: white;
    overflow: hidden;
}
.appx {
    width: 48% !important;
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
.el-input__inner {
    width: 200px;
}
.box {
    width: 70%;
    border: 10px solid #f4f4f4;
    margin-top: 20px;
    margin-left: 20px;
}
.addBtn {
    height: 40px;
    line-height: 40px;
    span {
        cursor: pointer;
    }
    i {
        margin-left: 40px;
        color: #67c23a;
    }
}
.border{
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 50px;
}
</style>
