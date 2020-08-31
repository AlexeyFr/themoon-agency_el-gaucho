<template>
  <div class="section-images">

    <div v-masonry transition-duration="0.4s" item-selector=".item" class="masonry-container">
      <div v-masonry-tile class="item" :key="index" v-for="(item, index) in images">
        <img :src="require(`../assets/images/${item}`)" alt="sheep">
      </div>
    </div>

  </div>
</template>

<script>

export default {

  props: ['images'],

}

</script>

<style lang="scss" scoped>

  $bg-color: #fff;

  .main {

    .section-images {
      background: $bg-color;
      line-height: 0;
      width: 103.4%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      .masonry-container {

        .item {
          width: 25%;

          img {
            width: 96.6%;
            margin: 0 1.7% 3.4% 1.7%;
          }

        }

      }

    }

  }

</style>
