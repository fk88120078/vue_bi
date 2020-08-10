/*
 * @Description: 项目组件配置项
 * 1.VueDraggableResizable  拖拽组件
 * 2.Utils  types 配置 封装的方法
 *    1.getRouteQuery  取上卡文Vue对象的路由中query参数
 *    2.getRouteParams  获取上卡文Vue对象的路由中params参数
 * 3.EventBus   this.$bus.$emit 
 * 4.resetMessage  修复element 弹窗冒泡补丁
 * 5.ElementUI    启用饿了么Ui
 * 6.Popup  vant 组件库
 * @Autor: fankai16
 * @Date: 2020-07-28 15:50:05
 * @LastEditors: fankai16
 * @LastEditTime: 2020-07-28 15:50:05
 */
import ElementUI from 'element-ui';
import '@/assets/scss/element-variables.scss'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import EventBus from 'vue-bus-ts';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import Utils from '@/lib/utils';  
import resetMessage from '@/lib/resetMessage.js';

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.config.productionTip = false //是否是开发者模式还是线上模式

// 挂载全局注册工具
Vue.use(Utils);
Vue.use(EventBus);
Vue.use(ElementUI);
const bus = new EventBus.Bus();
Vue.prototype.$message = resetMessage;

new Vue({
  bus: bus,
  router:router,
  store:store,
  render: h => h(App),
//   mounted() {   //这是分包打包如不需要可注释 seo需要
//     document.dispatchEvent(new Event('render-event'))
//   },
    
}).$mount('#app')
