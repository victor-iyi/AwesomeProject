import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import Blink from './src/components/blink-text'

export default class App extends Component {

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Blink text='Victor is amazing!' />
        <Blink text='This guy is lit!' />
        <Blink text="I'm now on twitter!" />
      </View>
    )
  }

}

AppRegistry.registerComponent('AwesomeProject', () => App)
