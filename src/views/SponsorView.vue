<template>
  <div class="sponsors-page">
    <h2>Main Sponsors</h2>
    <div class="sponsors-list">
      <sponsor-profile
        v-for="sponsor in mainSponsors"
        :key="sponsor.name"
        :name="sponsor.name"
        :logoUrl="sponsor.logoUrl"
      />
    </div>

    <h2>Premium Sponsors</h2>
    <div class="sponsors-list">
      <sponsor-profile
        v-for="sponsor in premiumSponsors"
        :key="sponsor.name"
        :name="sponsor.name"
        :logoUrl="sponsor.logoUrl"
      />
    </div>

    <h2>Sponsors</h2>
    <div class="sponsors-list">
      <sponsor-profile
        v-for="sponsor in normalSponsors"
        :key="sponsor.name"
        :name="sponsor.name"
        :logoUrl="sponsor.logoUrl"
      />
    </div>
  </div>
</template>

<script>
import SponsorProfile from "@/components/SponsorProfile.vue"; // Passe den Pfad zur Sponsor-Komponente an

export default {
  components: {
    SponsorProfile,
  },
  data() {
    return {
      mainSponsors: [
        { name: "Sponsor A", logoUrl: "..." },
        { name: "Sponsor B", logoUrl: "..." },
      ],
      premiumSponsors: [
        { name: "Sponsor X", logoUrl: "..." },
        { name: "Sponsor Y", logoUrl: "..." },
      ],
      normalSponsors: [
        { name: "brokie", logoUrl: "" },
        { name: "brokie", logoUrl: "" },
      ],
    };
  },
};
</script>

<style scoped>
/* Füge hier deine gewünschten Stile für die Sponsoren-Seite hinzu */
</style>
