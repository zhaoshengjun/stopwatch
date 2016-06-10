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
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text> 00: 00: 00</Text>
          </View>
          <View style={styles.buttonWrapper}>
            {this.startStopButton() }
            {this.lapButton() }
          </View>
        </View>
        <View style={styles.footer}>
          <Text>I am a list of laps</Text>
        </View>
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

  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'stretch'
  },
  header: {
    flex: 1,
    borderColor: 'yellow',
    borderWidth: 4
  },
  footer: {
    flex:1,
    borderColor: 'blue',
    borderWidth: 4
  },
  timerWrapper: {
    flex: 5,
    justifyContent:'center',
    alignItems:'center',
    borderColor: 'red',
    borderWidth: 4
  },
  buttonWrapper: {
    flex:3,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderColor: 'green',
    borderWidth: 4
  }
});

AppRegistry.registerComponent('StopWatch', () => StopWatch);
