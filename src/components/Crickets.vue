<template>
  <div :style="{textAlign: 'center'}">
    <a-spin v-if="loading" size="large"/>
    <a-list v-else :grid="{ gutter: 16, column: 4 }" :dataSource="crickets">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card
          :bodyStyle="{ padding: 0 }"
          :title="item.name"
          hoverable
          bordered
          @click="handleClick"
        >
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
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loading: true,
      crickets: []
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    parseImg: function(id) {
      return '/images/ququ' + (id % 4 + 1) + '.png'
    },
    handleClick() {
      this.$router.push({ name: "cricket", params: { cricketId: 0 } });
    },

    fetchData() {
      if (this.$route.path == "/crickets") {
        this.$http
          .get("/api/crickets")
          .then(respones => {
            this.crickets = respones.data.map(item => {
              item.img = this.parseImg(item.id)
              return item
            });
          })
          .catch(error => {
            this.$message.error("无法获取数据");
          })
          .finally(() => (this.loading = false));
      } else {
        this.$http
          .get("/api/user/crickets")
          .then(respones => {
            if (respones.status == 403) {
              this.$message.error("请先登陆");
            } else if (respones.status == 200) {
              this.crickets = respones.data;
            } else {
              this.$message.error(respones.data.error);
            }
          })
          .catch(error => {
            this.$message.error("无法获取数据");
          })
          .finally(() => (this.loading = false));
      }
    }
  }
};
</script>

<style>
.a-card .a-card-grid :hover {
  box-shadow: 0ch;
}
</style>
