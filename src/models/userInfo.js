import Taro from "@tarojs/taro";
import update from "react-addons-update";
import Request from "../utils/request";


export default {
  namespace: 'userInfo',
  state: {
    userId: null,
  },
  effects: {
    * login (_, { put }) {
      const { code } = yield Taro.login();
      const userId = yield Request({
        url: '/posts',
        method: 'GET',
        data: { code: code },
      });
      yield put({ type: 'save', payload: { userId: userId } });
    }
  },
  reducers: {
    startFetching(state) {
      return { ...state, isFetching: true };
    },

    finishFetching(state) {
      return { ...state, isFetching: false };
    },

    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
