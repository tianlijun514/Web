<!-- vue快捷创建组件 -->
<template>
    <div class="tableBox">
        <!-- <mybtn btntext='删除' btnclss='yellow'></mybtn>  -->
        <el-form :inline="true" :model="num" class="demo-form-inline">
            <el-form-item label="门店">
                <el-input v-model="num.store" :disabled="true"></el-input>
            </el-form-item>

            <el-form-item label="会员卡号">
                <el-input v-model="num.membersId"></el-input>
            </el-form-item>

            <el-form-item label="会员编号">
                <el-input v-model="num.membersNumber"></el-input>
            </el-form-item>

            <el-form-item label="会员姓名/证件号/手机号">
                <el-input v-model="num.type"></el-input>
            </el-form-item>

            <el-form-item label="合同号">
                <el-input v-model="num.contract"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <span class="searchRst">查询结果：共{{listMembers.t}}条记录/显示{{num.page}}页</span>

        <el-table :data="listMembers.d" border style="width: 100%;text-align:center">
            <el-table-column label="序号" type="index" align="center"></el-table-column>
            <el-table-column prop="storeName" label="门店名称"></el-table-column>
            <el-table-column prop="memberId" label="会员编号"></el-table-column>
            <el-table-column prop="cardId" label="会员卡号"></el-table-column>
            <el-table-column prop="name" label="会员姓名"></el-table-column>
            <el-table-column prop="sex" label="性别">
              <template slot-scope="scope">
                <span>{{scope.row.sex==1?'男':'女'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="zjType" label="证件类型"></el-table-column>
            <el-table-column prop="zjNum" label="证件号"></el-table-column>
            <el-table-column prop="phoneNum" label="手机"></el-table-column>
            <el-table-column label="照片">
              <template slot-scope="scope">
                <span>{{scope.row.profilePhoto==1?'有':'无'}}</span>
              </template>
            </el-table-column>
            <el-table-column label="证件照">
              <template slot-scope="scope">
                <span>{{scope.row.isPhotoPath==1?'有':'无'}}</span>
              </template>
            </el-table-column>
            <el-table-column scope label="详细">
                <!-- <button @click="handleLook(scope.$index, scope.row)" class="btns">查看</button> -->
                <template slot-scope="scope">
                  <el-button size="mini" type="primary" @click="handleLook(scope.row)">查看</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="listMembers.t"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
// import mybtn from '../page/btn'
// import tables from '../table/boxliTable'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'boxli',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {
        // mybtn: mybtn,
    },
    data() {
        // 这里存放数据
        return {
            num: {
                page: 1,
                size: 10,
                contract: '',
                store: '',
                type: '',
                membersNumber: '',
                membersId: '',
            }
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState({ listMembers: state => state.silent.listMembers })
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['postListMembers']),
        search() {
            this.postListMembers(this.num);
        },
        handleLook(e){
          this.$router.push({path:'/hymesg',query:{id:e.memberId}})
        },
        handleSizeChange(val) {
            this.num.size = val;
            this.postListMembers(this.num);
        },
        handleCurrentChange(val) {
            this.num.page = val;
            this.postListMembers(this.num);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.postListMembers(this.num);
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
    activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
@import './../../assets/css/table.css';
.tableBox {
    width: 100%;
}
.btns {
    background: #333;
    border: none;
    color: white;
    width: 50px;
}
.block {
    width: 550px;
    margin: auto;
}
</style>
