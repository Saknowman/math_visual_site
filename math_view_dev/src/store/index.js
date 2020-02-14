import Vue from 'vue'
import Vuex from 'vuex'

import main_categories from './modules/main_categories/main';
import node_card from "./modules/node_card";
import layouts from "./modules/layouts";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        main_categories: main_categories,
        node_card: node_card,
        layouts: layouts
    },
    // state: {
    //     count: 5,
    // },
    // mutations: {
    //     increment(state) {
    //         state.count++
    //     },
    //     decrement(state) {
    //         state.count--
    //     }
    // },
    // actions: {
    //   increment: ({commit}) => {
    //     setTimeout(() => {
    //       commit('increment')
    //     }, 5000)
    //   }
    // },
})
