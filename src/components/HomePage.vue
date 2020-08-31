<template>
  <main class="main">

    <SectionMain :main="main" />

    <SectionCompany :company="company" />

    <SectionMaking :making="stockbreeding" />

    <SectionImages :images="images_1" />

    <SectionVideo :video="video" @play="$emit('play')" />

    <SectionContact :contact="contact" />

    <SectionMaking :making="growing" />

    <SectionImages :images="images_2" />

    <SectionContact :contact="feedback" />

    <SectionNews :news="news" />

  </main>
</template>

<script>

  import SectionMain from "./SectionMain.vue";
  import SectionCompany from "./SectionCompany.vue";
  import SectionMaking from "./SectionMaking.vue";
  import SectionVideo from "./SectionVideo.vue";
  import SectionContact from "./SectionContact.vue";
  import SectionImages from "./SectionImages.vue";
  import SectionNews from "./SectionNews.vue";

export default {

  components: {
    SectionMain,
    SectionCompany,
    SectionMaking,
    SectionVideo,
    SectionContact,
    SectionImages,
    SectionNews
  },

  data() {

    return {

      main: {
        left: {
          bg: "main_1.jpg",
          video: "1.mp4",
          title: "Тваринництво:<br> вівчарні ферми<br> пород Меріно",
          info: "З 2018 року в Українській Асоціації<br> Вівчарів. До 3 000 голів у 2020. Експорт<br> м'яса до Європи та Близького Сходу."
        },
        right: {
          bg: "main_2.jpg",
          video: "2.mp4",
          title: "Рослинництво:<br> вирощування культур,<br> виробництво насіння",
          info: "Вже більше 10 років ми займаємося<br> рослинництвом: вирощуємо сорти та<br> гібриди актуальних культур."
        }
      },

      company: {
        bg: "company_bg.svg",
        title: "Науково-виробниче<br> Агропромислове<br> підприємство",
        info_1: "Науково-виробниче агропромислове підприємство «Ель Гаучо» знаходиться на Тернопільщині. Вже більше 10 років ми займаємося рослинництвом: вирощуємо сорти та гібриди актуальних культур для цього регіону.",
        info_2: "З кожним роком фермерське господарство розвивається в галузі рослинництва, робить акцент на інтенсивність технології з дотриманням максимальних врожаїв."
      },

      stockbreeding: {
        section: "stockbreeding",
        bg: "cowboy.svg",
        title: "Тваринництво",
        info: "Розведення вівців породи Мериноландшаф, яких<br> привезли з Австрії. Ці тварини добре пристосовуються<br> до різних кліматичних умов, проте для формування<br> здорового організму їм потрібен комфорт.",
        info_2: "Європейський досвід і мрія про відродження вівчарства в Україні стали ключовими у виборі нової галузі господарства. Для розведення обрали вівців породи Мериноландшаф, яких привезли з Австрії. Ці тварини добре пристосовуються до різних кліматичних умов, проте для формування здорового організму їм потрібен комфорт. Тому ми збудували з екологічно чистих матеріалів дві сучасні ферми.",
        info_3: "Просторі стайні, достатньо кисню для дихання та світла, постійний доступ до їжі – усе задля комфорту тварин! А отже – гарні умови для формування племінного генетичного матеріалу! Європейський досвід і мрія про відродження вівчарства в Україні стали ключовими у виборі нової галузі господарства. Для розведення обрали вівців породи Мериноландшаф, яких привезли з Австрії. Ці тварини добре пристосовуються до різних кліматичних умов, проте для формування здорового організму їм потрібен комфорт. Тому ми збудували з екологічно чистих матеріалів дві сучасні ферми. Просторі стайні, достатньо кисню для дихання та світла, постійний доступ до їжі – усе задля комфорту тварин! А отже – гарні умови для формування племінного генетичного матеріалу!",
        sheeps :[
          {
            icon: "sheep_1.svg",
            value: "2 500",
            unit: "голів",
        },
        {
            icon: "sheep_2.svg",
            value: "Мерінос",
            unit: "порода",
        }
        ]
      },

      growing: {
        section: "growing",
        title: "Рослинництво",
        info: "Розведення вівців породи Мериноландшаф, яких<br> привезли з Австрії. Ці тварини добре пристосовуються<br> до різних кліматичних умов, проте для формування<br> здорового організму їм потрібен комфорт.",
        info_2: "Науково-виробниче агропромислове підприємство «Ель Гаучо» знаходиться на Тернопільщині. Вже більше 10 років ми займаємося рослинництвом: вирощуємо сорти та гібриди актуальних культур для цього регіону. З кожним роком фермерське господарство розвивається в галузі рослинництва, робить акцент на інтенсивність технології з дотриманням максимальних врожаїв. Науково-виробниче агропромислове підприємство «Ель Гаучо» знаходиться на Тернопільщині. Вже більше 10 років ми займаємося рослинництвом: вирощуємо сорти та гібриди актуальних культур для цього регіону. З кожним роком фермерське господарство розвивається в галузі рослинництва, робить акцент на інтенсивність технології з дотриманням максимальних врожаїв. Науково-виробниче агропромислове підприємство «Ель Гаучо» знаходиться на Тернопільщині. Вже більше 10 років ми займаємося рослинництвом: вирощуємо сорти та гібриди актуальних культур для цього регіону. З кожним роком фермерське господарство розвивається в галузі рослинництва, робить акцент на інтенсивність технології з дотриманням максимальних врожаїв.",
        sheeps: [
          {
            icon: "seed.svg",
            value: "Насіння",
            unit: "Завод з виробництва",
          },
          {
            icon: "year.svg",
            value: "10 років",
            unit: "Рослинництва",
          }
        ]
      },

      news: {
        title: "Новини",
        bg: "cowboy.svg",
        items: [
          {
            img: "news-1.jpg",
            date: "Серпень 02, 2020",
            caption: "Триває будівництво другої ферми.",
            inf: "рибатекст допоможе дизайнеру,<br> верстальщику, вебмастеру<br> сгенерувати декілька абзаців, більш<br> м'яких, ніж осміленого, текстових<br> виробів на російській мові, а<br> починаючи оратору відбивати<br> важливих публікацій у домашніх<br> умовах."
          },
          {
            img: "news-2.jpg",
            date: "Серпень 02, 2020",
            caption: "Триває будівництво другої ферми.",
            inf: "рибатекст допоможе дизайнеру,<br> верстальщику, вебмастеру<br> сгенерувати декілька абзаців, більш<br> м'яких, ніж осміленого, текстових<br> виробів на російській мові, а<br> починаючи оратору відбивати<br> важливих публікацій у домашніх<br> умовах."
          },
          {
            img: "news-3.jpg",
            date: "Серпень 02, 2020",
            caption: "Триває будівництво другої ферми.",
            inf: "рибатекст допоможе дизайнеру,<br> верстальщику, вебмастеру<br> сгенерувати декілька абзаців, більш<br> м'яких, ніж осміленого, текстових<br> виробів на російській мові, а<br> починаючи оратору відбивати<br> важливих публікацій у домашніх<br> умовах."
          }
        ]
      },

      video: {
        bg: "field.jpg",
        icon: "play.svg",
      },

      images_1: [
        "img_1_1.jpg",
        "img_1_2.jpg",
        "img_1_3.jpg",
        "img_1_4.jpg",
        "img_1_5.jpg",
        "img_1_6.jpg",
      ],

      images_2: [
        "img_2_1.jpg",
        "img_2_2.jpg",
        "img_2_3.jpg",
        "img_2_4.jpg",
        "img_2_5.jpg",
        "img_2_6.jpg",
      ],

      contact: {
        section: "contact",
        bgLeft: "map_white.svg",
        bgRight: "sheep.png",
        title: "Виникли питання?",
        info: "Залиште свій номер телефону, ми обов'язково<br> зателефонуємо.",
      },

      feedback: {
        section: "feedback",
        bgLeft: "map_white.svg",
        bgRight: "sunflower.png",
        title: "Виникли питання?",
        info: "Залиште свій номер телефону, ми обов'язково<br> зателефонуємо.",
      }

    }

  }

}

