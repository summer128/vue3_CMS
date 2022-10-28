import { createRouter, createWebHistory } from "vue-router";
import articalRoute from "@/router/artical";
import dataRoute from "@/router/dataManage";
import fileRoute from "@/router/fileManage";
import sysRoute from "@/router/sys";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/layout/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/layout/register.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/layout/index"),
    redirect: "/addArticle",
    children: [
      {
        path: "/workHome",
        name: "workHome",
        component: () => import("../views/dashboard/workHome"),
        meta: {
          title: "仪表盘",
          path: "/workHome",
        },
      },
      dataRoute,
      fileRoute,
    ],
  },
];

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// }
/*
 * 有子级菜单的页面，可以和home同级
 * 本身是一级菜单的要放到home的children中，要不跳转有问题
 * */

const assginRouter = routes.concat(articalRoute).concat(sysRoute);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: assginRouter,
});

export default router;
