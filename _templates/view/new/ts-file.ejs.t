---
to: src/views/<%= name %>/<%= name %>.ts
---
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class <%= h.inflection.classify(h.changeCase.camel(name)) %> extends Vue {
  public msg = 'Hewwo UwU';
}
