<!-- vue快捷创建组件 -->
<template>
    <div>
        <!-- 新增门店 -->
        <el-dialog title="新增门店" :visible.sync="isShow1" width="45%" :before-close="handleClose">
            <el-form
                :model="form"
                :rules="rules"
                class="formbox demo-ruleForm"
                label-width="100px"
                style="width:400px;"
            >
                <el-form-item label="编号" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="类型">
                    <el-select v-model="form.store" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="地区">
                    <el-select v-model="form.store" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="地址" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="电话" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="联系人" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="传真" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="公司法人名称">
                    <el-select v-model="form.store" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="公章图片">
                    <div>
                        <img src alt />
                    </div>
                </el-form-item>
                <el-form-item label="IP地址" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="品牌类型">
                    <el-select v-model="form.store" class="sex">
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
                        <el-radio label="关店"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="排序" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item>
                    <el-checkbox-group v-model="form.state">
                        <el-checkbox label="制卡" name="type"></el-checkbox>
                        <el-checkbox label="需要纸质合同" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="备注" prop="name">
                    <el-input type="textarea" v-model="form.name" />
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow1 = false">取 消</el-button>
                <el-button type="primary" @click="isShow1 = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增区域管理 -->
        <el-dialog title="新增区域管理" :visible.sync="isShow2" width="674px" :before-close="handleClose">
            <div class="show2">
                <el-form
                    :model="form"
                    :rules="rules"
                    class="formbox demo-ruleForm"
                    label-width="100px"
                    style="width:300px;"
                >
                    <el-form-item label="编号" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="名称" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="区域类型">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="启用时间">
                        <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="禁用时间">
                        <el-date-picker v-model="form.date2" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="负责人">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="备注" prop="name">
                        <el-input type="textarea" v-model="form.name" />
                    </el-form-item>
                </el-form>
                <div>
                    <el-table
                        :data="table"
                        border
                        style="width: 300px"
                        @selection-change="handleSelectionChange"
                        height="350"
                        ref="dataTable"
                    >
                        <el-table-column type="selection" label="选择"></el-table-column>
                        <el-table-column prop="number" label="编号"></el-table-column>
                        <el-table-column prop="name" label="名称"></el-table-column>
                    </el-table>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow2 = false">取 消</el-button>
                <el-button type="primary" @click="isShow2 = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增参数 -->
        <el-dialog title="新增参数" :visible.sync="isShow3" width="400px" :before-close="handleClose">
            <el-form
                :model="form"
                :rules="rules"
                class="formbox demo-ruleForm"
                label-width="100px"
                style="width:300px;"
            >
                <el-form-item label="参数名" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="说明" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="内容" prop="name">
                    <el-input type="textarea" v-model="form.name" />
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow3 = false">取 消</el-button>
                <el-button type="primary" @click="isShow3 = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增营销活动 -->
        <el-dialog title="新增营销活动" :visible.sync="isShow4" width="800px" :before-close="handleClose">
            <div class="show2">
                <el-form
                    :model="form"
                    :rules="rules"
                    class="formbox demo-ruleForm"
                    label-width="100px"
                    style="width:300px;"
                >
                    <el-form-item label="活动名称" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="启用时间">
                        <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="禁用时间">
                        <el-date-picker v-model="form.date2" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-radio-group v-model="form.states">
                            <el-radio label="正常"></el-radio>
                            <el-radio label="停用"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="备注" prop="name">
                        <el-input type="textarea" v-model="form.name" />
                    </el-form-item>
                </el-form>
                <div>
                    <p>可售门店</p>
                    <el-table
                        :data="table"
                        border
                        style="width: 300px"
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
            <div class="show2">
                <div class="table">
                    <p>卡种价格</p>
                    <el-table
                        :data="table"
                        border
                        style="width: 350px"
                        @selection-change="handleSelectionChange"
                        height="350"
                        ref="dataTable"
                    >
                        <el-table-column prop="number" label="卡种"></el-table-column>
                        <el-table-column prop="name" label="价格"></el-table-column>
                    </el-table>
                </div>
                <div class="table">
                    <p>选择礼品</p>
                    <el-table
                        :data="table"
                        border
                        style="width: 350px"
                        @selection-change="handleSelectionChange"
                        height="350"
                        ref="dataTable"
                    >
                        <el-table-column type="selection" label="选择"></el-table-column>
                        <el-table-column prop="number" label="编号"></el-table-column>
                        <el-table-column prop="name" label="名称"></el-table-column>
                    </el-table>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow4 = false">取 消</el-button>
                <el-button type="primary" @click="isShow4 = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增用户权限组 -->
        <el-dialog
            title="新增用户权限组"
            :visible.sync="isShow5"
            width="400px"
            :before-close="handleClose"
        >
            <el-form
                :model="form"
                :rules="rules"
                class="formbox demo-ruleForm"
                label-width="100px"
                style="width:300px;"
            >
                <el-form-item label="编号" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="中文名" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="英文名" prop="name">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="安全级别">
                    <el-select v-model="form.store" class="sex">
                        <el-option
                            v-for="(item,index) in choose1"
                            :label="item.label"
                            :value="item.value"
                            :key="index+'a'"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="允许IP">
                    <el-input type="text" v-model="form.name" />
                </el-form-item>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.states">
                        <el-radio label="正常"></el-radio>
                        <el-radio label="停用"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow5 = false">取 消</el-button>
                <el-button type="primary" @click="isShow5 = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 新增用户 -->
        <el-dialog title="新增用户" :visible.sync="isShow6" width="800px" :before-close="handleClose">
            <div class="show2">
                <el-form
                    :model="form"
                    :rules="rules"
                    class="formbox demo-ruleForm"
                    label-width="100px"
                    style="width:300px;"
                >
                    <el-form-item label="编号" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="登录密码" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="中文名" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="英文名" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="权限组">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="平板登录门店">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="职务">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="手机号" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="电话" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="生日">
                        <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="工号" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="安全级别">
                        <el-select v-model="form.store" class="sex">
                            <el-option
                                v-for="(item,index) in choose1"
                                :label="item.label"
                                :value="item.value"
                                :key="index+'a'"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                     <el-form-item label="允许IP" prop="name">
                        <el-input type="text" v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="过期时间">
                        <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-radio-group v-model="form.states">
                            <el-radio label="正常"></el-radio>
                            <el-radio label="停用"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
                <div>
                    <p>可售登录门店</p>
                    <el-table
                        :data="table"
                        border
                        style="width: 350px"
                        @selection-change="handleSelectionChange"
                        height="400"
                        ref="dataTable"
                    >
                        <el-table-column type="selection" label="选择"></el-table-column>
                        <el-table-column prop="number" label="编号"></el-table-column>
                        <el-table-column prop="name" label="名称"></el-table-column>
                    </el-table>
                    <p>可售查询区域</p>
                    <el-table
                        :data="table"
                        border
                        style="width: 350px"
                        @selection-change="handleSelectionChange"
                        height="400"
                        ref="dataTable"
                    >
                        <el-table-column type="selection" label="选择"></el-table-column>
                        <el-table-column prop="number" label="编号"></el-table-column>
                        <el-table-column prop="name" label="名称"></el-table-column>
                    </el-table>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow6 = false">取 消</el-button>
                <el-button type="primary" @click="isShow6 = false">确 定</el-button>
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
            rules: {
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
            },
            choose1: [
                {
                    label: '1',
                    value: '2'
                }
            ],
            table: [{ name: '1111' }]
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({})
    },
    // 监控data中的数据变化
    watch: {
        isState(new0, old) {
            if (new0 == 'addStore' || new0 == 'addStore1') {
                this.isShow1 = true;
            } else if (new0 == 'addArea' || new0 == 'addArea1') {
                this.isShow2 = true;
            } else if (new0 == 'addParameter' || new0 == 'addParameter1') {
                this.isShow3 = true;
            } else if (new0 == 'addMarketing' || new0 == 'addMarketing1') {
                this.isShow4 = true;
            } else if (new0 == 'addUserPermissions' || new0 == 'addUserPermissions1') {
                this.isShow5 = true;
            } else if (new0 == 'addUser' || new0 == 'addUser1') {
                this.isShow6 = true;
            }
        },
        
    },
    // 方法集合
    methods: {
        ...mapActions([]),
        handleClose(done) {
            done();
        },
        handleSelectionChange(){
            
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
.show2 {
    display: flex;
    justify-content: space-between;
    .table {
        margin-top: 20px;
    }
}
</style>

