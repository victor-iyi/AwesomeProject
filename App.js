import React, { Component } from 'react'
import { Text, AppRegistry } from 'react-native'

export default class App extends Component {

  render() {
    return (
      <Text>Victor is just too fucking awesome!</Text>
    )
  }

}

// skip this line if you used create-react-native-app
AppRegistry.registerComponent('AwesomeProject', () => App);
