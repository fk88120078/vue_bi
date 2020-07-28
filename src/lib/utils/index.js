/**
 * @name utils
 * @author fankai16
 * @description 全局工具方法插件。Utils类中挂载的方法，需要在types/index.d.ts中进行声明
 *
 */

class Utils {
     // 获取上卡文Vue对象的路由中query参数
     getRouteQuery(context) {
        return context.$route.query;
    }

    // 获取上卡文Vue对象的路由中params参数
    getRouteParams(context){
        return context.$route.params;
    }
}

const index = { // 作为插件输出
    Utils: Utils,
    install(Vue) { // 安装
        Vue.prototype.$utils = new Utils();
    }
};

export default index;