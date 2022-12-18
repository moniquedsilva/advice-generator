
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    advice: '',
    id: 0,
  },
  getters: {
    getAdvice(state) {
      return state.advice
    },
    getId(state) {
      return state.id
    }
  },
  mutations: {
    ADD_ADVICE(state, data) {
      state.advice = data.advice
      state.id = data.id
    },
  },
  actions: {
    async NEW_ADVICE(context) {
      try {
        const { data } = await axios.get('https://api.adviceslip.com/advice')
        context.commit('ADD_ADVICE', data.slip)
      }
      catch(error) {
        console.log(error)
      }
    },
  },
  plugins: [vuexLocal.plugin]
})