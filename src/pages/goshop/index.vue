<template>
  <view class="goshop">
    <!-- {{ id1.id2 }} -->
    <div class="ww"></div>
    <swiper @click="gb" style="height: 400px" indicator-dots autoplay circular>
      <swiper-item
        style="height: 400px"
        v-for="(item, index) in lb.lb1"
        :key="index"
      >
        <image :src="item" style="width: 100vw" mode="widthFix" />
        <!-- <img style="height: 100%" :src="item" alt="" /> -->
      </swiper-item>
    </swiper>
    <div
      style="
        width: 100%;
        padding: 20px;
        background-color: #35c8a9;
        font-size: 30px;
        color: #fff;
      "
    >
      ￥{{ love?.price }}
    </div>
    <div class="box">
      <div
        style="
          padding-bottom: 20px;
          border-bottom: 2px solid #ccc;

          padding-left: 20px;
        "
      >
        <h1 style="font-size: 24px; margin-bottom: 10px; margin-top: 10px">
          {{ love?.name }}
        </h1>
        <p style="color: red">{{ love?.desc }}</p>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid #ccc;
          font-size: 20px;
        "
      >
        <div style="display: flex; align-items: center">
          <span style="color: #ccc; margin-left: 20px">选择</span>
          <p
            style="margin-left: 20px"
            v-if="name3.name4 == '' && name5.name6 == ''"
          >
            请选择商品规格
          </p>
          <div style="margin-left: 20px" v-else>
            <span>{{ name5.name6 }} </span>
            <p>{{ name3.name4 }}</p>
          </div>
        </div>
        <div style="margin-right: 20px" @click="openSpecs2">></div>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid #ccc;
          font-size: 20px;
        "
      >
        <div style="display: flex; align-items: center">
          <span style="color: #ccc; margin-left: 20px">送至</span>
          <p style="margin-left: 20px">请选择收货地址</p>
        </div>
        <div style="margin-right: 20px" @click="openSpecs1">></div>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid #ccc;
          font-size: 20px;
        "
      >
        <div style="display: flex; align-items: center">
          <span style="color: #ccc; margin-left: 20px">服务</span>
          <p style="margin-left: 20px">无忧退 快速退款 免费包邮</p>
        </div>
        <div style="margin-right: 20px" @click="openSpecs">></div>
      </div>
    </div>
    <div class="box1">
      <b
        style="
          border-left: 5px solid #4fc6ad;
          padding-left: 10rpx;
          margin-bottom: 40px;
        "
        >详情</b
      ><br />
      <div
        v-for="(item, index) in aaa"
        :key="index"
        style="
          width: 100%;
          /* display: flex; */
          justify-content: center;

          margin: 20px 0;
          border-bottom: 3px dotted #ccc;
          padding-bottom: 20px;
        "
      >
        <span>{{ item.name }}</span>
        <span style="margin-left: 50px">{{ item.value }}</span>
      </div>
      <div v-for="(item, index) in aaa1" :key="index">
        <image :src="item" style="width: 100%" mode="widthFix" />
      </div>
    </div>
    <uni-goods-nav
      style="width: 100%; position: fixed; bottom: 0; left: 0"
      :fill="true"
      :options="gwc.options"
      :button-group="gwc.customButtonGroup"
      @click="onClick"
      @buttonClick="buttonClick"
    />

    <uni-popup ref="popup" type="bottom" background-color="#fff">
      <div style="width: 100%; padding: 10px">
        <h1>无忧退货</h1>
        <p>
          自收到商品之日起30天内，可在线申请无忧退货服务(食品等特殊商品除外)
        </p>
        <h1>快速退款</h1>
        <p>
          收到退货包裹并确认无误后，将在48小时内办理退款退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账
        </p>
        <h1>满88元免邮费</h1>
        <p>
          单笔订单金额(不含运费)满88元可免邮费，不满88元单笔订单收取10元邮费
        </p>
      </div>
    </uni-popup>
    <uni-popup ref="popup1" type="bottom" background-color="#fff">
      <div style="width: 100%; padding: 10px">
        <h1>送货</h1>
      </div>
    </uni-popup>
    <uni-popup ref="popup2" type="bottom" background-color="#fff">
      <image :src="picture1.picture2" mode="scaleToFill" />
      <p>{{ name5.name6 }}</p>
      <p>{{ name3.name4 }}</p>
      <div
        style="
          width: 100%;
          padding: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-around;
        "
        v-for="(item, index) in aaa2"
        :key="index"
      >
        <h1 style="width: 100%">{{ item.name }}</h1>

        <div v-for="(ite, inde) in item.values" :key="inde">
          <button
            @click="butt(inde, ite.picture, ite.name)"
            style="width: 70px; font-size: 10px"
            :class="item.name == '规格' && inde == act.act1 ? 'bc' : ''"
            v-show="item.name == '规格'"
          >
            {{ ite.name }}
          </button>
          <button
            @click="butt(inde, ite.picture, ite.name)"
            style="width: 70px; font-size: 10px"
            :class="item.name == '型号' && inde == act.act1 ? 'bc' : ''"
            v-show="item.name == '型号'"
          >
            {{ ite.name }}
          </button>
          <button
            @click="butt(inde, ite.picture, ite.name)"
            style="width: 70px; font-size: 10px"
            :class="item.name == '图案' && inde == act.act1 ? 'bc' : ''"
            v-show="item.name == '图案'"
          >
            {{ ite.name }}
          </button>
          <button
            @click="butt(inde, ite.picture, ite.name)"
            style="width: 70px; font-size: 10px"
            :class="item.name == '颜色' && inde == act.act1 ? 'bc' : ''"
            v-show="item.name == '颜色'"
          >
            {{ ite.name }}
          </button>
          <button
            @click="butt(inde, ite.picture, ite.name)"
            style="width: 70px; font-size: 10px"
            :class="item.name == '款式' && inde == act.act1 ? 'bc' : ''"
            v-show="item.name == '款式'"
          >
            {{ ite.name }}
          </button>
          <button
            @click="butt1(inde, ite.name)"
            style="width: 70px; font-size: 10px"
            :class="item.name == '尺码' && inde == act2.act3 ? 'bc' : ''"
            v-show="item.name == '尺码'"
          >
            {{ ite.name }}
          </button>
        </div>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <h1>数量</h1>
        <hd-stepper shape="square" v-model="value0"></hd-stepper>
      </div>
      <button @click="go">加入购物车</button>
    </uni-popup>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";
