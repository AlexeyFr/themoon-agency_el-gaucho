<template>
  <div class="section section-video">

    <img class="bg" :src="require(`../assets/images/${video.bg}`)" alt="background">
    <div class="mask"></div>
    <img class="play" :src="require(`../assets/images/${video.icon}`)" alt="play" @click="$emit('play')">

  </div>
</template>

<script>

export default {

  props: ['video']

}

</script>

<style lang="scss" scoped>

  $bg-color: #fff;
  $mask-color: #12161e;

  .main {

    .section-video {
      background: $bg-color;
      line-height: 0;
      margin-bottom: 16px;

      .bg {
        width: 100%;
      }

      .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: $mask-color;
        opacity: 0.6;
      }

      .play {
        width: 137px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
        cursor: pointer;
      }

    }

  }

  @media (max-width: 1440px) {

    .main {

      .section-video {

        .play {
          width: 110px;

        }

      }

    }

  }

  @media (max-width: 980px) {

    .main {

      .section-video {
        margin-bottom: 10px;

        .play {
          width: 70px;

        }

      }

    }

  }

</style>
