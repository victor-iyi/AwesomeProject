import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { styles } from './src/stylesheet/style'

export default class App extends Component {

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={ styles.red }>Just Red</Text>
        <Text style={ styles.bigblue }>Just BigBlue</Text>
        <Text style={ [styles.bigblue, styles.red] }>BigBlue then Red</Text>
        <Text style={ [styles.red, styles.bigblue] }>Red then BigBlue</Text>
      </View>
    )
  }

}

AppRegistry.registerComponent('AwesomeProject', () => App)
