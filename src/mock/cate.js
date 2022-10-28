import { successResponseWrap } from "./mock";
import treeData from "./data/tree";
import fileData from "./data/file";

// src / api / mockData / home.js;
export default {
  getCateTree: () => {
    return successResponseWrap(treeData);
  },
  getFileData: () => {
    return successResponseWrap(fileData);
  },
  getFileList: (query) => {
    const { fileType } = query;

    const list = fileData.getList(fileType);
    return successResponseWrap({
      total: list.length,
      list: list,
    });
  },
};
