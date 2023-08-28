<template>
  <div class="sponsor">
    <img :src="logoUrl" :alt="name" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    logoUrl: String,
  },
};
</script>

<style scoped>
.sponsor {
  /* Füge hier deine gewünschten Stile für Sponsoren hinzu */
}
</style>
