<template>
  <div class="pop-up" :class="{ show : files.isShow }" @click="close">

    <div class="video-wrap">
      <video ref="video" class="video" controls loop>
        <source :src="require(`../assets/files/${files.video}`)" type="video/mp4">
      </video>
      <div class="close-pop-up">
        <img :src="require(`../assets/images/${files.icon}`)" alt="close" @click="close">
      </div>
    </div>

  </div>
</template>

<script>

export default {

  props: ['files'],

  watch:{

    'files.isShow'(boolean){
      boolean ? this.$refs.video.play() : this.$refs.video.pause()
    }

  },

  methods: {

    close() {
      this.files.isShow = false;
    }

  }

}

</script>

<style lang="scss" scoped>

  $bg-color: #fff;

  .pop-up {
    display: none;
    background: $bg-color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;

    &.show {
      display: block;
    }

    .video-wrap {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1;
    }

    .video {
      width: 100%;
      height: 100%;
    }

    .close-pop-up {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 15px;
      right: 30px;
      z-index: 2;
      cursor: pointer;

      img {
        width: 100%;
      }

    }

  }

</style>
