import Vue from 'vue'
import App from './App.vue'


// import ColorPicker from './../packages/index'
// Vue.use(ColorPicker)

import EventProxy from 'vue-event-proxy';
Vue.use(EventProxy);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')