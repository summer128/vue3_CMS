<template>
  <ul>
    <li v-for="item of data.listData" :key="item.id">
      <div class="listContend">
        <h4>{{ item.title }}</h4>
        <p>{{ item.subTitle }}</p>
      </div>
      <div>
        <el-button type="primary" @click="handleUpdate(item)">修改</el-button>
        <el-button type="primary" @click="handleDelete(item)">删除</el-button>
      </div>
    </li>
  </ul>
  <ul>
    <li
      v-for="(item, index) of testData.tabTitle"
      :key="index + 1"
      @click="testData.handleChangeTab(item.id)"
    >
      {{ item.title }}
    </li>
  </ul>
  <div>
    <ul>
      <li>
        <img :src="testData.oneData.url" alt="" />
        <span>{{ testData.oneData.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { articlelist, deleteArticleApi } from "@/api/api";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
  name: "ArticleList",
  setup() {
    let data = reactive({
      num: 1,
      count: 10,
      listData: [],
    });
    const router = useRouter();
    // const token = localStorage.getItem(JSON.parse(JSON.stringify("userMsg")));
    // 获取文章列表
    const getArticleList = () => {
      articlelist({ num: data.num, count: data.count }).then((res) => {
        if (res.data.errCode === 0) {
          data.listData = res.data.data.arr;
        }
      });
    };
    getArticleList();
    // 删除文章列表
    const handleDelete = (val) => {
      deleteArticleApi({ id: val.id }).then((res) => {
        if (res.data.errCode === 0) {
          ElMessage({
            message: res.data.message,
            type: "success",
          });
          getArticleList();
        }
      });
    };
    // 编辑
    const handleUpdate = (val) => {
      router.push({ path: "/addArticle", query: { ...val } });
    };

    // 测试
    onMounted(() => {
      testData.handleChangeTab(1);
    });
    const testData = reactive({
      tabTitle: [
        {
          id: 1,
          title: "tab1",
        },
        {
          id: 2,
          title: "tab2",
        },
      ],
      content: [
        {
          id: 1,
          title: "test1",
          url: "https://ts2.cn.mm.bing.net/th?id=OIP-C.Kp-TTu4DGMOzxmSAx7XSJAHaFB&w=303&h=205&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        },
        {
          id: 2,
          title: "test1",
          url: "https://ts2.cn.mm.bing.net/th?id=OIP-C.3ZgeJaTCBUyRhmlqkSGuvwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        },
      ],
      oneData: {
        title: "",
        url: "",
      },
      handleChangeTab(val) {
        let data = testData.content;
        for (let i = 0; i < data.length; i++) {
          if (val === data[i].id) {
            console.log(data[i], "数据");
            testData.oneData.title = data[i].title;
            testData.oneData.url = data[i].url;
          }
        }
      },
    });

    return {
      data,
      handleDelete,
      handleUpdate,
      testData,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 10px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dedddd;
    padding: 10px;
    margin-bottom: 6px;
    img {
      width: 50px;
    }
    .listContend {
      h4 {
        margin-bottom: 8px;
      }
    }
  }
}
</style>
