<template>
  <el-input v-model="filterText" placeholder="Filter keyword" />
  <el-tree
    ref="treeRef"
    :data="treeData"
    :props="defaultProps"
    accordion
    :filter-node-method="filterNode"
    @node-click="handleNodeClick"
  >
    <template #default="{ node }">
      <span class="custom-tree-node">
        <el-icon color="#FFCA28"><Folder /></el-icon>
        <span>{{ node.label }}</span>
      </span>
    </template>
  </el-tree>
</template>

<script>
import { ref, reactive, toRefs, watch } from "vue";
export default {
  name: "dataTree",
  props: ["treeData"],
  setup(prop, context) {
    console.log(prop, context, "接收的参数");
    const treeRef = ref(null);
    const data = reactive({
      filterText: "",
      defaultProps: {
        children: "children",
        label: "name",
      },
      handleNodeClick: (val) => {
        console.log(val);
      },
      filterNode: (value, data) => {
        if (!value) return true;
        return data.label.includes(value);
      },
    });
    return {
      ...toRefs(data),
    };

    // watch(data.filterText, (val) => {
    //   console.log(treeRef, val, "搜索的数据");
    //   // treeRef!.filter(val)
    // });
  },
};
</script>

<style scoped></style>
