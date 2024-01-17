<template>
  <div class="newly">
    <view class="aa">
      <uni-forms :modelValue="formData">
        <uni-forms-item label="收货人" name="name">
          <uni-easyinput
            type="text"
            v-model="formData.name"
            placeholder="请填写收货人姓名"
          />
        </uni-forms-item>
        <uni-forms-item label="手机号码" contact="contact">
          <uni-easyinput
            type="text"
            v-model="formData.contact"
            placeholder="请输入手机号码"
          />
        </uni-forms-item>
        <uni-forms-item label="所在地区" countyCode="countyCode">
          <picker
            class="picker"
            mode="region"
            :value="sheng + shi + qu"
            @change="aaa"
          >
            <view v-if="sheng != ''">{{ sheng + shi + qu }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </uni-forms-item>
        <uni-forms-item label="详细地址" address="address">
          <uni-easyinput
            type="text"
            v-model="formData.address"
            placeholder="街道，楼牌号等信息"
          />
        </uni-forms-item>
      </uni-forms>
    </view>
    <button
      style="
        border-radius: 30px;
        background-color: #27ba9b;
        width: 90%;
        /* margin-left: 20px; */
        margin: 20px;
        color: #fff;
      "
      @click="submitForm"
    >
      保存并使用
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { newlyReturn } from "@/api/types/publicType";
import { newlyApi } from "@/api/public";

const sheng = ref("");
const shi = ref("");
const qu = ref("");


const aaa = (value: any) => {
  sheng.value = value.detail.code[0];
  shi.value = value.detail.code[1];
  qu.value = value.detail.code[2];
  
  console.log(value);
};
const formData = reactive({
  name: "",
  contact: "",
  countyCode: "",
  address: "",
});
const submitForm = async () => {
  try {
    const res = await newlyApi({
      receiver: formData.name,
      address: formData.address,
      cityCode: shi.value,
      contact: formData.contact,
      countyCode: qu.value,
      provinceCode: sheng.value,
      isDefault: 1,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.newly {
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
}
.aa {
  background-color: #fff;
  width: 85%;
  padding: 20px;
  margin-left: 10px;
}
</style>
