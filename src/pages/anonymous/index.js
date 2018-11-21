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
    this.props.dispatch({type: 'anonymous/load'});
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh() {
    this.props.dispatch({ type: 'anonymous/load' });
  }

  onClickFeed(item) {
    this.props.dispatch({ type: 'detail/save', payload: { feed: item, feedType: 'anonymous' } });
    Taro.navigateTo({url: `../detail/index`});
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

