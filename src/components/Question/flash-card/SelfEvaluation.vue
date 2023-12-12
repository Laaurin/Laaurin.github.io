<template>
  <div class="outer">
    <div class="d-flex justify-content-center">
      <button
        class="item my-global-button"
        :disabled="submitted"
        @click="submit(0)"
      >
        needed improvement
      </button>
      <button
        class="item my-global-button"
        :disabled="submitted"
        @click="submit(0.5)"
      >
        good
      </button>
      <button
        class="item my-global-button"
        :disabled="submitted"
        @click="submit(1)"
      >
        excellent
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelfEvaluation",
  props: ["questionId"],
  emits: ["submit"],
  data() {
    return {
      submitted: false,
    };
  },
  methods: {
    async submit(value) {
      this.submitted = true;
      console.log("flashcard: " + this.$store.getters.userProfileName);
      await this.$store.dispatch("addUserSubmission", {
        questionId: this.questionId,
        value: value,
      });
      this.$emit("submit");
    },
  },
};
</script>

<style scoped>
.outer {
  border-radius: 10px;
  padding: 20px;
}

.item {
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 10px;
}
</style>
