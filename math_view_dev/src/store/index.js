import Vue from 'vue'
import Vuex from 'vuex'

import main_categories from './modules/main_categories/main';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 5,
    },
    modules: {
        main_categories: main_categories
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {
      increment: ({commit}) => {
        setTimeout(() => {
          commit('increment')
        }, 5000)
      }
    },
})
