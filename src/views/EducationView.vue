<template>
  <div class="d-flex justify-content-center">
    <div class="player">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/GA167G8hDAc?si=_lj4zHf-WMToWe_i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationView",
};
</script>

<style scoped>
  .player {
    border-radius: 20px;
    overflow: hidden;
    width: 560px;
    height: 315px;
  }
</style>