import userMutations from "./mutations";
import userActions from "./actions";
import userGetters from "./getters";

export default {
  state() {
    return {
      userProfiles: [],
      userProfileId: null,
    };
  },
  mutations: userMutations,
  actions: userActions,
  getters: userGetters,
};
