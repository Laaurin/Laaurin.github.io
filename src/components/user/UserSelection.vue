<template>
  <div class="pop-up-window">
    <div class="pop-up-inner">
      <div class="d-flex justify-content-start">
        <div
          :class="{ active: user.id === selectedProfileId }"
          class="selection-option"
          v-for="user in userList"
          :key="user.id"
        >
          <selectable-user
            :user-name="user.name"
            @select="setActive(user)"
          ></selectable-user>
        </div>
        <div>
          <new-user></new-user>
        </div>
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
  emits: ["userSelected"],
  setup(props, { emit }) {
    const store = useStore();
    const userList = ref(store.getters.userProfiles);
    const selectedProfileId = ref(store.getters.userProfileId);
    onBeforeMount(async () => {
      if (userList.value.length === 0) {
        await store.dispatch("fetchUserProfiles");
        userList.value = store.getters.userProfiles;
      }
    });
    const setUser = async (user) => {
      console.log("setting" + user);
      store.commit("setActiveUser", { user: user });
      await store.dispatch("fetchUserStats");
      console.log(store.getters.userStats);
      emit("userSelected");
    };
    return {
      userList,
      selectedProfileId,
      setUser,
    };
  },

  methods: {
    async setActive(user) {
      console.log(user);
      await this.$store.dispatch("selectUserProfile", user);
      await this.$store.dispatch("fetchUserStats");
      console.log(this.$store.getters.userStats);
      this.$emit("userSelected");
    },
  },
};
</script>

<style scoped>
.pop-up-window {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pop-up-inner {
  background-color: white;
  padding: 32px;
  width: 100%;
}

.selection-option {
  margin-left: 1rem;
  margin-right: 1rem;
}

.active {
  border-color: #42b983;
}
</style>
