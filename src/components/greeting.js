import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Greeting extends Component {

  render() {
    return (
      <Text>Hello there, {this.props.name}!</Text>
    )
  }

}