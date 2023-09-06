export default {
  userProfileId(state) {
    return state.userId;
  },
  isProfileSelected(state) {
    return !!state.userProfileId;
  },
};
