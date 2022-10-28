// src/api/mock.js
import Mock from "mockjs";
import getCateTree from "./cate";
import getFile from "./file";
import getSys from "./sys";
// 拦截请求
Mock.mock("/mock/cate/tree", getCateTree.getCateTree);
// 文件管理
Mock.mock("/mock/file/fileFold", getFile.getFileData);
Mock.mock("/mock/file/fileList", getFile.getFileList);
// 系统管理
Mock.mock("/mock/system/dept/list", getSys.getDepartData);
Mock.mock("/mock/system/user/list", getSys.getUserList);
