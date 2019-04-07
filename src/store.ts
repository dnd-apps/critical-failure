// tslint:disable: no-shadowed-variable
import Vue from 'vue';
import Vuex from 'vuex';
import { State, Fumble } from './types';

Vue.use(Vuex);

const state: State = {
  fumble: {
    high: 0,
    low: 0,
    title: '',
    effect: ''
  }
};

const mutations = {
  setFumble(state: State, data: Fumble) {
    state.fumble = data;
  }
};

export const store = new Vuex.Store({
  state,
  mutations
});
