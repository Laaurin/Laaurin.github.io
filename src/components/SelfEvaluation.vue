<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <button :disabled="submitted" @click="submit(0)">bad</button>
      </div>
      <div class="col">
        <button :disabled="submitted" @click="submit(0.5)">ok</button>
      </div>
      <div class="col">
        <button :disabled="submitted" @click="submit(1)">good</button>
      </div>
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
    submit(value) {
      this.submitted = true;
      console.log(value);
      this.$store.dispatch("addUserSubmission", {
        questionId: this.questionId,
        value: value,
      });
      this.$emit("submit");
    },
  },
};
</script>

<style scoped></style>
