<!-- vue快捷创建组件 -->
<template>
  <div class='boxs'>
    <el-tabs type="border-card">
      <el-tab-pane label="定金销售">

        <el-form ref="form" :model="form" label-width="80px" class="formbox">

          <div class="shenfen">
            <el-form-item label="会员类型">
              <el-select v-model="form.region" @change="typehui">
                <el-option label="1-新会员" value="1"></el-option>
                <el-option label="2-老会员" value="2"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="会员卡号" v-if="card=='2'">
              <el-input v-model="input" class="hname"></el-input>
            </el-form-item>
          </div>

          <div class='shenfen'>
            <el-form-item label="会员姓名">
              <el-input v-model="input" class="hname"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="form.regions">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="shenfen">
            <el-form-item label="证件号">
              <el-select v-model="form.region1">
                <el-option label="身份证" value="shanghai"></el-option>
                <el-option label="护照" value="beijing"></el-option>
                <el-option label="回乡证" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-input v-model="form.name" class="sinxex"></el-input>
          </div>

          <el-form-item label="手机号码">
            <el-input v-model="input" class="hname"></el-input>
          </el-form-item>

          <div class="shenfen">
            <el-form-item label="定金类型">
              <el-select v-model="form.region2" @change="dingjin">
                <el-option label="会籍定金" value="01"></el-option>
                <el-option label="私教定金" value="02"></el-option>
                <el-option label="停转补定金" value="03"></el-option>
                <el-option label="转让定金" value="04"></el-option>
                <el-option label="租箱定金" value="05"></el-option>
                <el-option label="商品定金" value="06"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="定金金额">
              <el-input v-model="input" class="hname"></el-input>
            </el-form-item>
          </div>

          <div v-if="wieder=='02'">
            <div class="shenfen">
              <el-form-item label="营销活动">
                <el-select v-model="form.region3">
                  <el-option label="不参加营销活动" value="yin"></el-option>
                  <el-option label="参加营销活动" value="yxbj"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="卡种类型" style="width:50%">
                <el-select v-model="cardtype">
                  <el-option label="H1002 - 闪电狼会员1月0元" value="yin"></el-option>
                  <el-option label="L210 - 连锁金卡12月2398" value="yxbj"></el-option>
                  <el-option label="L216 - 连锁金卡1年赠卡" value="yin"></el-option>
                  <el-option label="L293 - 连锁金卡3月0" value="yxbj"></el-option>
                  <el-option label="M80471 - 单店100次卡  3000" value="yin"></el-option>
                  <el-option label="N10265 - 单店12月1+X卡 0" value="yxbj"></el-option>
                  <el-option label="R1001 - 24城单店12月100次卡4000" value="yin"></el-option>
                  <el-option label="R1003 - 蓝色空间老卡1月0元" value="yxbj"></el-option>
                  <el-option label="R1004 - 蓝色空间老卡1月10次0元" value="yin"></el-option>
                  <el-option label="T1060 - 连锁金卡598续费2598" value="yxbj"></el-option>
                </el-select>
              </el-form-item>
            </div>

            <el-form-item label="卡种价格" style="width:50%">
              <el-input v-model="input" class="hname"></el-input>
            </el-form-item>
          </div>

          <el-form-item label="备注" style="width:100%">
            <el-input type="textarea" v-model="form.desc" style="width: 480px"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认并提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <!-- 定金拆分 -->

      <el-tab-pane label="定金拆分">
        <el-form ref="form" :model="form" label-width="80px" class="formbox">

          <div class="shenfen">
            <el-form-item label="定金编号" class="phone">
              <el-input v-model="input" class="hname"></el-input>
            </el-form-item>
            <button type="primary" @click="alerts()" class="btnte">...</button>
            <el-button type="text" @click="dialogVisible = true" class="btn">新增</el-button>
          </div>

          <template>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="xu" label="序号" width="80"></el-table-column>
              <el-table-column prop="kahao" label="会员卡号" width="100"></el-table-column>
              <el-table-column prop="name" label="会员姓名" width="100"></el-table-column>
              <el-table-column prop="Idmun" label="身份证号"></el-table-column>
              <el-table-column prop="djtyp" label="定金类型"></el-table-column>
              <el-table-column prop="money" label="定金金额"></el-table-column>
              <el-table-column prop="verne" label="备注"></el-table-column>
            </el-table>
          </template>

          <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="1">
            </el-pagination>
          </div>

          <el-dialog title="添加" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
            <el-form ref="form" :model="form" label-width="80px">
              <div class="shenfen">
                <el-form-item label="会员类型">
                  <el-select v-model="form.region">
                    <el-option label="1-新会员" value="11"></el-option>
                    <el-option label="2-老会员" value="22"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="会员卡号">
                  <el-input v-model="input" class="hname"></el-input>
                </el-form-item>

              </div>

              <div class='shenfen'>
                <el-form-item label="会员姓名">
                  <el-input v-model="input" class="hname"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-select v-model="form.regions">
                    <el-option label="男" value="001"></el-option>
                    <el-option label="女" value="002"></el-option>
                  </el-select>
                </el-form-item>
              </div>

              <div class="shenfen">
                <el-form-item label="证件号">
                  <el-select v-model="form.region1">
                    <el-option label="身份证" value="sheng"></el-option>
                    <el-option label="护照" value="beijing"></el-option>
                    <el-option label="回乡证" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-input v-model="form.name" class="sinxex"></el-input>
              </div>

              <el-form-item label="手机号码">
                <el-input v-model="input" class="hname"></el-input>
              </el-form-item>

              <div class="shenfen">
                <el-form-item label="定金类型">
                  <el-select v-model="form.region2">
                    <el-option label="会籍定金" value="01"></el-option>
                    <el-option label="私教定金" value="02"></el-option>
                    <el-option label="停转补定金" value="03"></el-option>
                    <el-option label="转让定金" value="04"></el-option>
                    <el-option label="租箱定金" value="05"></el-option>
                    <el-option label="商品定金" value="06"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="定金金额">
                  <el-input v-model="input" class="hname"></el-input>
                </el-form-item>
              </div>

                <div class="shenfen">
                  <el-form-item label="营销活动">
                    <el-select v-model="form.region3">
                      <el-option label="不参加营销活动" value="yin"></el-option>
                      <el-option label="参加营销活动" value="yxbj"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="卡种类型" style="width:50%">
                    <el-select v-model="cardtype">
                      <el-option label="H1002 - 闪电狼会员1月0元" value="yin"></el-option>
                      <el-option label="L210 - 连锁金卡12月2398" value="yxbj"></el-option>
                      <el-option label="L216 - 连锁金卡1年赠卡" value="yin"></el-option>
                      <el-option label="L293 - 连锁金卡3月0" value="yxbj"></el-option>
                      <el-option label="M80471 - 单店100次卡  3000" value="yin"></el-option>
                      <el-option label="N10265 - 单店12月1+X卡 0" value="yxbj"></el-option>
                      <el-option label="R1001 - 24城单店12月100次卡4000" value="yin"></el-option>
                      <el-option label="R1003 - 蓝色空间老卡1月0元" value="yxbj"></el-option>
                      <el-option label="R1004 - 蓝色空间老卡1月10次0元" value="yin"></el-option>
                      <el-option label="T1060 - 连锁金卡598续费2598" value="yxbj"></el-option>
                    </el-select>
                  </el-form-item>
              </div>

              <el-form-item label="卡种价格" style="width:50%">
                  <el-input v-model="input" class="hname"></el-input>
                </el-form-item>

              <el-form-item label="备注" style="width:100%">
                <el-input type="textarea" v-model="form.desc" style="width: 480px"></el-input>
              </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible">确认并添加</el-button>
            </span>
          </el-dialog>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <Dialog :dialog="dialog"></Dialog>
  </div>
