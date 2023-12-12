<template>
  <div class="" style="max-width: 300px">
    <p>If you have any questions or need assistance, please feel free to contact our support team. We're currently in beta, and we're here to assist you.</p>
    <p>Contact us via <span class="highlight">info.mootcoach@gmail.com</span></p>
  </div>
</template>

<script>
export default {
  name: "SupportCard"
};
</script>

<style scoped>
.box {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: transparent;
  backdrop-filter: blur(10px);
  filter: blur(0);
  padding: 20px;
  max-width: 300px;
}

.highlight {
  background-color: var(--primary);
  border-radius: 5px;
  padding: 2px 5px;
  color: white;
}
</style>
