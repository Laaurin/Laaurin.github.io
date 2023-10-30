<template>
  <div class="container">
    <!--<h1>Welcome To mootcoach.com</h1>-->
    <div class="row">
      <!--<div
        class="col-md-6 d-none d-md-inline"
        style="aspect-ratio: 1; max-width: 450px; margin: 0 auto"
      >
        <introduction-carousel></introduction-carousel>
      </div>-->
      <div v-if="isLoggedIn" class="landing-button-group">
        <div class="row" style="height: 70%">
          <div
            class="d-flex justify-content-center align-items-center"
            style="max-height: 100%"
          >
            <div class="hochkant">
              <button
                class="full-size landing-button"
                @click="this.$router.push('/upload')"
              >
                Upload Question
              </button>
            </div>
            <div class="hochkant">
              <button
                class="full-size landing-button"
                @click="this.$router.push('/practice')"
              >
                Practice
              </button>
            </div>
          </div>
        </div>
        <div class="row" style="height: 30%">
          <div
            class="d-flex justify-content-center align-items-center"
            style="max-height: 100%"
          >
            <div class="vertical">
              <button
                class="full-size landing-button"
                @click="this.$router.push('/profile')"
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="d-flex align-items-center justify-content-center">
        <login-form></login-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
//import IntroductionCarousel from "@/components/UI/IntroductionCarousel.vue";
//import SponsorBar from "@/components/UI/SponsorBar.vue";

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
  components: { LoginForm },
};
</script>

<style scoped>
.landing-title {
  font-size: 36px;
  margin-bottom: 30px;
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
}
</style>