</template>

<script>
import Dialog from '../common/Dialog'
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'indexdj',
  props: {

  },
  // import引入的组件需要注入到对象中才能使用
  components: {
    Dialog
  },
  data () {
    // 这里存放数据
    return {
      currentPage: 1,
      dialogVisible: false,
      dialog: {
        show: false
      },
      activeName: 'first',
      wieder: false,
      input: '',
      cardtype: '', //下拉框
      card: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [{
        xu: '1',
        kahao: '0001',
        name: '不不不',
        Idmun: '0000000',
        djtyp: '000000',
        money: '111',
        verne: '555555',
      }]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.chaxun();
    },
    alerts () {
      this.dialog.show = true;
    },
    handleClick (tab, event) {
      console.log(tab, event);
    },
    onSubmit () {
      console.log('submit!');
    },
    typehui (e) {
      this.card = e
      console.log(e)
    },
    dingjin (e) {
      this.wieder = e
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

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
.boxs {
    background: white;
}
.block {
    width: 50%;
    margin: auto;
}
.formbox {
    padding: 25px;
}
.hname {
    width: 200px;
}
.shenfen {
    display: flex;
}
.sinxex {
    width: 280px !important;
    margin-left: 5px;
}
.btnte {
    width: 25px !important;
    height: 28px !important;
    margin-left: 2px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
}
.btn {
    width: 45px !important;
    height: 28px !important;
    margin-left: 10px;
    text-align: center;
    background: #333;
    border: none;
    color: white;
    border-radius: 5px;
    margin-top: 2px;
}
</style>
