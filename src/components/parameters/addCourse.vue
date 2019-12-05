<!-- vue快捷创建组件 -->
<template>
    <div class="appmm">
        <div class="box">
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
                        <el-form-item label="课程类型">
                            <el-select v-model="form.type" class="sex">
                                <el-option
                                    v-for="(item,index) in type"
                                    :label="item.label"
                                    :value="item.value"
                                    :key="index+'a'"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="启用时间">
                            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="结束时间">
                            <el-date-picker v-model="form.date2" type="date" placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox-group v-model="form.type2">
                                <el-checkbox label="Monster小班" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-radio-group v-model="form.state">
                                <el-radio label="正常"></el-radio>
                                <el-radio label="停用"></el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="aptable">
                    <span class="titex">教练门店</span>
                    <el-table
                        :data="coachStore"
                        border
                        style="width: 90%;"
                        @selection-change="handleSelectionChange"
                        ref="dataTable"
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
                <el-table-column prop="coachLevel" label="教练等级"></el-table-column>
                <el-table-column prop="minData" label="最小数"></el-table-column>
                <el-table-column prop="maxData" label="最大数"></el-table-column>
                <el-table-column prop="minPrice" label="单价下限"></el-table-column>
                <el-table-column prop="maxPrice" label="单价上线"></el-table-column>
                <el-table-column prop="days" label="有效天数"></el-table-column>
                <el-table-column prop="storeName" label="操作">
                    <el-button size="mini" type="primary">删除</el-button>
                </el-table-column>
            </el-table>
            <div class="addBtn">
                <span @click="showTime">
                    <i class="el-icon-circle-plus"></i> 增加一行
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
                date1:'',
                date2:'',
                type: '',
                storeId: [],
                table: [],
            },
            logForm: {
                coachLevel: '',
                coachLevel2: '',
                minData: '',
                maxData: '',
                minPrice: '',
                maxPrice: '',
                days: '',
                
            },
            hasSelectList: ['1', '2', '5'],
            rules: {
                name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
                id: [{ required: true, message: '请输入编号', trigger: 'blur' }]
            },
            dialogFormVisible: false
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ level: state => state.coachLevel, type: state => state.privateCourseType, coachStore: state => state.coachStore ,level: state => state.coachLevel })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getCoachInformation', 'addPrivateCourse', 'getStore']),
        onSubmit(form) {
            this.$refs[form].validate(valid => {
                if (!valid) {
                    return;
                } else {
                    if (this.form.storeId.length == 0) {
                        return;
                    }
                    this.addPrivateCourse(this.form).then(res => {
                        if (res == 'yes') {
                            this.$message({
                                message: '添加私教课程成功',
                                type: 'success'
                            });
                            this.form.id = '';
                            this.form.name = '';
                            this.form.date1 = '';
                            this.form.date2 = '';
                            this.form.type = '';
                            this.form.state = '正常';
                            this.form.desc = '';
                            this.form.type2 = '';
                            this.form.storeId = [];
                            this.form.table = [];
                            this.coachStore.forEach(row => {
                                this.$refs.dataTable.toggleRowSelection(row, false);
                            });
                            
                        }
                    });
                }
            });
        },
        showTime(){
            this.logForm.coachLevel = '';
            this.logForm.minData = '';
            this.logForm.maxData = '';
            this.logForm.minPrice = '';
            this.logForm.maxPrice = '';
            this.logForm.days = '';
            this.dialogFormVisible = true
            this.getCoachInformation('J0001')
        },
        handleSelectionChange(a) {
            this.form.storeId = [];
            if (a.length > 0) {
                for (let i = 0; i < a.length; i++) {
                    this.form.storeId.push(a[i].number);
                }
            }
        },
        no() {
            this.logForm.coachLevel = '';
            this.logForm.minData = '';
            this.logForm.maxData = '';
            this.logForm.minPrice = '';
            this.logForm.maxPrice = '';
            this.logForm.days = '';
            this.dialogFormVisible = false;
        },
        addBtn() {
            this.form.table.push({coachLevel:this.logForm.coachLevel,minData:this.logForm.minData,maxData:this.logForm.maxData,minPrice:this.logForm.minPrice,maxPrice:this.logForm.maxPrice,days:this.logForm.days});
            this.dialogFormVisible = false;
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.getCoachInformation('J0001');
        this.getCoachInformation('K0001');
        this.getStore();
        console.log(this.$route.query.data)
        if(this.$route.query.data){
            this.form.id=this.$route.query.data.number
            this.form.name=this.$route.query.data.name
            this.form.type=this.$route.query.data.courseType
            this.form.date1=this.$route.query.data.startDate
            this.form.date2=this.$route.query.data.endDate
            this.form.type2=this.$route.query.data.monster==1?true:false
            this.form.state=this.$route.query.data.states==1?'正常':'停用'
            this.form.desc=this.$route.query.data.remarks
            // this.tableData.forEach(row => {
            //     console.log(row)
            //     if (this.hasSelectList.indexOf(row.id) >= 0) {
            //         console.log(this.hasSelectList.indexOf(row.id))
            //         this.$refs.dataTable.toggleRowSelection(row, true);
            //     }
            // });
        }
        
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
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 50px;
}
</style>
