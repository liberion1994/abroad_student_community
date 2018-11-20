import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import { FontAwesome } from 'taro-icons'

import formatTimestamp from '../../utils/tools';
import './index.css'
import CommentBlock from "../../components/comment-block";

@connect(({ detail }) => ({
  ...detail
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '详情'
  };

  constructor () {
    super(...arguments);
    this.state = {
      feedType: null,
      feedId: null,

    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps);

  }

  componentWillMount () {
    console.log(this.$router.params);
    const { feedType, feedId } = this.$router.params;
    this.setState({ feedType: feedType, feedId: feedId });
  }

  componentDidShow () { }

  componentDidHide () { }

  onClickLike () {

  }

  onClickShare () {}

  render () {
    const { feed } = this.props;
    return (
      <View className='detail-container'>
        <view style='background-color:#eee;padding:16px;'>
          <View className='publisher-info-container'>
            <View style='flex:0;'>
              <AtAvatar circle size='small' image='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' />
            </View>
            <View style='flex:1;margin-left:10px;'>
              <View className='two-column-container' style='font-size:14px;margin-bottom:4px;'>
                <View style='flex:1;'>{feed.userId}</View>
                <View style='flex:3;'>普利斯顿大学</View>
              </View>
              <View className='two-column-container' style='font-size:12px; color: #666;'>
                <View style='flex:1;'>新泽西</View>
                <View style='flex:3;'>{formatTimestamp(feed.timestamp)}</View>
              </View>
            </View>
          </View>
          <View className='content-container'>
            {feed.content}
          </View>
          <View className='like-container'>
            <View className='like-field'>
              <FontAwesome family='regular' name='heart' size={12} color='#666' style='margin-right:2px;' />
              <View className='number-container' style='font-size:12px;'>{feed.likes[0]}</View>
            </View>
            <View className='like-field'>
              <FontAwesome family='regular' name='share-square' size={12} color='666' style='margin-right:2px;' />
              <View className='number-container' style='font-size:12px;'>{feed.likes[1]}</View>
            </View>
          </View>
        </view>
        <View className='comments-container'>
          <View style='margin-bottom:12px;'>{'评论 ' + [(feed.comments && feed.comments.length) || '0']}</View>
          <View>
            {feed.comments && feed.comments.length ? feed.comments.map((item, index) =>
              <CommentBlock
                key={index}
                comment={item}
              />
            ) : '暂无评论'}
          </View>
        </View>

      </View>
    )
  }
}

