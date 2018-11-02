import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import {AtCard} from "taro-ui";

export default class AnonymousCard extends Component {

  handleClick() {
    const { onClick, item } = this.props;
    onClick(item);
  }

  render () {
    const { item } = this.props;
    return (
      <View className='container'>
        <AtCard
          isFull
          extra={item.userId}
          title={item.postId}
          note={item.timestamp}
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
          onClick={this.handleClick}
        >
          {item.content}
        </AtCard>
      </View>
    )
  }
}
