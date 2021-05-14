import { merge } from "lodash";
import { sum, random } from "lodash";

export const state = () => ({
  numberOfDice: 1,
  dieSize: 20,
  currentRoll: 1,
  unparsedDieSize: "1d20",
});

export const mutations = {
  // tslint:disable-next-line: no-shadowed-variable
  setCurrentRoll(state: any, numbers: number[]) {
    state.currentRoll = sum(numbers);
  },
  // tslint:disable-next-line: no-shadowed-variable
  parseDice(state: any, { dieSize }: any) {
    if (state.unparsedDieSize !== dieSize) {
      const matches = dieSize.match(/(\d{1,})[dD](\d{1,3})/i);
      if (matches) {
        const [numberOfDice, size] = dieSize.split(/d/i);
        dieSize = size;
        merge(state, { numberOfDice, dieSize });
      }
    }
  },
};

export const actions = {
  rollTheDice({ commit, state: { numberOfDice, dieSize } }: any) {
    const rolls = new Array(numberOfDice).map(() => random(1, dieSize));
    commit("setCurrentRoll", rolls);
  },
};
