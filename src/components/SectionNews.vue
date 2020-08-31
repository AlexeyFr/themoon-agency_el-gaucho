<template>
  <section id="news" class="section section-news">

    <img class="bg" v-if="news.bg" :src="require(`../assets/images/${news.bg}`)" alt="background">
    <div class="wrap-l">
      <h2 class="title" v-html="news.title"></h2>
      <div class="articles_wrap">
        <article v-for="item in news.items" :key="item.img">
          <img class="img" :src="require(`../assets/images/${item.img}`)" alt="news">
          <div class="date" v-html="item.date"></div>
          <h3 class="caption" v-html="item.caption"></h3>
          <div class="inf" v-html="item.inf">
          </div>
          <div class="details">
            <a href="/">{{$store.getters.readMore}}<img :src="require(`../assets/images/${$store.getters.readMoreSrc[1]}`)" alt="arrow"></a>
          </div>
        </article>
      </div>
    </div>

  </section>
</template>

<script>

export default {

  props: ['news']

}

</script>

<style lang="scss" scoped>

  $bg-color: #fff;
  $date-color: #D08C00;
  $inf-color: #1D252D;

  .main {

    .section-news {
      padding-top: 90px;
      padding-bottom: 288px;
      background: $bg-color;

      .bg {
        width: 1105px;
        position: absolute;
        right: -580px;
        bottom: -300px;
        z-index: 1;

        transform: rotateY(180deg);
      }

      .title {
        margin-bottom: 46px;
      }

      .articles_wrap {
        display: flex;
        justify-content: space-between;

        article {
          width: calc(33.3% - 12px);
        }
      }

      .img {
        width: 100%;
        margin-bottom: 36px;
        transition: scale .3s linear;

        &:hover {
          scale: (1.3);
          box-shadow: 0 0 5px #000;
        }

      }

      .date {
        font-weight: normal;
        font-size: 14px;
        color: $date-color;
        margin-bottom: 28px;
      }

      .caption {
        font-weight: bold;
        font-size: 38px;
        margin-bottom: 48px;
      }

      .inf {
        line-height: 1.1;
        color: $inf-color;
      }

    }

  }

  @media (max-width: 1440px) {

    .main {

      .section-news {
        padding-top: 100px;
        padding-bottom: 200px;

        .bg {
          width: 900px;
          right: -480px;
          bottom: -280px;
        }

        .title {
          margin-bottom: 36px;
        }

        .img {
          margin-bottom: 20px;
        }

        .date {
          font-size: 12px;
          margin-bottom: 15px;
        }

        .caption {

          font-size: 26px;
          margin-bottom: 30px;
        }

      }

    }

  }

  @media (max-width: 980px) {

    .main {

      .section-news {
        padding-top: 70px;
        padding-bottom: 40px;

        .bg {
          width: 500px;
          right: -260px;
          bottom: -160px;
        }

        .title {
          margin-bottom: 26px;
        }

        .articles_wrap {
          flex-direction: column;
          align-items: center;

          article {
            width: 100%;
            margin-bottom: 40px;
          }

        }

        .img {
          margin-bottom: 15px;

          &:hover {
            scale: (1);
            box-shadow: none;
          }

        }

        .date {
          margin-bottom: 10px;
        }

        .caption {
          margin-bottom: 20px;
        }

        .inf {
          margin-bottom: -10px;
        }

      }

    }

  }

</style>
