// import * as homeApi from './service';
import update from "react-addons-update";
import * as apis from "../anonymous/service";

export default {
  namespace: 'detail',
  state: {
    feedType: null,
    feed: null
  },
  effects: {
    * like (_, { select, call, put }) {
      const { feed, userId } = yield select(state => ({ feed: state.detail.feed, userId: state.userInfo.userId }));
      const res = yield call(apis.likes, { postId: feed.postId, userId, postTimestamp: Date.now() });
      console.log(res);
      yield put({ type: 'save', payload: { feed: update(feed, {likes: {$push: userId}}) } });
    }
  },
  reducers: {
    save (state, { payload }) {
      return {...state, ...payload};
    },
  },
};
