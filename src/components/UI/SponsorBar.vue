<template>
  <div class="container sponsor-bar">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-auto sponsor-logo text-center">
        <img src="@/assets/logos/filler.jpg" alt="filler" class="img-fluid" />
      </div>
      <div class="col-md-auto sponsor-logo text-center">
        <img src="@/assets/logos/filler.jpg" alt="filler" class="img-fluid" />
      </div>
      <div
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="col-md-auto sponsor-logo text-center"
      >
        <img
          src="@/assets/logos/KubasKosGalkowski.jpeg"
          :alt="sponsor.name"
          class="img-fluid"
          :class="{ centered: index === centerIndex }"
        />
      </div>
      <div class="col-md-auto sponsor-logo text-center">
        <img src="@/assets/logos/filler.jpg" alt="filler" class="img-fluid" />
      </div>
      <div class="col-md-auto sponsor-logo text-center">
        <img src="@/assets/logos/filler.jpg" alt="filler" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sponsors: {
      type: Array,
      required: true,
    },
  },
  computed: {
    centerIndex() {
      return Math.floor(this.sponsors.length / 2);
    },
  },
};
</script>

<style scoped>
.sponsor-bar {
  margin-top: 20px;
  background-color: #f0f0f0;
  padding: 20px 0;
}

.centered img {
  max-width: 150px;
}

.sponsor-logo img {
  max-width: 100px;
  transition: all 0.3s ease-in-out;
}

.sponsor-logo:hover img {
  transform: scale(1.1);
}
</style>
