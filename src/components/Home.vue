<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo" :style="{color: 'white', textAlign: 'center'}">蛐蛐</div>
      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="['mycrickets']"
        :defaultOpenKey="['crickets']"
        @click="handleClick"
      >
        <a-sub-menu key="crickets">
          <span slot="title" class="nav-text">
            <a-icon type="user"/>蛐蛐
          </span>

          <a-menu-item key="mycrickets">我的</a-menu-item>
          <a-menu-item key="allcrickets">所有</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="market">
          <span slot="title" class="nav-text">
            <a-icon type="user"/>商店
          </span>

          <a-menu-item key="roll">抽取</a-menu-item>
          <a-menu-item key="consignment">寄售</a-menu-item>
          <a-menu-item key="buy">购买</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="worldcup">
          <span class="nav-text">
            <a-icon type="user"/>比赛
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0, textAlign: 'right' }">
        <div class="user-box">
          <a-icon type="user"/>
          <span v-if="!login" @click="showModal">登陆</span>
          <span v-else @click="logoutHandler">退出</span>
          <a-modal
            title="登陆"
            :visible="visible"
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
            :style="{textAlign: 'center'}"
          >
          <div :style="{width: '100%'}">
            <a-select
              labelInValue
              :defaultValue="{ key: selectUser }"
              :style="{width: '300px', marginBottom: '20px'}"
              @change="(e) => {selectUser = e.key}"
            >
              <a-select-option v-for="user in users" :key="user"> {{user}}</a-select-option>
            </a-select>
            <a-input style="width: 300px" v-model="password" placeholder="密码"/>
          </div>
          </a-modal>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px 0', overflow: 'initial', background: '#fff', padding: '20px' }"
      >
        <router-view/>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      login: false,
      visible: false,
      confirmLoading: false,
      password: null,
      selectUser: null,
      users: []
    };
  },
  created() {
    this.$http.get("/api/user").then(response => {
      this.login == response.data;
    });
    this.$http.get('/api/users').then(response => {
      this.users = response.data
      this.selectUser = this.users[0]
    })
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.confirmLoading = true;
      console.log(this.selectUser, this.password)
      this.$http
        .post("/api/login", {
          address: this.selectUser,
          password: this.password
        })
        .then(response => {
          if (response.status == 200) {
            this.login = true;
            this.visible = false;
          }
        })
        .catch(error => {
          this.$message.error(error);
        })
        .finally(() => {
          this.confirmLoading = false;
        });
    },
    handleCancel(e) {
      this.visible = false;
    },
    logoutHandler() {
      this.$http.post("/api/logout").then(response => {
        this.login = false;
      });
    },
    handleClick(e) {
      console.log(e);
      const routeMap = {
        mycrickets: { name: "mycrickets" },
        allcrickets: { name: "allcrickets" },
        roll: { name: "rollcricket" },
        consignment: { name: "consignment" },
        buy: { name: "buy" },
        worldcup: { name: "worldcup" }
      };
      this.$router.push(routeMap[e.key]);
    }
  }
};
</script>



<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.user-box {
  margin-right: 20px;
  cursor: pointer;
}

.user-box span:hover {
  color: blue
}
</style>
