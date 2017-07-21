import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class TextArea extends Component {

  render() {
    return (
     <TextInput
            {...this.props} // inherits any props passed to it e.g multiline, numberOfLines
            underlineColorAndroid="transparent"
            style={styles.textarea}
            maxLength={40}
            editable={true}
            multiline={true}
     /> 
    );
  }

}

const styles = StyleSheet.create({
  textarea: {
    borderColor: '#333',
    // borderWidth: 1,
    backgroundColor: '#fff',
    color: 'black',
    margin: 10,
  },
});

export default TextArea;