import { http } from "@/utils/http";

import type { classshopReturn } from "@/api/types/classshopType";

export const classshopApi = () => {
  return http<classshopReturn>({
    url: "/category/top",
    method: "GET",
  });
};
