<template>
  <el-tabs class="demo-tabs" @tab-change="handleClick">
    <el-tab-pane label="周期管理" name="Pane1"></el-tab-pane>
    <el-tab-pane label="维度管理" name="Pane2"></el-tab-pane>
    <el-tab-pane label="单位管理" name="Pane3"></el-tab-pane>
  </el-tabs>
  <keep-alive>
    <component :is="activeKey"></component>
  </keep-alive>
</template>

<script>
import { reactive, toRefs } from "vue";
import Pane1 from "@/views/data/Pane1";
import Pane2 from "@/views/data/Pane2";
import Pane3 from "@/views/data/Pane3";
export default {
  name: "DataManage",
  components: {
    Pane1,
    Pane2,
    Pane3,
  },
  setup() {
    let data = reactive({
      activeKey: "",
      handleClick: (val) => {
        data.activeKey = val;
      },
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style scoped></style>
