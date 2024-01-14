<template>
  <div style="width: 100%">
    {{ items }}

  </div>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: String,
    default: "我是默认值",
  },
});
</script>

<style lang="scss" scoped></style>
