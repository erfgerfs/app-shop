import { http } from "@/utils/http";
import type { xqReturn, cartCs, cartReturn } from "@/api/types/xqType";

export interface idcs {
  id: string;
}

export const xqApi = (a: idcs) => {
  return http<xqReturn>({
    url: "/goods",
    method: "GET",
    data: a,
  });
};

//加入购物车 /member/cart
export const cartApi = (a: cartCs) => {
  return http<cartReturn>({
    url: "/goods",
    method: "GET",
    data: a,
  });
};
