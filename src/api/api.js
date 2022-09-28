import request from "./request";
// 注册
export const registerApi = (params) => request.post("/register", params);
// 登录
export const loginApi = (params) => request.post("/login", params);
// 添加文章
export const addArticle = (params) => request.post("/article/add", params);
// 文章列表
export const articlelist = (params) => request.get("/article", { params });
// 修改文章
export const updateArticle = (params) => request.put("/article/update", params);
// 删除文章列表
export const deleteArticleApi = (params) =>
  request.post("/article/remove", params);
