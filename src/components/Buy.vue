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
        <p style="text-align: center">价格: {{item.price}}</p>
        <div style="width: 100%">
          <a-button type="primary" block @click="handleClick(item.id, item.price)">购买</a-button>
        </div>
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  data() {
    return {
      crickets: []
    };
  },
  created() {
    this.$http.get('/api/crickets/selling').then( response => {
      
        this.crickets = respones.data.map(item => {
              item.img = this.parseImg(item.id)
              return item
            });
     
    }).catch( error => {
      this.$message.error(error)
    })
  },
   computed: {
    parseImg(id) {
      return '/images/ququ' + (id % 4 + 1) + '.png'
    }
  },
  methods: {
    parseImg(id) {
      return '/images/ququ' + (id % 4 + 1) + '.png'
    },
    handleClick(cid, price) {
      const hide = this.$message.loading('正在购买')
      this.$http.post('/api/cricket/buy', {
        cid: cid,
        price: price
      }).then( response => {
        if (response.status == 200) {
          this.$message.success('交易成功', 2000)
          this.$router.push({ name: "cricket", params: { cricketId: response.data.cid } });
        } else {
          this.$message.error('购买失败' || response.data.error)
        }
      }).catch( error => {
        console.log(error)
        this.$message.error(error)
      }).finally( () => {
        hide()
      })
    }
  }
};
</script>

<style>
</style>
