// /packages/color - picker / index.js
// 导入组件，组件必须声明 name
import vueVerify from './src/vue-verify.vue'

// 为组件提供 install 安装方法，供按需引入
vueVerify.install = function (Vue) {
     Vue.component(vueVerify.name, vueVerify)
}

// 默认导出组件
export default vueVerify
