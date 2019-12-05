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
        await axios
            .post(base + '/configType/getTypes', {
                code: value
            })
            .then(res => {
                if (value == 'J0001') {
                    let obj
                    let array = []
                    for (let i = 0; i < res.data.data.length; i++) {
                        obj = { label: res.data.data[i].remark, value: res.data.data[i].number }
                        array.push(obj)
                    }
                    commit('updateCoachLevel', array)
                } else if (value == 'J0002') {
                    let obj
                    let array = []
                    for (let i = 0; i < res.data.data.length; i++) {
                        obj = { label: res.data.data[i].remark, value: res.data.data[i].number }
                        array.push(obj)
                    }
                    commit('updateCoachType', array)
                } else if (value == 'K0001') {
                    let obj
                    let array = []
                    for (let i = 0; i < res.data.data.length; i++) {
                        obj = { label: res.data.data[i].remark, value: res.data.data[i].number }
                        array.push(obj)
                    }
                    commit('updatePrivateCourseType', array)
                }
            });
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
        await axios
            .post(base + '/course/queryCourse' + '/' + value.page + '/' + value.size, {
                courseType: value.level,
                name: value.store
            })
            .then(res => {
                console.log(res)
                commit('updatePrivateCourse', res.data.queryResult)
            });
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
                    number: value.id,
                    name: value.name,
                    courseType: value.type,
                    startDate: date1,
                    endDate: date2,
                    monster: type,
                    states: isState,
                    remarks: value.desc,
                    prices: value.table,
                })
        }
        console.log(data)
        if (data.data.data == '更新课程成功') {
            return 'yes'
        }
        
    },

}

export default actions;