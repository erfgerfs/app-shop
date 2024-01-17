<template>
  <div class="moi">
    <view class="viewport">
      <!-- 导航栏 -->
      <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
        <navigator
          open-type="navigateBack"
          class="back icon-left"
          hover-class="none"
        ></navigator>
        <view class="title">个人信息</view>
      </view>
      
      <!-- 头像 -->
      <view class="avatar">
        <view class="avatar-content">
          <image class="image" :src="aaa.avatar" mode="aspectFill" />
          <text class="text">点击修改头像</text>
        </view>
      </view>
      <!-- 表单 -->
      <view class="form">
        <!-- 表单内容 -->
        <view class="form-content">
          <view class="form-item">
            <text class="label">账号</text>
            <input
              class="input"
              type="text"
              placeholder="请填写账号"
              v-model="zh"
            />
          </view>
          <view class="form-item">
            <text class="label">昵称</text>
            <input
              class="input"
              type="text"
              placeholder="请填写昵称"
              v-model="mm"
            />
          </view>
          <view class="form-item">
            <text class="label">性别</text>
            <radio-group @change="xb1">
              <label class="radio">
                <radio value="男" color="#27ba9b" :checked="xb == '男'" /> 男
              </label>
              <label class="radio">
                <radio value="女" color="#27ba9b" :checked="xb == '女'" /> 女
              </label>
            </radio-group>
          </view>
          <view class="form-item">
            <text class="label">生日</text>
            <picker
              class="picker"
              mode="date"
              start="1900-01-01"
              :end="new Date()"
              :value="rq"
              @change="add2"
            >
              <view v-if="rq != ''">{{ rq }}</view>
              <view class="placeholder" v-else>请选择日期</view>
            </picker>
          </view>
          <view class="form-item">
            <text class="label">城市</text>
            <picker
              class="picker"
              mode="region"
              :value="['北京市', '北京市', '东城区']"
              @change="add"
            >
              <view v-if="sheng != ''">{{ sheng + shi + qu }}</view>
              <view class="placeholder" v-else>请选择城市</view>
            </picker>
          </view>
          <view class="form-item">
            <text class="label">职业</text>
            <input
              class="input"
              type="text"
              placeholder="请填写职业"
              v-model="zy"
            />
          </view>
        </view>
        <!-- 提交按钮 -->
        <button class="form-button" @click="ooo">保 存</button>
      </view>
    </view>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import type { moiReturn, moiUpReturn } from "@/api/types/publicType";
import { moiApi, moiUpApi } from "@/api/public";
import { onLoad } from "@dcloudio/uni-app";

const sheng = ref("");
const shi = ref("");
const qu = ref("");
const sheng1 = ref("");
const shi1 = ref("");
const qu1 = ref("");

const add = (value: any) => {
  sheng.value = value.detail.value[0];
  shi.value = value.detail.value[1];
  qu.value = value.detail.value[2];
  sheng1.value = value.detail.code[0];
  shi1.value = value.detail.code[1];
  qu1.value = value.detail.code[2];
  console.log(qu);
};

const rq = ref("");
const xb = ref("");

const xb1 = (value) => {
  xb.value = value.detail.value;
};

const add2 = (value) => {
  console.log(value);
  rq.value = value.detail.value;
};
const aaa = ref<moiReturn>();

const add1 = async () => {
  try {
    const res = await moiApi();
    console.log(res);
    aaa.value = res.result;
    zh.value = res.result.account;
    mm.value = res.result.nickname;
    zy.value = res.result.profession;
    xb.value = res.result.gender;
  } catch (error) {
    console.log(error);
  }
};

onLoad(() => {
  add1();
});
const { safeAreaInsets } = uni.getSystemInfoSync();

const zh = ref("");
const mm = ref("");
const zy = ref("");

const ooo = async () => {
  try {
    const res = await moiUpApi({
      nickname: mm.value,
      birthday: rq.value,
      profession: zy.value,
      provinceCode: sheng1.value,
      cityCode: shi1.value,
      countyCode: qu1.value,
      gender: xb.value,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.moi {
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}
.navbar {
  position: relative;
  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }
  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}
// 表单
.form {
  background-color: #f4f4f4;
  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }
    .label {
      width: 180rpx;
      color: #333;
    }
    .account {
      color: #666;
    }
    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }
    .radio {
      margin-right: 20rpx;
    }
    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }
  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
