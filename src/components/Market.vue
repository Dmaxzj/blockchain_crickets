
<template>
  <a-card hoverable :style="{width: '300px', margin: 'auto'}" :bodyStyle="{ padding: 0 }">
    <img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      slot="cover"
    >

    <a-input addonBefore="蛐蛐名" v-model="name"/>
    <div :style="{ width: '100%' }">
      <a-input-number
        :min="1"
        :max="1000"
        v-model="nonce"
        :style="{ width: '100%', float: 'right' }"
      />
    </div>
    <div style="width: 100%">
      <a-button type="primary" block @click="handleClick">抽取</a-button>
    </div>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      name: "ququ",
      nonce: 0
    };
  },

  methods: {
    handleClick() {
      const hide = this.$message.loading('正在创建蛐蛐')
      this.$http
        .post("/api/cricket", {
          name: this.name,
          nonce: this.nonce
        })
        .then(response => {
          if (respones.status == 403) {
            this.$message.error("请先登陆");
          } else if (respones.status == 200) {
            this.$message.success('获得新蛐蛐', 2000)
            this.$router.push({ name: "cricket", params: { cricketId: response.data.cid } });
          } else {
            this.$message.error(respones.data.error);
          }
        })
        .catch(error => {
          this.$message.error("无法获取数据");
        })
        .finally(() => hide());
    }
  }
};
</script>

<style scoped>
</style>
