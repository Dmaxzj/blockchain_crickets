<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="crickets">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-card :bodyStyle="{ padding: 0 }" :title="item.name" hoverable bordered>
        <img
          alt="example"
          :src="item.img"
          slot="cover"
        >
        <a-row
          type="flex"
          justify="center"
          align="middle"
          :style="{ textAlign: 'center', height: '30px' }"
        >
          <a-col :span="12">胜场: {{item.win}}</a-col>
          <a-col :span="12">负场: {{item.loss}}</a-col>
        </a-row>
        <div :style="{ width: '100%' }">
          <a-input-number :min="1" :style="{ width: '100%', float: 'right' }" v-model="item.price"/>
        </div>
        <div style="width: 100%">
          <a-button type="primary" block @click="clickHandle(item.id, item.price)">出售</a-button>
        </div>
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script>

export default {
  data() {
    return {
      crickets: [],
      loading: false
    };
  },
  created () {
    this.fetchData()
  },
  methods: {
    parseImg(id) {
      return '/images/ququ' + (id % 4 + 1) + '.png'
    },
    fetchData() {
      this.$http
          .get("/api/user/crickets/")
          .then(response => {
            this.crickets = response.data.filter(item => {
              return !item.selling
            }).map(item => {
              item.img = this.parseImg(item.id)
              return item
            });;
          })
          .catch(error => {
            console.log(error.response.data || "无法获取数据")
            console.log(error.response.data)
            this.$message.error(error.response.data || "无法获取数据");
          })
          .finally(() => (this.loading = false));
    },
    onChange(value) {
      console.log("changed", value);
    },
    clickHandle(cid, price) {
      const hide = this.$message.loading("正在出售");
      this.$http
        .post("/api/cricket/sell", {
          cid: cid,
          price: price
        })
        .then(response => {
            this.$message.success("交易成功", 2000);
            this.fetchData()
        })
        .catch(error => {
          this.$message.error(error.response.data);
        })
        .finally(() => {
          hide();
        });
    }
  }
};
</script>

<style>
</style>
