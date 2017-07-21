import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { styles } from './src/styles/index';
import AppNav from './AppNav';

export default class App extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <AppNav ref={nav => { this.navigation = nav; }} />
      </View> 
    );
  }

}

AppRegistry.registerComponent('AwesomeProject', () => App);
