import Vue, { ComponentOptions } from 'vue';
import { Utils } from '@/lib/utils/types/index';

declare module 'vue/types/vue' {
  interface Vue {
    $utils: Utils;
  }
}


declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    utils?: Utils;
  }
}
