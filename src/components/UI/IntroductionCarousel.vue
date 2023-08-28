<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide soll-so"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner soll-so">
      <div class="carousel-item active" data-bs-interval="4000">
        <img
          src="../../assets/screenshots/edit.png"
          alt="..."
          class="soll-so"
        />
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img
          src="../../assets/screenshots/practice.png"
          alt="..."
          class="soll-so"
        />
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img
          src="../../assets/screenshots/upload.png"
          alt="..."
          class="soll-so"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span style="color: black">
        <i class="bi bi-chevron-compact-left"></i
      ></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span style="color: black">
        <i class="bi bi-chevron-compact-right"></i
      ></span>
    </button>
  </div>
</template>

<style scoped>
img {
  max-height: 100%;
  max-width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
}

.soll-so {
  max-width: 100%;
  max-height: 100%;
}
</style>
