import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import {AtAvatar} from "taro-ui";

import formatTimestamp from '../../utils/tools';
import './index.css'

export default class CommentBlock extends Component {

  handleClick() {
    const { onClick, item } = this.props;
    onClick(item);
  }

  render () {
    const { comment } = this.props;
    return (
      <View className='container'>
        <View style='flex:0;'>
          <AtAvatar circle size='small' image='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG' />
        </View>
        <View style='flex:1;margin-left:10px;'>
          <View style='font-size:16px;'>
            {comment.userId}
          </View>
          <View style='font-size:12px;margin:8px 0;'>
            {comment.content}
          </View>
          <View style='font-size:10px;color:#666;'>
            <View style='display:inline-block;margin-right:6px;'>回复</View>
            <View style='display:inline-block;'>{formatTimestamp(comment.timestamp)}</View>
          </View>
        </View>
      </View>
    )
  }
}
