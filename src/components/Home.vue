<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo">
        蛐蛐
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['mycrickets']" :defaultOpenKey="['crickets']" @click="handleClick">
        <a-sub-menu key="crickets">
          <span slot="title" class="nav-text"><a-icon type="user" />蛐蛐</span>
          
          <a-menu-item key="mycrickets">我的</a-menu-item>
          <a-menu-item key="allcrickets">所有</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="market">
          <span slot="title" class="nav-text"><a-icon type="user" />商店</span>
          
          <a-menu-item key="roll">抽取</a-menu-item>
          <a-menu-item key="consignment">寄售</a-menu-item>
          <a-menu-item key="buy">购买</a-menu-item>

        </a-sub-menu>
        <a-menu-item key="worldcup">
         <span class="nav-text"><a-icon type="user" />比赛</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial', background: '#fff', padding: '20px' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleClick (e) {
      console.log(e)
      const routeMap = {
        'mycrickets': {name: 'mycrickets'},
        'allcrickets': {name: 'allcrickets'},
        'roll': {name: 'rollcricket'},
        'consignment': {name: 'consignment'},
        'buy': {name: 'buy'},
        'worldcup': {name: 'worldcup'}
      }
      this.$router.push(routeMap[e.key])
    }
  }
}
</script>



<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
