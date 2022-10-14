import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      posts: [],
    };
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },

  mutations: {},
  actions: {},
});
