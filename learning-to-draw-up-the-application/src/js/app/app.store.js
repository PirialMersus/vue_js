var Vue = require("vue");
var Vuex = require("vuex");
var Axios = require("axios");

Vue.use(Vuex);

var api = "https://pokeapi.co/api/v2/pokemon/";

module.exports = new Vuex.Store({
  state: {
    characters: [],
    pokemonInformation: [],
    windowWidth: 0
    // isLeftBarOpen: false,
  },
  getters: {
    getCharacters: function (state) {
      return state.characters;
    },
    getPokemonInformation: function (state) {
      return state.pokemonInformation;
    },
    getWindowWidth: function (state) {
      return state.windowWidth;
    },
  },
  mutations: {
    setCharacters: function (state, payload) {
      state.characters = payload.sort(function (a, b) {
        var nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB)
          //сортируем строки по возрастанию
          return -1;
        if (nameA > nameB) return 1;
        return 0; // Никакой сортировки
      });
    },
    setPokemonInformation: function (state, payload) {
      state.pokemonInformation = payload;
    },
    setWindowWidth: function (state, payload) {
      state.windowWidth = payload;
    }
    // setIsLeftBarOpen: function (state, payload) {
    //   state.isLeftBarOpen = !payload;
    // },
  },

  actions: {
    getCharacters: function (context) {
      Axios.get(api).then(
        function (responce) {
          context.commit("setCharacters", responce.data.results);
        }.bind(this)
      );
    },
    getPokemonInformation: function (context, url) {
      Axios.get(url).then(
        function (responce) {
          context.commit("setPokemonInformation", responce.data);
        }.bind(this)
      );
    }
    // isLeftBarOpen: function (context, isLeftBarOpen) {
    //   var a = context.getters(["getIsLeftBarOpen"]);
    //   console.log("1", a);
    //   context.commit("setIsLeftBarOpen", !a);
    //   console.log("1", !a);
    // },
  }
});
