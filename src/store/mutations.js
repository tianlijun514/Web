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
}

export default mutations;