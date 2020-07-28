declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare let echarts: any;
declare module 'echarts' {
  export = echarts;
}

declare let vueDraggableResizable: any;
declare module 'vue-draggable-resizable' {
  export = vueDraggableResizable;
}
declare module 'vue-grid-layout';