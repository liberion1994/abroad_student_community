import * as apis from './service';
import Taro from '@tarojs/taro'

const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export default {
  namespace: 'anonymous',
  state: {
    isFetching: false,
    feeds: [
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      },
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      },
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      },
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      },
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      },
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      },
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      },
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      },
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      },
      {
        "postId":"123456",
        "userId":"1234",
        "content":"xxxxxxxxxxxx",
        "timestamp":"2012-04-23T18:25:43.511Z",
        "likes":[
          "2345",
          "4567"
        ],
        "comments":[
          {
            "userId":"3456",
            "content":"xxxxxxxxx",
            "timestamp":"2012-04-23T18:25:43.511Z"
          }
        ]
      }
    ],
  },
  effects: {
    * load(_, {call, put}) {
      yield put({ type: 'startFetching' });
      // const response = yield call(apis.feeds, {});
      yield call(delay, 100);
      // if (status === 'ok') {
      //   yield put({ type: 'save',payload: {
      //       banner: data.banner,
      //       brands: data.brands
      //     } });
      // }
      Taro.stopPullDownRefresh();
      yield put({ type: 'finishFetching' });
    },
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
