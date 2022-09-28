<template>
  <el-form
    ref="formRef"
    :model="formData"
    label-width="120px"
    class="demo-dynamic"
  >
    <el-form-item label="大标题" prop="bigTitle">
      <el-input type="text" v-model="formData.bigTitle" />
    </el-form-item>
    <el-form-item label="小标题" prop="littleTitle">
      <el-input v-model="formData.littleTitle" />
    </el-form-item>
    <el-form-item label="内容" prop="content">
      <el-input v-model="formData.content" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleAdd">确定添加</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref, unref, reactive } from "vue";
import { addArticle, updateArticle } from "@/api/api";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";

/*
1. <el-form ref="formRef" :model="formData">
2. let formRef = ref();
3. const value = unref(formRef);  // 判断ref值，有值就选值，没值就获取ref节点属性
   value.resetFields();
*/

export default {
  name: "addArticle",
  setup() {
    let formRef = ref();
    const formData = reactive({
      bigTitle: "",
      littleTitle: "",
      content: "",
      id: "",
      queryData: {},
    });

    // 修改文章数据
    const router = useRouter();
    const route = useRoute().query;
    formData.queryData = Object.keys(route);
    if (formData.queryData.length > 0) {
      formData.bigTitle = route.title;
      formData.littleTitle = route.subTitle;
      formData.content = route.date;
      formData.id = route.id;
    }

    // 添加文章
    const handleAdd = () => {
      if (formData.queryData.length > 0) {
        // 修改
        updateArticle({
          title: formData.bigTitle,
          subTitle: formData.littleTitle,
          content: formData.content,
          id: formData.id,
        }).then((res) => {
          if (res.data.errCode === 0) {
            ElMessage({
              message: res.data.message,
              type: "success",
            });
            formRef.value.resetFields();
            router.push("/articlelist");
          }
        });
      } else {
        addArticle({
          title: formData.bigTitle,
          subTitle: formData.littleTitle,
          content: formData.content,
        }).then((res) => {
          console.log(res, "添加文章");
          if (res.data.errCode === 0) {
            ElMessage({
              message: res.data.message,
              type: "success",
            });
            formRef.value.resetFields();
          }
        });
      }
    };

    // 重置---暂时还没生效！！！！！！！！待解决
    const resetForm = () => {
      const value = unref(formRef);
      console.log("786", value);
      value.resetFields();
    };

    return {
      formData,
      handleAdd,
      formRef,
      resetForm,
    };
  },
};
</script>

<style scoped></style>
