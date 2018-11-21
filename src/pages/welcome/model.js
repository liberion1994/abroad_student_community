// import * as homeApi from './service';

function delay(ms) {
  return new Promise(resolve => {setTimeout(resolve, ms)});
}

export default {
  namespace: 'welcome',
  state: {
    timeReady: false,
  },
  effects: {
    * init (_, {put}) {
      yield delay(3000);
      yield put({ type: 'save', payload: { timeReady: true } });
    }
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
