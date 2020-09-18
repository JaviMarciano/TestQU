import Vue from "vue";
import Vuex from "vuex";
import planet from "./planet.module";
import person from "./person.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    planet,
    person
  },
});
