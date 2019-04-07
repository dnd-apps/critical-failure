---
to: src/components/<%= name %>/<%= name %>.ts
---
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class <%= h.inflection.classify(h.changeCase.camel(name)) %> extends Vue {
  @Prop() public msg!: string;
}
