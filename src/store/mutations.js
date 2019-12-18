const mutations = {
    updateCoachLevel(state, data) {
        state.coachLevel = data;
    },
    updateCoachType(state, data) {
        state.coachType = data;
    },
    updateStore(state, data) {
        state.coachStore = data;
    },
    updateCoach(state, data) {
        state.coach = data;
    },
    updatePrivateCourse(state, data) {
        state.privateCourse = data;
    },
    updatePrivateCourseType(state, data) {
        state.privateCourseType = data;
    },
    updateClassRoom(state, data) {
        state.classRoom = data;
    },
    updateClassRoomType(state, data) {
        state.classRoomType = data;
    },
    updateCourseClass(state, data) {
        state.courseClass = data;
    },
    updateCourseRemain(state, data) {
        state.courseRemain = data;
    },
    updateCourseCount(state, data) {
        state.courseCount = data;
    },
    updateBySignature(state, data) {
        state.bySignature = data;
    },
    updateAppointmentSales(state, data) {
        state.appointmentSales = data;
    },
    updateAppointmentByCoach(state, data) {
        console.log(data)
        state.appointmentByCoach = data;
    },
    updateVerification(state, data) {
        state.verification = data;
    },
    updateReplaceCoach(state, data) {
        state.replaceCoach = data;
    },
    updateContractSales(state, data) {
        state.contractSale = data;
    },
    updateCoachPrint(state, data) {
        state.coachPrint = data;
    },
    updateListMembers(state, data) {
        state.listMembers = data;
    },
    updateMembersSales(state, data) {
        state.membersSales = data;
    },
    updateMemberSalesType(state, data) {
        state.memberSalesType = data;
    },
    updateReserves(state, data) {
        state.reserves = data;
    },
    updateConventionType(state, data) {
        state.conventionType = data;
    },
    updateConventionState(state, data) {
        state.conventionState = data;
    },
    
    
}

export default mutations;