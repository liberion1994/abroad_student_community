import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from './utils/dva'
import models from './models'


import Index from './pages/anonymous'

import './app.css'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();


class App extends Component {

  config = {
    pages: [
      'pages/anonymous/index',
      'pages/realname/index',
      'pages/detail/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#2A8CE5',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      position: 'top',
      list: [{
        pagePath: 'pages/realname/index',
        text: '实名',
        // iconPath: './asset/images/index.png',
        // selectedIconPath: './asset/images/index_focus.png'
      }, {
        pagePath: 'pages/anonymous/index',
        text: '匿名',
        // iconPath: './asset/images/index.png',
        // selectedIconPath: './asset/images/index_focus.png'
      }]
    }
  };

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'));
