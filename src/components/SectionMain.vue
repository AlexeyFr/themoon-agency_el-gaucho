<template>
  <section id="main" class="section section-main">

    <article class="article" v-for="(article, name) in main" :key="name" :class="name">
      <img class="bg" :src="require(`../assets/images/${article.bg}`)" alt="background">
      <video :ref="`video_${name}`" :id="`video_${name}`" class="video" loop autoplay muted>
        <source :src="require(`../assets/files/${article.video}`)" type="video/mp4">
      </video>
      <div class="hover"></div>
      <div class="content-wrap-l">
        <div class="content">
          <h2 class="title" v-html="article.title"></h2>
          <p class="info" v-html="article.info"></p>
          <div class="details">
            <a href="/">{{$store.getters.readMore}}<img :src="require(`../assets/images/${$store.getters.readMoreSrc[0]}`)" alt="arrow"></a>
          </div>
        </div>
      </div>
    </article>

  </section>
</template>

<script>

export default {

  props: ['main'],

  mounted() {
    document.addEventListener('load', this.play);
  },

  methods: {

    play() {
      this.$refs.video_left[0].play();
      this.$refs.video_right[0].play();
    }

  }

}

</script>

<style lang="scss" scoped>

  $text-color: #fff;
  $hover-color: #421200;

  .main {

    .section-main {
      display: flex;

      .article {
        width: 50%;
        min-height: 824px;
        display: flex;

        .bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .video {
          height: 100%;
          width: auto;
          position: absolute;
          background: $text-color;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .hover {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          background: $hover-color;
          opacity: 0.8;
          display: none;
        }

        &:hover {

          .hover {
            display: block;
          }

        }

        &.left {
          justify-content: flex-end;
        }

        &.right {

          .content-wrap-l {
            justify-content: flex-end;
          }

        }

        .content-wrap-l {
          z-index: 4;

          .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: $text-color;

            .title {
              font-size: 48px;
              margin-bottom: 54px;
            }

            .details {

              a {
                color: $text-color;
              }

            }

          }

        }

      }

    }

  }

  @media (max-width: 1440px) {

    .main {

      .section-main {

        .article {
          min-height: 730px;

          .content-wrap-l {

            .content {

              .title {
                font-size: 36px;
                margin-bottom: 40px;
              }

            }

          }

        }

      }

    }

  }

  @media (max-width: 980px) {

    .main {

      .section-main {
        flex-direction: column;

        .article {
          width: 100%;
          min-height: 430px;

          .video {
            width: 100%;
            height: auto;
          }

          &:hover {

            .hover {
              display: none;
            }

          }

          .content-wrap-l {

            .content {
              width: 100%;
              align-items: center;

              .title {
                font-size: 26px;
                margin-bottom: 30px;
              }

            }

          }

        }

      }

    }

  }

  @media (max-width: 768px) {

    .main {

      .section-main {

        .article {

          .video {
            width: auto;
            height: 100%;
          }

        }

      }

    }

  }

</style>
