// tslint:disable: no-shadowed-variable

import Vuex from 'vuex';
import { State, Fumble } from './types';

const state: State = {
  fumble: {
    high: 0,
    low: 0,
    title: '',
    effect: ''
  },
  fumbleModalToggle: false
};

const mutations = {
  setFumble(state: State, data: Fumble) {
    state.fumble = data;
  },
  toggleFumbleModal(state: State) {
    state.fumbleModalToggle = state.fumbleModalToggle ? false : true;
  }
};

export const store = new Vuex.Store({
  state,
  mutations
});
