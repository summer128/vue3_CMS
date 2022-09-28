<template>
  <el-table :data="data.tableData" style="width: 100%">
    <el-table-column prop="author" label="作者" width="120" />
    <el-table-column prop="date" label="日期" />
    <el-table-column prop="subTitle" label="子标题" />
    <el-table-column prop="title" label="标题" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleDetail"
          >详情</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <!--  详情-->
  <el-drawer
    v-model="data.detailDrawer"
    title="详情"
    :direction="data.direction"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>

<script>
import { reactive } from "vue";
import { articlelist } from "@/api/api";

export default {
  name: "articleTable",
  setup() {
    let data = reactive({
      num: 1,
      count: 10,
      tableData: [],
      detailDrawer: false,
      direction: "rtl",
    });
    // 获取文章列表
    const getArticleList = () => {
      articlelist({ num: data.num, count: data.count }).then((res) => {
        console.log(res, "文章列表");
        if (res.data.errCode === 0) {
          data.tableData = res.data.data.arr;
        }
      });
    };
    getArticleList();

    // 点击打开详情页
    const handleDetail = () => {
      data.detailDrawer = true;
    };

    return {
      data,
      handleDetail,
    };
  },
};
</script>

<style scoped></style>
