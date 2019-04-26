import { Component, Vue } from 'vue-property-decorator';
import magic from '../../data/magic.json';
import melee from '../../data/melee.json';
import ranged from '../../data/ranged.json';
import unarmed from '../../data/unarmed.json';

@Component
export default class Classy extends Vue {
  public combatTypes = ['melee', 'magic', 'ranged', 'unarmed'];
  public fumbles = { magic, melee, ranged, unarmed };
}
