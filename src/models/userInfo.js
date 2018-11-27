import Taro from "@tarojs/taro";
import Request from "../utils/request";

const USER_INFO_KEY = 'user-info';

export default {
  namespace: 'userInfo',
  state: {
    authState: null,
    userId: null,
    info: null
  },
  effects: {
    * login (_, { put }) {
      try {
        const { code } = yield Taro.login();
        console.log(code);
        const { openid } = yield Request({
          url: '/users',
          method: 'GET',
          data: { js_code: code },
        });
        yield put({ type: 'save', payload: { userId: openid } });
      } catch (e) {
        Taro.showToast({title: '登录失败，请检查网络设置'})
      }
    },

    * restoreLocal (_, { put }) {
      const { keys } = yield Taro.getStorageInfo();
      yield put({ type: 'save', payload: { authState: USER_INFO_KEY in keys } });
      if (keys.includes(USER_INFO_KEY)) {
        const { data } = yield Taro.getStorage({ key: USER_INFO_KEY });
        yield put({ type: 'save', payload: { authState: true, info: data } });
      } else {
        yield put({ type: 'save', payload: { authState: false } });
      }
    },

    * saveInfo({ info }, { put }) {
      yield Taro.setStorage({ key: USER_INFO_KEY, data: info });
      yield put({ type: 'save', payload: { authState: true, info: info }});
    },
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
    }
  },
};
