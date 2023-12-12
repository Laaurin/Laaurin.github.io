import userMutations from "./mutations";
import userActions from "./actions";
import userGetters from "./getters";

export default {
  state() {
    return {
      uniName: null,
      userProfiles: [],
      userProfileId: null,
      userProfileName: null,
      userStats: [],
    };
  },
  mutations: userMutations,
  actions: userActions,
  getters: userGetters,
};
