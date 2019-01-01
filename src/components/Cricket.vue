<template>
  <a-card
    style="width:100%"
    :tabList="tabListNoTitle"
    :activeTabKey="noTitleKey"
    :bodyStyle="{ padding: 0 }"
    class="cricket-container"
    @tabChange="key => onTabChange(key, 'noTitleKey')"
  >
    <a-row v-if="noTitleKey === 'info'">
      <a-col :span="24">
        <a-row class="info-item">
          <a-col :span="4" class="info-label">标识</a-col>
          <a-col :span="20" class="info-data">{{ cricket.id}}</a-col>
        </a-row>
        <a-row class="info-item">
          <a-col :span="4" class="info-label">名称</a-col>
          <a-col :span="20" class="info-data">{{ cricket.name}}</a-col>
        </a-row>
        <a-row class="info-item">
          <a-col :span="4" class="info-label">力量</a-col>
          <a-col :span="20" class="info-data">{{ cricket.strength}}</a-col>
        </a-row>
        <a-row class="info-item">
          <a-col :span="4" class="info-label">气势</a-col>
          <a-col :span="20" class="info-data">{{ cricket.momentum}}</a-col>
        </a-row>
        <a-row class="info-item">
          <a-col :span="4" class="info-label">大小</a-col>
          <a-col :span="20" class="info-data">{{ cricket.size}}</a-col>
        </a-row>
        <a-row class="info-item">
          <a-col :span="4" class="info-label">拥有者</a-col>
          <a-col :span="20" class="info-data">{{ cricket.owner}}</a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row v-else>
      <a-table :columns="columns" :dataSource="cricket.record" bordered>
        <template slot="name" slot-scope="text">
          <a href="javascript:;">{{text}}</a>
        </template>
      </a-table>
    </a-row>
  </a-card>
</template>

<script>
const columns = [
  {
    title: "输/赢",
    dataIndex: "isWin",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "对手",
    dataIndex: "opponents"
  },
  {
    title: "第一回合",
    dataIndex: "round1"
  },
  {
    title: "第二回合",
    dataIndex: "round2"
  },
  {
    title: "第三回合",
    dataIndex: "round3"
  }
];

const result = {
  v1: "险胜",
  v2: "小胜",
  v3: "大胜",
  v4: "碾压",
  d1: "失败"
};

function getDescription(score) {
  if (score > 0) {
    if (score < 20) {
      return result["v1"];
    } else if (score < 60) {
      return result["v2"];
    } else if (score < 160) {
      return result["v3"];
    } else {
      return result["v4"];
    }
  } else {
    return result["d1"];
  }
}

export default {
  data() {
    return {
      columns,
      tabListNoTitle: [
        {
          key: "info",
          tab: "属性"
        },
        {
          key: "record",
          tab: "比赛记录"
        }
      ],
      noTitleKey: "info",
      cricket: {}
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    onTabChange(key, type) {
      this[type] = key;
    },

    fetchData() {
      const cid = this.$route.path.split("/")[2];
      this.$http
        .get("/api/crickets/" + cid)
        .then(response => {
          this.cricket = response.data;
          this.$http
            .get("/api/record/" + cid)
            .then(response => {
              this.cricket.record = response.data.map((item, index) => {
                return {
                  isWin: item.winnerId == cid ? "赢" : "输",
                  opponents: item.winnerId == cid ? item.winnerId : item.loserId,
                  round1: getDescription(item.round1),
                  round2: getDescription(item.round2),
                  round3: getDescription(item.round3)
                };
              });
            })
            .catch(error => {
              console.log(error)
              console.log(error.response)
              console.log(error.response.data || "无法获取数据")
              this.$message.error(error.response.data || "无法获取数据");
            });
        })
        .catch(error => {
          this.$message.error(error.response.data ||"无法获取数据");
        });
    }
  }
};
</script>

<style scoped>
.info-item {
  text-align: center;
  /* height: 100px; */
  border-bottom: 1px solid #e8e8e8;
}

.info-label {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 20px;
  background-color: #d8d8d8;
}

.info-data {
  text-align: left;
  padding: 20px;
  font-size: 16px;
}
</style>


