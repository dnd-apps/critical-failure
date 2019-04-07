---
to: src/services/<%= name %>.service.ts
---
import { AService } from '@/abstractions/service.abstract';

export default class <%= h.inflection.classify(h.changeCase.camel(name)) %>Service extends AService {}
