export default {
  addNewUser(state, user) {
    if (user.id === null) {
      console.log("cant add user without id");
      return;
    }
    state.userProfiles.push(user);
  },

  setUniName(state, uniName) {
    state.uniName = uniName;
  },

  setUserProfiles(state, profiles) {
    state.userProfiles = profiles;
  },

  setActiveUser(state, user) {
    console.log("setting user id");
    state.userProfileId = user.id;
    state.userProfileName = user.name;
  },

  setUserStats(state, stats) {
    console.log("setting user stets");
    state.userStats = stats;
    console.log(state.userStats);
  },
};
