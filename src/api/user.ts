import { http } from "@/utils/http";

import type {
  loginParamsType,
  SwitchReturn,
  MutliReturn,
  hotReturn,
  loveModel,
  loveReturn,
  loginReturn,
} from "./types/userType";
//登录
export const loginApi = (loginParams: loginParamsType) => {
  return http<loginReturn>({
    url: "/login",
    method: "POST",
    data: loginParams,
  });
};
// 轮播图
export interface switchcs {
  distributionSite?: number;
}

export const switchApi = (a: switchcs) => {
  return http<SwitchReturn>({
    url: "/home/banner",
    method: "GET",
    data: a,
  });
};
// 前台分类
export const mutliApi = () => {
  return http<MutliReturn>({
    url: "/home/category/mutli",
    method: "GET",
  });
};
// 特惠推荐

export const hotApi = () => {
  return http<hotReturn>({
    url: "/home/hot/mutli",
    method: "GET",
  });
};

//猜你喜欢
export const loveApi = (a: loveModel) => {
  return http<loveReturn>({
    url: "/home/goods/guessLike",
    method: "GET",
    data: a,
  });
};

// //商品详情
// export const detailsApi = (a: loveModel) => {
//   return http<loveReturn>({
//     url: "/home/goods/guessLike",
//     method: "GET",
//     data: a,
//   });
// };
