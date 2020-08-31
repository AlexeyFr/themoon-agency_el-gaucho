<template>
  <header ref="header" class="header" :class="{ hide : isHeader }">

    <nav class="navbar" :class="{ active : isActive }" aria-label="main navigation">
      <a class="logo" href="/">
        <img :src="require(`../assets/images/${logo}`)" alt="logo">
      </a>
      <div class="menu_switch" @click="menuSwitch()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <menu>
        <li v-for="link in links" :key="link.name">
          <a class="link" :class="{ active : link.ref == activeRef }" v-scroll-to="'#'+link.ref" @click="menuClose()">{{ link.name }}</a>
        </li>
        <li class="contact">
          <a class="link" :class="{ active : 'contact' == activeRef }" v-scroll-to="'#contact'" @click="menuClose()">Зв'язатися</a>
        </li>
        <li class="lang">
          <span>
            <a class="l" v-for="lang in $store.getters.languages" :key="lang.name" :class="{ active : lang.name == $store.getters.curentLang }" @click="changeLang(lang.name)">{{ lang.name }}</a>
          </span>
        </li>
      </menu>
    </nav>

  </header>
</template>

<script>

export default {

  props: ['links'],

  data() {
    return {
      logo: "logo.svg",
      isHeader: true,
      scrollTop: 0,
      activeRef: "main",
      isActive: false
    }
  },

  methods: {

      OnScroll() {
        let winScroll = window.scrollY
        if (winScroll < 120 || winScroll < this.scrollTop) {
          this.isHeader = true;
        }
        else if (winScroll > this.scrollTop) {
          this.isHeader = false;
        }

        this.scrollTop = winScroll;

        let winHeight = window.innerHeight || document.documentElement.clientHeight;
        let scrollMiddle = winScroll + (winHeight / 2);
        for (let link of this.links) {
          if (document.getElementById(link.ref).offsetTop <= scrollMiddle)
            this.activeRef = link.ref;
        }

      },

      changeLang(lang) {
        this.$store.dispatch('changeLang', lang);
      },

      menuClose() {
        this.isActive = false;
      },

      menuSwitch() {
        this.isActive = !this.isActive
      }

  },

  mounted() {

    window.addEventListener('scroll', this.OnScroll);

  }

}

</script>

<style lang="scss" scoped>

  $border-color: #f4f4f4;
  $bg-color: #fff;
  $active-color: #d08c00;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background: $bg-color;
    border-bottom: 2px solid $border-color;
    transition: opacity .500s ease-in-out, transform .500s ease-in-out;
    opacity: 0;
    transform: translateY(-100%);

    &.hide {
      opacity: 1;
      transform: translateY(0);
    }

    nav {
      width: 1248px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      position: relative;

      .logo {
        display: block;
        width: 259px;

        img {
          width: 100%;
        }

      }

      menu {
        display: flex;
        list-style: none;
        font-size: 17px;
        margin: 0;
        height: 118px;
        padding: 0;

        li {
          display: flex;
          align-items: center;
          padding: 0 12px;
          height: 100%;

          .link {
            cursor: pointer;
            position: relative;

            &:before {
              content: '';
              width: 100%;
              height: 5px;
              position: absolute;
              left: 0;
              bottom: -50px;
              background: $active-color;
              display: none;
            }

            &:hover,
            &.active {

              &:before {
                display: block;
              }

            }

          }

          &.contact,
          &.lang {
            padding: 0 28px;
            border-left: 2px solid $border-color;
          }

          &.contact {
            font-weight: bold;
          }

          &.lang {
            border-right: 2px solid $border-color;

            span {
              display: inline-flex;
              justify-content: space-between;
              align-items: center;
              width: 48px;
            }

            .l {
              cursor: pointer;
              margin-top: 1px;

              &.active {
                font-weight: bold;
              }

            }

          }

        }

      }

      .menu_switch {
        display: none;
        width: 40px;
        height: 23px;
        cursor: pointer;
        position: relative;
        z-index: 2;

        span {
          display: block;
          width: 100%;
          height: 2px;
          background: $active-color;
          position: absolute;
          right: 0;
          top: 50%;
          transition: all .3s linear;

          &:first-child {
            top: 0;
          }

          &:last-child {
            top: auto;
            bottom: 0;
          }

        }

      }

    }

  }

  @media (min-width: 1930px) {

    .header {

      nav {
        width: 1440px;
      }

    }

  }

  @media (max-width: 1440px) {

    .header {

      nav {
        width: 940px;

        .logo {
          width: 230px;
        }

        menu {
          font-size: 15px;
          height: 100px;

          li {
            padding: 0 4px;

            .link {

              &:before {
                height: 5px;
                bottom: -42px;
              }

            }

            &.contact,
            &.lang {
              padding: 0 10px;
            }

            &.lang {

              span {
                width: 42px;
              }

            }

          }

        }

      }

    }

  }

  @media (max-width: 980px) {

    .header {
      border-width: 1px;

      nav {
        box-sizing: border-box;
        width: 100%;
        max-width: 320px;
        padding: 10px;

        .logo {
          width: 130px;
        }

        menu {
          width: 100%;
          height: auto;
          flex-direction: column;
          margin-top: -300px;
          opacity: 0;
          scale: (0);
          transition: margin .3s linear, scale .1s .2s linear;

          li {
            padding: 5px 0;
            justify-content: center;

            .link {

              &:before {
                height: 3px;
                top: 100%;
              }

              &:hover {

                &:before {
                  display: none;
                }

              }

              &.active {

                &:before {
                  display: block;
                }

              }

            }

            &.contact,
            &.lang {
              padding: 5px 0;
              border: 0;
            }

            &.lang {
              border: 0;
            }

          }

        }

        .menu_switch {
          display: block;
        }

        &.active {

        menu {
          scale: (1);
          margin-top: 0;
          opacity: 1;
        }

          .menu_switch {

            span {
              opacity: 0;

              &:first-child {
                top: 50%;
                opacity: 1;
                transform: rotate(45deg);
                margin-top: -2px;
              }

              &:last-child {
                bottom: 50%;
                opacity: 1;
                top: auto;
                transform: rotate(-45deg);
              }

            }

          }

        }

      }

    }

  }

</style>
