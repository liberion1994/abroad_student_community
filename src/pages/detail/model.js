// import * as homeApi from './service';

export default {
  namespace: 'detail',
  state: {
    feedType: null,
    feed: null
  },
  effects: {
  },
  reducers: {
    loadData(state, {payload}) {
      return {...state, ...payload};
    },
  },
};
