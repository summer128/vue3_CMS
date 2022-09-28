import Layout from "@/views/layout";

const articalRoute = {
  path: "/artical",
  name: "artical",
  redirect: "noRedirect",
  component: Layout,
  meta: {
    title: "整理文章",
    icon: "el-icon-menu",
  },
  children: [
    {
      path: "/addArticle",
      name: "addArticle",
      component: () => import("../views/addArticle"),
      meta: {
        title: "添加文章",
        path: "/addArticle",
      },
    },
    {
      path: "/articleList",
      name: "articleList",
      component: () => import("../views/articleList"),
      meta: {
        title: "文章列表",
        path: "/articleList",
      },
    },
    {
      path: "/articleTableList",
      name: "articleTableList",
      component: () => import("../views/articleTable/articleTableList"),
      meta: {
        title: "文章表格列表",
        path: "/articleTableList",
      },
    },
    {
      path: "/mousePoint",
      name: "mousePoint",
      component: () => import("../views/mousePoint"),
      meta: {
        title: "鼠标打点",
        path: "/mousePoint",
      },
    },
  ],
};

export default articalRoute;
