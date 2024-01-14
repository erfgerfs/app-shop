import { http } from "@/utils/http";

import type { referralcs, referralReturn } from "@/api/types/referralType";

//index == 0
export const referralApi0 = (a: referralcs) => {
  return http<referralReturn>({
    url: "/hot/preference",
    method: "GET",
    data: a,
  });
};
//index == 1
export const referralApi1 = (a: referralcs) => {
  return http<referralReturn>({
    url: "/hot/inVogue",
    method: "GET",
    data: a,
  });
};
//index == 2
export const referralApi2 = (a: referralcs) => {
  return http<referralReturn>({
    url: "/hot/oneStop",
    method: "GET",
    data: a,
  });
};
//index == 3
export const referralApi3 = (a: referralcs) => {
  return http<referralReturn>({
    url: "/hot/new",
    method: "GET",
    data: a,
  });
};