</script>

<style lang="scss">

  $details-color: #D08C00;

  .main {
    margin-top: 118px;

    @keyframes svg-animation {
      0%,
      100% {
        left: 0;
      }
      50% {
        left: 15px;
      }
    }

    .title {
      font-weight: bold;
      font-size: 50px;
    }

    .content-wrap-l,
    .content-wrap-b {
      display: flex;
      position: relative;
    }

    .content-wrap-l {
      width: 600px;
    }

    .content-wrap-b {
      width: 630px;
    }

    .info {
      line-height: 1.4;
      font-weight: normal;
    }

    .details {
      margin-top: 60px;

      a {
        font-size: 20px;
        color: inherit;
      }

    }

    .details,
    .button {
      color: $details-color;

      img {
        position: relative;
        width: 22px;
        margin-left: 18px;
      }

    }

    .details a:hover img,
    .button:hover img {
        animation: svg-animation 1s infinite linear;
    }

  }

  @media (min-width: 1930px) {

    .main {

      .content-wrap-l {
        width: 700px;
      }

      .content-wrap-b {
        width: 720px;
      }

    }

  }

  @media (max-width: 1440px) {

    .main {
      margin-top: 100px;

      .title {
        font-size: 38px;
      }

      .content-wrap-l {
        width: 450px;
      }

      .content-wrap-b {
        width: 470px;
      }

      .info {
        line-height: 1.2;
      }

      .details {
        margin-top: 40px;

        a {
          font-size: 18px;
        }

      }

      .details,
      .button {

        img {
          width: 20px;
          margin-left: 12px;
        }

      }

    }

  }

  @media (max-width: 980px) {

    .main {
      margin-top: 50px;

      .title {
        font-size: 28px;
      }

      .content-wrap-l,
      .content-wrap-b {
        width: 100%;
        padding: 40px;
        box-sizing: border-box;
      }

      .details {
        margin-top: 20px;
      }

      .details a:hover img,
      .button:hover img {
        animation: none !important;
      }

    }

  }

 @media (max-width: 480px) {

    .main {
      margin-top: 50px;

      .content-wrap-l,
      .content-wrap-b {
        padding: 10px;

      }

    }

  }

</style>
