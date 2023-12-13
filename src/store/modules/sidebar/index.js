import sidebarMutations from "./mutations";
import sidebarActions from "./actions";
import sidebarGetters from "./getters";

export default {
  state() {
    return {
      sidebarWidth: `300px`
    };
  },
  mutations: sidebarMutations,
  actions: sidebarActions,
  getters: sidebarGetters,
};