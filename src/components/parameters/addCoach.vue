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
                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-radio-group v-model="form.state">
                            <el-radio label="在职"></el-radio>
                            <el-radio label="离职"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox-group v-model="form.type2">
                            <el-checkbox label="允许1对多的约课" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item class="btn">
                        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="aptable">
                <span class="titex">教练门店</span>
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
            hasSelectList: [{ id: 1 }, { id: 2 }, { id: 5 }],
            rules: {
                name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
                id: [{ required: true, message: '请输入编号', trigger: 'blur' }]
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
            ],
            coachStore: []
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ level: state => state.coachLevel, type: state => state.coachType })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getCoachInformation', 'addCoach', 'getStore', 'updateCoach']),
        onSubmit(form) {
            this.$refs[form].validate(valid => {
                if (!valid) {
                    return;
                } else {
                    if (this.form.storeId.length == 0) {
                        return;
                    }
                    if (this.$route.query.data) {
                        this.form.id2 = this.$route.query.data.id;
                        if (typeof this.form.level == 'string') {
                            for (let i = 0; i < this.level.length; i++) {
                                if (this.level[i].label == this.form.level) {
                                    this.form.level = this.level[i].value;
                                }
                            }
                        }
                        if (typeof this.form.type == 'string') {
                            for (let i = 0; i < this.type.length; i++) {
                                if (this.type[i].label == this.form.type) {
                                    this.form.type = this.type[i].value;
                                }
                            }
                        }
                        
                        this.updateCoach(this.form).then(res => {
                            if (res == 'yes') {
                                this.$message({
                                    message: '修改教练员成功',
                                    type: 'success'
                                });
                                this.$router.push('/parameters5')
                                this.form.id = '';
                                this.form.name = '';
                                this.form.level = '';
                                this.form.type = '';
                                this.form.state = '在职';
                                this.form.desc = '';
                                this.form.type2 = '';
                                this.form.storeId = [];
                                this.coachStore.forEach(row => {
                                    this.$refs.dataTable.toggleRowSelection(row, false);
                                });
                            }
                        });
                    } else {
                        this.addCoach(this.form).then(res => {
                            if (res == 'yes') {
                                this.$message({
                                    message: '添加教练员成功',
                                    type: 'success'
                                });
                                this.$router.push('/parameters5')
                                this.form.id = '';
                                this.form.name = '';
                                this.form.level = '';
                                this.form.type = '';
                                this.form.state = '在职';
                                this.form.desc = '';
                                this.form.type2 = '';
                                this.form.storeId = [];
                                this.coachStore.forEach(row => {
                                    this.$refs.dataTable.toggleRowSelection(row, false);
                                });
                            }
                        });
                    }
                }
            });
        },
        handleSelectionChange(a) {
            console.log(a);
            this.form.storeId = [];
            if (a.length > 0) {
                for (let i = 0; i < a.length; i++) {
                    this.form.storeId.push(a[i].number);
                }
            }
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.getCoachInformation('J0001');
        this.getCoachInformation('J0002');
        this.getStore().then(res => {
            this.coachStore = res;
            setTimeout(() => {
                this.coachStore.forEach(row => {
                    for (let i = 0; i < this.$route.query.data.areaCoach.length; i++) {
                        if (this.$route.query.data.areaCoach[i].areaNumber == row.number) {
                            this.form.storeId.push(this.$route.query.data.areaCoach[i].areaNumber);
                            this.$refs.dataTable.toggleRowSelection(row, true);
                        }
                    }
                });
            }, 100);
        });
        if (this.$route.query.data) {
            this.form.id = this.$route.query.data.number;
            this.form.name = this.$route.query.data.name;
            this.form.level = this.$route.query.data.leavel;
            this.form.desc = this.$route.query.data.remarks;
            this.form.type = this.$route.query.data.coachType;
            this.form.state = this.$route.query.data.states;
            this.form.type2 = this.$route.query.data.teaching == 1 ? true : false;
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
    width: 70%;
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
.btn {
    display: flex;
    justify-content: center;
    width: 70%;
    position: absolute;
    left: 0;
    top: 500px;
}
</style>
