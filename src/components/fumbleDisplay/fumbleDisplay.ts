import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import { Fumble } from '../../types';

@Component
export default class FumbleDisplay extends Vue {
  @State public fumble!: Fumble;
  @Mutation public toggleFumbleModal!: () => void;

  public handleToggleFumbleModal() {
    this.toggleFumbleModal();
  }
}
