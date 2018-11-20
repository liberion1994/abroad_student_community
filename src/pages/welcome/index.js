import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

import './index.css'


@connect(({ userInfo }) => ({
  ...userInfo
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '欢迎'
  };

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount () {
    this.props.dispatch({ type: 'userInfo/login' })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onGotUserInfo(info) {
    console.log(info);
    Taro.switchTab({
      url: '../anonymous/index'
    })
  }

  render () {
    return (
      <View className='container'>
        <View className='middle'>
          <View className='wrapper'>
            <AtAvatar text='登录' circle size='large' style='display:inline-block;margin-bottom:16px;' />
            <Button type='primary' openType='getUserInfo' lang='zh_CN' onGetUserInfo={this.onGotUserInfo}>授权登录</Button>
          </View>
        </View>
      </View>
    )
  }
}

