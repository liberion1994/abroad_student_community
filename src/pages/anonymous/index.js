import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, ScrollView } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'

import AnonymousCard from '../../components/anonymous-card/index'
import './index.css'

@connect(({ anonymous }) => ({
  ...anonymous
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '匿名社区',
    enablePullDownRefresh: true
  };

  constructor() {
    super(...arguments);
    this.state = {
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount() {
    Taro.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          // Taro.authorize({
          //   scope: 'scope.userInfo',
          //   success (a, b) {
          //     // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          //     console.log(a, b);
          //   }
          // })
        }
      }
    });
    this.props.dispatch({type: 'anonymous/load'});
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh() {
    this.props.dispatch({ type: 'anonymous/load' });
  }

  onClickFeed(item) {
    this.props.dispatch({ type: 'detail/loadData', payload: { feed: item } });
    Taro.navigateTo({url: `../detail/index?feedType=anonymous&feedId=${item.postId}`});
  }

  render () {
    return (
      <View className='container'>
        <View>
          {this.props.feeds.map((item, index) =>
            <AnonymousCard
              key={item.postId}
              item={item}
              onClick={this.onClickFeed}
            >
              {item.content}
            </AnonymousCard>
          )}
        </View>
      </View>
    )
  }
}

