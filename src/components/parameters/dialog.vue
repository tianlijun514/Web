<!-- vue快捷创建组件 -->
<template>
    <div>
        <!-- 新增卡种区域 -->
        <el-dialog title="新增卡种区域" :visible.sync="isShow1" width="35%" :before-close="handleClose">
            <el-form
                :inline="true"
                :model="form"
                :rules="rules"
                class="demo-form-inline"
                label-width="100px"
            >
                <el-form-item label="编号" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="备注" prop="name">
                    <el-input type="textarea" v-model="form.name" />
                </el-form-item>
            </el-form>
            <h4 style="padding-left:20px;">门店</h4>
            <el-table :data="table" border style="width: 90%;text-align:center;margin:0 auto;">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="name" label="编号"></el-table-column>
                <el-table-column prop="name" label="名称"></el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow1 = false">取 消</el-button>
                <el-button type="primary" @click="isShow1 = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增销售员 -->
        <el-dialog title="新增销售员" :visible.sync="isShow2" width="35%" :before-close="handleClose">
            <el-form
                :inline="true"
                :model="form"
                :rules="rules"
                class="demo-form-inline"
                label-width="100px"
            >
                <el-form-item label="编号" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="门店">
                    <el-select v-model="form.name" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="入职日期">
                    <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="岗位">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.name" />
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.states">
                        <el-radio label="在职"></el-radio>
                        <el-radio label="离职"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow2 = false">取 消</el-button>
                <el-button type="primary" @click="isShow2 = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增租箱 -->
        <el-dialog title="新增租箱" :visible.sync="isShow3" width="40%" :before-close="handleClose">
            <el-form :model="form" class="demo-form-inline" label-width="60px">
                <el-form-item label="门店">
                    <el-select v-model="form.name" class="sex">
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
                        <el-form-item label="箱号">
                            <el-input type="text" v-model="form.name" />
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="-">
                            <el-input type="text" v-model="form.name" />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="类型">
                    <el-select v-model="form.name" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.name" />
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.states">
                        <el-radio label="正常"></el-radio>
                        <el-radio label="停用"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow3 = false">取 消</el-button>
                <el-button type="primary" @click="isShow3 = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增支付方式 -->
        <el-dialog title="新增支付方式" :visible.sync="isShow4" width="40%" :before-close="handleClose">
            <el-form :inline="true" :model="form" class="demo-form-inline" label-width="120px">
                <el-form-item label="编号">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="名称">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="填写备注">
                    <el-radio-group v-model="form.state">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="财务分类">
                    <el-select v-model="form.name" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="备注" v-show="form.state=='是'">
                    <el-input type="textarea" v-model="form.name" />
                </el-form-item>

                <el-form-item label="状态">
                    <el-radio-group v-model="form.states">
                        <el-radio label="有效"></el-radio>
                        <el-radio label="失效"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="显示顺序">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow4 = false">取 消</el-button>
                <el-button type="primary" @click="isShow4= false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增税号 -->
        <el-dialog title="新增税号" :visible.sync="isShow5" width="40%" :before-close="handleClose">
            <el-form :inline="true" :model="form" class="demo-form-inline" label-width="120px">
                <el-form-item label="税号">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="名称">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="地址">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="电话">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="银行名称">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="银行账号">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="税率">
                    <el-select v-model="form.name" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.state">
                        <el-radio label="正常"></el-radio>
                        <el-radio label="作废"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow5 = false">取 消</el-button>
                <el-button type="primary" @click="isShow5= false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 修改租箱价格 -->
        <el-dialog title="修改租箱价格" :visible.sync="isShow6" width="40%" :before-close="handleClose">
            <p>门店等级：等级1</p>
            <el-table :data="table" border style="width: 100%;text-align:center">
                <el-table-column prop="name" label="编号"></el-table-column>
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="name" label="年租金">
                    <template slot-scope="scope">
                        <el-input type="text" v-model="form.name" class="input_box" />
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="月租金">
                    <template slot-scope="scope">
                        <el-input type="text" v-model="form.name" class="input_box" />
                    </template>
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow6 = false">取 消</el-button>
                <el-button type="primary" @click="isShow6= false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 门店等级设置 -->
        <el-dialog title="门店等级设置" :visible.sync="isShow7" width="60%" :before-close="handleClose">
            <el-table :data="table" border style="width: 100%;text-align:center">
                <el-table-column prop="name" label="编号"></el-table-column>
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="name" label="等级" width="500">
                    <template slot-scope="scope">
                        <el-radio-group v-model="form.state">
                            <el-radio label="等级一"></el-radio>
                            <el-radio label="等级二"></el-radio>
                            <el-radio label="等级三"></el-radio>
                            <el-radio label="等级四"></el-radio>
                            <el-radio label="等级五"></el-radio>
                        </el-radio-group>
                    </template>
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow7 = false">取 消</el-button>
                <el-button type="primary" @click="isShow7= false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增课程 -->
        <el-dialog title="新增课程" :visible.sync="isShow8" width="50%" :before-close="handleClose">
            <el-form :model="isShow8Form" class="demo-form-inline" label-width="80px">
                <el-form-item label="课程">
                    <el-select v-model="isShow8Form.course" class="sex">
                        <el-option
                            v-for="(item,index) in course"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="教练">
                    <el-select v-model="isShow8Form.coach" class="sex">
                        <el-option
                            v-for="(item,index) in coach"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="教室">
                    <el-select v-model="isShow8Form.coach" class="sex">
                        <el-option
                            v-for="(item,index) in coach"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="日期" style="margin-left:0;">
                            <el-date-picker v-model="isShow8Form.date" type="date" placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item>
                            <el-time-select
                                v-model="isShow8Form.date2"
                                :picker-options="{
                            start: '08:00',
                            step: '00:05',
                            end: '22:00'
                        }"
                                placeholder="选择时间"
                            ></el-time-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item label="人数">
                    <el-input type="number" v-model="isShow8Form.number" />
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="isShow8Form.remarks"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow8 = false">取 消</el-button>
                <el-button type="primary" @click="isShow8Yes">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

