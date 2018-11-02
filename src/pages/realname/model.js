// import * as homeApi from './service';

export default {
  namespace: 'realname',
  state: {
    num: 0,
  },
  effects: {
    // * load(_, {call, put}) {
    //   const { status, data } = yield call(homeApi.homepage, {});
    //   if (status === 'ok') {
    //     yield put({ type: 'save',payload: {
    //         banner: data.banner,
    //         brands: data.brands
    //       } });
    //   }
    // },
    // * product(_, {call, put, select}) {
    //   const { page, products_list } = yield select(state => state.anonymous);
    //   const { status, data } = yield call(homeApi.product, {
    //     page,
    //     mode: 1,
    //     type: 0,
    //     filter: 'sort:recomm|c:330602',
    //   });
    //   if (status === 'ok') {
    //     yield put({ type: 'save',payload: {
    //         products_list: page > 1 ? [...products_list,...data.rows] : data.rows,
    //       } });
    //   }
    // }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    add(state, { payload }) {
      return { ...state, num: state.num + 1 }
    },
    minus(state, { payload }) {
      return { ...state, num: state.num - 1 }
    },
  },
};
