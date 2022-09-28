import { createRouter, createWebHistory } from "vue-router";
import articalRoute from "@/router/artical";

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
// })
const assginRouter = routes.concat(articalRoute);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: assginRouter,
});

// router.beforeEach((to, from, next) => {
//   console.log(to, from, "路由信息");
// });

export default router;
