<template>
  <div>
    <div :style="{textAlign: 'center'}">
      <a-button v-if="(worldCup.state==0)" @click="organiseHandler" type="primary">组织比赛</a-button>
      <div v-else :style="{textAlign: 'center'}">
        <a-alert type="info" :style="{marginBottom: '15px'}">
          <span slot="message">比赛将于 {{parseDate}} 后开始</span>
        </a-alert>
        <a-button @click="endHandler" type="primary">开始比赛</a-button>
      </div>
    </div>

    <a-table
      v-if="(worldCup.state==1)"
      :columns="columns"
      :dataSource="crickets"
      bordered
      :style="{ marginTop: '50px'}"
      rowKey="id"
    >
      <template slot="name" slot-scope="text, record">
        <a href="javascript:;">{{text}}</a>
      </template>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;" @click="handleParticipation(record.id)">参赛</a>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "名字",
    dataIndex: "name",
    scopedSlots: { customRender: "name" },
    key: "name"
  },
  {
    title: "胜场",
    dataIndex: "win",
    key: "win"
  },
  {
    title: "负场",
    dataIndex: "loss",
    key: "loss"
  },
  {
    title: "参战",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];
export default {
  data() {
    return {
      worldCup: {
        state: 0,
        startDate: 0
      },
      columns,
      crickets: [],
      loading: true
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    parseDate() {
      const time = new Date(this.worldCup.startDate * 1000);
      return time.toLocaleString();
    }
  },

  methods: {
    handleParticipation(cid) {
      const hide = this.$message.loading("正在报名");
      this.$http
        .post("/api/worldcup/" + cid)
        .then(response => {
            this.$message.success("报名成功", 1000);
        })
        .catch(error => {
          this.$message.error(error.response.data);
        })
        .finally(() => {
          hide();
        });
    },
    fetchData() {
      this.$http
        .get("/api/user/crickets")
        .then(response => {
          this.crickets = response.data;
        })
        .catch(error => {
          this.$message.error(error.response.data || "无法获取数据");
        })
        .finally(() => (this.loading = false));

      this.$http
        .get("/api/worldcup")
        .then(response => {
          this.worldCup = response.data;
        })
        .catch(error => {
          this.$message.error(error.response.data || "无法获取数据");
        })
        .finally(() => (this.loading = false));

    },

    endHandler() {
      const hide = this.$message.loading("比赛进行中");
      this.$http
        .post("/api/worldcup/end")
        .then(response => {
          this.$message.success("比赛结束");
          this.worldCup.status = 0;
        })
        .catch(error => {
          this.$message.error(error.response.data || "无法结束比赛");
        })
        .finally(() => {
          hide();
        });
    },

    organiseHandler() {
      const hide = this.$message.loading("组织比赛中");
      this.$http
        .post("/api/worldcup/end")
        .then(response => {
          this.$message.success("开放报名");
          this.worldCup = response.data;
        })
        .catch(error => {
          this.$message.error(error.response.data || "无法组织比赛");
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
