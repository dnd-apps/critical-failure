import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import { Fumble } from '../../types';

@Component
export default class FumbleModal extends Vue {
  @State public fumble!: Fumble;
  @State public fumbleModalToggle!: boolean;
  @Mutation public toggleFumbleModal!: () => void;
  public handleToggle() {
    this.toggleFumbleModal();
  }
}
