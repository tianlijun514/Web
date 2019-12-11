<!-- vue快捷创建组件 -->
<template>
    <div class="APPX">
        <p>设置权限 - 管理员组</p>
        <el-table
            :data="table"
            border
            style="width: 100%;text-align:center"
            row-key="name"
            @select="onTableSelect"
            :row-style="setStyle"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        >
            <el-table-column prop="name" label="会员" width="200"></el-table-column>
            <el-table-column type="selection" label="选择"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-checkbox-group
                        :disabled="scope.row.isState"
                        v-model="scope.row.checkList"
                        v-if="scope.row.operation==1"
                    >
                        <el-checkbox label="新增"></el-checkbox>
                        <el-checkbox label="修改"></el-checkbox>
                        <el-checkbox label="删除"></el-checkbox>
                        <el-checkbox label="导出"></el-checkbox>
                        <el-checkbox label="会籍合同"></el-checkbox>
                        <el-checkbox label="租籍合同"></el-checkbox>
                        <el-checkbox label="私教合同"></el-checkbox>
                        <el-checkbox label="商品消费"></el-checkbox>
                        <el-checkbox label="出入场"></el-checkbox>
                        <el-checkbox label="私教预约"></el-checkbox>
                        <el-checkbox label="客诉记录"></el-checkbox>
                        <el-checkbox label="定金合同"></el-checkbox>
                        <el-checkbox label="停卡记录"></el-checkbox>
                        <el-checkbox label="补卡记录"></el-checkbox>
                        <el-checkbox label="储值卡"></el-checkbox>
                        <el-checkbox label="挂失"></el-checkbox>
                    </el-checkbox-group>
                    <el-checkbox-group
                        :disabled="scope.row.isState"
                        v-model="scope.row.checkList"
                        v-else-if="scope.row.operation==2"
                    >
                        <el-checkbox label="导出"></el-checkbox>
                    </el-checkbox-group>
                    <el-checkbox-group
                        :disabled="scope.row.isState"
                        v-model="scope.row.checkList"
                        v-else-if="scope.row.operation==3"
                    >
                        <el-checkbox label="导出"></el-checkbox>
                        <el-checkbox label="退定金"></el-checkbox>
                        <el-checkbox label="合并定金"></el-checkbox>
                    </el-checkbox-group>
                    <el-checkbox-group
                        :disabled="scope.row.isState"
                        v-model="scope.row.checkList"
                        v-else-if="scope.row.operation==4"
                    >
                        <el-checkbox label="新增"></el-checkbox>
                    </el-checkbox-group>
                    <el-checkbox-group
                        :disabled="scope.row.isState"
                        v-model="scope.row.checkList"
                        v-else-if="scope.row.operation==5"
                    >
                        <el-checkbox label="新增"></el-checkbox>
                        <el-checkbox label="上传"></el-checkbox>
                        <el-checkbox label="手机验证"></el-checkbox>
                        <el-checkbox label="运营经理确认"></el-checkbox>
                    </el-checkbox-group>
                    <el-checkbox-group
                        :disabled="scope.row.isState"
                        v-model="scope.row.checkList"
                        v-else-if="scope.row.operation==6"
                    >
                        <el-checkbox label="新增"></el-checkbox>
                        <el-checkbox label="停卡"></el-checkbox>
                        <el-checkbox label="补卡"></el-checkbox>
                        <el-checkbox label="转店"></el-checkbox>
                    </el-checkbox-group>
                    <el-checkbox-group
                        :disabled="scope.row.isState"
                        v-model="scope.row.checkList"
                        v-else-if="scope.row.operation==7"
                    >
                        <el-checkbox label="新增"></el-checkbox>
                        <el-checkbox label="续租"></el-checkbox>
                        <el-checkbox label="归还"></el-checkbox>
                    </el-checkbox-group>
                </template>
            </el-table-column>
        </el-table>
        <div></div>
    </div>
</template>
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            num: {
                size: 10,
                page: 1,
                store: '',
                level: '',
                type: ''
            },
            form: {
                name: '',
                state: false
            },

            choose1: [
                {
                    label: '1',
                    value: '2'
                }
            ],
            table: [
                {
                    name: '1111',
                    operation: '',
                    checkList: [],
                    isState: true,
                    color: true,
                    children: [
                        {
                            name: '2111',
                            operation: '1',
                            checkList: [],
                            isState: true
                        },
                        {
                            name: '2222',
                            operation: '2',
                            checkList: [],
                            isState: true
                        },
                        {
                            name: '23333',
                            operation: '3',
                            checkList: [],
                            isState: true
                        },
                        {
                            name: '222221',
                            operation: '4',
                            checkList: [],
                            isState: true
                        },
                        {
                            name: '222222',
                            operation: '5',
                            checkList: [],
                            isState: true
                        },
                        {
                            name: '222223',
                            operation: '6',
                            checkList: [],
                            isState: true
                        },
                        {
                            name: '222224',
                            operation: '7',
                            checkList: [],
                            isState: true
                        },
                        {
                            name: '222225',
                            operation: '2',
                            checkList: [],
                            isState: true
                        },
                        {
                            name: '222226',
                            operation: '5',
                            checkList: [],
                            isState: true
                        }
                    ]
                },
                {
                    name: '2111222',
                    operation: '',
                    checkList: [],
                    isState: true,
                    color: true
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
        handleSizeChange(val) {},
        handleCurrentChange(val) {},
        onTableSelect(rows, row) {
            if (row.isState) {
                row.isState = false;
            } else {
                row.isState = true;
                row.checkList = [];
            }
        },
        setStyle(row) {
            if (row.row.color) {
                return 'background:#f0f4ff';
            }
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
</style>
