<template>
  <div class="outer shadow">
    <div class="d-flex justify-content-center">
      <button
        class="item"
        style="background-color: #8b0000"
        :disabled="submitted"
        @click="submit(0)"
      >
        bad
      </button>
      <button
        class="item"
        style="background-color: #e08f43"
        :disabled="submitted"
        @click="submit(0.5)"
      >
        ok
      </button>
      <button
        class="item"
        style="background-color: #008000"
        :disabled="submitted"
        @click="submit(1)"
      >
        good
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
  background: #616e7f;
}

.item {
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 10px;
}
</style>
