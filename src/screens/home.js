import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { styles } from '../styles';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home Page',
  }

  _buttonPressed() {
    Alert.alert('Button Pressed!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Report An Accident | iAlert!</Text>
        <Text>Your Location:</Text>
        <Button title="Press button to get location" 
                onPress={this._buttonPressed} 
        />
        <Text>Please Slect an Accident Type:</Text>
        <Button title='Road Accident' onPress={this._buttonPressed} />
      </View>
    )
  }

}