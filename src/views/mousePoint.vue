<template>
  <h5>获取当前鼠标点的坐标x:{{ point.x }} --- y: {{ point.y }}</h5>
</template>

<script>
import usePoint from "@/hook/usePoint";
export default {
  name: "mousePoint",
  setup() {
    let point = usePoint();

    return {
      point,
    };
  },
};
</script>

<style scoped></style>
