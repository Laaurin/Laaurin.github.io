export default {
  setSidebarWidth({ commit }, payload) {
    console.log(payload.sidebarWidth)
    commit("setSidebarWidth", payload.sidebarWidth)
  },
};