<template>
  <div class="profile" @click="select">
    <div
      v-if="deletable"
      class="removeIcon"
    >
      <i class="bi bi-trash"></i>
    </div>
    <div v-else>
      <i style="font-size: 50px" class="bi bi-person"></i>
    </div>
    <p>{{ userName }}</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "SelectableUser",
  props: {
    userName: String,
    removing: Boolean,
  },
  emits: ["select", "delete"],
  setup(props, { emit }) {
    const deletable = ref(props.removing);

    const select = () => {
      emit("select");
    };

    watch(() => props.removing, (value) => {
      deletable.value = value;
    });

    return {
      select,
      deletable,
    };
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  aspect-ratio: 1;
  height: 170px;
  background: linear-gradient(135deg, #f2f2f2, #e3e3e3);
  z-index: 999;
  position: relative;
  transition: background 0.3s;
  cursor: pointer;
}

/* Hier ist der Hover-Effekt für das Profil */
.profile:hover {
  background: linear-gradient(135deg, #e3e3e3, #f2f2f2);
}

.removeIcon {
  font-size: 50px;
}

/* Hier ist der Hover-Effekt für das Löschen-Symbol */
.profile:hover .removeIcon {
  color: red; /* Ändere die Farbe des Löschen-Symbols im Hover-Zustand */
}
</style>
