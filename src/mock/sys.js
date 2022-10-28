// import { Random } from "mockjs";
import { successResponseWrap } from "./mock";
import sysData from "./data/sys";
export default {
  getDepartData: () => {
    return successResponseWrap(sysData.getDeptList);
  },
  getUserData: () => {
    return successResponseWrap();
  },
};
