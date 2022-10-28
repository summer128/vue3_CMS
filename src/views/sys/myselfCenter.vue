<template>
  <el-form
    ref="formRef"
    :model="formData"
    label-width="120px"
    class="demo-dynamic"
  >
    <el-form-item label="用户名" prop="bigTitle">
      <el-input type="text" v-model="formData.username" />
    </el-form-item>
    <el-form-item label="密码" prop="littleTitle">
      <el-input v-model="formData.userpass" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleAdd">确定添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, toRefs } from "vue";
import axios from "axios";
export default {
  name: "myselfCenter",
  setup() {
    let data = reactive({
      formData: {
        username: "",
        userpass: "",
      },
      handleAdd: () => {
        console.log(data.formData, "数据");
        axios
          .post("http://127.0.0.1:3000/reset/add", {
            username: data.formData.username,
            userpass: data.formData.userpass,
          })
          .then((res) => {
            console.log(res, "获取mongodb的数据");
          });
      },
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style scoped></style>
