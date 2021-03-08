<template>
  <div id="homeRecomend">
    <div v-for="item in crecommends" class="recomend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeRecommend",
  props: {
    crecommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  #homeRecomend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 3px 0 10px;
    border-bottom: 10px solid #eee;

  }
  .recomend-item {
    flex: 1;
  }
  .recomend-item img {
    width: 90%;
    margin-bottom: 3px;
  }
</style>
