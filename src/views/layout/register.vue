<template>
  <el-form
    ref="formRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="80px"
    class="registerForm"
  >
    <el-form-item label="username" prop="username">
      <el-input v-model.number="ruleForm.username" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { registerApi } from "@/api/api";
import { ElMessage } from "element-plus";

export default {
  name: "RegisterPage",
  setup() {
    // 路由
    const router = useRouter();
    // 清空form
    const formRef = ref();
    const ruleForm = reactive({
      username: "",
      password: "",
    });
    // 验证规则
    const passwordRule = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("密码不能为空"));
      }
      callback();
    };
    const rules = reactive({
      password: [{ validator: passwordRule, trigger: "blur" }],
    });

    // 注册按钮
    function submitForm() {
      registerApi({ ...ruleForm }).then((res) => {
        if (res.data.errCode === 0) {
          ElMessage.success(res.data.message);
        }
        console.log(ruleForm, res, "注册数据");
      });
      router.push("/");
    }
    function resetForm() {
      formRef.value.resetFields();
    }
    return {
      ruleForm,
      rules,
      submitForm,
      resetForm,
      formRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.registerForm {
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid grey;
}
</style>
