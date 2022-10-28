const fileRoute = {
  path: "/fileManage",
  name: "fileManage",
  component: () => import("../views/file/index"),
  meta: {
    title: "文件管理",
    path: "/fileManage",
  },
};

export default fileRoute;
