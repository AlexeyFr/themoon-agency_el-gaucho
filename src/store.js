import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {

    languages: [{ name: "UA" },{ name: "EN" }],

    curentLang: "UA",

    readMore: {
      ua: "Детальніше",
      en: "Read more",
      src: ["arrow-white.svg", "arrow-yellow.svg"]
    }

  },

  mutations: {

    changeLang(state, lang) {
      state.curentLang = lang;
    }

  },

  actions: {

    changeLang(context, lang) {
      context.commit('changeLang', lang);
    }

  },

  getters: {

    languages(state) {
      return state.languages;
    },

    curentLang(state) {
      return state.curentLang;
    },

    readMore(state) {
      return state.curentLang == state.languages[0].name ? state.readMore.ua : state.readMore.en
    },

    readMoreSrc(state) {
      return state.readMore.src;
    }

  }

});
