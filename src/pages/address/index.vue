<template>
  <div class="address" style="position: relative">
    <div
      class="address-item"
      v-for="(item, index) in aaa"
      :key="index"
      style="
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin-left: 10px;
        padding: 10px;
        background-color: #fff;
        border-bottom: 2px solid #ccc;
      "
    >
      <div>
        <p>
          {{ item.receiver
          }}<span style="margin-left: 10px">{{ item.contact }}</span>
        </p>
        <p>{{ item.fullLocation }}</p>
      </div>
      <div>
        <p @click="up(item.id)">| 修改</p>
      </div>
    </div>
    <button
      style="
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 30px;
        background-color: #27ba9b;
        width: 90%;
        /* margin-left: 20px; */
        margin: 20px;
        color: #fff;
      "
      @click="gonew()"
    >
      新建地址
    </button>
  </div>
</template>

<script lang="ts" setup>
import { addressApi } from "@/api/public";
import type { addressReturn } from "@/api/types/publicType";
import { onLoad } from "@dcloudio/uni-app";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const store = useUserStore();
const up = (id: string) => {
  uni.navigateTo({
    url: `/pages/updata/index?id=${id}`,
  });
};

const gonew = () => {
  uni.navigateTo({
    url: "/pages/newly/index",
  });
};
const aaa = ref<addressReturn>();

const add = async () => {
  try {
    const res = await addressApi({Authorization:store.token});
    console.log(res);

    aaa.value = res.result;
  } catch (error) {
    console.log(error);
  }
};

onLoad(() => {
  add();
});
</script>

<style lang="scss" scoped>
.address {
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
}
</style>
