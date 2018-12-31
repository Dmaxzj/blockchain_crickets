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
          <a-col :span="20" class="info-data">{{ cricket.id}}</a-col>
        </a-row>
        <a-row class="info-item">
          <a-col :span="4" class="info-label">力量</a-col>
          <a-col :span="20" class="info-data">{{ cricket.id}}</a-col>
        </a-row>
        <a-row class="info-item">
          <a-col :span="4" class="info-label">翅展</a-col>
          <a-col :span="20" class="info-data">{{ cricket.id}}</a-col>
        </a-row>
        <a-row class="info-item">
          <a-col :span="4" class="info-label">气势</a-col>
          <a-col :span="20" class="info-data">{{ cricket.id}}</a-col>
        </a-row>
        <a-row class="info-item">
          <a-col :span="4" class="info-label">拥有者</a-col>
          <a-col :span="20" class="info-data">{{ cricket.id}}</a-col>
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
const columns = [{
  title: '输/赢',
  dataIndex: 'isWin',
  scopedSlots: { customRender: 'name' },
}, {
  title: 'Cash Assets',

  dataIndex: 'money',
}, {
  title: 'Address',
  dataIndex: 'address',
}];


export default {
  data() {
    return {
      columns,
      tabListNoTitle: [
        {
          key: "info",
          tab: "info"
        },
        {
          key: "record",
          tab: "record"
        }
      ],
      noTitleKey: "info",
      cricket: {
        id: 0,
        name: "ququ0",
        win: 10,
        loss: 10,
        owner: "dzj",
        price: 100,
        record: [
          {
            winner: 1,
            losser: 2,
            isWin: "赢"
          },
          {
            winner: 2,
            losser: 3,
            isWin: "赢"
          }
        ]
      }
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    }
  }
};
</script>

<style scoped>
.cricket-container {
}

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


