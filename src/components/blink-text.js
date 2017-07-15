import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Blink extends Component {

  constructor(props) {
    super(props)
    this.state = { textVisibility: true }

    // toggle visibility
    setInterval(() => {
      this.setState( prevState => {
        return { textVisibility: !prevState.textVisibility }
      })
    }, 1000)
  }

  render() {
    let display = this.state.textVisibility ? this.props.text : ''
    return <Text>{display}</Text>
  }

}
