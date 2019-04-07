import _ from 'lodash';
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Mutation } from 'vuex-class';
import { Fumble } from '../../types';

@Component
export default class RtdCombat extends Vue {
  @Mutation public setFumble!: (data: Fumble) => void;
  public state = {
    type: '',
    title: '',
    effect: '',
    retries: 0
  };
  @Prop() public type!: string;
  @Prop() public data!: any[];
  public title!: string;
  public note!: string;
  public effect!: string;
  public mounted() {
    this.state.type = this.type;
    this.effect = '';
    if (this.type === 'unarmed') {
      this.state.type += '/imporvised';
    }
  }
  public async handleRtd() {
    const diceRoll = _.random(0, 100);
    const outcome = await this.data.find((r: Fumble) =>
      _.range(r.low, r.high).includes(diceRoll)
    );
    if (!outcome) {
      if (this.state.retries === 3) {
        throw new Error('Issue finding fumble in range: ');
      }
      this.state.retries += 1;
      this.handleRtd();
    } else {
      this.state.retries = 0;
      this.setFumble(outcome);
    }
  }
}
