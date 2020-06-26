import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        datas: {
            profile: {
                firstname: '',
                lastname: '',
                title: '',
                email: '',
                phone: '',
                website: '',
                resume: ''
            },
            languages: [],
            skills: [],
            experiences: [],
            studies: []
        },
    },
    getters: {
        getData(state) {
            return state.datas
        }
    },
    mutations: {
        addLanguage (state) {
            state.datas.languages.push({ name: '', level: '' })
        },
        removeLanguage (state, index) {
            state.datas.languages.splice(index, 1)
        },
        addSkill (state, skill) {
            state.datas.skills.push({ name: skill })
        },
        removeSkill (state, index) {
            state.datas.skills.splice(index, 1)
        },
        addExperience (state) {
            state.datas.experiences.push({ title: '', company: '', from: '', to: '', description: '' })
        },
        removeExperience (state, index) {
            state.datas.experiences.splice(index, 1)
        },
        addStudy (state) {
            state.datas.studies.push({ school: '', title: '', start: '', end: '', where: '', description: '' })
        },
        removeStudy (state, index) {
            state.datas.studies.splice(index, 1)
        }
    }
})

export default store