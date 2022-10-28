const dataRoute = {
  path: "/dataManage",
  name: "dataManage",
  component: () => import("../views/data/index"),
  meta: {
    title: "数据管理",
    path: "/dataManage",
  },
};

export default dataRoute;
