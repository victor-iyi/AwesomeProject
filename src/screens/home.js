import React, { Component } from 'react';
import { View, Text, Alert, TextInput, TouchableNativeFeedback, Platform } from 'react-native';
import { styles } from '../styles';
import { TextArea, Button } from '../components';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this._buttonPressed = this._buttonPressed.bind(this);
    this._selectPicture = this._selectPicture.bind(this);
  }

  static navigationOptions = {
    title: 'Home Page',
  };

  _buttonPressed() {
    Alert.alert('Button Pressed!');
  }

  _selectPicture() {
    Alert('Select picture');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Report An Accident | iAlert!</Text>

        <Text>Your Location:</Text>
        <Button 
            title="Press button to get location" 
            onPress={this._buttonPressed} 
        />

        <Text>Please Slect an Accident Type:</Text>
        <Button title='Road Accident' onPress={this._buttonPressed} />

        <Text>Please describe what is happening</Text>
        <TextArea 
            numberOfLines={4}
            placeholder="Enter something here."
            placeholderTextColor="#006699"
            onChangeText={(text) => this.setState({text})}
        />

        <Button title='Tap here to select a picture' onPress={text => {this.setState({text})}} />
        
      </View>
    );
  }

}