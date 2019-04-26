import Vue, { VNode } from 'vue';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.css' {
  const css: any;
  export default css;
}

declare module '*.jpg' {
  const jpg: any;
  export default jpg;
}

declare module '*.json' {
  const json: any;
  export default json;
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
