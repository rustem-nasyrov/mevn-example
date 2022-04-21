import Vue, { VNode } from "vue";
import { AxiosStatic } from "axios";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosStatic;
  }
}
