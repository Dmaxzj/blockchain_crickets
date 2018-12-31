
<template>
  <a-card hoverable :style="{width: '300px', margin: 'auto'}" :bodyStyle="{ padding: 0 }">
    <img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      slot="cover"
    >

    <a-input addonBefore="蛐蛐名" v-model="name" />
    <div :style="{ width: '100%' }">
        <a-input-number :min="1" :max="1000" v-model="nonse" :style="{ width: '100%', float: 'right' }"/>
    </div>
    <div style="width: 100%">
        <a-button type="primary" block>抽取</a-button>
    </div>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      name: "ququ",
      nonse: 0
    }
  }
};
</script>


<style scoped>

</style>




