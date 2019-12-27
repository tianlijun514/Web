import axios from 'axios';
import { base } from '../../components/js/url';
const actions = {
    // 查询门店信息
    async getStore({ commit, state }) {
        let data = await axios.get(base + '/store/getStoreList', {})
        commit('updateStore', data.data.d)
        return data.data.d
    },
    // 请求类型
    async postPrivateCourseInformation({ commit, state }, value) {
        let data = await axios
            .post(base + '/configType/getTypes', {
                code: value
            })
            
        if (value == 'J0001') {
            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                array.push(obj)
            }
            commit('updateCoachLevel', array)
            return array
        } else if (value == 'J0002') {
            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                array.push(obj)
            }
            commit('updateCoachType', array)
            return array
        } else if (value == 'K0001') {
            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                array.push(obj)
            }
            commit('updatePrivateCourseType', array)
            return array
        } else if (value == 'J0003') {
            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                array.push(obj)
            }
            commit('updateClassRoomType', array)
            return array
        } else if (value == 'S0001') {

            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                if (data.data.d[i].remark != '定金销售') {
                    obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                    array.push(obj)
                }

            }
            commit('updateMemberSalesType', array)
            return array
        } else if (value == 'A0002') {
            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                array.push(obj)

            }
            commit('updateConventionType', array)
            return array
        } else if (value == 'A0003') {
            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                array.push(obj)

            }
            commit('updateConventionState', array)
            return array
        } else if (value == 'C0001') {
            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                array.push(obj)

            }
            commit('updateContractType', array)
            return array
        } else if (value == 'R0001') {
            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                array.push(obj)

            }
            commit('updateBoxType', array)
            return array

        } else if (value == 'CD001') {
            let obj
            let array = []
            for (let i = 0; i < data.data.d.length; i++) {
                obj = { label: data.data.d[i].remark, value: data.data.d[i].number }
                array.push(obj)

            }
            commit('updateCardType', array)
            return array

        } else {
            return data.data.d
        }
    },
    // 新增教练员
    async addCoach({ commit, state }, value) {
        let type,
            isState
        if (value.type2) {
            type = 1
        } else {
            type = 0
        }
        if (value.state == '在职') {
            isState = 1
        } else {
            isState = 2
        }
        let data = await axios
            .post(base + '/coach/addCoach', {
                number: value.id,
                name: value.name,
                leavel: value.level,
                coachType: value.type,
                remarks: value.desc,
                states: isState,
                teaching: type,
                areaNumbers: value.storeId,
            })
        if (data.data.i == '操作成功！') {
            return 'yes'
        }
    },
    //查询教练员
    async postCoach({ commit, state }, value) {
        await axios
            .post(base + '/coach/queryCoach' + '/' + value.page + '/' + value.size, {
                name: value.store,
                leavel: value.level,
                coachType: value.type
            })
            .then(res => {
                commit('updateCoach', res.data)
            });
    },
    //修改教练员
    async updateCoach({ commit, state }, value) {
        let data;
        if (value.state2) {
            data = await axios
                .post(base + '/coach/updateCoach', {
                    states: value.state2,
                    id: value.id,
                    update: 1
                })
        } else {
            let type,
                isState
            if (value.type2) {
                type = 1
            } else {
                type = 0
            }
            if (value.state == '在职') {
                isState = 1
            } else {
                isState = 2
            }
            data = await axios
                .post(base + '/coach/updateCoach', {
                    id: value.id2,
                    number: value.id,
                    name: value.name,
                    leavel: value.level,
                    coachType: value.type,
                    remarks: value.desc,
                    states: isState,
                    teaching: type,
                    areaNumbers: value.storeId,
                    update: 2
                })
        }
        if (data.data.i == '操作成功！') {
            return 'yes'
        }

    },
    //查询私教课程
    async postPrivateCourse({ commit, state }, value) {
        let data = await axios
            .post(base + '/course/queryCourse' + '/' + value.page + '/' + value.size, {
                courseType: value.level,
                name: value.store
            })
        commit('updatePrivateCourse', data.data)
        return data.data
    },
    // 新增私教课程
    async addPrivateCourse({ commit, state }, value) {
        console.log(value)
        var now = new Date(value.date1)
        var now2 = new Date(value.date2)
        let date1 = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
        let date2 = now2.getFullYear() + '-' + (now2.getMonth() + 1) + '-' + now2.getDate()
        let type,
            isState
        if (value.type2) {
            type = 1
        } else {
            type = 0
        }
        if (value.state == '正常') {
            isState = 1
        } else {
            isState = 2
        }

        let data = await axios
            .post(base + '/course/addCourse', {
                number: value.id,
                name: value.name,
                courseType: value.type,
                startDate: date1,
                endDate: date2,
                monster: type,
                states: isState,
                remarks: value.desc,
                prices: value.table,
                storeNumber: value.storeId,
                coursePhoto: value.img,
            })
        if (data.data.i == '操作成功！') {
            return 'yes'
        }
    },
    //修改课程
    async updateCourse({ commit, state }, value) {
        let data;
        if (value.state2) {
            data = await axios
                .post(base + '/course/updateCourse', {
                    states: 2,
                    id: value.id,
                    update: 1
                })
        } else {
            console.log(value, '123')
            let type,
                isState
            if (value.type2) {
                type = 1
            } else {
                type = 0
            }
            if (value.state == '正常') {
                isState = 1
            } else {
                isState = 2
            }
            data = await axios
                .post(base + '/course/updateCourse', {
                    id: value.id2,
                    number: value.id,
                    name: value.name,
                    courseType: value.type,
                    startDate: value.date1,
                    endDate: value.date2,
                    monster: type,
                    states: isState,
                    remarks: value.desc,
                    prices: value.table,
                    update: 2
                })
        }
        if (data.data.i == '操作成功！') {
            return 'yes'
        }

    },
    //查询团操教室
    async postClassRoom({ commit, state }, value) {
        await axios
            .post(base + '/classroom/queryClassRoom' + '/' + value.page + '/' + value.size, {
                storeNumber: value.level,
                name: value.store,
                type: '',
            })
            .then(res => {
                console.log(res)
                commit('updateClassRoom', res.data)
            });
    },
    //新增团操教室
    async addClassRoom({ commit, state }, value) {
        let state1
        if (value.states == '正常') {
            state1 = 1
        } else {
            state1 = 2
        }
        let data = await axios
            .post(base + '/classroom/addClassRoom', {
                storeNumber: value.store,
                number: value.number,
                name: value.name,
                maxMan: value.maxMan,
                type: value.type,
                remarks: value.remarks,
                states: state1
            })
        if (data.data.i == '操作成功！') {
            return 'yes'
        }
    },
    //修改团操教室
    async updateClassRoom({ commit, state }, value) {
        let data
        if (value.state2) {
            data = await axios
                .post(base + '/classroom/updateClassRoom', {
                    states: 2,
                    id: value.id,
                })
        } else {
            console.log(value)
            data = await axios
                .post(base + '/classroom/updateClassRoom', {
                    id: value.id,
                    storeNumber: value.storeNumber,
                    number: value.number,
                    name: value.name,
                    maxMan: value.maxMan,
                    type: value.type,
                    remarks: value.remarks,
                    states: value.states == '正常' ? 1 : 2
                })
        }
        console.log(data)
        if (data.data.i == '操作成功！') {
            return 'yes'
        }
    },
    // 查询团操课表
    async postCourseClass({ commit, state }, value) {
        await axios
            .post(base + '/courseClass/queryCourseClass', {
                year: value.year,
                month: value.month
            }).then(res => {
                let array = []
                for (let i in res.data.d[0]) {
                    array.push({ date: i, data: res.data.d[0][i] })
                }
                array.sort(function (a, b) {
                    return Date.parse(a.date) - Date.parse(b.date);
                });
                commit('updateCourseClass', array)
            })
    },
    //查询团课课程
    async postCourseBySelect({ commit, state }, value) {
        let data = await axios
            .post(base + '/course/queryCourseBySelect', {

            })
        return data.data.d
    },
    //查询团课教练
    async postqueryCoachBySelect({ commit, state }, value) {
        let data = await axios
            .post(base + '/coach/queryCoachBySelect', {

            })
        return data.data.d
    },
    //查询团课教室
    async postAllClassRoom({ commit, state }, value) {
        let data = await axios
            .post(base + '/classroom/queryAllClassRoom', {

            })
        return data.data.d
    },
    //添加每天团操课表
    async addCourseClass({ commit, state }, value) {
        let data
        if (value.type == 'single') {
            data = await axios
                .post(base + '/courseClass/addCourseClass', {
                    dateType: value.type,
                    classDate: value.date,
                    courseNumber: value.course,
                    coachNumber: value.coach,
                    classroomNumber: value.classRoom,
                    peoples: value.number,
                    remarks: value.remarks
                })
        } else {
            data = await axios
                .post(base + '/courseClass/addCourseClass', {
                    dateType: value.type,
                    year: value.date,
                    month: value.date2,
                    courseNumber: value.course,
                    coachNumber: value.coach,
                    classroomNumber: value.classRoom,
                    peoples: value.number,
                    weaks: value.dateArray
                })
        }

        if (data.data.i == '操作成功！') {
            return 'yes'
        }
    },
    //私教余课一览
    async postCourseRemain({ commit, state }, value) {
        await axios
            .post(base + '/coachContract/queryCourseRemain' + '/' + value.page + '/' + value.size, {
                courseType: value.courseType,
                contractNumber: value.contractNumber,
                memberId: value.memberId,
                coachNumber: value.coachNumber,
                salesman: value.salesman,
            })
            .then(res => {
                commit('updateCourseRemain', res.data.d)
            });
    },
    //剩余课时查询
    async postCourseCount({ commit, state }, value) {
        if (value.monthDate) {
            let date = new Date(value.monthDate)
            value.monthDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            await axios
                .post(base + '/coachContract/queryCourseCount' + '/' + value.page + '/' + value.size, {
                    courseType: value.courseType,
                    contractNumber: value.contractNumber,
                    memberId: value.memberId,
                    coachNumber: value.coachNumber,
                    salesman: value.salesman,
                    monthDate: value.monthDate,
                })
                .then(res => {
                    for (let i = 0; i < data.data.d.object.length; i++) {
                        data.data.d.object[i].unitPrice = data.data.d.object[i].realPrice / data.data.d.object[i].bayNum
                    }
                    commit('updateCourseCount', res.data.d)
                });
        }

    },
    //私教预约签名
    async postBySignature({ commit, state }, value) {
        let startDate,
            endDate
        if (value.date) {
            let date = new Date(value.date[0])
            let date2 = new Date(value.date[1])
            startDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            endDate = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate()
        }
        await axios
            .post(base + '/coachContract/queryBySignature' + '/' + value.page + '/' + value.size, {
                coachNumber: value.coachNumber,
                memberId: value.memberId,
                states: value.states,
                startDate: startDate,
                endDate: endDate,
                dateType: value.dateType,
            })
            .then(res => {
                commit('updateBySignature', res.data.d)
            });

    },
    //私教预约核销流水
    async postAppointmentSales({ commit, state }, value) {
        let startDate,
            endDate
        if (value.date) {
            let date = new Date(value.date[0])
            let date2 = new Date(value.date[1])
            startDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            endDate = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate()
        }
        await axios
            .post(base + '/appointment/queryAppointmentSales' + '/' + value.page + '/' + value.size, {
                storeNumber: value.storeNumber,
                coachNumber: value.coachNumber,
                states: value.states,
                startDate: startDate,
                endDate: endDate,
                dateType: value.dateType,
                contractNumber: value.contractId,
            })
            .then(res => {
                commit('updateAppointmentSales', res.data.d)
            });

    },
    // 查询会员
    async getByCardId({ commit, state }, value) {
        let data = await axios
            .get(base + '/membership/queryByCardId', {
                params: {
                    cardId: value
                }
            })
        return data
    },
    //添加私教定金
    async reserveMoneySell({ commit, state }, value) {
        let idType,
            sex,
            membersType,
            conventionType,
            conventionMoney,
            price
        if (value.idType == '身份证') {
            idType = 1
        } else if (value.idType == '护照') {
            idType = 2
        } else {
            idType = 3
        }
        if (value.gender = 'man') {
            sex = 1
        } else {
            sex = 2
        }
        price = parseInt(value.cardPrice) + '.00'
        membersType = parseInt(value.membersType)
        conventionType = parseInt(value.conventionType)
        conventionMoney = value.conventionMoney + '.00'
        conventionMoney = parseFloat(conventionMoney).toFixed(2)
        if (value.conventionType != '1') {
            let data = await axios
                .post(base + '/reserveMoney/sell', {
                    memberType: membersType,
                    cardTypeId: '',
                    cardId: value.membersId,
                    name: value.membersName,
                    zjType: idType,
                    sex,
                    zjNum: value.userId,
                    price: '0.00',
                    reservePrice: conventionMoney,
                    reserveType: conventionType,
                    remark: value.desc,
                })
        } else {
            let data = await axios
                .post(base + '/reserveMoney/sell', {
                    memberType: membersType,
                    cardTypeId: value.cardType,
                    cardId: value.membersId,
                    name: value.membersName,
                    zjType: idType,
                    sex,
                    zjNum: value.userId,
                    price,
                    reservePrice: conventionMoney,
                    reserveType: conventionType,
                    remark: value.desc,
                })
        }

        if (data.i == '操作成功！') {
            return 'yes'
        }
    },
    //查询私教预约
    async postAppointmentByCoach({ commit, state }, value) {
        let data = await axios
            .post(base + '/appointment/queryAppointmentByCoach', {
                date: value.dateTime,
                cardId: value.typeCode,
                type: value.state
            })
        let array = []
        for (let i in data.data.d[0]) {
            for (let k = 0; k < data.data.d[0][i].length; k++) {
                if (data.data.d[0][i][k].appointments.length != 0) {
                    console.log(data.data.d[0][i][k])
                }
            }
            array.push({ name: i, data: data.data.d[0][i], type: '' })
        }
        for (let i = 0; i < array.length; i++) {
            if (i % 2 == 1) {
                array[i].type = 'singular'
            } else {
                array[i].type = 'dual'
            }
        }
        commit('updateAppointmentByCoach', array)
        return array
    },
    //新增私教预约
    async addAppointment({ commit, state }, value) {
        console.log(value)
        let data = await axios
            .post(base + '/appointment/addAppointment', {
                mermberId: value.mermberId,
                courseNumber: value.courseNumber,
                appointmentDate: value.appointmentDate,
                appointmentType: value.appointmentType,
                coachNumber: value.coachNumber,
            })
        if (data.data.i == '操作成功！') {
            return 'yes'
        }
    },
    //查询私教预约-会员合同信息
    async getContractByCard({ commit, state }, value) {
        let data = await axios
            .get(base + '/coachContract/queryContractByCard', {
                params: {
                    cardNumber: value
                }
            })
        return data
    },
    // 查询待核销信息
    async postVerification({ commit, state }, value) {
        console.log(value)
        let data = await axios
            .post(base + '/coachContract/queryVerification' + '/' + value.page + '/' + value.size, {
                startDate: value.date1,
                endDate: value.date2,
                coachNumber: value.coachNumber,
                cardId: value.cardId,
            })
        console.log(data)
        commit('updateVerification', data.data)
    },
    //更换教练信息查询
    async postReplaceCoach({ commit, state }, value) {
        let data = await axios
            .post(base + '/coachContract/queryOldCoach' + '/' + value.page + '/' + value.size, {
                startDate: value.date1,
                endDate: value.date2,
                coachName: value.coachName,
                memberId: value.memberId,
            })
        console.log(data)
        commit('updateReplaceCoach', data.data)
    },
    //根据私教合同号查会员信息
    async postContractMembers({ commit, state }, value) {
        let data = await axios
            .get(base + '/coachContract/queryByContractNumber', {
                params: {
                    contractNumber: value
                }
            })
        return data.data.d
    },
    //新增更换教练
    async addReplaceCoach({ commit, state }, value) {
        let data = await axios
            .post(base + '/coachContract/updateCoachContract', {
                contractNumber: value.contract,
                remarks: value.remarks,
                oldDate: value.date,
                oldCoach: value.oldCoach,
                coachNumber: value.coach,
            })
        if (data.i == '操作成功！') {
            return 'yes'
        }
    },
    // 查询私教销售流水
    async postContractSales({ commit, state }, value) {
        let data = await axios
            .post(base + '/coachContract/queryContractSales' + '/' + value.page + '/' + value.size, {
                startDate: value.date1,
                endDate: value.date2,
                salesType: value.type,
                courseType: value.classification,
                contractNumber: value.contract,
                salesman: value.employees,
                cardId: value.membersId
            })
        console.log(data)
        commit('updateContractSales', data.data)
    },
    // 查询私教合同打印
    async postCoachPrint({ commit, state }, value) {
        let state2,
            type
            if(typeof value.type=='string'){
                type=parseInt(value.type)
            }else{
                type=value.type
            }
            if(typeof value.state=='string'){
                state2=parseInt(value.state)
            }else{
                state2=value.state
            }
        let data = await axios
            .post(base + '/contract/queryPrintList' + '/' + value.page + '/' + value.size, {
                storeCode:value.store,
                type:type,
                printStatus:state2,
                contractId:value.contract,
                name:value.name,
                startDate: value.date1,
                endDate: value.date2,
            })
        commit('updateCoachPrint', data.data)
    },
    // 查询会员信息列表
    async postListMembers({ commit, state }, value) {
        let data = await axios
            .post(base + '/member/queryMembers' + '/' + value.page + '/' + value.size, {
                cardId: value.membersId,
                memberId: value.membersNumber,
                str: value.type,
                contractId: value.contract,
                storeCode: value.store,
            })
        commit('updateListMembers', data.data)
    },
    // 查询会员详细信息
    async getMemberById({ commit, state }, value) {
        let data = await axios
            .get(base + '/member/queryMemberById', {
                params: {
                    id: value,
                }
            })
        return data
    },
    // 查询会员弹窗信息

    async getBrief({ commit, state }, value) {
        let data = await axios
            .get(base + '/member/queryBrief', {
                params: {
                    id: value,
                }
            })
        return data
    },
    // 查询会籍销售流水
    async postMembersSales({ commit, state }, value) {
        let dateType,
            type
        if (typeof value.dateType == 'string' && value.dateType != '') {
            dateType = parseInt(value.dateType)
        } else {
            dateType = null
        }
        if (value.type != '') {
            type = value.type
        } else {
            type = null
        }
        let data = await axios
            .post(base + '/contract/queryList' + '/' + value.page + '/' + value.size, {
                storeCode: value.store,
                dateType: dateType,
                startDate: value.date1,
                endDate: value.date2,
                shellType: type,
                contractId: value.contract,
                salesman: value.sales,

            })
        console.log(data)
        commit('updateMembersSales', data.data)
    },
    // 查询定金销售流水
    async postReserves({ commit, state }, value) {
        let dateType,
            type,
            type2
        if (value.dateType != '') {
            dateType = value.dateType
        } else {
            dateType = null
        }
        if (typeof value.dateType == 'string' && value.dateType != '') {
            type = parseInt(value.dateType)
        } else {
            type = null
        }
        if (value.regiong != '') {
            type2 = value.regiong
        } else {
            type2 = null
        }
        let data = await axios
            .post(base + '/reserveMoney/getReserves' + '/' + value.page + '/' + value.size, {
                storeCode: value.store,
                reserveType: dateType,
                id: value.reservationNumber,
                cardId: value.memberId,
                memberId: value.type,
                status: type2,
                dateType: type,
                startDate: value.date1,
                endDate: value.date2,

            })
        for (let i = 0; i < data.data.d.length; i++) {
            for (let k = 0; k < state.conventionType.length; k++) {
                if (data.data.d[i].reserveType == state.conventionType[k].value) {
                    data.data.d[i].reserveType = state.conventionType[k].label
                }
            }
            for (let j = 0; j < state.conventionState.length; j++) {
                if (data.data.d[i].status == state.conventionState[j].value) {
                    data.data.d[i].status = state.conventionState[j].label
                }
            }
        }
        commit('updateReserves', data.data)
    },
    // 查询会员停转补列表
    async postMembershipScrs({ commit, state }, value) {
        let type
        if (typeof value.type == 'string' && value.type != '') {
            type = parseInt(value.type)
        } else {
            type = null
        }
        let data = await axios
            .post(base + '/membership/queryMembershipScrs' + '/' + value.page + '/' + value.size, {
                storeCode: value.store,
                type: type,
                startDate: value.date1,
                endDate: value.date2,
                contractId: value.contract,
                memberId: value.memberNumber,

            })
        console.log(data)
        commit('updateMembershipScrs', data.data)
    },

    // 会员会籍合同查询
    async getMembership({ commit, state }, value) {
        let data = await axios
            .get(base + '/contract/queryMembership', {
                params: {
                    memberId: value,
                }
            })
        return data.data
    },
    // 会员定金合同查询
    async getMemberReserve({ commit, state }, value) {
        let data = await axios
            .get(base + '/contract/queryReserve', {
                params: {
                    memberId: value,
                }
            })
        return data.data
    },
    // 会员租箱合同查询
    async getMemberBox({ commit, state }, value) {
        let data = await axios
            .get(base + '/contract/queryBox', {
                params: {
                    memberId: value,
                }
            })
        return data.data
    },
    // 会员私教合同查询

    async postMemberIdDetail({ commit, state }, value) {
        console.log(value)
        let data = await axios
            .post(base + '/coachContract/queryByMemberIdDetail', {
                memberId: value,
            })
        return data.data
    },
    // 会员信息出入场查询
    async getEntrancesByMemberId({ commit, state }, value) {
        let data = await axios
            .get(base + '/member/queryEntrancesByMemberId' + '/' + value.page + '/' + value.size, {
                params: {
                    memberId: value.memberNumber,
                }
            })
        return data.data
    },
    // 会员停卡查询
    async getMemberStopCard({ commit, state }, value) {
        let data = await axios
            .get(base + '/member/queryStop', {
                params: {
                    memberId: value,
                }
            })
        return data.data
    },
    //会员补卡查询 
    async getMemberRepair({ commit, state }, value) {
        let data = await axios
            .get(base + '/member/queryRepair', {
                params: {
                    memberId: value,
                }
            })
        return data.data
    },
    //会员储值卡查询 
    async getMemberStored({ commit, state }, value) {
        let data = await axios
            .get(base + '/member/queryStored', {
                params: {
                    memberId: value,
                }
            })
        return data.data
    },
    //会员储值卡挂失 
    async postMemberUpdateStored({ commit, state }, value) {
        let data = await axios
            .post(base + '/member/updateStored', {
                type: value.number,
                memberId: value.card
            })
        return data.data
    },
    // 会员制卡流水查询
    async postMakeCards({ commit, state }, value) {
        let type,
            type2
        if (typeof value.state == 'string' && value.state != '') {
            type2 = parseInt(value.state)
        } else {
            type2 = null
        }
        if (typeof value.type == 'string' && value.type != '') {
            type = parseInt(value.type)
        } else {
            type = null
        }
        let data = await axios
            .post(base + '/card/queryCards' + '/' + value.page + '/' + value.size, {
                status: type2,
                storeCode: '',
                type,
                startDate: value.date1,
                endDate: value.date2,
                name: value.memberId
            })
        commit('updateMakeCards', data.data)
    },
    //合同可入场门店
    async getContractStore({ commit, state }, value) {
        let data = await axios
            .get(base + '/contract/queryStores', {
                params: {
                    contractId: value,
                }
            })
        return data.data
    },
    //次卡剩余次数
    async postNumCards({ commit, state }, value) {
        let data = await axios
            .post(base + '/card/queryNumCards' + '/' + value.page + '/' + value.size, {
                cardId: value.memberId,
                storeCode: value.store,
                contractId: value.contract,
                name: value.name,
            })
        commit('updateNumCards', data.data)
    },
    //赠送储值卡流水查询
    async postGiveDepositCard({ commit, state }, value) {
        let data = await axios
            .post(base + '/depositCard/getGiveDepositCard' + '/' + value.page + '/' + value.size, {
                startDate: value.date1,
                endDate: value.date2,
                storeName: value.store,
            })
        commit('updateGiveDepositCard', data.data)
    },
    //卡种列表
    async getByActivity({ commit, state }, value) {
        let data = await axios
            .get(base + '/card/queryByActivity', {
                params: {
                    isActivity: value,
                }
            })
        let obj
        let array = []
        for (let i = 0; i < data.data.d.length; i++) {
            obj = { label: data.data.d[i].name, value: data.data.d[i].id }
            array.push(obj)

        }
        commit('updateActivity', array)

    },
    //租箱查询
    async postBox({ commit, state }, value) {
        let state2
        if (typeof value.status == 'string' && value.status != '') {
            state2 = parseInt(value.status)
        } else {
            state2 = null
        }
        let data = await axios
            .post(base + '/rentBox/getBox' + '/' + value.page + '/' + value.size, {
                startDate: value.date1,
                endDate: value.date2,
                boxNumber: value.boxId,
                status: state2,
                boxType: value.type,
            })
        commit('updateBox', data.data)
    },
    //门店级别设置
    async postStoreLevel({ commit, state }, value) {
        let data = await axios
            .post(base + '/store/queryRanks' + '/' + value.page + '/' + value.size, {
                name: value.store
            })
        commit('updateStoreLevel', data.data)
    },
    //添加门店级别
    async addStoreLevel({ commit, state }, value) {
        let data = await axios
            .post(base + '/store/addRank', {
                code: value.id,
                name: value.name
            })
        if (data.data.i) {
            return 'yes'
        }
    },
    //修改门店级别
    async updateStoreLevel({ commit, state }, value) {
        let data = await axios
            .post(base + '/store/updateRank', {
                code: value.id,
                name: value.name
            })
        if (data.data.i) {
            return 'yes'
        }
    },
    //删除门店级别
    async deleteStoreLevel({ commit, state }, value) {
        let data = await axios
            .delete(base + '/store/deleteRank', {
                data: {
                    code: value.code
                }
            })
        if (data.data.i) {
            return 'yes'
        }
    },
    //配卡查询
    async DeliveryCardsSearch({ commit, state }, value) {
        let start,
            end,
            status
            if(typeof value.start=='string'){
                start=parseInt(value.start)
            }else{
                start=value.start
            }
            if(typeof value.end=='string'){
                end=parseInt(value.end)
            }else{
                end=value.end
            }
            if(typeof value.state=='string'){
                status=parseInt(value.state)
            }else{
                status=value.start
            }
        let data = await axios
            .post(base + '/card/queryDeliveryCards' + '/' + value.page + '/' + value.size, {
                storeCode:value.store,
                start,
                end,
                status,
            })
            commit('updateDeliveryCardsSearch', data.data)
    },
}
export default actions