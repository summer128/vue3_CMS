import Layout from "@/views/layout/index";

export default {
  path: "/sys",
  name: "sys",
  redirect: "noRedirect",
  component: Layout,
  meta: {
    title: "系统管理",
    icon: "el-icon-menu",
  },
  children: [
    {
      path: "/departManage",
      name: "departManage",
      component: () => import("../views/sys/depart"),
      meta: {
        title: "部门管理",
        path: "/departManage",
      },
    },
    {
      path: "/myselfCenter",
      name: "myselfCenter",
      component: () => import("../views/sys/myselfCenter"),
      meta: {
        title: "个人中心",
        path: "/myselfCenter",
      },
    },
    // {
    //   path: "/roleManage",
    //   name: "roleManage",
    //   component: () => import("../views/articleTable/articleTableList"),
    //   meta: {
    //     title: "角色管理",
    //     path: "/roleManage",
    //   },
    // },
    // {
    //   path: "/mousePoint",
    //   name: "mousePoint",
    //   component: () => import("../views/mousePoint"),
    //   meta: {
    //     title: "鼠标打点",
    //     path: "/mousePoint",
    //   },
    // },
  ],
};
