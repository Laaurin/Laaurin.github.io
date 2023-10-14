export default {
  userProfileId(state) {
    return state.userProfileId;
  },
  userProfileName(state) {
    return state.userProfileName;
  },
  userProfiles(state) {
    return state.userProfiles;
  },
  isProfileSelected(state) {
    return !!state.userProfileId;
  },
  userStats(state) {
    return state.userStats;
  },
};
