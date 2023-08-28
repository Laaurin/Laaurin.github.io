<template>
  <section class="pageLayout">
    <div style="width: 100%; position: relative">
      <div class="shadowDrop"></div>
    </div>
  </section>
</template>

<style scoped>
.pageLayout {
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: linear-gradient(to right, #);
  height: 16px;
}

.shadowDrop {
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
