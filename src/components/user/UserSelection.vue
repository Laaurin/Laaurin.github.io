<template>
  <div class="container">
    <div class="row">
      <div
        class="col selection-option"
        :class="{ active: user.id === selectedProfileId }"
        v-for="user in userList"
        :key="user.id"
      >
        <selectable-user
          :user-name="user.name"
          @select="setActiveUser(user.id)"
        ></selectable-user>
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
import { useStore } from "vuex";
import { onBeforeMount, ref } from "vue";

export default {
  name: "UserSelection",
  components: { NewUser, SelectableUser },
  setup() {
    const store = useStore();
    const userList = ref(store.getters.userProfiles);
    const selectedProfileId = ref(store.getters.userProfileId);
    onBeforeMount(async () => {
      console.log(userList.value);
      if (userList.value.length === 0) {
        console.log("fetching profiles");
        await store.dispatch("fetchUserProfiles");
        userList.value = store.getters.userProfiles;
      }
      console.log(userList.value);
    });
    const setActiveUser = (userId) => {
      store.commit("setActiveUser", userId);
    };
    return {
      userList,
      selectedProfileId,
      setActiveUser,
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

.active {
  background-color: green;
}
</style>
