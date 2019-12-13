import axios from 'axios';
import { base } from '../components/js/url';
const actions = {
    // 查询门店信息
    async getStore({ commit, state }) {
        let data = await axios.get(base + '/store/getStoreList', {})
        commit('updateStore', data.data.d)
        return data.data.d
    },
    // 请求类型
    async getCoachInformation({ commit, state }, value) {
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
    async getCoach({ commit, state }, value) {
        console.log(value, '888')
        await axios
            .post(base + '/coach/queryCoach' + '/' + value.page + '/' + value.size, {
                name: value.store,
                leavel: value.level,
                coachType: value.type
            })
            .then(res => {
                console.log(res)
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
    async getPrivateCourse({ commit, state }, value) {
        let data = await axios
            .post(base + '/course/queryCourse' + '/' + value.page + '/' + value.size, {
                courseType: value.level,
                name: value.store
            })
        commit('updatePrivateCourse', data.data)
        console.log(data.data)
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
                coursePhoto:value.img,
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
        console.log(data)
        if (data.data.i == '操作成功！') {
            return 'yes'
        }

    },
    //查询团操教室
    async getClassRoom({ commit, state }, value) {
        await axios
            .post(base + '/classroom/queryClassRoom' + '/' + value.page + '/' + value.size, {
                storeNumber: value.level,
                name: value.store,
                type: '',
            })
            .then(res => {
                commit('updateClassRoom', res.data.queryResult)
            });
    },
    //新增团操教室
    async addClassRoom({ commit, state }, value) {
        console.log(value, '123')
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
        console.log(data)
        if (data.data.data == '新增教室成功') {
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
        if (data.data.data == '更新教室成功') {
            return 'yes'
        }
    },
    // 查询团操课表
    async getCourseClass({ commit, state }, value) {
        console.log(value)
        await axios
            .post(base + '/courseClass/queryCourseClass', {
                year: value.year,
                month: value.month
            }).then(res => {
                let array = []
                for (let i in res.data.queryResult.object) {
                    array.push({ date: i, data: res.data.queryResult.object[i] })
                }
                array.sort(function (a, b) {
                    return Date.parse(a.date) - Date.parse(b.date);
                });
                commit('updateCourseClass', array)
            })
    },
    //查询团课课程
    async getCourseBySelect({ commit, state }, value) {
        let data = await axios
            .post(base + '/course/queryCourseBySelect', {

            })
        return data.data.queryResult
    },
    //查询团课教练
    async getqueryCoachBySelect({ commit, state }, value) {
        let data = await axios
            .post(base + '/coach/queryCoachBySelect', {

            })
        return data.data.queryResult
    },
    //查询团课教室
    async getAllClassRoom({ commit, state }, value) {
        let data = await axios
            .post(base + '/classroom/queryAllClassRoom', {

            })
        return data.data.queryResult
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

        if (data.data.data == '添加课表信息成功') {
            return 'yes'
        }
    },
    //私教余课一览
    async getCourseRemain({ commit, state }, value) {
        await axios
            .post(base + '/coachContract/queryCourseRemain' + '/' + value.page + '/' + value.size, {
                courseType: value.courseType,
                contractNumber: value.contractNumber,
                memberId: value.memberId,
                coachNumber: value.coachNumber,
                salesman: value.salesman,
            })
            .then(res => {
                commit('updateCourseRemain', res.data.queryResult)
            });
    },
    //剩余课时查询
    async getCourseCount({ commit, state }, value) {
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
                    for (let i = 0; i < res.data.queryResult.object.length; i++) {
                        res.data.queryResult.object[i].unitPrice = res.data.queryResult.object[i].realPrice / res.data.queryResult.object[i].bayNum
                    }
                    commit('updateCourseCount', res.data.queryResult)
                });
        }

    },
    //私教预约签名
    async getBySignature({ commit, state }, value) {
        let startDate,
            endDate
        if(value.date){
            let date = new Date(value.date[0])
            let date2 = new Date(value.date[1])
            startDate= date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            endDate= date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate()
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
                commit('updateBySignature', res.data.queryResult)
            });

    },
    //私教预约核销流水
    async getAppointmentSales({ commit, state }, value) {
        let startDate,
            endDate
        if(value.date){
            let date = new Date(value.date[0])
            let date2 = new Date(value.date[1])
            startDate= date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            endDate= date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate()
        }
        await axios
            .post(base + '/appointment/queryAppointmentSales' + '/' + value.page + '/' + value.size, {
                storeNumber: value.storeNumber,
                coachNumber: value.coachNumber,
                states: value.states,
                startDate: startDate,
                endDate: endDate,
                dateType: value.dateType,
            })
            .then(res => {
                console.log(res.data.queryResult)
                commit('updateAppointmentSales', res.data.queryResult)
            });

    },
    // 查询会员
    async getByCardId({ commit, state },value) {
        let data =  await axios
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
            sex
        if(value.idType=='身份证'){
            idType=1  
        }else if(value.idType=='护照'){
            idType=2
        }else{
            idType=3
        }
        if(value.gender='man'){
            sex=1
        }else{
            sex=2
        }
        value.membersType=parseInt(value.membersType)
        value.conventionType=parseInt(value.conventionType)
        value.conventionMoney=value.conventionMoney+'.00'
        value.conventionMoney=parseFloat(value.conventionMoney).toFixed(2)
        let data =  await axios
            .post(base + '/reserveMoney/sell', {
                memberType: value.membersType,
                cardTypeId: '',
                cardId: value.membersId,
                name: value.membersName,
                zjType:idType,
                sex,
                zjNum:value.userId,
                price:'0.00',
                reservePrice:value.conventionMoney,
                reserveType:value.conventionType,
                remark: value.desc,
            })
            if(data.data.message=='操作成功！'){
                return 'yes'
            }
    },
    //查询私教预约
    async getAppointmentByCoach({ commit, state },value) {
        let data =  await axios
            .post(base + '/appointment/queryAppointmentByCoach', {
                date: value
            })
          let array = []
        //   console.log(data.data)
                for (let i in data.data.d[0]) {
                    // for(let k=0;k<data.data.d[0][i].length;k++){
                    //     if(data.data.d[0][i][k].appointments.length!=0){
                    //         console.log(data.data.d[0][i][k])
                    //     }
                    // }
                    array.push({ name: i, data: data.data.d[0][i] })
                }
          commit('updateAppointmentByCoach', array)
          return array
    },
    //新增私教预约
    async addAppointment({ commit, state },value) {
        let data =  await axios
            .post(base + '/appointment/addAppointment', {
                mermberId:value.memberId,
                courseNumber:value.courseNumber,
                appointmentDate:value.appointmentDate,
                appointmentType:value.appointmentType,
                coachNumber:value.coachNumber,
            })
        if(data.data.i=='操作成功！'){
            return 'yes'
        }
    },
    //查询私教预约-会员合同信息
    async getContractByCard({ commit, state },value) {
        let data =  await axios
            .get(base + '/coachContract/queryContractByCard', {
                params:{
                    cardNumber: value
                }
            })
        return data
    },

}

export default actions;