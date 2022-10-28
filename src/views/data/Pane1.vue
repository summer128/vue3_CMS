<template>
  <div class="pane1">
    <el-card class="elCard">
      <template #header>
        <div class="card-header">
          <span>数据分类</span>
        </div>
      </template>
      <dataTree :tree-data="treeData"></dataTree>
    </el-card>
    <el-card class="elCard">
      <template #header>
        <div class="card-header">
          <span>数据类别</span>
        </div>
      </template>
      <div class="dataTableBtn">
        <el-button type="primary">
          <template #icon>
            <el-icon><Plus /></el-icon>
          </template>
        </el-button>
        <el-button type="primary">
          <template #icon>
            <el-icon><Delete /></el-icon>
          </template>
        </el-button>
      </div>
      <el-table
        border="true"
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="40" />
        <el-table-column label="Date" width="60">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="Name" width="80" />
        <el-table-column
          property="address"
          label="Address"
          show-overflow-tooltip
        />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >详情</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import dataTree from "@/views/data/dataTree";
import axios from "axios";
export default {
  name: "Pane1",
  components: {
    dataTree,
  },
  setup() {
    let data = reactive({
      treeData: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-08",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-06",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-07",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      getCateTree: () => {
        axios.get("/mock/cate/tree").then((res) => {
          console.log(res, "数据");
          data.treeData = res.data.data;
        });
      },
    });
    data.getCateTree();
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
.pane1 {
  display: flex;
  justify-content: space-between;
  .elCard:first-child {
    width: 20%;
  }
  .elCard:last-child {
    width: 79%;
    .dataTableBtn {
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
