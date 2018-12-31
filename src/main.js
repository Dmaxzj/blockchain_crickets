// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import { Button, Layout, Menu, Icon, message, List, Card, Col, Row, Table, Input, InputNumber, Spin, Alert, Modal, Select } from 'ant-design-vue'

Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(List)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Spin)
Vue.use(Alert)
Vue.use(Modal)
Vue.use(Select)

Vue.prototype.$message = message
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
