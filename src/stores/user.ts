import { defineStore } from "pinia";

import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    const Information = ref({});
    return { token, Information };
  },
  {
    persist: {
      paths: ["token", "Information"],
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value);
        },
        getItem(key) {
          return uni.getStorageSync(key);
        },
      },
    },
  },
);
