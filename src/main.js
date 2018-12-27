// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Button, Layout, Menu, Icon, message} from 'ant-design-vue'

Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)

Vue.prototype.$message = message

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
