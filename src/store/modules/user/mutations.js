export default {
  addNewUser(state, user) {
    if (user.id === null) {
      console.log("cant add user without id");
      return;
    }
    state.userProfiles.push(user);
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
    state.userStats = stats;
  },
};
