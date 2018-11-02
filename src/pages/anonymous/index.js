import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'

import AnonymousCard from '../../components/anonymous-card'
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
      showRefresh: false
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh() {
    this.props.dispatch({type: 'anonymous/load'});
  }

  onClickFeed(item) {
    Taro.navigateTo({url: `../detail/index?feedId=${item.postId}`});
  }

  render () {
    return (
      <View className='container'>
        <View>
          {this.props.feeds.map((item, index) =>
            <AnonymousCard
              key={index}
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

