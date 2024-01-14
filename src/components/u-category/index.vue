<template>
  <div class="u-category">
    <div
      style="
        width: 100;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 30px;
      "
    >
      <div
        v-for="(item, index) in category"
        :key="index"
        style="
          display: flex;
          flex-flow: column;
          justify-content: center;
          text-align: center;
          width: 18%;
        "
      >
        <div>
          <img
            style="width: 100%; height: 80px; margin-bottom: 4px"
            :src="item.icon"
            alt=""
          />
        </div>
        <div style="margin-bottom: 10px">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mutliApi } from "@/api/user";
import type { MutliReturn } from "@/api/types/userType";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const category = ref<MutliReturn>();

const add = async () => {
  try {
    const res = await mutliApi();
    // console.log(res);
    category.value = res.result;
  } catch (error) {
    console.log(error);
  }
};

onLoad(() => {
  add();
});

const props = defineProps();
</script>

<style lang="scss" scoped></style>
