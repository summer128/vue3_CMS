const sysMoudle = {
  namespaced: true,
  state() {
    return {
      theme: "#B30000",
    };
  },
  getters: {
    collapse(state) {
      return state.theme;
    },
  },
  mutation: {
    SET_THEME(state, data) {
      state.theme = data;
    },
  },
  action: {
    setTheme(context, data) {
      context.commit("SET_THEME", data);
    },
  },
};

export default sysMoudle;
