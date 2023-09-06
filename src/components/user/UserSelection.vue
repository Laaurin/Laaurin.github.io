<template>
  <div class="container">
    <div class="row">
      <div class="col selection-option" v-for="user in userList" :key="user">
        <selectable-user></selectable-user>
      </div>
      <div class="col selection-option">
        <new-user></new-user>
      </div>
    </div>
  </div>
</template>

<script>
import SelectableUser from "@/components/user/SelectableUser.vue";
import NewUser from "@/components/user/NewUser.vue";

export default {
  name: "UserSelection",
  components: { NewUser, SelectableUser },
  data() {
    return {
      userList: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style scoped>
.selection-option {
}

.selection-option:hover {
  background-color: #f0f0f0; /* Hintergrundfarbe im Hover-Zustand */
}
</style>
