<template>
  <div class="app">
    <MyHeader title="购物车案例" color="yellow" background="skyblue" />
    <MyGoods v-for="item in goodList" :key="item.goods_id" :goods="item" />
    <MyFooter :goods="goodList" />
  </div>
</template>

<script>
// 引入
import axios from 'axios'
import MyHeader from '#/MyHeader.vue'
import MyGoods from '#/MyGoods.vue'
import MyFooter from '#/MyFooter.vue'
export default {
  data() {
    return {
      goodList: []
    }
  },

  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      const res = await axios({
        url: '/api/cart'
      })
      // console.log(res)
      this.goodList = res.data.list
    }
  }
}
</script>

<style>
.app {
  padding: 50px 0;
}
</style>
