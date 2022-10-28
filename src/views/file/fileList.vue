<template>
  <ul class="FileList">
    <li v-for="item of fileList" :key="item.id">
      <img src="images/logo.png" alt="" />
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FileList",
  props: ["fileList"],
};
</script>

<style lang="scss" scoped>
.FileList {
  li {
    img {
      width: 80px;
    }
  }
}
</style>
