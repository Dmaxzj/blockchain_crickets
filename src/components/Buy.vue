<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="crickets">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-card :bodyStyle="{ padding: 0 }" :title="item.name" hoverable bordered>
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
        <p style="text-align: center" >价格: {{item.price}} </p>
        <div style="width: 100%">
          <a-button type="primary" block @click="handleClick(item.id)">购买</a-button>
        </div>
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script>
const crickets = [
  {
    id: 0,
    name: "ququ0",
    win: 10,
    loss: 20,
    price: 0
  },
  {
    id: 1,
    name: "ququ1",
    win: 110,
    loss: 220,
    price: 0
  },
  {
    id: 2,
    name: "ququ2",
    win: 110,
    loss: 20,
    price: 0
  }
];

export default {
  data() {
    return {
      crickets: crickets
    };
  },
  methods: {
    handleClick() {
      
    }
  }
};
</script>

<style>
</style>
