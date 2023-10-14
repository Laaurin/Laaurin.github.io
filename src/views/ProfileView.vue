<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <side-bar class="shadow">
          <question-filter
            @questions-filtered="updateQuestions"
          ></question-filter>
        </side-bar>
      </div>
      <div class="col">
        <profile-questions :questions="filteredQuestions"></profile-questions>
      </div>
    </div>
  </div>
  <user-selection
    v-if="isProfileSelected === false"
    @user-selected="isProfileSelected = true"
  ></user-selection>
</template>

<script>
import ProfileQuestions from "@/components/profile/ProfileQuestions.vue";
import SideBar from "@/components/UI/SideBar/SideBar.vue";
import QuestionFilter from "@/components/profile/QuestionFilter.vue";
import UserSelection from "@/components/user/UserSelection.vue";

export default {
  components: { QuestionFilter, SideBar, ProfileQuestions, UserSelection },
  data() {
    return {
      filteredQuestions: [],
      isProfileSelected: this.$store.getters.userProfileId !== null,
      changeUser: false,
    };
  },
  methods: {
    updateQuestions(newQuestions) {
      console.log("called");
      this.filteredQuestions = newQuestions;
    },
  },
  created() {
    this.filteredQuestions = this.$store.getters.getTeamQuestions;
  },
};
</script>

<style scoped>
.col-3 {
  padding-left: 0;
}
</style>
