const state = {
    coachLevel:[],//教练员等级
    coachType:[],//教练员类型
    coachStore:[],//门店信息
    coach:{},//教练员信息
    privateCourse:{},//私教课程
    privateCourseType:[],//私教课程类型
    classRoom:{},//团操教室
    classRoomType:[],//团操教室类型
    courseClass:[],//私教及团操课程
    courseRemain:{},//私教余课一览
    courseCount:{
        object:[],
        total:0,
    },//剩余课时查询
    bySignature:{},//私教预约签名
    appointmentSales:{},//私教预约核销流水
    appointmentByCoach:[],//查询教练预约信息
    verification:{},//待核销数据
    replaceCoach:{},//更换教练数据
    contractSale:{},//私教销售流水
    coachPrint:{},//私教合同打印
    listMembers:{},//会员列表数据
    membersSales:{},//会籍销售流水
    memberSalesType:[],//会籍销售流水类型
    reserves:{},//定金销售流水
    conventionType:[],//定金类型
    conventionState:[],//定金状态

}
export default state;