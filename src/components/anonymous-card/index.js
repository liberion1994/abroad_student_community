import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import {AtCard} from "taro-ui";
import { FontAwesome } from 'taro-icons'

import './index.css'

export default class AnonymousCard extends Component {

  handleClick() {
    const { onClick, item } = this.props;
    onClick(item);
  }

  render () {
    const { item } = this.props;
    return (
      <View className='container'>
        <View style='padding:4px 16px;font-size:12px;'>
          {item.userId}
        </View>
        <View style='padding:4px 16px;font-size:14px;' onClick={this.handleClick}>
          {item.content}
        </View>
        <View className='bottom-container'>
          <View className='bottom-field'>
            <FontAwesome family='regular' name='heart' size={11} color='#666' style='margin-right:2px;' />
            <View className='number-container'>{item.likes && item.likes.length || 0}</View>
          </View>
          <View className='bottom-field'>
            <FontAwesome family='regular' name='comment' size={11} color='#666' style='margin-right:2px;' />
            <View className='number-container'>{item.comments && item.comments.length || 0}</View>
          </View>
          <View className='bottom-field'>
            <FontAwesome family='regular' name='share-square' size={11} color='666' style='margin-right:2px;' />
            <View className='number-container'>{item.likes[1]}</View>
          </View>
        </View>
      </View>
    )
  }
}
