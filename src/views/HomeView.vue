<template>
  <div class="d-none d-lg-block">
    <div class="landing-page">
      <div class="hintergrund">
        <div class="container align-items-center">
          <div class="row">
            <div class="col-6 d-flex justify-content-center">
              <div v-if="!isLoggedIn" style="margin-top: 40%">
                <login-form></login-form>
              </div>
              <div v-else style="margin-top: 40%">
                <SupportCard></SupportCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-lg-none d-flex justify-content-center">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "@/components/Home/LoginForm.vue";
import SupportCard from "@/components/SupportCard.vue";

export default {
  data() {
    return {
      carouselSlides: [
        {
          image: "../../assets/logos/cms.png",
          caption: "Welcome to our App!",
          description: "Explore our amazing features.",
        },
      ],
      sponsors: [{ logo: "./logos/cms.png", name: "heheh" }],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  name: "LandingPage",
  components: { SupportCard, LoginForm },
};
</script>

<style scoped>
.landing-title {
  font-size: 36px;
  margin-bottom: 30px;
}

.hintergrund {
  background-image: url("@/assets/images/silvano-home.svg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center; /* Das Bild wird zentriert positioniert */
  background-repeat: no-repeat; /* Das Bild wird nicht wiederholt */
  width: 100%; /* Die Breite entspricht der Container-Breite */
  height: 100%; /* Die Höhe entspricht der Container-Höhe */
  padding: 0;
  margin: 0;
  z-index: -1;
}

.landing-page {
  height: calc(100dvh - 100px);
}

.container {
  height: 100%;
}

.hochkant {
  padding: 5px;
  height: 100%;
  aspect-ratio: 2/3;
}

.vertical {
  padding: 5px;
  height: 100%;
  aspect-ratio: 28/9;
}

.full-size {
  width: 100%;
  height: 100%;
}

.landing-button {
  font-size: 17px;
  border: none;
  border-radius: 4px;
  background-color: #616e7f;
  color: white;
}

.landing-button:hover {
  background-color: #46505b;
}

.landing-button:focus {
  outline: none;
}

.landing-button-group {
  max-width: 100%;
  height: 400px;
}
</style>
