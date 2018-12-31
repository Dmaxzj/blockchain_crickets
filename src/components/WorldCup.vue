<template>
  <div>
    <div :style="{textAlign: 'center'}">
      <a-button v-if="!worldCup.begin" @click="organiseHandler" type="primary">组织比赛</a-button>
      <div v-else :style="{textAlign: 'center'}">
        <a-alert type="info" :style="{marginBottom: '15px'}">
          <span slot="message">比赛将于 {{worldCup.starttime}} 后开始</span>
        </a-alert>
        <a-button @click="endHandler" type="primary">开始比赛</a-button>
      </div>
    </div>

    <a-table
      v-if="worldCup.begin"
      :columns="columns"
      :dataSource="crickets"
      bordered
      :style="{ marginTop: '50px'}"
    >
      <template slot="name" slot-scope="text">
        <a href="javascript:;">{{text}}</a>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a href="javascript:;" @click="handleParticipation(record.id)">参赛</a>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "名字",
    dataIndex: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "胜场",
    dataIndex: "win"
  },
  {
    title: "负场",
    dataIndex: "loss"
  }
];
export default {
  data() {
    return {
      worldCup: {
        begin: 0,
        starttime: 0
      },
      columns,
      noTitleKey: "info",
      crickets: [],
      loading: true
    };
  },
  created () {
    this.fetchData()
  },
  methods: {
    handleParticipation(cid) {
      const hide = this.$message.loading("正在报名");
      this.$http
        .post("/api/worldcup/" + cid)
        .then(respones => {
          if (respones.status == 200) {
            this.$message.success("报名成功", 1000);
          } else {
            this.$message.error(respones.data.error || "报名失败");
          }
        })
        .then(error => {
          this.$message.error(error.status);
        })
        .finally(() => {
          hide();
        });
    },
    fetchData() {
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

      this.$http
        .get("/api/worldcup")
        .then(respones => {
          if (respones.status == 403) {
            this.$message.error("请先登陆");
          } else if (respones.status == 200) {
            this.worldCup = respones.data;
          } else {
            this.$message.error(respones.data.error);
          }
        })
        .catch(error => {
          this.$message.error("无法获取数据");
        })
        .finally(() => (this.loading = false));
    },

    endHandler() {
      const hide = this.$message.loading("比赛进行中");
      this.$http
        .post("/api/worldcup/end")
        .then(response => {
          if (response.status == 200) {
            this.$message.success("比赛结束");
            this.worldCup.status = 0;
          } else {
            this.$message.error(response.data.error || "出现错误");
          }
        })
        .catch(error => {
          this.$message.error(error);
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
          if (response.status == 200) {
            this.$message.success("开放报名");
            this.worldCup = response.data;
          } else {
            this.$message.error(response.data.error || "出现错误");
          }
        })
        .catch(error => {
          this.$message.error(error);
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
