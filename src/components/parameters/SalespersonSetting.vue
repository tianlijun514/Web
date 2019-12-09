<!-- vue快捷创建组件 -->
<template>
    <div class="APPX">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="名称">
                <el-input type="text" v-model="form.name" class="input_box" />
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
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="add">新增</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共0条记录/显示1页</span>
        <el-table :data="table" border style="width: 100%;text-align:center">
            <el-table-column prop="name" label="编号"></el-table-column>
            <el-table-column prop="name" label="名称" width="300"></el-table-column>
            <el-table-column prop="name" label="门店"></el-table-column>
            <el-table-column prop="name" label="状态"></el-table-column>
            <el-table-column label="操作" width="260">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary">修改</el-button>
                    <el-button size="mini" type="primary">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="uys">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="num.page"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="num.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="1"
            ></el-pagination>
        </div>
        <Dialog :isState="dialogShow" />
    </div>
</template>
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
import Dialog from './dialog'
export default {
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {
      Dialog
    },
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
            form:{
                name:'',
                state:false
            },

            choose1: [
                {
                    label: '1',
                    value: '2'
                }
            ],
            table: [{ name: '1111' }],
            dialogShow:'',
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
        add() {
            if(this.dialogShow!='addSalesman'){
              this.dialogShow='addSalesman'
            }else{
              this.dialogShow='addSalesman1'
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
