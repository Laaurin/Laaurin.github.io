<template>
  <div class="popup-overlay">
    <div class="popup">
      <p><span class="highlight">mootcoach.com</span> is currently getting optimized for mobile devices.
        <a href="https://p3pv41relm0.typeform.com/to/xFVQAa4j?typeform-source=lvp8ghhtd8b.typeform.com">Register here</a> and use it on desktop.</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["show"],
  methods: {
    closePopup() {
      //this.$emit("close");
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup {
  background: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.highlight {
  font-weight: bold; /* Fett */
  color: orange; /* Orange Farbe */
}

p {
  text-align: center; /* Zentriert den Text horizontal */
  font-weight: normal; /* Normaler Text */
  color: black; /* Schwarze Farbe für den Rest des Satzes */
}
</style>
