<template>
  <body id="app">

    <Header :links="links" />

    <HomePage @play="onPlay" />

    <Footer :links="links" />

    <PartialPopUp :files="files" />

  </body>
</template>

<script>

  import "normalize.css";

  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import HomePage from "./components/HomePage.vue";
  import PartialPopUp from "./components/PartialPopUp.vue";

  export default {
    components: {
      Header,
      Footer,
      HomePage,
      PartialPopUp
    },

  data() {

    return {

      links: [
        {
          name: "Головна",
          ref: "main"
        },
        {
          name: "Про компанію",
          ref: "company"
        },
        {
          name: "Тваринництво",
          ref: "stockbreeding"
        },
        {
          name: "Рослинництво",
          ref: "growing"
        },
        {
          name: "Новини",
          ref: "news"
        },
        {
          name: "Контакти",
          ref: "footer"
        },
      ],

      files: {
        isShow: false,
        video: "1.mp4",
        icon: "close.png"
      },

    }

  },

  methods: {

    onPlay() {
      this.files.isShow = true;
    }

  }


};

</script>

<style lang="scss">

  @font-face {
    font-family: 'Gilroy';
    src: url('./assets/fonts/Gilroy-Medium.eot');
    src: url('./assets/fonts/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
      url('./assets/fonts/Gilroy-Medium.woff2') format('woff2'),
      url('./assets/fonts/Gilroy-Medium.woff') format('woff'),
      url('./assets/fonts/Gilroy-Medium.ttf') format('truetype'),
      url('./assets/fonts/Gilroy-Medium.svg#Gilroy-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('./assets/fonts/Gilroy-Regular.eot');
    src: url('./assets/fonts/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),
      url('./assets/fonts/Gilroy-Regular.woff2') format('woff2'),
      url('./assets/fonts/Gilroy-Regular.woff') format('woff'),
      url('./assets/fonts/Gilroy-Regular.ttf') format('truetype'),
      url('./assets/fonts/Gilroy-Regular.svg#Gilroy-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('./assets/fonts/Gilroy-Bold.eot');
    src: url('./assets/fonts/Gilroy-Bold.eot?#iefix') format('embedded-opentype'),
      url('./assets/fonts/Gilroy-Bold.woff2') format('woff2'),
      url('./assets/fonts/Gilroy-Bold.woff') format('woff'),
      url('./assets/fonts/Gilroy-Bold.ttf') format('truetype'),
      url('./assets/fonts/Gilroy-Bold.svg#Gilroy-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  $bg-color: #fff;
  $text-color: #421100;

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Gilroy;
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
    line-height: 1;
    color: $text-color;
    background: $bg-color;
  }

  *:focus {
    outline: none;
  }
  a {
    text-decoration: none;
  }

  header,
  footer,
  main,
  .section,
  .article {
    display: block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .wrap-l,
  .wrap-b {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .wrap-l {
    max-width: 1200px;
  }

  .wrap-b {
    max-width: 1260px;
  }

  @media (min-width: 1930px) {

    .wrap-l {
      max-width: 1400px;
    }

    .wrap-b {
      max-width: 1440px;
    }

  }

  @media (max-width: 1440px) {

    #app {
      font-size: 16px;
    }

    .wrap-l {
      max-width: 900px;
    }

    .wrap-b {
      max-width: 940px;
    }

  }

  @media (max-width: 980px) {

    .wrap-l,
    .wrap-b {
      box-sizing: border-box;
      padding: 40px;
    }

  }

  @media (max-width: 480px) {

    .wrap-l,
    .wrap-b {
      padding: 10px;
    }

  }

</style>
