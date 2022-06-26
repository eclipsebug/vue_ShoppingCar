<template>
  <div>
    <MyHeader />
    <MyGoods />
    <MyFooter />
  </div>
</template>

<script>
// 引入
import axios from 'axios'
import MyHeader from '#/MyHeader.vue'
import MyGoods from '#/MyGoods.vue'
import MyFooter from '#/MyFooter.vue'
export default {
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
      console.log(res)
    }
  }
}
</script>

<style></style>
