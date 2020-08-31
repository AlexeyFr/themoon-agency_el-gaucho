<template>
  <footer id="footer" class="footer">

    <div class="wrap-l">
      <div class="footer-links">
        <div class="inf inf-1">
          <img class="logo" :src="require(`../assets/images/${footer.logo}`)" alt="logo" />
          <p v-html="footer.info"></p>
        </div>
        <div class="inf inf-1">
          <div class="cap" v-html="footer.linkCap"></div>
          <menu>
            <li v-for="link in links" :key="link.name">
              <a v-scroll-to="'#'+link.ref">{{ link.name }}</a>
            </li>
          </menu>
        </div>
        <div class="inf">
          <div class="cap" v-html="footer.contactCap"></div>
          <div class="contact">
            <div v-for="(contact, name) in footer.contacts" :key="name">
              <img :src="require(`../assets/images/${contact.img}`)" :alt="name" />
              <a :href="contact.href" v-html="contact.text"></a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-info">
        <div class="inf" v-html="footer.copyRight"></div>
        <a class="inf" href="/" v-html="footer.privacyPolicy"></a>
        <div class="socials">
          <a v-for="(social, name) in footer.socials" :key="name" target="_blank" :href="social.href">
            <img :src="require(`../assets/images/${social.img}`)" :alt="name"/>
          </a>
        </div>
        <div class="dev-by">
          <span v-html="footer.developed.text"></span>
          <a :href="footer.developed.href" target="_blank">
            <img :src="require(`../assets/images/${footer.developed.img}`)" :alt="footer.developed.name"/>
          </a>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>

export default {

  props: ['links'],

  data() {

    return {

      footer: {
        logo: "logo_white.svg",
        info: "Науково-виробниче агропромислове підприємство «Ель Гаучо» більше 10 років займаємося рослинництвом: вирощуємо сорти та гібриди актуальних культур для цього регіону.",
        linkCap: "Розділи сайту:",
        contactCap: "Контакти:",
        contacts: {
          geo: {
            img: "contact-geo.svg",
            href: "https://goo.gl/maps/RUkKg7qGm4NWz8Z47",
            text: "Тернопільська обл., Залішицький р-н, с. Товсте",
          },
          phone: {
            img: "contact-phone.svg",
            href: "tel:+380674014948",
            text: "+38 (067) 401-49-48",
          },
          email: {
            img: "contact-email.svg",
            href: "mailto:asfrolov1983@gmail.com",
            text: "m.volchenko@agrosem.ua",
          },
        },
        copyRight: "Ель Гаучо &copy; 2020. Всі права захищені.",
        privacyPolicy: "Політика конфіденційності",
        socials: {
          facebook: {
            href: "https://www.facebook.com",
            img: "facebook.svg"
          },
          instagram: {
            href: "https://www.instagram.com",
            img: "instagram.svg"
          },
          youtube: {
            href: "https://www.youtube.com",
            img: "youtube.svg",
          },
          telegram: {
            href: "tg://resolve?domain=<@Ruslan_Ravana>",
            img: "telegram.svg"
          }
        },
        developed: {
          text: "Розробка сайту",
          href: "https://themoon.agency/",
          img: "themoon white_logo.png",
          name: "themoon agency"
        }

      }

    }

  }

}

</script>

<style lang="scss" scoped>

  $footer-bg-color: #421100;
  $footer-color: #fff;
  $footer-border: #562100;
  $footer-cap: #D08C00;

  .footer {
    background: $footer-bg-color;
    color: $footer-color;
    font-family: 'Arial';
    line-height: 1.3;

    .footer-links {
      display: flex;
      justify-content: space-between;
      border-bottom: 3px solid $footer-border;
      padding-bottom: 52px;

      .inf-1 {
        width: 280px;
      }

      .logo {
        margin-top: 96px;
        margin-bottom: 14px;
      }

      p {
        font-size: 16px;
      }

      .cap {
        font-weight: bold;
        color: $footer-cap;
        font-size: 16px;
        margin-top: 130px;
        margin-bottom: 30px;
      }

      menu {
        height: 120px;
        display: flex;
        list-style: none;
        font-size: 18px;
        margin: 0;
        flex-direction: column;
        padding: 0;
        flex-wrap: wrap;

        li {
          margin: 8px 0;

          a {
            cursor: pointer;
          }

        }

      }

      .contact {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        div {
          margin: 8px 0;
          font-size: 18px;

          img {
            margin-right: 28px;

          }

          a {
            color: inherit;
          }

        }

      }
    }

    .footer-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      padding: 44px 0;

      a {
        color: inherit;
      }

      .socials {
        
        a {
          margin: 0 9px;
        }

      }

      .dev-by {
        display: flex;
        align-items: baseline;

        span {
          margin-right: 32px;
        }

        img {
          width: 87px;
        }

      }

    }

  }

  @media (max-width: 1440px) {

    .footer {
      line-height: 1;

      .footer-links {
        padding-bottom: 40px;

        .inf-1 {
          width: 220px;
        }

        .logo {
          margin-top: 60px;
          margin-bottom: 10px;
          width: 100%;
        }

        p {
          font-size: 14px;
        }

        .cap {
          font-size: 14px;
          margin-top: 90px;
          margin-bottom: 15px;
        }

        menu {
          height: 80px;
          font-size: 14px;

          li {
            margin: 5px 0;
          }

        }

        .contact {

          div {
            margin: 5px 0;
            font-size: 14px;

            img {
              margin-right: 15px;
            }

          }

        }

      }

      .footer-info {
        font-size: 12px;
        padding: 30px 0;

        .socials {
          a {
            margin: 0 5px;
          }
        }

        .dev-by {

          span {
            margin-right: 20px;
          }

          img {
            width: 60px;
          }

        }

      }

    }

  }

  @media (max-width: 980px) {

    .footer {

      .footer-links {
        flex-direction: column;
        align-items: center;

        .inf {
          width: 280px;
        }

        .cap {
          text-align: center;
        }

        .contact {

          div {
            display: flex;
            flex-direction: column;
            text-align: center;
            line-height: 1.5;
            margin: 10px 0;

            img {
              margin: 0 0 5px 0;
            }

          }

        }

      }

      .footer-info {
        flex-direction: column;
        padding: 30px 0 0 0;

        .inf,
        .socials,
        .dev-by {
          margin-bottom: 20px;
        }

      }

    }

  }

</style>
