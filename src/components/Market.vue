
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
      console.log(this.name, this.nonce)
      this.$http
        .post("/api/cricket", {
          name: this.name,
          nonce: this.nonce
        })
        .then(response => {         
            this.$message.success('获得新蛐蛐', 2000)
            this.$router.push({ name: "cricket", params: { cricketId: response.data.cid } });
        })
        .catch(error => {
          this.$message.error(error.response.data || "无法获取数据");
        })
        .finally(() => hide());
    }
  }
};
</script>

<style scoped>
</style>
