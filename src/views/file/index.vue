<template>
  <div class="fileManage">
    <el-card class="elCard">
      <template #header>
        <div class="card-header">
          <span>文件管理</span>
        </div>
      </template>
      <el-menu
        active-text-color="#ffd04b"
        text-color="#333"
        class="el-menu-vertical-demo"
        default-openeds="1"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>文件类型</span>
          </template>
          <el-menu-item
            v-for="item of fileType"
            :key="item.value"
            @click="handleFileList(item.value)"
          >
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-card>
    <el-card class="elCard">
      <div class="functionBtn">
        <el-button type="primary">
          <template #icon>
            <el-icon><Upload /></el-icon>
            <span>上传</span>
          </template>
        </el-button>
        <el-button type="primary" @click="changeFormatter">
          <template #icon>
            <el-icon><Upload /></el-icon>
          </template>
        </el-button>
      </div>
      <keep-alive>
        <component :is="defaultFormatter" :file-list="fileList"></component>
      </keep-alive>
      <!--      <file-list v-if="defaultFormatter" :file-list="fileList"></file-list>-->
      <!--      <fileGrid v-else :file-list="fileList"></fileGrid>-->
    </el-card>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import fileData from "@/mock/file";
import fileGrid from "@/views/file/fileGrid";
import fileList from "@/views/file/fileList";
import axios from "axios";
export default {
  name: "fileManage",
  components: {
    fileGrid,
    fileList,
  },
  setup() {
    let data = reactive({
      fileType: [],
      fileList: [],
      defaultFormatter: "fileGrid",
      getFileFold: () => {
        axios.get("/mock/file/fileFold").then((res) => {
          data.fileType = res.data.data;
        });
      },
      handleFileList: (val) => {
        let res = fileData.getFileList({ fileType: val });
        data.fileList = res.data.list;
      },
      changeFormatter: () => {
        if (data.defaultFormatter === "fileGrid") {
          data.defaultFormatter = "fileList";
        } else if (data.defaultFormatter === "fileList") {
          data.defaultFormatter = "fileGrid";
        }
      },
    });
    data.getFileFold();
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
.fileManage {
  display: flex;
  justify-content: space-between;
  .elCard:first-child {
    width: 25%;
  }
  .elCard:last-child {
    width: 74%;
    .functionBtn {
      margin-bottom: 10px;
    }
  }
}
::v-deep .el-card__header {
  padding: 10px;
}
::v-deep .el-card__body {
  padding: 10px;
}
</style>
