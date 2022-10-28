<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>工作台</span>
        <p style="float: right">
          <el-icon><Calendar /></el-icon>
          2022-09-27
        </p>
      </div>
    </template>
    <div class="content">
      <img
        class="avatar"
        src="https://ts1.cn.mm.bing.net/th?id=OIP-C.Gp1DOiJmfGxtbvv2KBORLwAAAA&w=99&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
        alt=""
      />
      <div class="waitNum">
        <div class="todoList">
          <p>项目数</p>
          <p>15</p>
        </div>
        <div class="todoList">
          <p>项目数</p>
          <p>15</p>
        </div>
        <div class="todoList">
          <p>项目数</p>
          <p>15</p>
        </div>
      </div>
      <div class="center">
        <h5>早安!打工人!开始您一天的生活吧!</h5>
        <p>今日阴转大雨，15℃ - 25℃，出门记得带伞哦。</p>
      </div>
    </div>
  </el-card>
  <div class="oftenProject">
    <el-card class="oftenLink">
      <template #header>
        <div class="card-header">
          <span>工作台</span>
        </div>
      </template>
      <ul class="linksContainer">
        <li v-for="item of data.oftenLinks" :key="item.title">
          <div class="links_title">
            <img :src="item.img" alt="" />
            <span>{{ item.title }}</span>
          </div>
          <p>{{ item.content }}</p>
        </li>
      </ul>
    </el-card>
    <el-card class="oftenLink">
      <template #header>
        <div class="card-header">
          <span>消息</span>
        </div>
      </template>
      <ul class="operateContainer">
        <li v-for="item of data.oftenLinks" :key="item.title">
          <div class="msg_img">
            <img :src="item.img" alt="" />
          </div>
          <p>{{ item.content }}</p>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "WorkHome",
  setup() {
    const data = reactive({
      oftenLinks: [
        {
          img: "https://www.javascriptc.com/vue3js/logo.png",
          title: "Vue3文档",
          linkUrl: "https://www.javascriptc.com/vue3js/",
          content: "渐进式 JavaScript 框架",
        },
        {
          img: "https://pinia.web3doc.top/logo.svg",
          title: " Pinia文档",
          linkUrl: "https://pinia.web3doc.top/",
          content: "类似于 vuex 的组件库",
        },
        {
          img: "https://element-plus.org/images/element-plus-logo.svg",
          title: "element-plus",
          linkUrl: "https://element-plus.org/zh-CN/",
          content: "vue3 的element-plus UI 组件库",
        },
        {
          img: "https://www.javascriptc.com/vue3js/logo.png",
          title: "Vue3文档",
          linkUrl: "https://www.javascriptc.com/vue3js/",
          content: "渐进式 JavaScript 框架",
        },
        {
          img: "https://pinia.web3doc.top/logo.svg",
          title: " Pinia文档",
          linkUrl: "https://pinia.web3doc.top/",
          content: "类似于 vuex 的组件库",
        },
        {
          img: "https://element-plus.org/images/element-plus-logo.svg",
          title: "element-plus",
          linkUrl: "https://element-plus.org/zh-CN/",
          content: "vue3 的element-plus UI 组件库",
        },
      ],
    });

    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-card__header {
  padding: 10px !important;
}
::v-deep .el-card__body {
  padding: 10px;
}
.content {
  .avatar {
    width: 40px;
    float: left;
    border-radius: 6px;
    margin-right: 8px;
  }
  .waitNum {
    padding: 0 20px;
    float: right;
    display: flex;
    flex: 1;
    .todoList {
      p {
        text-align: center;
        line-height: 20px;
        padding: 0 6px;
      }
    }
  }
  .center {
    h5 {
      font-size: 14px;
      line-height: 26px;
    }
  }
}
.oftenProject {
  margin: 6px 0;
  display: flex;
  justify-content: space-between;
  .oftenLink {
    width: 49%;
  }
}
.linksContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 50%;
    padding: 16px 0;
    text-align: center;
    .links_title {
      img {
        width: 20px;
        margin-right: 6px;
      }
    }
  }
  li:hover {
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 2px 8px #00000026;
  }
}
.operateContainer {
  width: 100%;
  li {
    width: 100%;
    padding: 16px 0;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #f2f6fc;
    .msg_img {
      img {
        width: 26px;
        margin-right: 6px;
      }
    }
  }
  li:hover {
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 2px 8px #00000026;
  }
}
</style>
