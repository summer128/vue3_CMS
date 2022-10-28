<template>
  <ul class="gridList">
    <li v-for="item of fileList" :key="item.id">
      <img src="images/logo.png" alt="" />
      <p>{{ item.name }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FileGrid",
  props: ["fileList"],
};
</script>

<style lang="scss" scoped>
.gridList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  li {
    width: 100px;
    text-align: center;
    cursor: pointer;
    padding: 10px 0;
    img {
      width: 80px;
      margin-left: 10px;
    }
  }
  li:hover {
    background: #dedddd;
  }
}
</style>
