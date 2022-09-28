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
      <ul class="">
        <li>
          <img src="" alt="" />
          <p>标题</p>
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
          title: "Vue3中文文档 - vuejs",
        },
        {
          img: "https://pinia.web3doc.top/logo.svg",
          title: " Pinia 中文文档",
        },
        {
          img: "https://pinia.web3doc.top/logo.svg",
          title: " Pinia 中文文档",
        },
        {
          img: "https://pinia.web3doc.top/logo.svg",
          title: " Pinia 中文文档",
        },
        {
          img: "https://pinia.web3doc.top/logo.svg",
          title: " Pinia 中文文档",
        },
        {
          img: "https://pinia.web3doc.top/logo.svg",
          title: " Pinia 中文文档",
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
  .oftenLink {
    width: 50%;
  }
}
</style>
