import { defineStore } from "pinia";
export const useMainStore = defineStore("main", {
  state: () => {
    return {
      siderIsFold: false,
      tagsData: [
        {
          title: "首页",
          path: "/workHome",
        },
      ],
    };
  },
  getter: {
    SET_SIDER_ISFOLD(state) {
      return state.siderIsFold;
    },
    SET_TAGS_DATA(state) {
      return state.tagsData;
    },
  },
  actions: {
    addTagsData(val) {
      const result = this.tagsData.findIndex((x) => x.path === val.path);
      result === -1 ? this.tagsData.push(val) : "";
    },
    closeTag(val) {
      const result = this.tagsData.findIndex((x) => x.path === val.path);
      this.tagsData.splice(result, 1);
    },
    closeAllTags() {
      this.tagsData = [
        {
          title: "首页",
          path: "/workHome",
        },
      ];
    },
  },
});