import { mapActions, mapState } from 'vuex';
export default {
    name: 'indexxs',

    props: ['isState'],
    // import引入的组件需要注入到对象中才能使用
    data() {
        // 这里存放数据
        return {
            form: {
                number: '',
                name: '',
                store: '',
                maxMan: '',
                date: '',
                date2: '',
                state: '是',
                states: '正常',
                type: '',
                remarks: ''
            },
            isShow1: false,
            isShow2: false,
            isShow3: false,
            isShow4: false,
            isShow5: false,
            isShow6: false,
            isShow7: false,
            isShow8: false,
            isShow8Form:{
                name:'',
                coach:'',
                course:'',
                remarks:'',
                date:'',
                date2:'',
                number:'',
                classRoom:'',
            },
            coach: [],
            course: [],
            rules: {
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
            },
            choose1: [
                {
                    label: '1',
                    value: '2'
                }
            ],
            table: [{ name: '1111' }],
            
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({})
    },
    // 监控data中的数据变化
    watch: {
        isState(new0, old) {
            if (new0 == 'cardArea' || new0 == 'cardArea1') {
                this.isShow1 = true;
            } else if (new0 == 'addSalesman' || new0 == 'addSalesman1') {
                this.isShow2 = true;
            } else if (new0 == 'addRentBox' || new0 == 'addRentBox1') {
                this.isShow3 = true;
            } else if (new0 == 'addPayMethods' || new0 == 'addPayMethods1') {
                this.isShow4 = true;
            } else if (new0 == 'addTax' || new0 == 'addTax1') {
                this.isShow5 = true;
            } else if (new0 == 'updatePrice' || new0 == 'updatePrice1') {
                this.isShow6 = true;
            } else if (new0 == 'storeLevel' || new0 == 'storeLevel1') {
                this.isShow7 = true;
            } else if (new0 == 'addCourse' || new0 == 'addCourse1') {
                this.isShow8 = true;
                this.getCourseBySelect().then(res => {
                    for (let i in res.list) {
                        this.course.push({ label: res.list[i].name, value: res.list[i].number });
                    }
                });
                this.getqueryCoachBySelect().then(res => {
                    for (let i in res.list) {
                        this.coach.push({ label: res.list[i].name, value: res.list[i].number });
                    }
                });
            }
        }
    },
    // 方法集合
    methods: {
        ...mapActions(['getCourseBySelect', 'getqueryCoachBySelect','addCourseClass']),
        handleClose(done) {
            done();
        },
        isShow8Yes(){
            console.log(this.isShow8Form)

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
.el-form-item__content {
    display: flex;
}
</style>

