export default {
  userProfileId(state) {
    return state.userProfileId;
  },
  userProfiles(state) {
    return state.userProfiles;
  },
  isProfileSelected(state) {
    return !!state.userProfileId;
  },
};
