import { successResponseWrap } from "./mock";
import { fileType, fileList } from "./data/file";

function getList(type) {
  if (Number(type) == 0) return fileList;
  const res = [];
  const FileMap = {
    1: ["jpg", "png", "jpeg"],
    2: ["text", "doc", "xls"],
    3: ["mp4"],
    4: ["mp3"],
    5: ["zip", "rar", "ppt", "css", "js", "html"],
  };
  const arr = FileMap[type] || [];
  arr.forEach((item) => {
    const data = fileList.filter((i) => i.extendName === item);
    res.push(...data);
  });
  return res;
}

export default {
  getFileData: () => {
    return successResponseWrap(fileType);
  },
  getFileList: (query) => {
    const list = getList(query.fileType);
    return successResponseWrap({
      total: list.length,
      list: list,
    });
  },
};
