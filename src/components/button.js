import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, Platform, View, Text } from 'react-native';

class Button extends Component {

  render() {
    return (
      <TouchableNativeFeedback
        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
        onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    height: 40,
    backgroundColor: '#006699',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Button;