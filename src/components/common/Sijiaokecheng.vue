<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" class="demo-form-inline">
            <el-dialog
                title="私教课程预约"
                :visible.sync="sijiao.show"
                tooltip-effect="dark"
                width="50%"
                :close-on-click-modal="false"
                :close-on-press-escape="false"
                :modal-append-to-body="false"
            >
                <el-form-item label="会员卡号">
                    <el-input v-model="form.membersId"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="chaxun">查询</el-button>
                </el-form-item>

                <br />

                <el-form-item label="会员姓名">
                    <el-input v-model="form.membersName" disabled></el-input>
                </el-form-item>

                <el-form-item label="会员编号">
                    <el-input v-model="form.membersNumber" disabled></el-input>
                </el-form-item>

                <el-form-item label="选择日期">
                    <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="选择时间">
                    <el-time-select
                        v-model="form.date2"
                        :picker-options="{
                            start: '08:00',
                            step: '01:00',
                            end: '22:00'
                        }"
                        placeholder="选择时间"
                    ></el-time-select>
                </el-form-item>

                <el-table
                    :data="tableData"
                    border
                    style="width: 100%;"
                    @row-click="handleSelectionChange"
                    :highlight-current-row="true"
                >
                    <el-table-column prop="contractNumber" label="合同号"></el-table-column>
                    <el-table-column prop="courseName" label="课程"></el-table-column>
                    <el-table-column prop="coachName" label="教练"></el-table-column>
                    <el-table-column prop="SYKS" label="剩余课时"></el-table-column>
                    <el-table-column prop="reservePrice" label="有效期" width="200">
                      <template slot-scope="scope">
                        <div>起始时间：{{scope.row.startDate}}</div>
                        <div>到期时间：{{scope.row.endDate}}</div>
                      </template>
                    </el-table-column>
                </el-table>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancel">取 消</el-button>
                    <el-button type="primary" @click="yes">确 定</el-button>
                </span>
            </el-dialog>
        </el-form>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Dialog',
    props: {
        sijiao: Object,
        contract: Array
    },
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            form: {
                membersNumber: '',
                membersName: '',
                membersId: '',
                date: '',
                date2: ''
            },
            tableData: [
                
            ],
            addData:{}
        };
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions(['getContractByCard','addAppointment']),
        handleSelectionChange(val) {
            this.addData=val
        },
        chaxun() {
            this.getContractByCard(this.form.membersId).then(res=>{
              if(res.data.d.length!=0){
                this.tableData=res.data.d
                this.form.membersName=this.tableData[0].memberName
                this.form.membersNumber=this.tableData[0].memberId
              }
              
            })
        },
        cancel(){
          this.form.membersName=''
          this.form.membersNumber=''
          this.form.membersId=''
          this.tableData=[]
          this.form.date=''
          this.form.date2=''
          this.sijiao.show=false
          this.addData={}
        },
        yes(){
          if(!this.form.membersId){
            this.$message('请输入会员卡号')
            return
          }else if(!this.addData.memberName){
            this.$message('会员卡号错误，请重新输入')
            return
          }else if(!this.form.date){
            this.$message('请选择日期')
            return
          }else if(!this.form.date2){
            this.$message('请选择时间')
            return
          }
          let date=new Date(this.form.date).getFullYear()+'-'+(new Date(this.form.date).getMonth()+1)+'-'+new Date(this.form.date).getDate()+' '+this.form.date2
          let data={mermberId:this.form.membersNumber,courseNumber:this.addData.courseNumber,appointmentDate:date,appointmentType:1,coachNumber:this.addData.coachNumber}
          this.addAppointment(data).then(res=>{
            if(res){
              this.$message({message:'预约成功',type:"success"})
              this.sijiao.show=false
              this.form.membersName=''
              this.form.membersNumber=''
              this.form.membersId=''
              this.tableData=[]
              this.form.date=''
              this.form.date2=''
              this.addData={}
              this.$emit('fun','yes')
            }
          })
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
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
<style scoped>
@import './../../assets/css/table.css';
.el-dialog__body {
    padding: 10px 20px !important;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
</style>
