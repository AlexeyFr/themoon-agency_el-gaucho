<template>
  <section id="company" class="section section-company">

    <img class="bg" :src="require(`../assets/images/${company.bg}`)" alt="background">
    <article class="article">
      <div class="content-wrap-l">
        <div class="content">
          <h2 class="title" v-html="company.title"></h2>
          <p class="info" v-html="company.info_1"></p>
          <p class="info" v-html="company.info_2"></p>
          <div class="details">
            <a href="/">{{$store.getters.readMore}}<img :src="require(`../assets/images/${$store.getters.readMoreSrc[1]}`)" alt="arrow"></a>
          </div>
        </div>
      </div>
    </article>

  </section>
</template>

<script>

export default {

  props: ['company']

}

</script>

<style lang="scss" scoped>

  $bg-color: #fff;
  $border-color: #f4f4f4;

  .main {

    .section-company {
      background: $bg-color;
      padding-top: 180px;
      padding-bottom: 130px;
      border-bottom: 2px solid $border-color;

      .bg {
        width: 735px;
        position: absolute;
        top: -344px;
        right: 0;
        z-index: 1;
      }

      .article {
        width: 50%;
        display: flex;
        justify-content: flex-end;
      }

      .title {
        margin-bottom: 44px;
      }

      .info {
        margin-bottom: 25px;
      }

    }

  }

  @media (max-width: 1440px) {

    .main {

      .section-company {
        padding-top: 150px;
        padding-bottom: 100px;

        .bg {
          width: 600px;
          top: -250px;
        }

        .title {
          margin-bottom: 35px;
        }

        .info {
          margin-bottom: 20px;
        }

      }

    }

  }

  @media (max-width: 980px) {

    .main {

      .section-company {
        padding-top: 80px;
        padding-bottom: 60px;
        border-width: 1px;

        .bg {
          width: 300px;
          top: -230px;
        }

        .article {
          width: 100%
        }

        .content {
          text-align: center;
        }

        .title {
          margin-bottom: 44px;
        }

        .info {
          margin-bottom: 25px;
        }

      }

    }

  }

</style>
