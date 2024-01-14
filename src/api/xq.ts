import { http } from "@/utils/http";
import type { xqReturn } from "@/api/types/xqType";

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
