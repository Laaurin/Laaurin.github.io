export default {
  setSidebarWidth(state, payload) {
    console.log(payload)
    state.sidebarWidth = payload;
  },

  toggleSidebar(state) {
    state.extended = !state.extended;
  },
};
