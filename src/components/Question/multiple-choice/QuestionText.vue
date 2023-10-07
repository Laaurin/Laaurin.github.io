<template>
  <div class="question-wrapper">
    <div
      class="info__title"
      ref="questionText"
      :class="fontSizeClass"
      @mouseenter="checkFontSize"
    >
      {{ question }}
    </div>
  </div>
  <hr />
</template>

<script>
export default {
  props: {
    question: String,
  },
  data() {
    return {
      fontSizeClass: "font-size-max",
    };
  },
  methods: {
    checkFontSize() {
      const element = this.$refs.questionText;
      if (element) {
        const availableWidth = element.offsetWidth;
        const textLength = this.question.length;

        if (availableWidth < 200 && textLength > 30) {
          this.fontSizeClass = "font-size-scroll";
        } else if (availableWidth < 150) {
          this.fontSizeClass = "font-size-min";
        } else if (availableWidth < 250 && textLength > 40) {
          this.fontSizeClass = "font-size-medium";
        } else {
          this.fontSizeClass = "font-size-max";
        }
        console.log(this.fontSizeClass);
      }
    },
  },
  mounted() {
    this.checkFontSize();
  },
};
</script>

<style scoped>
.question-wrapper {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  min-height: 100px;
  max-height: min-content;
  background: #616e7f;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.question-wrapper p {
  font-size: clamp(14px, 2.5vw, 17px);
}

.info__title {
  color: #f0f0f0;
  text-align: center;
  font-size: 16px;
}

.font-size-max {
  font-size: 18px;
}

.font-size-medium {
  font-size: 16px;
}

.font-size-min {
  font-size: 14px;
}

.font-size-scroll {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
}
</style>
