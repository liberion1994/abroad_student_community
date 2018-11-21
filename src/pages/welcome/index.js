import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

import './index.css'


@connect(({ userInfo, welcome }) => ({
  ...userInfo, ...welcome
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '欢迎'
  };

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps);
    const { userId, authState, timeReady } = nextProps;
    if (userId && authState && timeReady) {
      Taro.switchTab({
        url: '../anonymous/index'
      });
    }
  }

  componentWillMount () {
    this.props.dispatch({ type: 'userInfo/restoreLocal' });
    this.props.dispatch({ type: 'userInfo/login' });
  }

  componentDidMount () {
    this.props.dispatch({ type: 'welcome/init' });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onGotUserInfo(info) {
    console.log(info);
    this.props.dispatch({ type: 'userInfo/saveInfo', info: info.detail.userInfo });

  }

  render () {
    const { authState, info } = this.props;
    return (
      <View className='container'>
        <View className='middle'>
          <View className='wrapper'>
            {authState ?
              <AtAvatar image={info.avatarUrl} circle size='large' style='display:inline-block;margin-bottom:24px;' /> :
              <AtAvatar text='登录' circle size='large' style='display:inline-block;margin-bottom:24px;' />
            }
            {authState === false ?
              <Button type='primary' openType='getUserInfo' lang='zh_CN' onGetUserInfo={this.onGotUserInfo}>授权登录</Button> :
            authState === true ?
              <View>欢迎回来，{info.nickName}</View> :
              <View>登录中...</View>
            }
          </View>
        </View>
      </View>
    )
  }
}

