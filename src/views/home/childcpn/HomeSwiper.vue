<template>
  <swiper>
    <swiper-item v-for="(item,index) in cbanners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper";

  export default {
    name: "HomeSwiper",
    props: {
      cbanners: {
        type: Array
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
