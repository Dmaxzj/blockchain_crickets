<template>
  <div>
    <div v-if="worldCup.begin">
        
        <a-button> 开启比赛 </a-button>
    </div>

    <a-table v-else :columns="columns" :dataSource="cricket.record" bordered>
      <template slot="name" slot-scope="text">
        <a href="javascript:;">{{text}}</a>
      </template>
    </a-table>
  </div>
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
      worldCup: {
        begin: 1
      },
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
  }
};
</script>

<style>
</style>
