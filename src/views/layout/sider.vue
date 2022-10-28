<template>
  <el-menu
    active-text-color="#ffd04b"
    text-color="#333"
    class="el-menu-vertical-demo"
    :default-active="router.currentRoute.value.path"
    :router="true"
    :collapse="siderIsFold"
    @select="changeSidebar"
    :collapse-transition="false"
    mode="vertical"
  >
    <!--    background-color="#545c64"-->
    <template v-for="item of datas.menuData">
      <!--只有一级菜单-->
      <el-menu-item
        v-if="!item.children"
        :index="item.path"
        :key="item.id + ''"
      >
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
      <!--有子级菜单-->
      <el-sub-menu v-else :index="item.path" :key="item.id + ''">
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="chileItem of item.children"
          :index="chileItem.path"
          :key="chileItem.id"
        >
          <el-icon>
            <component :is="chileItem.icon"></component>
          </el-icon>
          <span>{{ chileItem.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script>
import { reactive } from "vue";
import { data } from "../../mock/menuSider.js";
import { useRouter } from "vue-router";
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";
export default {
  name: "SiderPage",
  setup() {
    // 获取路由标签
    const router = useRouter();
    const datas = reactive({
      menuData: data,
    });
    // 获pinia数据
    const mainStore = useMainStore();
    const { siderIsFold } = storeToRefs(mainStore);
    // 添加标签栏
    const changeSidebar = () => {
      let currentRoute = router.currentRoute.value;
      mainStore.addTagsData(currentRoute.meta);
    };
    return {
      changeSidebar,
      datas,
      siderIsFold,
      router,
    };
  },
};
</script>

<style lang="scss" scoped></style>
