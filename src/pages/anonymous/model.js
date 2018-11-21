import Taro from '@tarojs/taro'
import update from 'react-addons-update';

import * as apis from './service';

export default {
  namespace: 'anonymous',
  state: {
    isFetching: false,
    feeds: [],
  },
  effects: {
    * load (_, {call, put}) {
      yield put({ type: 'startFetching' });
      const feeds = yield call(apis.feeds, {});
      yield put({ type: 'save', payload: { feeds: feeds } });
      Taro.stopPullDownRefresh();
      yield put({ type: 'finishFetching' });
    },

    * like ({ index, postId, userId }, { call, put }) {
      const feeds = yield call(apis.likes, { postId });
      yield put({ type: 'save', payload: { feeds: update(feeds, {[index]: {likes: {$push: userId}}}) } });
    }
  },
  reducers: {
    startFetching (state) {
      return { ...state, isFetching: true };
    },

    finishFetching (state) {
      return { ...state, isFetching: false };
    },

    save (state, { payload }) {
      return { ...state, ...payload };
    },

    sync (state, { feed }) {
      const feedId = feed.postId;

    }
  },
};
