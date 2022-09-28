<template>
  <div class="loginContainer">
    <div class="loginLeft">
      <el-image class="loginImg" src="/images/loginRight.jpg"></el-image>
    </div>
    <div class="loginRight">
      <el-form
        ref="ruleFormRef"
        status-icon
        label-width="60px"
        class="loginForm"
        size="large"
      >
        <p>{{ systitle }}</p>
        <el-form-item label="用户名" prop="checkPass">
          <el-input v-model="useMsg.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="useMsg.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <div
          style="
            color: firebrick;
            font-size: 12px;
            cursor: pointer;
            text-align: left;
            margin-left: 60px;
            margin-top: -20px;
            margin-bottom: 16px;
          "
          @click="handleRegister"
        >
          去注册
        </div>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" style="width: 100%"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/*
  定义全局参数：
  1.在app.config.globalProperties.xxx = xxxx
  2.import { getCurrentInstance } from "vue";
    // 获取当前组件实例
    const { appContext } = getCurrentInstance();
    appContext.config.globalProperties.xxxx
*/
import { ref, reactive, getCurrentInstance } from "vue";
import { loginApi } from "../../api/api";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
export default {
  name: "LoginPage",
  setup() {
    // 获取全局的定义的参数
    const systitle = ref("");
    const { appContext } = getCurrentInstance();
    systitle.value = appContext.config.globalProperties.$sysTitle;
    // 路由
    const router = useRouter();
    let useMsg = reactive({
      username: "",
      password: "",
    });
    const handleLogin = () => {
      loginApi({ ...useMsg }).then((res) => {
        console.log(res.data, "登录信息");
        if (res.data.errCode === 0) {
          if (res.data.data["cms-token"]) {
            router.push("/home");
          }
          // 存储userMsg
          localStorage.setItem("userMsg", JSON.stringify(res.data.data));
          ElMessage({
            message: res.data.message,
            type: "success",
          });
        } else {
          ElMessage.error(res.data.message);
        }
      });
    };

    const handleRegister = () => {
      router.push("/register");
    };

    return {
      useMsg,
      systitle,
      handleLogin,
      handleRegister,
    };
  },
};
</script>
<style lang="scss" scoped>
.loginContainer {
  width: 100%;
  height: 100vh;
  background: #f2f3f5;
  display: flex;
  .loginLeft {
    flex-grow: 1;
    position: relative;
    .loginImg {
      width: 70%;
      border-radius: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .loginRight {
    flex-grow: 2;
    position: relative;
    .loginForm {
      width: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      p {
        font-size: 24px;
        font-weight: bolder;
        text-align: center;
        padding: 16px;
      }
    }
  }
}
</style>
