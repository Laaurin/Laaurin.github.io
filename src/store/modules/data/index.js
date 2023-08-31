import dataMutations from "./mutations";
import dataActions from "./actions";
import dataGetters from "./getters";

export default {
  state() {
    return {
      publicQuestions: [],
      teamQuestions: [],
      teamLabels: [],
    };
  },
  mutations: dataMutations,
  actions: dataActions,
  getters: dataGetters,
};
