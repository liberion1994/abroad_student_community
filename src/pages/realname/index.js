import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.css'

@connect(({ realname }) => ({
  ...realname
}), (dispatch) => ({
  add () {
    dispatch({type: 'realname/add', payload: {}})
  },
  dec () {
    dispatch({type: 'realname/minus', payload: {}})
  }
}))
export default class Index extends Component {

    config = {
      navigationBarTitleText: '实名社区'
    };

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>

        <AtButton className='add_btn' onClick={this.props.add}>+</AtButton>
        <AtButton className='dec_btn' onClick={this.props.dec}>-</AtButton>
        {/*<Button className='dec_btn' onClick={this.props.dispatch({type: 'home/add', payload: {}})}>async</Button>*/}
        <View><Text>{this.props.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

