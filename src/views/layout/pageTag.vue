<template>
  <div class="tagContainer">
    <el-icon class="icon" :size="20" @click="handleIsFold">
      <Fold />
    </el-icon>
    <div class="tagBox">
      <el-tag
        v-for="tag in tagsData"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        class="mx-1"
        closable
        :disable-transitions="false"
        @click="switchTags(tag)"
        @close="handleClose(tag)"
      >
        {{ tag.title }}
      </el-tag>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon><Setting /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleCloseCurrent"
            >关闭当前页签</el-dropdown-item
          >
          <el-dropdown-item @click="handleCloseAll"
            >关闭所有页签</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

export default {
  name: "PageTagPage",
  setup() {
    const router = useRouter();
    const visible = ref(false);
    // 折叠侧边栏-菜单
    const mainStore = useMainStore();
    const { tagsData } = storeToRefs(mainStore);
    const handleIsFold = () => {
      mainStore.$patch({
        siderIsFold: !mainStore.siderIsFold,
      });
    };
    const isActive = (val) => {
      return router.currentRoute.value.path === val.path;
    };
    // 关闭当前标签
    const handleClose = (tag) => {
      mainStore.closeTag(tag);
    };
    // 关闭当前选中的数据
    const handleCloseCurrent = () => {
      console.log(router.currentRoute.value.meta, "当前的数据");
      let currentRoute = router.currentRoute.value.meta;
      mainStore.closeTag(currentRoute);
    };
    // 关闭全部
    const handleCloseAll = () => {
      mainStore.closeAllTags();
      router.push("/home");
    };
    // 切换标签
    const switchTags = (val) => {
      router.push(val.path);
    };

    // 关闭其他
    const closeOthersTags = () => {};

    return {
      visible,
      handleIsFold,
      handleClose,
      tagsData,
      handleCloseAll,
      switchTags,
      isActive,
      closeOthersTags,
      handleCloseCurrent,
    };
  },
};
</script>

<style lang="scss" scoped>
.tagContainer {
  width: 100%;
  height: 30px;
  background: #f6f6f6;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  .icon {
    flex-grow: 0.2;
  }
  .tagBox {
    flex-grow: 23.8;
    .mx-1 {
      margin: 2px;
      cursor: pointer;
    }
  }
  .el-icon {
    margin: 0 4px;
  }
  .active {
    background: #cdcdcd;
  }
}
</style>
