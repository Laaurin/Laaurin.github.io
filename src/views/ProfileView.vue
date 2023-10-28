<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 sidebar">
        <side-bar class="shadow sidebar">
          <template #sidebar-content>
            <question-filter
              @questions-filtered="updateQuestions"
            ></question-filter>
          </template>
        </side-bar>
      </div>
      <div class="col">
        <suspense>
          <template #default>
            <profile-questions
              :questions="filteredQuestions"
            ></profile-questions>
          </template>
          <template #fallback>
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </template>
        </suspense>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileQuestions from "@/components/profile/ProfileQuestions.vue";
import SideBar from "@/components/UI/SideBar/SideBar.vue";
import QuestionFilter from "@/components/profile/QuestionFilter.vue";

export default {
  components: { QuestionFilter, SideBar, ProfileQuestions },
  data() {
    return {
      filteredQuestions: [],
    };
  },
  methods: {
    updateQuestions(newQuestions) {
      console.log("called");
      this.filteredQuestions = newQuestions;
    },
  },
  async created() {
    this.filteredQuestions = await this.$store.getters.getTeamQuestions;
  },
};
</script>

<style scoped>
.sidebar {
  position: -webkit-sticky;
  top: 250px;
}

.col-3 {
  padding-left: 0;
}
</style>
