import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import './index.css'

@connect(({ detail }) => ({
  ...detail
}))
export default class Index extends Component {

    config = {
      navigationBarTitleText: '详情'
    };

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount () {
    console.log(this.$router.params);
    const { feedId } = this.$router.params;
    this.props.dispatch({ type: 'detail/load', feedId: feedId })
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log("here");
    console.log(this.props.feed);
    return (
      <View className='index'>
        {this.props.feed}
      </View>
    )
  }
}

