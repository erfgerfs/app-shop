<template>
  <div class="updata">
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
              :value="sheng1 + shi1 + qu1"
              @change="aaa"
            >
              <view v-if="sheng != ''">{{ sheng1 + shi1 + qu1 }}</view>
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
  </div>
</template>

<script lang="ts" setup>
import { xqApi, upApi } from "@/api/public";
import type { upcs, xqReturn } from "@/api/types/publicType";
import { onLoad } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";

const aaa = (value: any) => {
  sheng.value = value.detail.code[0];
  shi.value = value.detail.code[1];
  qu.value = value.detail.code[2];
  sheng1.value = value.detail.value[0];
  shi1.value = value.detail.value[1];
  qu1.value = value.detail.value[2];
  console.log(value);
};

const submitForm = async () => {
  try {
    const res = await upApi(id1.id2, {
      address: formData.address,
      cityCode: shi.value,
      contact: formData.contact,
      countyCode: qu.value,
      isDefault: 1,
      provinceCode: sheng.value,
      receiver: formData.name,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
const sheng = ref("");
const shi = ref("");
const qu = ref("");
const sheng1 = ref("");
const shi1 = ref("");
const qu1 = ref("");

const formData = reactive({
  name: "",
  contact: "",
  countyCode: "",
  address: "",
});

const id1 = reactive({
  id2: "",
});

const add = async () => {
  try {
    const res = await xqApi(id1.id2);
    console.log(res);
    formData.name = res.result.receiver;
    formData.contact = res.result.contact;
    formData.countyCode = res.result.countyCode;
    formData.address = res.result.address;
  } catch (error) {
    console.log(error);
  }
};

onLoad((e) => {
  console.log(e.id);
  id1.id2 = e.id;
  add();
  submitForm();
});
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
