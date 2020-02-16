import ApiService from "@/services/api.service";

const state = {
  posts: []
};

const getters = {
  postsList: ({ posts }) => filterString => {
    if (filterString) {
      return posts.filter(post => Object.is(post.title, filterString));
    }
    return posts;
  }
};

const actions = {
  async getPostsListAction({ commit }) {
    const response = await ApiService.get("posts");
    const responseData = response.data;
    commit("SET_POST_LIST", responseData);
  }
};

const mutations = {
  SET_POST_LIST: (state, payload) => (state.posts = payload)
};

export const post = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
