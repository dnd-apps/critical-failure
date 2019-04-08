import { Component, Vue } from 'vue-property-decorator';
import RTDCombat from '../../components/rtd-combat/rtd-combat.vue';
import FumbleDisplay from '../../components/fumbleDisplay/fumbleDisplay.vue';
import FumbleModal from '../../components/fumbleModal/fumbleModal.vue';

import magic from '../../data/magic.json';
import melee from '../../data/melee.json';
import ranged from '../../data/ranged.json';
import unarmed from '../../data/unarmed.json';

@Component({
  components: { RTDCombat, FumbleDisplay, FumbleModal }
})
export default class App extends Vue {
  public combatTypes = ['melee', 'magic', 'ranged', 'unarmed'];
  public fumbles = { magic, melee, ranged, unarmed };
  public appStyle = { 'background-image': 'url(\'assets/background.jpg\')' };
}
