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
                        <el-row>
                            <el-col span="12">
                                <el-form-item label="启用时间">
                                    <el-date-picker
                                        v-model="form.name"
                                        type="date"
                                        placeholder="选择日期"
                                    ></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col span="12">
                                <el-form-item label="结束时间">
                                    <el-date-picker
                                        v-model="form.name"
                                        type="date"
                                        placeholder="选择日期"
                                    ></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-form-item label="销售价格" prop="name">
                            <el-input type="text" v-model="form.name" class="input_box" />
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-radio-group v-model="form.name">
                                <el-radio label="可购买"></el-radio>
                                <el-radio label="卖完了"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="生日礼包">
                            <el-radio-group v-model="form.name">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox-group v-model="form.state">
                                <el-checkbox label="购买本礼包需曾持有年卡（含过期会员）" name="type"></el-checkbox>
                                <el-checkbox label="购买本礼包需曾持有7周年卡（T501）" name="type"></el-checkbox>
                                <el-checkbox label="购买本礼包需曾持有21周年卡（T500）" name="type"></el-checkbox>
                                <el-checkbox label="购买本礼包升级现持有的7周年卡（T501）" name="type"></el-checkbox>
                                <el-checkbox label="本礼包每位会员只能购买1次" name="type"></el-checkbox>
                                <el-checkbox label="老会员带新会员的活动礼包" name="type"></el-checkbox>
                                <el-checkbox label="购买本礼包需推荐2位新会员" name="type"></el-checkbox>
                                <el-checkbox label="本礼包W-YOGA及VIP门店不可购买" name="type"></el-checkbox>
                                <el-checkbox label="本礼包北京门店不可购买" name="type"></el-checkbox>
                                <el-checkbox label="本礼包VIP门店不可购买" name="type"></el-checkbox>
                                <el-checkbox label="本礼包指定门店购买" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="form.remarks"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <p>包含内容</p>
            <el-table
                :data="form.table"
                border
                style="width: 90%;margin: 0 auto;"
                @selection-change="handleSelectionChange"
                ref="dataTable"
            >
                <el-table-column prop="data" label="类型"></el-table-column>
                <el-table-column prop="data" label="编号"></el-table-column>
                <el-table-column prop="minData" label="名称"></el-table-column>
                <el-table-column prop="maxData" label="数量"></el-table-column>
                <el-table-column prop="minPrice" label="总价"></el-table-column>
                <el-table-column prop="storeName" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="addBtn">
                <span @click="showTime1">
                    <i class="el-icon-circle-plus"></i> 增加会籍
                </span>
                <span @click="showTime2">
                    <i class="el-icon-circle-plus"></i> 增加私教
                </span>
                <span @click="showTime3">
                    <i class="el-icon-circle-plus"></i> 增加储值卡
                </span>
                <span @click="showTime4">
                    <i class="el-icon-circle-plus"></i> 增加定金
                </span>
            </div>
        </div>
        <div class="btn">
            <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        </div>
        <el-dialog title="添加内容" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="logForm" label-width="80px" v-show="isState=='会籍'">
                <el-form-item label="类型">
                    <div>会籍</div>
                </el-form-item>
                <el-form-item label="编号">
                    <el-input type="number" v-model="logForm.minData" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input type="number" v-model="logForm.maxData" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="总价">
                    <el-input type="number" v-model="logForm.minPrice" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <el-form :model="logForm" label-width="80px" v-show="isState=='私教'">
                <el-form-item label="类型">
                    <div>私教</div>
                </el-form-item>
                <el-form-item label="编号">
                    <el-input type="number" v-model="logForm.minData" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input type="number" v-model="logForm.maxData" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="数量">
                    <el-input type="number" v-model="logForm.minData" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="总价">
                    <el-input type="number" v-model="logForm.minPrice" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <el-form :model="logForm" label-width="100px" v-show="isState=='储值卡'">
                <el-form-item label="类型">
                    <div>储值卡</div>
                </el-form-item>
                <el-form-item label="编号及名称">
                    <el-select v-model="form.store" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="数量">
                    <el-input type="number" v-model="logForm.minData" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <el-form :model="logForm" label-width="100px" v-show="isState=='定金'">
                <el-form-item label="类型">
                    <div>定金</div>
                </el-form-item>
                <el-form-item label="编号及名称">
                    <el-select v-model="form.store" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="数量">
                    <el-input type="number" v-model="logForm.minData" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="总价">
                    <el-input type="number" v-model="logForm.minData" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible=false">取 消</el-button>
                <el-button type="primary" @click="yesBtn">确 定</el-button>
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
                name: ''
            },
            dialogFormVisible: false,
            coachStore2: [],
            id: 0,
            level123: [],
            isState: '',
            choose1: [
                {
                    label: '1',
                    value: '2'
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
        onSubmit(form) {
            this.$refs[form].validate(valid => {
                if (!valid) {
                    return;
                } else {
                }
            });
        },
        showTime1() {
            this.dialogFormVisible = true;
            this.isState = '会籍';
        },
        showTime2() {
            this.dialogFormVisible = true;
            this.isState = '私教';
        },
        showTime3() {
            this.dialogFormVisible = true;
            this.isState = '储值卡';
        },
        showTime4() {
            this.dialogFormVisible = true;
            this.isState = '定金';
        },
        deleteData(e) {},
        handleSelectionChange(a) {},
        no() {},
        addBtn() {
            this.form.table.push({});
            this.dialogFormVisible = false;
        }
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
p {
    padding-left: 35px;
    font-size: 14px;
    color: #585858;
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
.border {
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
