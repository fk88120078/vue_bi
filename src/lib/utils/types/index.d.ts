import _Vue from 'vue'; // <-- notice the changed import
import "./vue";

export declare class Utils {
  getRouteQuery(context: any): object | null | undefined;
  getRouteParams(context: any): object | null | undefined;
}

export declare function install(Vue: typeof _Vue): void;

declare const _default: {
  Utils: typeof Utils;
  install: typeof install;
};

export default _default;
