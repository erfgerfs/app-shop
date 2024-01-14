<template>
  <div class="login">
    <div class="login-img">
      <img
        src="../../static/icon/images/logo_icon.png"
        alt=""
        style="width: 150px; height: 150px"
      />
    </div>
  </div>
  <input type="text" placeholder="请输入账号" v-model="from.account" />
  <input type="text" placeholder="请输入密码" v-model="from.password" />
  <button
    style="
      width: 90%;
      margin-left: 20px;
      /* padding: 10px; */
      margin-bottom: 20px;
      border-radius: 20px;
      background-color: #28bb9c;
      color: #fff;
    "
    @click="add"
  >
    登录
  </button>
  <div style="width: 100%; justify-content: center; text-align: center">
    <span>-------其他登录方式-------</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { loginApi } from "@/api/user";
import type { loginReturn } from "@/api/userType";
import { useUserStore } from "../../stores/user";

const store = useUserStore();

const from = reactive({
  account: "13123456789",
  password: "123456",
});

const aaa = ref<loginReturn>();

const add = async () => {
  try {
    const res = await loginApi({
      account: from.account,
      password: from.password,
    });
    store.Information = res.result;
    store.token = res.result.token;
    // console.log(store.Information);
    if (res.code == 1) {
      uni.navigateBack();
    }

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  text-align: center;
  justify-content: center;
  margin-top: 200px;
}
.login-img {
  width: 100%;
  // justify-content: center;
}
input {
  width: 85%;
  margin-left: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
}
</style>
