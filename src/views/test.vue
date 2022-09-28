<template>
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

export default {
  name: "ArticleList",
  setup() {
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
