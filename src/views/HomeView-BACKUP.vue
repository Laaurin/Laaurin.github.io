<template>
  <div class="d-none d-lg-block">
    <div class="landing-page">
      <div class="hintergrund d-flex justify-content-center">
        <div class="container">
          <div class="row d-flex align-items-center" style="height: 100%">
            <div class="col d-flex justify-content-center">
              <div class="text-center">
                <h1 style="color: var(--primary); font-weight: bold">mootcoach.com</h1>
                <p>gamify your repetition of facts and arguments</p>
                <div class="d-flex justify-content-center">
                  <login-form v-if="!isLoggedIn"></login-form>
                  <SupportCard v-else></SupportCard>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col-2"></div>
                <div class="col">
                  <blur-box>
                    <h2>Practice</h2>
                    <p>memorize important information in different question formats<br>
                      train your general knowledge or specific categories</p>
                  </blur-box>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <blur-box>
                    <h2 style="color: var(--primary)">Create</h2>
                    <p>upload your own questions within seconds<br>
                      use labels to organize your questions</p>
                  </blur-box>
                </div>
              </div>
              <div class="row">
                <div class="col-1"></div>
                <div class="col">
                  <blur-box>
                    <h2>Edit</h2>
                    <p>manage your questions in your profile<br>
                      review your individual performance</p>
                  </blur-box>
                </div>
              </div>
              <div class="row">
                <div class="col-2"></div>
                <div class="col">
                    <h2 style="color: var(--primary)">Network</h2>
                    <p>benefit from the questions of a global community of Mooties<br>
                      contribute by uploading your own questions</p>
                </div>
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
import BlurBox from "@/components/UI/BlurBox.vue";

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
  components: { BlurBox, SupportCard, LoginForm },
};
</script>

<style scoped>
p {
  font-weight: bold;
}

h2 {
  font-weight: bold;
}

.landing-title {
  font-size: 36px;
  margin-bottom: 30px;
}

.hintergrund {
  background-image: url("@/assets/images/architecture3.jpg");
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
  margin-left: 0;
  margin-right: 0;
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
