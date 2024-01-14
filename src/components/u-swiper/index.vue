<template>
  <div class="u-swiper">
    <swiper indicator-dots autoplay circular>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <image style="width: 100%" :src="item!.imgUrl" mode="widthFix" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps();
import { switchApi } from "@/api/user";
import type { SwitchReturn } from "@/api/types/userType";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const banner = ref<SwitchReturn>();

const add = async () => {
  try {
    const res = await switchApi();
    // console.log(res);

    banner.value = res.result;
    // console.log("111", banner.value);
    // console.log(res);
  } catch (error) {
    console.log("error", error);
  }
};

onLoad(() => {
  add();
});
</script>

<style lang="scss" scoped>
.u-swiper {
  margin-top: 99px;
}
</style>
