import axios from 'axios';
import { base } from '../components/js/url';
const actions = {
    // 查询门店信息
    async getStore({ commit, state }) {
        let data = await axios.get(base + '/store/getStoreList', {})
        commit('updateStore', data.data.queryResult.list)
        return data.data.queryResult.list
    },
    // 请求类型
    async getCoachInformation({ commit, state }, value) {
        let data= await axios
            .post(base + '/configType/getTypes', {
                code: value
            })
            if (value == 'J0001') {
                let obj
                let array = []
                for (let i = 0; i < data.data.data.length; i++) {
                    obj = { label: data.data.data[i].remark, value: data.data.data[i].number }
                    array.push(obj)
                }
                commit('updateCoachLevel', array)
                return array
            } else if (value == 'J0002') {
                let obj
                let array = []
                for (let i = 0; i < data.data.data.length; i++) {
                    obj = { label: data.data.data[i].remark, value: data.data.data[i].number }
                    array.push(obj)
                }
                commit('updateCoachType', array)
                return array
            } else if (value == 'K0001') {
                let obj
                let array = []
                for (let i = 0; i < data.data.data.length; i++) {
                    obj = { label: data.data.data[i].remark, value: data.data.data[i].number }
                    array.push(obj)
                }
                commit('updatePrivateCourseType', array)
                return array
            } else if (value == 'J0003') {
                let obj
                let array = []
                for (let i = 0; i < data.data.data.length; i++) {
                    obj = { label: data.data.data[i].remark, value: data.data.data[i].number }
                    array.push(obj)
                }
                console.log(array)
                commit('updateClassRoomType', array)
                return array
            }
    },
    // 新增教练员
    async addCoach({ commit, state }, value) {
        console.log(value)
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
        if (data.data.data == '添加教练成功') {
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
                console.log(res.data.queryResult)
                commit('updateCoach', res.data.queryResult)
            });
    },
    //修改教练员
    async updateCoach({ commit, state }, value) {
        let data;
        if (value.state2) {
            data = await axios
                .post(base + '/coach/updateCoach', {
                    states: value.state2,
                    id:value.id,
                    update:1
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
            if (value.state == '在职') {
                isState = 1
            } else {
                isState = 2
            }
            data = await axios
                .post(base + '/coach/updateCoach', {
                    id:value.id2,
                    number: value.id,
                    name: value.name,
                    leavel: value.level,
                    coachType: value.type,
                    remarks: value.desc,
                    states: isState,
                    teaching: type,
                    areaNumbers: value.storeId,
                    update:2
                })
        }
        console.log(data)
        if (data.data.data == '更新教练成功') {
            return 'yes'
        }
        
    },
    //查询私教课程
    async getPrivateCourse({ commit, state }, value) {
        let data= await axios
            .post(base + '/course/queryCourse' + '/' + value.page + '/' + value.size, {
                courseType: value.level,
                name: value.store
            })
            commit('updatePrivateCourse', data.data.queryResult)
            return data.data.queryResult
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
                storeNumber:value.storeId,
            })
        if (data.data.data == '增加课程成功') {
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
                    id:value.id,
                    update:1
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
                    id:value.id2,
                    number: value.id,
                    name: value.name,
                    courseType: value.type,
                    startDate: value.date1,
                    endDate: value.date2,
                    monster: type,
                    states: isState,
                    remarks: value.desc,
                    prices: value.table,
                    update:2
                })
        }
        console.log(data)
        if (data.data.data == '更新课程成功') {
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
    async addClassRoom({ commit, state }, value){
        console.log(value,'123')
        let state1
        if(value.states=='正常'){
            state1=1
        }else{
            state1=2
        }
        let data = await axios
            .post(base + '/classroom/addClassRoom', {
                storeNumber:value.store,
                number:value.number,
                name:value.name,
                maxMan:value.maxMan,
                type:value.type,
                remarks:value.remarks,
                states:state1
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
                    id:value.id,
                })
        } else {
            console.log(value)
            data = await axios
                .post(base + '/classroom/updateClassRoom', {
                    id:value.id,
                    storeNumber:value.storeNumber,
                    number:value.number,
                    name:value.name,
                    maxMan:value.maxMan,
                    type:value.type,
                    remarks:value.remarks,
                    states:value.states=='正常'?1:2
                })
        }
        console.log(data)
        if(data.data.data=='更新教室成功'){
            return 'yes'
        }
    },
    // 查询团操课表
    async getCourseClass({commit, state },value){
        await axios
                .post(base + '/courseClass/queryCourseClass', {
                    year:value.year,
                    month:value.month
                }).then(res=>{
                    let array=[]
                    for(let i in res.data.queryResult.object){
                        array.push({date:i,data:res.data.queryResult.object[i]})
                    }
                    array.sort(function(a,b){
                        return Date.parse(a.date)-Date.parse(b.date);
                   });
                    commit('updateCourseClass',array)
                })
    },
    //查询团课课程
    async getCourseBySelect({ commit, state }, value) {
        let data= await axios
            .post(base + '/course/queryCourseBySelect', {

            })
            return data.data.queryResult
    },
    //查询团课教练
    async getqueryCoachBySelect({ commit, state }, value) {
        let data= await axios
            .post(base + '/coach/queryCoachBySelect', {

            })
            return data.data.queryResult
    },
    //查询团课教室
    async getAllClassRoom({ commit, state }, value) {
        let data= await axios
            .post(base + '/classroom/queryAllClassRoom', {

            })
            return data.data.queryResult
    },
    //添加每天团操课表
    async addCourseClass({ commit, state }, value) {
        let data= await axios
            .post(base + '/courseClass/addCourseClass', {
                dateType:'single',
                classDate:value.date,
                courseNumber:value.course,
                coachNumber:value.coach,
                classroomNumber:value.classRoom,
                peoples:value.number,
                remarks:value.remarks
            })
            console.log(data)
    },

}

export default actions;