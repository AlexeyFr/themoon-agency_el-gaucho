<template>
  <section :id="making.section" class="section section-making">

    <img class="bg" v-if="making.bg" :src="require(`../assets/images/${making.bg}`)" alt="background">
    <article class="article left">
      <div class="content-wrap-l">
        <div class="content">
          <h2 class="title" v-html="making.title"></h2>
          <p class="info" v-html="making.info"></p>
          <div class="details">
            <a href="/">{{$store.getters.readMore}}<img :src="require(`../assets/images/${$store.getters.readMoreSrc[1]}`)" alt="arrow"></a>
          </div>
        </div>
      </div>
    </article>
    <article class="article article right">
      <div class="content-wrap-l">
        <div class="content">
          <div class="sheep" v-for="sheep in making.sheeps" :key="sheep.unit">
            <img :src="require(`../assets/images/${sheep.icon}`)" alt="sheep">
            <h3>{{ sheep.value }}</h3>
            <span>{{ sheep.unit }}</span>
          </div>
        </div>
      </div>
    </article>
    <div class="wrap-l">
      <p class="info" v-html="making.info_2"></p>
      <p class="info" v-if="making.info_3" v-html="making.info_3"></p>
    </div>

  </section>
</template>

<script>

export default {

  props: ['making']

}

</script>

<style lang="scss" scoped>

  $bg-color: #fff;
  $text-color: #D08C00;

  .main {

    .section-making {
      display: flex;
      flex-wrap: wrap;
      background: $bg-color;
      padding: 130px 0;

      .bg {
        width: 1105px;
        position: absolute;
        left: -564px;
        bottom: -330px;
        z-index: 1;
      }

      .article {
        width: 50%;
        display: flex;

        &.left {
          justify-content: flex-end;
        }

        &.right {

          .content-wrap-l {
            justify-content: center;

            .content {
              width: 100%;
              display: flex;
              justify-content: center;
              padding-left: 80px;

              .sheep {
                margin: 64px 58px 0;
                text-align: center;

                img {
                  margin-bottom: 24px;
                }

                h3 {
                  font-weight: bold;
                  font-size: 30px;
                  margin-bottom: 6px;
                }

                span {
                  color: $text-color;
                  font-weight: normal;
                  font-size: 16px;
                }

              }

            }

          }

        }

        .content-wrap-l {

          .content {

            .title {
              margin-bottom: 42px;
            }

            .info {
              margin-bottom: 54px;
            }

            .details {
              margin-bottom: 64px;
            }

          }

        }

      }

      .wrap-l {

        .info {
          margin-bottom: 22px;
        }

      }

    }

  }

  @media (max-width: 1440px) {

    .main {

      .section-making {
        padding: 100px 0;

        .bg {
          width: 900px;
          left: -480px;
          bottom: -280px;
        }

        .article {

          &.right {

            .content-wrap-l {

              .content {

                padding-left: 50px;

                .sheep {
                  margin: 50px 40px 0;

                  img {
                    scale: (0.9);
                    margin-bottom: 15px;
                  }

                  h3 {
                    font-size: 22px;
                    margin-bottom: 5px;
                  }

                  span {
                    font-size: 14px;
                  }

                }

              }

            }

          }

          .content-wrap-l {

            .content {

              .title {
                margin-bottom: 30px;
              }

              .info {
                margin-bottom: 40px;
              }

              .details {
                margin-bottom: 50px;
              }

            }

          }

        }

        .wrap-l {

          .info {
            margin-bottom: 15px;
          }

        }

      }

    }

  }

  @media (max-width: 980px) {

    .main {

      .section-making {
        padding: 60px 0;

        .bg {
          width: 500px;
          left: -260px;
          bottom: -160px;
        }

        .article {
          width: 100%;

          .content {
            width: 100%;
            text-align: center;
          }

          &.right {

            .content-wrap-l {

              .content {
                padding-left: 0;

                .sheep {
                  margin: 20px 30px 0;

                  img {
                    scale: (0.7);
                  }

                }

              }

            }

          }

          .content-wrap-l {

            .content {

              .title {
                margin-bottom: 20px;
              }

              .info {
                margin-bottom: 30px;
              }

              .details {
                margin-bottom: 40px;
              }

            }

          }

        }

      }

    }

  }

</style>
