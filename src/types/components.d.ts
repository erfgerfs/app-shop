import UTest from "@/components/u-html/index.vue";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    UTest: typeof UTest;
  }
}
