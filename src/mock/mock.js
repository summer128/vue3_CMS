import Mock from "mockjs";

export const successResponseWrap = (data) => {
  return Mock.mock({
    code: 20000,
    data,
    message: "请求成功",
    success: true,
  });
};

export const failResponseWrap = (data, message, code = 50000) => {
  return Mock.mock({
    code,
    data,
    message,
    success: false,
  });
};
