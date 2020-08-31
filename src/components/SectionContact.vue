<template>
  <section :id="contact.section" class="section section-contact">

    <img class="bg left" :src="require(`../assets/images/${contact.bgLeft}`)" alt="background">
    <img class="bg right" :src="require(`../assets/images/${contact.bgRight}`)" alt="background">
    <article class="article left">
      <div class="content-wrap-b">
        <div class="content">
          <h2 class="title" v-html="contact.title"></h2>
          <p class="info" v-html="contact.info"></p>
        </div>
      </div>
    </article>
    <article class="article right">
      <div class="content-wrap-b">
        <PartialContactForm />
      </div>
    </article>

  </section>
</template>

<script>

  import PartialContactForm from "./PartialContactForm.vue";

export default {

    components: {
      PartialContactForm
    },

    props: ['contact'],

}

</script>

<style lang="scss" scoped>

  $bg-color: #f2f2f2;

  .main {

    .section-contact {
      display: flex;
      flex-wrap: wrap;
      background: $bg-color;
      padding-top: 154px;
      padding-bottom: 118px;
      margin-top: -16px;

      .bg {
        position: absolute;
        z-index: 1;

        &.left {
          width: 300px;
          top: 0;
          left: 0;
        }

        &.right {
          bottom: 0;
          right: 0;
        }

      }

      .article {
        width: 50%;
        display: flex;

        &.left {
          justify-content: flex-end;
        }

        &.right {

          .content-wrap-b {
            justify-content: center;

            .content {
              width: 100%;
              display: flex;
              flex-wrap: wrap;

            }

          }

        }

        .content-wrap-b {

          .content {

            .title {
              margin-bottom: 32px;
            }

          }

        }

      }

    }

  }

  @media (max-width: 1440px) {

    .main {

      .section-contact {
        padding-top: 120px;
        padding-bottom: 90px;

        .bg {

          &.left {
            width: 220px;
          }

          &.right {
            width: 320px;
            right: -130px;
          }

        }

        .article {

          .content-wrap-b {

            .content {

              .title {
                margin-bottom: 20px;
              }

            }

          }

        }

      }

    }

  }

  @media (max-width: 980px) {

    .main {

      .section-contact {
        padding-top: 80px;
        padding-bottom: 60px;
        margin-top: -10px;

        .bg {

          &.left {
            width: 150px;
          }

          &.right {
            width: 160px;
            right: -70px;
          }

        }

        .article {
          width: 100%;

          .content-wrap-b {

            .content {
              width: 100%;
              text-align: center;

              .title {
                margin-bottom: 15px;
              }

            }

          }

        }

      }

    }

  }

</style>
