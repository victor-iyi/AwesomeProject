import React, { Component } from 'react'
import { AppRegistry, Text, View, Image } from 'react-native'
import Greeting from './src/components/greeting'

export default class App extends Component {

  render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{width: 200, height: 200}} />
        <Text>It works! </Text>
        <Greeting name='Victor' />
        <Greeting name="McCain" />
        <Greeting name="Alabama" />
        <Greeting name='React Native' />
      </View>
    )
  }

}

AppRegistry.registerComponent('AwesomeProject', () => App)
