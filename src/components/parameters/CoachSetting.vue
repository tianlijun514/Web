<!-- vue快捷创建组件 -->
<template>
    <div class="APPX">
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="名称">
                <el-input v-model="num.store"></el-input>
            </el-form-item>
            <el-form-item label="等级">
                <el-select v-model="num.level">
                    <el-option label="全部" value></el-option>
                    <el-option
                        v-for="(item,index) in level"
                        :label="item.label"
                        :value="item.value"
                        :key="index+'a'"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="类型">
                <el-select v-model="num.type">
                    <el-option label="全部" value></el-option>
                    <el-option
                        v-for="(item,index) in type"
                        :label="item.label"
                        :value="item.value"
                        :key="index+'b'"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="serch">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="xinzheng">新增</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共{{coach.t}}条记录/显示{{num.page}}页</span>
        <el-table :data="coach.d" border style="width: 100%;text-align:center">
            <el-table-column prop="number" label="编号"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="leavel" label="等级"></el-table-column>
            <el-table-column prop="coachType" label="类型"></el-table-column>
            <el-table-column prop="states" label="状态"></el-table-column>
            <el-table-column prop="storeName" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="jump(scope.row)" type="primary">修改</el-button>
                    <el-button size="mini" @click="dalete(scope.row)" type="primary">删除</el-button>
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
                :total="coach.t"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'inexhetong',
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
            }
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ level: state => state.silent.coachLevel, type: state => state.silent.coachType, coach: state => state.silent.coach })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['postPrivateCourseInformation', 'postCoach', 'updateCoach']),
        serch() {
            this.postCoach(this.num);
        },
        handleSizeChange(val) {
            this.num.size = val;
            this.num.page = 1;
            this.postCoach(this.num);
        },
        handleCurrentChange(val) {
            this.num.page = val;
            this.postCoach(this.num);
        },
        jump(e) {
            this.$router.push({ path: '/parameters26', query: { data: e } });
        },
        dalete(e) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                e.state2 = 3;
                this.updateCoach(e).then(res => {
                    if (res == 'yes') {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.postCoach(this.num);
                    }
                });
            });
        },
        xinzheng() {
            this.$router.push('/parameters17');
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.postPrivateCourseInformation('J0001');
        this.postPrivateCourseInformation('J0002');
        this.postCoach(this.num);
    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        
    },
    beforeCreate() {}, // 生命周期 - 创建之前
    beforeMount() {}, // 生命周期 - 挂载之前
    beforeUpdate() {}, // 生命周期 - 更新之前
    updated() {}, // 生命周期 - 更新之后
    beforeDestroy() {}, // 生命周期 - 销毁之前
    destroyed() {}, // 生命周期 - 销毁完成
    activated() {
        this.postCoach(this.num);
    } // 如果页面有keep-alive缓存功能，这个函数会触发
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
