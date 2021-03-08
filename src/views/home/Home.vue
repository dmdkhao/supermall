<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :cbanners="banners"/>
    <home-recommend :crecommends="recommends"></home-recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childcpn/HomeSwiper";
import HomeRecommend from "@/views/home/childcpn/HomeRecommend";

import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components: {
    HomeRecommend,
    HomeSwiper,
    NavBar,

  },
  data() {
    return{
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(result => {
      this.banners = result.data.banner.list;
      this.recommends = result.data.recommend.list;
    })
  }
}
</script>

<style scoped>
  @import "~assets/css/base.css";

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
