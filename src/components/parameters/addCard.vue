<!-- vue快捷创建组件 -->
<template>
    <div class="appmm">
        <div class="conments">
            <div class="appx">
                <el-form ref="form" :model="form" label-width="100px" class="formbox demo-ruleForm">
                    <h4>基本信息</h4>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="编号">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="卡种标识">
                                <el-input type="text" v-model="form.name" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-form-item label="名称">
                        <el-input type="text" v-model="form.name" class="input_box" />
                    </el-form-item>
                    <el-form-item label="大类">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox-group v-model="form.state">
                            <el-checkbox label="新合同" name="type"></el-checkbox>
                            <el-checkbox label="升级" name="type"></el-checkbox>
                            <el-checkbox label="续会" name="type"></el-checkbox>
                            <el-checkbox label="优秀续会" name="type"></el-checkbox>
                            <el-checkbox label="营销活动" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="通店区域">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="启用时间">
                                <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="禁用时间">
                                <el-date-picker v-model="form.date2" type="date" placeholder="选择日期"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-form-item label="统计类别">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="财务分类">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="form.remarks"></el-input>
                    </el-form-item>
                    <div class="border"></div>
                    <h4>限制设置</h4>
                    <el-row>
                        <el-col :span="14">
                            <el-form-item label="有效期">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>

                        <el-col :span="10">
                            <el-form-item label="单位">
                                <el-select v-model="form.store" class="sex">
                                    <el-option
                                        v-for="(item,index) in choose1"
                                        :label="item.label"
                                        :value="item.value"
                                        :key="index+'a'"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="14">
                            <el-form-item label="赠送有效期">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>

                        <el-col :span="10">
                            <el-form-item label="单位">
                                <el-select v-model="form.store" class="sex">
                                    <el-option
                                        v-for="(item,index) in choose1"
                                        :label="item.label"
                                        :value="item.value"
                                        :key="index+'a'"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="启动期限">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="次数">
                                <el-input type="text" v-model="form.name" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="超过时间扣除次数">
                        <el-input type="number" v-model="form.maxMan" class="input_box" />
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox-group v-model="form.state">
                            <el-checkbox label="非繁忙时段次卡" name="type"></el-checkbox>
                            <el-checkbox label="时段限制" name="type"></el-checkbox>
                            <el-checkbox label="次数限制/周" name="type"></el-checkbox>
                            <el-checkbox label="优秀续会" name="type"></el-checkbox>
                            <el-checkbox label="营销活动" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="额度卡">
                        <el-button type="primary">上传图片...</el-button>
                        <el-button type="primary">取消额度卡</el-button>
                    </el-form-item>
                    <div class="border"></div>
                    <h4>价格设置</h4>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="基本价格">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="补卡费">
                                <el-input type="text" v-model="form.name" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="停卡费">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="转卡费">
                                <el-input type="text" v-model="form.name" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="转店费">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="续费折扣">
                                <el-input type="text" v-model="form.name" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="新会员工本费">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="老会员工本费">
                                <el-input type="text" v-model="form.name" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="Inbody体验">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="健身计划">
                                <el-input type="text" v-model="form.name" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="PT课程1节">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="赠品包">
                                <el-input type="text" v-model="form.name" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="赠送卡">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="赠送私教">
                                <el-input type="text" v-model="form.number" class="input_box" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="课程标号">
                                <el-input type="text" v-model="form.name" class="input_box" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="border"></div>
                    <h4>通店详细设置</h4>

                    <el-form-item label="可选择门店数量">
                        <el-input type="number" v-model="form.maxMan" class="input_box" />
                    </el-form-item>
                    <div class="border"></div>
                    <h4>二维码设置</h4>
                    <el-form-item>
                        <el-checkbox-group v-model="form.state">
                            <el-checkbox label="二维码专用" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item class="btn">
                        <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="tabelClass">
            <h3 class="titex">入场时段限制</h3>
            <el-table :data="form.table" border style="width: 90%;margin: 0 auto;" ref="dataTable">
                <el-table-column prop="data" label="日期编码"></el-table-column>
                <el-table-column prop="minData" label="状态"></el-table-column>
                <el-table-column prop="maxData" label="开始时间"></el-table-column>
                <el-table-column prop="minPrice" label="介绍时间"></el-table-column>
                <el-table-column prop="storeName" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="addBtn">
                <span>
                    <i class="el-icon-circle-plus"></i> 增加一行
                </span>
            </div>
            <h3 class="titex">门店级别设置</h3>
            <el-table :data="form.table" border style="width: 90%;margin: 0 auto;" ref="dataTable">
                <el-table-column prop="data" label="门店级别"></el-table-column>
                <el-table-column prop="minData" label="折扣"></el-table-column>
                <el-table-column prop="storeName" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="addBtn">
                <span>
                    <i class="el-icon-circle-plus"></i> 增加一行
                </span>
            </div>
            <h3 class="titex">销量折扣设置</h3>
            <el-table :data="form.table" border style="width: 90%;margin: 0 auto;" ref="dataTable">
                <el-table-column prop="data" label="数量下限"></el-table-column>
                <el-table-column prop="minData" label="数量上限"></el-table-column>
                <el-table-column prop="maxData" label="折扣"></el-table-column>
                <el-table-column prop="storeName" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="addBtn">
                <span>
                    <i class="el-icon-circle-plus"></i> 增加一行
                </span>
            </div>
            <h3 class="titex">多人卡设置</h3>
            <el-table :data="form.table" border style="width: 90%;margin: 0 auto;" ref="dataTable">
                <el-table-column prop="data" label="使用人类型"></el-table-column>
                <el-table-column prop="minData" label="使用人数量"></el-table-column>
                <el-table-column prop="maxData" label="增加费用/人"></el-table-column>
                <el-table-column prop="minPrice" label="是否可以增加"></el-table-column>
                <el-table-column prop="storeName" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="addBtn">
                <span>
                    <i class="el-icon-circle-plus"></i> 增加一行
                </span>
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
                state: [],
                maxMan: '',
                states: '',
                type: '',
                remarks: '',
                date1: '',
                date2: '',
            },
            choose1: [
                {
                    label: '1',
                    value: '2'
                }
            ],
            store: []
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
        onSubmit() {}
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
    height: auto;
    width: 45%;
    margin: 0 20px 100px 20px;
    border: 10px solid #f4f4f4;
}
.tabelClass {
    width: 40%;
    padding: 20px;
    height: auto;
    overflow: auto;
    border: 10px solid #f4f4f4;
    display: inline-block;
    h3 {
        font-size: 13px;
        padding-left: 30px;
        margin: 10px 0;

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
}
.aptable {
    width: 48% !important;
    margin-top: 20px;
    margin-left: 20px;
}
.appmm {
    width: 100% !important;
    background: white;
    height: auto;
    padding: 20px 0;
    position: relative;
    display: flex;
}
.appx {
    width: 95% !important;
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
h4 {
    padding: 0 30px;
    margin: 20px 0 10px;
    color: grey;
}
.btn {
    display: flex;
    justify-content: center;
    width: 35%;
    position: absolute;
    left: 0;
    bottom: 50px;
}
.border {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
}
.el-input {
    width: 100% !important;
}
</style>
