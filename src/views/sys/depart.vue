<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="部门名称">
      <el-input v-model="formInline.user" placeholder="部门名称" />
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="formInline.region" placeholder="状态">
        <el-option label="正常" value="正常" />
        <el-option label="禁用" value="禁用" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">
        <template #icon>
          <el-icon><Search /></el-icon>
        </template>
        <span>搜索</span>
      </el-button>
      <el-button type="primary">
        <template #icon>
          <el-icon><Refresh /></el-icon>
        </template>
        <span>重置</span>
      </el-button>
    </el-form-item>
  </el-form>
  <div style="margin-bottom: 10px">
    <el-button type="primary" @click="handleAdd">
      <template #icon>
        <el-icon><Plus /></el-icon>
      </template>
      新增部门
    </el-button>
  </div>
  <el-table
    :data="tableData"
    style="width: 100%; margin-bottom: 20px"
    row-key="id"
    border
    default-expand-all
    width="180"
  >
    <el-table-column prop="departName" label="部门名称" sortable />
    <el-table-column prop="sort" label="排序" sortable width="180" />
    <el-table-column
      prop="status"
      label="状态"
      :formatter="statusChange"
      sortable
      width="180"
    />
    <el-table-column label="操作" sortable width="180">
      <template #default="scope">
        <el-button type="primary" @click="handleEdit(scope.row)">
          <template #icon>
            <el-icon><EditPen /></el-icon>
          </template>
        </el-button>
        <el-button type="primary" @click="handleDelete(scope.row)">
          <template #icon>
            <el-icon><Delete /></el-icon>
          </template>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--  新增部门-->
  <el-dialog v-model="addDialogVisible" :title="dialogTitle">
    <el-form :model="form">
      <el-form-item label="上级部门">
        <el-cascader
          :options="options"
          @change="handleUpDepartChange"
          :show-all-levels="false"
        />
      </el-form-item>
      <el-form-item label="部门名称">
        <el-input v-model="form.departName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.sort" autocomplete="off" />
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="form.status" class="ml-4">
          <el-radio label="1" size="large">正常</el-radio>
          <el-radio label="2" size="large">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleAddData(dialogTitle)"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { reactive, toRefs } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";
export default {
  name: "DepartManage",
  setup() {
    const data = reactive({
      addDialogVisible: false,
      dialogTitle: "add",
      formInline: {},
      tableData: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
      options: [
        {
          value: "guide",
          label: "Guide",
          children: [
            {
              value: "disciplines",
              label: "Disciplines",
            },
            {
              value: "navigation",
              label: "Navigation",
            },
          ],
        },
      ],
      form: {
        upDepart: "",
        departName: "",
        sort: "",
        status: "",
      },
      getDepartList: () => {
        axios.get("http://127.0.0.1:3000/depart/list").then((res) => {
          console.log(res, "部门数据");
          data.tableData = res.data;
        });
      },
      statusChange: (val) => {
        if (val.status === 1) {
          return "正常";
        } else {
          return "异常";
        }
      },
      // 新增
      handleAdd: () => {
        data.dialogTitle = "add";
        data.addDialogVisible = true;
      },
      handleUpDepartChange: (x) => {
        data.form.upDepart = x[1];
        console.log(x, data.form, "xxxx");
      },
      // 新增部门
      handleAddData: (type) => {
        console.log(type, "数据");
        const { upDepart, departName, sort, status } = data.form;
        if (type === "add") {
          axios
            .post(
              `http://127.0.0.1:3000/depart/add?upDepart=${upDepart}&departName=${departName}&sort=${sort}&status=${status}`
            )
            .then((res) => {
              data.getDepartList();
              data.addDialogVisible = false;
              ElMessage({
                message: res.data,
                type: "success",
              });
            });
        } else {
          axios
            .put("http://127.0.0.1:3000/depart/update", {
              upDepart: upDepart,
              departName: departName,
              sort: sort,
              status: status,
            })
            .then((res) => {
              data.getDepartList();
              data.addDialogVisible = false;
              ElMessage({
                message: res.data,
                type: "success",
              });
            });
        }
      },
      // 更新部门
      handleEdit: (val) => {
        data.dialogTitle = "update";
        data.addDialogVisible = true;
        data.form = val;
        console.log(data, "编辑部门");
      },
      // 删除
      handleDelete: (data) => {
        console.log(data, "删除数据");
        axios
          .delete(`http://127.0.0.1:3000/depart/delete?_id=${data._id}`)
          .then((res) => {
            data.getDepartList();
            ElMessage({
              message: res.data,
              type: "success",
            });
          });
      },
    });
    data.getDepartList();
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style scoped></style>
