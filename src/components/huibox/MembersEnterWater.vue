<!-- vue快捷创建组件 -->
<template>
    <div class="app">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="未归还手环">
                <el-input v-model="formInline.user"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">点击归还</el-button>
            </el-form-item>

            <el-form-item>
                <el-input v-model="formInline.user"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
            <el-form-item label="今日签到人数：">
                <div>32人</div>
            </el-form-item>

            <el-form-item label="今日退签人数：">
                <div>2人</div>
            </el-form-item>
        </el-form>
        <div class="label">
            <div class="red" @click="redClick">123</div>
            <div class="green" @click="greenClick">321</div>
            <div class="red">123</div>
            <div class="green">321</div>
            <div class="red">123</div>
            <div class="green">321</div>
        </div>
        <div class="course">
            <div class="courseTitle">
                <span>课程播报</span>
                <el-button type="text" icon="el-icon-refresh-right">刷新课程</el-button>
                <el-button type="text" icon="el-icon-date">更多课程</el-button>
            </div>
            <div class="content">
                <el-popover placement="top" width="200" trigger="hover">
                    <div class="tooltip2">
                        上课时间：18:50
                        <br />地点：平衡绿教室
                        <br />教练：司雯
                    </div>
                    <div slot="reference">
                        <span>18:50</span>
                        <br />
                        <span>操课：哈他瑜伽</span>
                    </div>
                </el-popover>
                <el-tooltip placement="top">
                    <div slot="content" class="tooltip">
                        上课时间：18:50
                        <br />地点：平衡绿教室
                        <br />教练：司雯
                    </div>
                    <div>
                        <span>18:50</span>
                        <br />
                        <span>操课：哈他瑜伽</span>
                    </div>
                </el-tooltip>
                <el-tooltip placement="top">
                    <div slot="content" class="tooltip">
                        上课时间：19:50
                        <br />地点：平衡绿教室
                        <br />教练：司雯
                    </div>
                    <div>
                        <span>19:50</span>
                        <br />
                        <span>操课：哈他瑜伽2</span>
                    </div>
                </el-tooltip>
            </div>
        </div>
        <el-table :data="table" border style="width: 100%;text-align: left;">
            <el-table-column prop="name" label="姓名">
                <template slot-scope="scope">
                    <div class="nameClass" @click="isShow4=true">{{scope.row.name}}</div>
                </template>
            </el-table-column>
            <el-table-column label="照片">
                <template slot-scope="scope">
                    <img src alt />
                </template>
            </el-table-column>
            <el-table-column prop="name" label="会员信息">
                <template slot-scope="scope">
                    <div>性别：男</div>
                    <div>电话：11111111</div>
                    <div>卡号：111111111</div>
                    <el-tooltip
                        class="item"
                        effect="dark"
                        content="备注：促销活动 买一年送一年 赠送一年无现金价值 不停不退不转 赠运动包*1"
                        placement="top"
                    >
                        <div class="tableTooltip">备注：促销活动 买一年送一年 赠送一年无现金价值 不停不退不转 赠运动包*1</div>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="充值信息">
                <template slot-scope="scope">
                    <div>时间卡：2021-06-17</div>
                    <div>私教卡：总剩余1次</div>
                    <div>次 卡：总剩余0次</div>
                    <div>储值卡：余额￥0</div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="预约信息">
                <template slot-scope="scope">
                    <div>预约课程：无</div>
                    <div>预约教练：无</div>
                    <div>上课房间：</div>
                    <div>预约时段：-</div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="签到/签退时间">
                <template slot-scope="scope">
                    <div class="date">
                        <div class="prompt">到</div>
                        <div>12-09 17:23</div>
                    </div>
                    <div class="date">
                        <div class="prompt2">退</div>
                        <div>-</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="入场状态">
                <template slot-scope="scope">
                    <div>已入场</div>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="isShow1=true">借出手环</el-button>
                    <el-button size="mini" type="primary" @click="isShow2=true">更多操作</el-button>
                    <el-button size="mini" type="primary">打印小票</el-button>
                    <el-button size="mini" type="primary" @click="isShow3=true">签到记录</el-button>
                    <el-button size="mini" type="primary">归还手环</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="40"
            ></el-pagination>
        </div>
        <el-dialog
            title="归还0000号手环"
            :visible.sync="isShow1"
            width="600px"
            :before-close="handleClose"
        >
            <div class="dialogContent">
                <div class="img">
                    <div>
                        <img src alt />
                    </div>
                    <h4>hhh</h4>
                    <p>123456789</p>
                </div>
                <div class="input1">
                    <div>
                        <el-input type="text"></el-input>
                    </div>
                    <p>签到备注</p>
                    <div>
                        <el-input type="textarea"></el-input>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow1 = false">取 消</el-button>
                <el-button type="primary" @click="isShow1 = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title :visible.sync="isShow2" width="800px" :before-close="handleClose">
            <div class="more">
                <div class="information">
                    <div class="headerImg">
                        <div>
                            <img src alt />
                            <div>
                                <i></i>拍摄头像
                            </div>
                        </div>
                    </div>
                    <div class="name">
                        <div class="nameClass">
                            <div class="t1">哈哈</div>
                            <div class="t2">
                                <img src alt />
                            </div>
                        </div>
                        <div class="nameClass2">
                            <div class="y1">
                                <div>
                                    <span>卡 号：</span>
                                    <span>1808167411</span>
                                </div>
                                <div>
                                    <span>电话号码：</span>
                                    <span>13558800617</span>
                                </div>
                                <div>
                                    <span>会员类型：</span>
                                    <span>普卡两年</span>
                                </div>
                                <div>
                                    <span>所属会籍：</span>
                                </div>
                                <div>
                                    <span>备 注：</span>
                                    <span>赠：运动包*1七夕情侣卡 今日交定金300元 明日补齐余款2088.5元办理常规两年卡 定金不退</span>
                                </div>
                            </div>
                            <div class="y2">
                                <div>
                                    <span>生 日：</span>
                                    <span>1994-03-16</span>
                                </div>
                                <div>
                                    <span>添加日期：</span>
                                    <span>2019-12-10</span>
                                </div>
                                <div>
                                    <span>所属教练：</span>
                                    <span>彭振洪</span>
                                </div>
                                <div>
                                    <span>上次入场：</span>
                                    <span>12-10 09:54</span>
                                </div>
                            </div>
                            <div class="y3">
                                <el-button type="danger">确认离场</el-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="operation">
                    <el-tabs type="border-card" v-model="activeName">
                        <el-tab-pane label="会员卡" name="first">
                            <div class="card">
                                <div>
                                    <div class="cardTitle">
                                        <div>9+3活动卡</div>
                                        <div>时间卡</div>
                                    </div>
                                    <div class="cardContent">
                                        <div>开卡时间：2019-05-14</div>
                                        <div>到期时间：2020-02-14</div>
                                        <div>会籍：张圆梦</div>
                                        <div>财务未确认</div>
                                        <div class="cardBtn">
                                            <el-button type="warning">请假</el-button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="cardTitle">
                                        <div>9+3活动卡</div>
                                        <div>时间卡</div>
                                    </div>
                                    <div class="cardContent">
                                        <div>开卡时间：2019-05-14</div>
                                        <div>到期时间：2020-02-14</div>
                                        <div>会籍：张圆梦</div>
                                        <div>财务未确认</div>
                                        <div class="cardBtn">
                                            <el-button type="warning">请假</el-button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="cardTitle">
                                        <div>9+3活动卡</div>
                                        <div>时间卡</div>
                                    </div>
                                    <div class="cardContent">
                                        <div>开卡时间：2019-05-14</div>
                                        <div>到期时间：2020-02-14</div>
                                        <div>会籍：张圆梦</div>
                                        <div>财务未确认</div>
                                        <div class="cardBtn">
                                            <el-button type="warning">请假</el-button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="cardTitle">
                                        <div>9+3活动卡</div>
                                        <div>时间卡</div>
                                    </div>
                                    <div class="cardContent">
                                        <div>开卡时间：2019-05-14</div>
                                        <div>到期时间：2020-02-14</div>
                                        <div>会籍：张圆梦</div>
                                        <div>财务未确认</div>
                                        <div class="cardBtn">
                                            <el-button type="warning">请假</el-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="充值记录" name="second">
                            <el-table :data="table" border style="width: 100%;text-align:center">
                                <el-table-column prop="name" label="充值时间"></el-table-column>
                                <el-table-column prop="name" label="充值卡种"></el-table-column>
                                <el-table-column prop="name" label="卡片名称"></el-table-column>
                                <el-table-column prop="name" label="充值额度"></el-table-column>
                                <el-table-column prop="name" label="到期时间"></el-table-column>
                                <el-table-column prop="name" label="实收金额"></el-table-column>
                                <el-table-column prop="name" label="所属会计"></el-table-column>
                                <el-table-column prop="name" label="所属教练"></el-table-column>
                                <el-table-column prop="name" label="财务状况"></el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="消费记录" name="third">
                            <el-table :data="table" border style="width: 100%;text-align:center">
                                <el-table-column prop="name" label="消费时间"></el-table-column>
                                <el-table-column prop="name" label="会员卡种"></el-table-column>
                                <el-table-column prop="name" label="会员卡名称"></el-table-column>
                                <el-table-column prop="name" label="消费额度"></el-table-column>
                                <el-table-column prop="name" label="所属会籍"></el-table-column>
                                <el-table-column prop="name" label="所属教练"></el-table-column>
                                <el-table-column prop="name" label="操作人"></el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="签到记录" name="fourth">
                            <el-table :data="table" border style="width: 100%;text-align:center">
                                <el-table-column prop="name" label="签到时间"></el-table-column>
                                <el-table-column prop="name" label="离场时间"></el-table-column>
                                <el-table-column prop="name" label="手环使用记录"></el-table-column>
                                <el-table-column prop="name" label="时间卡到期时间"></el-table-column>
                                <el-table-column prop="name" label="所属会籍"></el-table-column>
                                <el-table-column prop="name" label="所属教练"></el-table-column>
                                <el-table-column prop="name" label="代签人"></el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="请假记录" name="last">
                            <el-table :data="table" border style="width: 100%;text-align:center">
                                <el-table-column prop="name" label="请假开始时间"></el-table-column>
                                <el-table-column prop="name" label="请假天数"></el-table-column>
                                <el-table-column prop="name" label="请假结束时间"></el-table-column>
                                <el-table-column prop="name" label="财务审核状态"></el-table-column>
                                <el-table-column prop="name" label="操作人"></el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <div class="note">
                    <div>
                        <i class="el-icon-edit-outline"></i>
                    </div>
                    <div>
                        <el-input v-model="formInline.user" placeholder="签到备注"></el-input>
                    </div>
                </div>
                <el-button type="primary" @click="isShow2 = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="签到记录" :visible.sync="isShow3" width="600px" :before-close="handleClose">
            <el-table :data="table" border style="width: 100%;text-align:center">
                <el-table-column prop="name" label="签到时间"></el-table-column>
                <el-table-column prop="name" label="签退时间"></el-table-column>
                <el-table-column prop="name" label="手环状态"></el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow3 = false">取 消</el-button>
                <el-button type="primary" @click="isShow3 = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title :visible.sync="isShow4" width="800px" :before-close="handleClose">
            <div class="more">
                <div class="information">
                    <div class="headerImg">
                        <div>
                            <img src alt />
                        </div>
                    </div>
                    <div class="name">
                        <div class="nameClass">
                            <div class="t1">哈哈</div>
                            <div class="t2">
                                <img src alt />
                            </div>
                        </div>
                        <div class="nameClass2">
                            <div class="y1">
                                <div>
                                    <span>卡 号：</span>
                                    <span>1808167411</span>
                                </div>
                                <div>
                                    <span>电话号码：</span>
                                    <span>13558800617</span>
                                </div>
                                <div>
                                    <span>会员类型：</span>
                                    <span>普卡两年</span>
                                </div>
                                <div>
                                    <span>所属会籍：</span>
                                </div>
                                <div>
                                    <span>备 注：</span>
                                    <span>赠：运动包*1七夕情侣卡 今日交定金300元 明日补齐余款2088.5元办理常规两年卡 定金不退</span>
                                </div>
                            </div>
                            <div class="y2">
                                <div>
                                    <span>生 日：</span>
                                    <span>1994-03-16</span>
                                </div>
                                <div>
                                    <span>添加日期：</span>
                                    <span>2019-12-10</span>
                                </div>
                                <div>
                                    <span>所属教练：</span>
                                    <span>彭振洪</span>
                                </div>
                                <div>
                                    <span>上次入场：</span>
                                    <span>12-10 09:54</span>
                                </div>
                            </div>
                            <div class="y3">
                                <el-button type="danger">确认离场</el-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="operation">
                    <el-tabs type="border-card" v-model="activeName">
                        <el-tab-pane label="会员卡" name="first">
                            会员详情
                        </el-tab-pane>
                        <el-tab-pane label="充值记录" name="second">
                            <el-table :data="table" border style="width: 100%;text-align:center">
                                <el-table-column prop="name" label="充值时间"></el-table-column>
                                <el-table-column prop="name" label="充值卡种"></el-table-column>
                                <el-table-column prop="name" label="卡片名称"></el-table-column>
                                <el-table-column prop="name" label="充值额度"></el-table-column>
                                <el-table-column prop="name" label="到期时间"></el-table-column>
                                <el-table-column prop="name" label="所属会计"></el-table-column>
                                <el-table-column prop="name" label="课程教练"></el-table-column>
                                <el-table-column prop="name" label="财务状况"></el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="消费记录" name="third">
                            <el-table :data="table" border style="width: 100%;text-align:center">
                                <el-table-column prop="name" label="消费时间"></el-table-column>
                                <el-table-column prop="name" label="会员卡种"></el-table-column>
                                <el-table-column prop="name" label="会员卡名称"></el-table-column>
                                <el-table-column prop="name" label="消费额度"></el-table-column>
                                <el-table-column prop="name" label="所属会籍"></el-table-column>
                                <el-table-column prop="name" label="消费所属教练"></el-table-column>
                                <el-table-column prop="name" label="教案"></el-table-column>
                                <el-table-column prop="name" label="操作人"></el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="签到记录" name="fourth">
                            <el-table :data="table" border style="width: 100%;text-align:center">
                                <el-table-column prop="name" label="签到时间"></el-table-column>
                                <el-table-column prop="name" label="离场时间"></el-table-column>
                                <el-table-column prop="name" label="手环使用记录"></el-table-column>
                                <el-table-column prop="name" label="时间卡到期时间"></el-table-column>
                                <el-table-column prop="name" label="所属会籍"></el-table-column>
                                <el-table-column prop="name" label="所属教练"></el-table-column>
                                <el-table-column prop="name" label="代签人"></el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="请假记录" name="last">
                            <el-table :data="table" border style="width: 100%;text-align:center">
                                <el-table-column prop="name" label="请假开始时间"></el-table-column>
                                <el-table-column prop="name" label="请假天数"></el-table-column>
                                <el-table-column prop="name" label="请假结束时间"></el-table-column>
                                <el-table-column prop="name" label="财务审核状态"></el-table-column>
                                <el-table-column prop="name" label="操作人"></el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button type="primary" @click="isShow4 = false">确 定</el-button> -->
            </span>
        </el-dialog>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
    name: 'boxhy',
    props: {},
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            currentPage: 1,
            formInline: {
                user: '',
                region: ''
            },
            value1: '',
            table: [
                {
                    name: '00012',
                    storeName: '天府四街分店',
                    userNo: '0001242',
                    name: '刘小军',
                    userName: '2018-12-10',
                    sex: '普通',
                    cardClass: '普通',
                    cardNo: '2018-12-12',
                    telNo: '2019-12-12',
                    photo: '2018-12-01'
                }
            ],
            isShow1: false,
            isShow2: false,
            isShow3: false,
            isShow4: false,
            activeName: 'first'
        };
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        redClick() {
            this.isShow1 = true;
        },
        greenClick() {},
        handleClose(done) {
            done();
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
/deep/ .el-dialog__body {
    padding: 10px 0;
}
/deep/ .el-dialog__footer {
    padding: 10px;
    /deep/ .dialog-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .note {
            width: 400px;
            display: flex;
            align-items: center;
            /deep/ .el-input__inner {
                background: transparent;
                border: none;
            }
        }
    }
}
.tableTooltip {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.cell {
    .el-button {
        margin-top: 10px;
    }
}
.nameClass{
  color: #428bca;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.nameClass:hover{
  color: #f00;
}
.more {
    width: 100%;
    .information {
        display: flex;
        // border-bottom: 1px solid rgba(128, 128, 128, 0.459);
        .headerImg {
            width: 30%;
            display: flex;
            justify-content: center;
            & > div {
                width: 160px;
                height: 160px;
                position: relative;
                border-radius: 10px;
                background-color: rgba(128, 128, 128, 0.171);
                img {
                    width: 100%;
                    height: 100%;
                }
                & > div {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background-color: rgba(128, 128, 128, 0.329);
                    color: gray;
                    border-radius: 0 0 10px 10px;
                }
            }
        }
        .name {
            width: 70%;
            .nameClass {
                display: flex;
                .t1 {
                    font-size: 24px;
                    font-weight: bold;
                }
                .t2 {
                    width: 16px;
                    height: 16px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .nameClass2 {
                display: flex;
                justify-content: space-between;
                .y1 {
                    width: 38%;
                }
                .y2 {
                    width: 28%;
                }
                .y3 {
                    width: 18%;
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 20px;
                }
            }
        }
    }
    .operation {
        margin-top: 10px;
    }
}
.card {
    display: flex;
    flex-wrap: wrap;

    & > div {
        width: 32%;
        margin-left: 2%;
        border-radius: 5px;
        margin-bottom: 10px;
        .cardTitle {
            display: flex;
            justify-content: space-between;
            padding: 5px;
            background: #ccf6ce;

            & > div:first-of-type {
                font-weight: bold;
                font-size: 18px;
            }
            & > div:last-of-type {
                font-size: 14px;
                color: #0ec21a;
            }
        }
        .cardContent {
            padding: 10px;
            background: #f3f1f1;
            .cardBtn {
                display: flex;
                justify-content: flex-end;
            }
        }
    }
    & > div:nth-last-child(3n + 1) {
        margin-left: 0;
    }
}

.app {
    width: 100%;
}
.block {
    width: 550px;
    margin: auto;
}
.label {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid gray;
    & > div {
        padding: 4px 20px;
        border-radius: 30px;
        margin-left: 20px;
        margin-bottom: 10px;
        color: rgba(255, 255, 255, 1);
        font-weight: 600;

        cursor: pointer;
    }
    .green {
        background-color: #6edb69;
    }
    .green:hover {
        background-color: #50c443;
    }
    .red {
        background-color: #f65555;
    }
    .red:hover {
        background-color: #e02828;
    }
}
.course {
    .courseTitle {
        margin-top: 10px;
    }
    .content {
        display: flex;
        flex-wrap: wrap;

        & > div {
            width: 180px;
            height: 50px;
            margin-left: 10px;
            margin-bottom: 10px;
            border: 1px solid #5fcc74;
            border-radius: 8px;
            padding: 0 10px;
            & > span:first-of-type {
                font-weight: 600;
                color: #50cd6d;
            }
        }
        .el-popover__reference {
            width: 180px;
            height: 50px;
            margin-left: 10px;
            margin-bottom: 10px;
            border: 1px solid #5fcc74;
            border-radius: 8px;
            padding: 0 10px;
            & > span:first-of-type {
                font-weight: 600;
                color: #50cd6d;
            }
        }
    }
}
.tooltip {
    // width: 140px;
    padding: 10px 20px;
    font-size: 18px;
}
.tooltip2 {
    // width: 140px;
    // padding: 10px 20px;
    width: 200px;
    font-size: 18px;
}
.date {
    display: flex;
    align-items: center;
    .prompt {
        padding: 0 4px;
        margin-bottom: 5px;
        background: #41c5f9;
        color: rgba(255, 255, 255, 1);
        margin-right: 5px;
    }
    .prompt2 {
        padding: 0 4px;
        background: #f78d8d;
        color: rgba(255, 255, 255, 1);
        margin-right: 5px;
    }
}

.dialogContent {
    display: flex;
    justify-content: space-around;
    .img {
        width: 40%;
        text-align: center;
        font-size: 18px;
        & > div {
            width: 80%;
            height: 100px;
            margin: 0 auto;
            background: gray;
            text-align: center;
            line-height: 100px;
            & > img {
                width: 94%;
                height: 94%;
            }
        }
        p,
        h4 {
            padding: 5px;
        }
    }
    .input1 {
        width: 40%;
        margin-top: 20px;
        p {
            padding: 10px 0;
            color: #aeadad;
        }
    }
}
</style>
