<!-- vue快捷创建组件 -->
<template>
  <div class='app'>
    <el-form :inline="true" :model="chan" class="demo-form-inline">
      <el-form-item label="名称">
        <el-input v-model="chan.processName"></el-input>
      </el-form-item>

      <el-form-item label="类别">
        <el-select v-model="chan.processType" placeholder="请选择">
          <el-option value label="全部"> </el-option>
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="erkundigen">查询</el-button>
      </el-form-item>
      <!-- <el-form-item>
        <el-button type="primary" size="small" icon="view" @click='onAddMoney()'>新增</el-button>
      </el-form-item> -->
      <br>
      <span class="searchRst">查询结果：共{{gung.t}}条记录/显示{{chan.currentPage}}页</span>
      <el-table :data="gung.d" border style="width: 100%">
        <el-table-column fixed prop="number" label="编号" width="150"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="type" label="类别" width="150">
          <template slot-scope="scope">
            <span>{{scope.row.status==1?'会籍':scope.row.status==2?'状态':'删除'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="isfirst" label="初审" width="80">
          <template slot-scope="scope">
            <i :class="scope.row.isfirst==true?'el-icon-check':'el-icon-close'"></i>
          </template>
        </el-table-column>
        <el-table-column prop="issecond" label="复审" width="80">
          <template slot-scope="scope">
            <i :class="scope.row.issecond==true?'el-icon-check':'el-icon-close'"></i>
          </template>

        </el-table-column>
        <el-table-column prop="istherd" label="终审" width="80">
          <template slot-scope="scope">
            <i :class="scope.row.istherd==true?'el-icon-check':'el-icon-close'"></i>
          </template>

        </el-table-column>
        <el-table-column prop="status" label="状态" width="120">
          <template slot-scope="scope">
            <span>{{scope.row.status==1?'启用':'停用'}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-button @click="handledelete(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="chan.currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="gung.t">
        </el-pagination>
      </div>
    </el-form>
    <Shenpi :sverfahren='sverfahren' :ruleForm='ruleForm' @update='chaxun'></Shenpi>
  </div>

</template>

<script>
import Shenpi from "../common/Shenpi";
import { mapActions, mapState } from 'vuex';
import axios from "axios";
import { base } from '../js/url'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'business1',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Shenpi
  },
  data () {
    // 这里存放数据
    return {
      handleClose: '',
      dialogVisible: false,
      chan: {
        processName: '',
        processType: '',
        currentPage: 1,
        size: 10,
        total: 0,
      },
      ruleForm: {
        number: '',
        type: '',
        name: '',
        // isfirst: '',
        // issecond: '',
        // istherd: '',
        comment: '',
        status: '',
        checkList: [],

      },
      sverfahren: {
        show: false,
        title: "",
        option: "edit"
      },
      options: [
        {
          value: '1',
          label: '会籍'
        }, {
          value: '2',
          label: '私教'
        }, {
          value: '3',
          label: '定金'
        }, {
          value: '4',
          label: 'APP'
        }, {
          value: '5',
          label: '营运'
        }],
      value: '',
      tableData: {},
    }
  },
  // 监听属性 类似于data概念
  computed: {
    ...mapState({ gung: state => state.moduleB.gung })
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    ...mapActions(['genehmigung']),
    // 查询
    erkundigen () {
      this.genehmigung(this.chan)
      // .then(res=>{
      //   console.log(res.data)
      //   this.tableData=res
      // })
    },
    handleSizeChange (val) {
      this.chan.size = val;
      this.genehmigung(this.chan);

    },
    handleCurrentChange (val) {
      this.chan.currentPage = val;
      this.genehmigung(this.chan);
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },



    chaxun () {

    },
    // 修改
    handleClick (row) {
      console.log(row)
      this.sverfahren = {
        show: true,
        title: '修改',
        option: 'edit'
      }
      if (row.isfirst == true) {
        this.ruleForm.checkList.push('初审')
      } if (row.issecond == true) {
         this.ruleForm.checkList.push('复审')
      } if (row.istherd == true) {
        this.ruleForm.checkList.push('终审')
      }
      this.ruleForm.number = row.number
      this.ruleForm.name = row.name
      this.ruleForm.type = row.type
      this.ruleForm.status = row.status
    },


    // 删除
    handledelete (row) {
      console.log(row)
      this.$confirm('确定要删除此记录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.post(base + `/process/updateProcess/`,{
          id:row.id,
          status:3
        }).then(res => {
          console.log(res.data)
          if (res.data.code == 10000) {
            this.$message({
              message: '操作成功',
              type: 'success'
            });
            this.erkundigen();
          } else {
            this.$message.error('删除失败');
          }
        })
      })
    },

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.chaxun()
    this.erkundigen()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
@import './../../assets/css/table.css';
.app {
    width: 100% !important;
}
.block {
    width: 32%;
    margin: auto;
}
</style>
