<!-- vue快捷创建组件 -->
<template>
    <div class="APPX">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input type="text" v-model="num.store" class="input_box" :disabled="true" />
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="num.state" class="sex">
                    <el-option
                        label="全部"
                        value=""
                    ></el-option>
                    <el-option
                        v-for="(item,index) in cardType"
                        :label="item.label"
                        :value="item.value"
                        :key="index+'a'"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="卡号范围">
                <el-col :span="11">
                    <el-input type="text" v-model="num.start" class="input_box" />
                </el-col>

                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-input type="text" v-model="num.end" class="input_box" />
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="add">删除配卡</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共{{deliveryCardsSearch.t}}条记录/显示{{num.page}}页</span>
        <el-table :data="deliveryCardsSearch.d" border style="width: 100%;text-align:center">
            <el-table-column type="selection" label="状态"></el-table-column>
            <el-table-column type="index" label="编号"></el-table-column>
            <el-table-column prop="sotreName" label="门店名称"></el-table-column>
            <el-table-column prop="cardId" label="卡号"></el-table-column>
            <el-table-column prop="name" label="卡种"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column prop="receiveDate" label="使用日期"></el-table-column>
            <el-table-column prop="memberId" label="会员编号"></el-table-column>
        </el-table>

        <div class="uys">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="num.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="deliveryCardsSearch.t"
            ></el-pagination>
        </div>
        <Dialog :isState="dialogShow" />
    </div>
</template>
<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
import Dialog from './operationDialog';
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
                state: '',
                start: '',
                end:'',
            },
            table: [{ name: '1111' }],
            dialogShow: ''
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({cardType:state=>state.silent.cardType,deliveryCardsSearch:state=>state.silent.deliveryCardsSearch})
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['postPrivateCourseInformation','DeliveryCardsSearch']),
        handleSizeChange(val) {},
        handleCurrentChange(val) {},
        add() {}
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.postPrivateCourseInformation('CD001')
        this.DeliveryCardsSearch(this.num)
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
.line{
    text-align: center;
}
</style>
