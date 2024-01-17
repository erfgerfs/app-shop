//获取收货地址列表

import { http } from "@/utils/http";
import type {
  addressReturn,
  newlyReturn,
  newlycs,
  moiReturn,
  moiUpReturn,
  moiUpcs,
  upcs,
  xqReturn,
} from "@/api/types/publicType";

export type addresscs = {
  Authorization: string;
};

export const addressApi = (a: addresscs) => {
  return http<addressReturn>({
    url: "/member/address",
    method: "GET",
    data: a,
  });
};
export const newlyApi = (b: newlycs) => {
  return http<newlyReturn>({
    url: "/member/address",
    method: "POST",
    data: b,
  });
};

//获取个人信息
export const moiApi = () => {
  return http<moiReturn>({
    url: "/member/profile",
    method: "GET",
  });
};
//修改个人信息
export const moiUpApi = (b: moiUpcs) => {
  return http<moiUpReturn>({
    url: "/member/profile",
    method: "PUT",
    data: b,
  });
};

//修改收货地址
export const upApi = (id: string, a: upcs) => {
  return http({
    url: `/member/address/${id}`,
    method: "PUT",
    data: a,
  });
};
//收货地址详情

export interface ids {
  id: string;
}
export const xqApi = (id: ids) => {
  return http<xqReturn>({
    url: `/member/address/${id}`,
    method: "GET",
  });
};
