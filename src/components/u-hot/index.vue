<template>
  <div class="u-hot">
    <div
      v-for="(item, index) in hot"
      :key="index"
      @click="xq(index)"
      style="width: 40%; padding: 10rpx; margin-bottom: 18px"
    >
      <div style="display: flex">
        <h4 style="font-size: 20px; margin-bottom: 10px">{{ item.title }}</h4>
        <span style="color: #ccc">{{ item.alt }}</span>
      </div>

      <div style="display: flex; justify-content: space-between">
        <div style="width: 48%" v-for="(itm, ind) in item.pictures" :key="ind">
          <img style="width: 100%; height: 100px" :src="itm" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps();
import { hotApi } from "@/api/user";
import type { hotReturn } from "@/api/types/userType";
import { ref } from "vue";

import { onLoad } from "@dcloudio/uni-app";

const hot = ref<hotReturn>();
const add = async () => {
  try {
    const res = await hotApi();
    console.log("ccc", res);
    hot.value = res.result;
  } catch (error) {
    console.log(error);
  }
};

const xq = (index: any) => {
  uni.navigateTo({
    url: `/pages/ReferralDetails/index?index=${index}`,
  });
};

onLoad(() => {
  add();
});
</script>

<style lang="scss" scoped>
.u-hot {
  margin-top: 60rpx;
  width: 94%;
  margin-left: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
span {
  font-size: 14px;
}
</style>
