<template>
  <div class="middleContainer">
    <div class="sider">
      <div class="website">
        <img src="images/logo.png" alt="" />
      </div>
      <el-scrollbar style="height: 86%">
        <sider class="sideMenu" />
      </el-scrollbar>
      <div class="setting">
        <img src="images/logo.png" alt="" />
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon :size="20"><Tools /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
              <el-dropdown-item @click="themeData.handleTheme"
                >切换主题</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="contend">
      <pageTag></pageTag>
      <div class="mainContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <!--系统主题设置-->
  <el-drawer
    v-model="themeData.themeDrawerVisible"
    title="I am the title"
    :with-header="false"
  >
    <el-divider>系统主题</el-divider>
    <div class="demo-color-block">
      <span class="demonstration">系统统一样式&nbsp;</span>
      <el-color-picker
        v-model="themeData.sysTheme"
        @change="themeData.handleSysThemeColor"
      />
    </div>
  </el-drawer>
</template>

<script>
import { ref, reactive } from "vue";
import sider from "./sider";
import pageTag from "@/views/layout/pageTag";
export default {
  name: "HomePage",
  components: {
    sider,
    pageTag,
  },
  setup() {
    let avatarImg = ref(null);
    // 获取全局参数$sysTitle
    // let systitle = ref("");
    // const { appContext } = getCurrentInstance();
    // systitle.value = appContext.config.globalProperties.$sysTitle;

    const userMsg = JSON.parse(localStorage.getItem("userMsg"));
    avatarImg = "http://47.93.114.103:6688/" + userMsg.avatar;

    const themeData = reactive({
      themeDrawerVisible: false,
      sysTheme: "",
      handleTheme: () => {
        themeData.themeDrawerVisible = true;
      },
    });

    return {
      avatarImg,
      themeData,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  background: beige;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  .headerLeft {
    padding-left: 36px;
    img {
      width: 140px;
    }
  }
  .headerRight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-avatar {
      display: block;
    }
  }
}
.middleContainer {
  display: flex;
  flex: 1;
  height: 100vh;
  .sider {
    background: white;
    border-radius: 20px;
    box-shadow: #dedddd 0px 0px 10px;
    margin: 6px;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      height: 83vh;
    }
    .website {
      width: 100%;
      text-align: center;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 20px 20px 0 0;
      img {
        width: 140px;
      }
    }
    .setting {
      border-radius: 0 0 20px 20px;
      padding: 0 10px;
      .el-dropdown {
        float: right;
      }
      img {
        height: 40px;
        vertical-align: middle;
      }
    }
  }
  .contend {
    width: calc(100% - 10px);
    margin: 6px 6px 6px 0;
    background: white;
    padding-left: 10px;
    .mainContent {
      height: 93vh;
      overflow-y: auto;
    }
  }
}
</style>