import { xqApi, cartApi } from "@/api/xq";
import type {
  xqReturn,
  Property,
  ResultSpec,
  cartCs,
  cartReturn,
} from "@/api/types/xqType";
// const popup = reactive({
//   popup1:false
// });
const popup = ref(null);
const popup1 = ref(null);
const popup2 = ref(null);
const openSpecs = () => {
  popup.value.open();
};
const openSpecs1 = () => {
  popup1.value.open();
};
const openSpecs2 = () => {
  popup2.value.open();
};
const gb = () => {
  popup.value.close();
};
const value0 = ref(1);

const act = reactive({
  act1: "",
});
const act2 = reactive({
  act3: "",
});
// 单击后获取颜色的名称
const name5 = reactive({
  name6: "",
});
//获取颜色数组对应的图片
const picture1 = reactive({
  picture2: "",
});

//获取尺寸对应的名称
const name3 = reactive({
  name4: "",
});
const butt = (inde: any, picture: any, name: string) => {
  act.act1 = inde;
  name5.name6 = name;

  picture1.picture2 = picture;
  // console.log(name5.name6);
};
const butt1 = (inde: any, name: string) => {
  act2.act3 = inde;
  name3.name4 = name;
  // console.log(name3.name4);
};

const gwc = reactive({
  options: [
    {
      icon: "chat",
      text: "收藏",
    },

    {
      icon: "cart",
      text: "购物车",
    },
  ],
  buttonGroup: [
    {
      text: "加入购物车",
      backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
      color: "#fff",
    },
    {
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
      color: "#fff",
    },
  ],
  customButtonGroup: [
    {
      text: "加入购物车",
      backgroundColor: "linear-gradient(90deg, #1E83FF, #0053B8)",
      color: "#fff",
    },
    {
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #60F3FF, #088FEB)",
      color: "#fff",
    },
  ],
  customButtonGroup1: [
    {
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
      color: "#fff",
    },
  ],
});

const id1 = reactive({
  id2: "",
});

const love = ref<xqReturn>();
const lb = reactive({
  lb1: [],
});

const onClick = (e: any) => {
  console.log(111);
};
const buttonClick = (e: any) => {};

const go = async () => {
  try {
    const res = await cartApi({ skuId: "3844032", count: 1 });
    console.log(res);
  } catch (error) {
    console.log(error);
    
  }
};

const aaa = ref<Property[]>();
const aaa1 = ref<string[]>();
const aaa2 = ref<ResultSpec[]>();
const aaa3 = ref("");
const add = async () => {
  try {
    const res = await xqApi({ id: id1.id2 });
    console.log(res);
    love.value = res.result;
    lb.lb1 = res.result.mainPictures;
    aaa.value = res.result.details.properties;
    aaa1.value = res.result.details.pictures;
    aaa2.value = res.result.specs;
    // aaa3.value = res.result.specs.values.name;
    console.log(aaa3.value);

    // console.log(lb.lb1);
  } catch (error) {
    console.log(error);
  }
};

onLoad((e) => {
  // console.log(e?.id);
  id1.id2 = e?.id;
  add();
});
</script>

<style lang="scss" scoped>
.bc {
  background-color: #e9f8f5;
  color: #28ba9b;
  border: 2px solid #28ba9b;
}
.goshop {
  height: 100%;
  width: 100vw;
  background-color: #f4f4f4;
  overflow: auto;
  margin-bottom: 100px;
  position: relative;
}
// .ww {
//   width: 0;
//   height: 0;
//   border-width: 30px;
//   border-style: solid;

//   border-color: red transparent transparent transparent;
//   overflow: hidden;
//   font-size: 0;
//   line-height: 0;
// }
.box {
  background-color: #fff;
  width: 100vw;
}
.box1 {
  margin-bottom: 50px;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  width: 100vw;
}
.uni-tab__cart-box {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.uni-goods-nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
