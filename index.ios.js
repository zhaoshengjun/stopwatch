/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class StopWatch extends Component {  
  
  render() {
    return (
      <View style={styles.container}>
        <Text> 00:00:00</Text>
        {this.startStopButton()}
        {this.lapButton()}
      </View>
    );
  }

  startStopButton() {
    return (
      <View>
        <Text>Start</Text>
      </View>
    )
  }

  lapButton() {
    return (
      <View>
        <Text>Lap</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('StopWatch', () => StopWatch);
