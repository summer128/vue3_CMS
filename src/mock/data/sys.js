import { Random } from "mockjs";

export default {
  getDeptList: {
    total: 6,
    list: [
      {
        id: "GS00A",
        name: "A公司",
        sort: 1,
        status: 1,
        parentId: "",
        createTime: Random.now("yyyy-MM-dd HH:mm:ss"),
        children: [
          {
            id: "DP001",
            name: "技术部",
            sort: 1,
            status: 1,
            parentId: "GS00A",
            createTime: Random.now("yyyy-MM-dd HH:mm:ss"),
          },
          {
            id: "DP002",
            name: "测试部",
            sort: 2,
            status: 1,
            parentId: "GS00A",
            createTime: Random.now("yyyy-MM-dd HH:mm:ss"),
          },
          {
            id: "DP003",
            name: "产品部",
            sort: 3,
            status: 1,
            parentId: "GS00A",
            createTime: Random.now("yyyy-MM-dd HH:mm:ss"),
          },
        ],
      },
      {
        id: "GS00B",
        name: "B公司",
        sort: 2,
        status: 0,
        parentId: "",
        createTime: Random.now("yyyy-MM-dd HH:mm:ss"),
      },
    ],
  },
  getUserList: [
    {
      id: "USER001",
      userNo: "A001",
      userName: "admin",
      nickName: "超级管理员",
      avatar: "/static/images/img_avatar_01.jpeg",
      sex: 1, // 1男 0女
      status: 1,
      address: Random.city(true),
      phone: "199****6962",
      createTime: Random.now("yyyy-MM-dd HH:mm:ss"),
    },
    {
      id: "USER002",
      userNo: "A002",
      userName: "editor",
      nickName: "编辑者",
      avatar: "/static/images/img_avatar_01.jpeg",
      sex: 0, // 1男 0女
      status: 1,
      address: Random.city(true),
      phone: "155****8810",
      createTime: Random.now("yyyy-MM-dd HH:mm:ss"),
    },
  ],
};
