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
  View,
  TouchableHighlight
} from 'react-native';
// import * as formatTime from 'minutes-seconds-milliseconds';
var formatTime = require('minutes-seconds-milliseconds')

class StopWatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: null,
      running: false
    };
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={[styles.header,this.border('yellow')]}>
          <View style={[styles.timerWrapper,this.border('red')]}>
            <Text style={styles.timer}> 
              { formatTime(this.state.timeElapsed) } 
            </Text>
          </View>
          <View style={[styles.buttonWrapper,this.border('green')]}>
            {this.startStopButton() }
            {this.lapButton() }
          </View>
        </View>
        <View style={[styles.footer,this.border('blue')]}>
          <Text>I am a list of laps</Text>
        </View>
      </View>
    );
  }

  startStopButton() {
    return (
      <TouchableHighlight 
        underlayColor="gray"
        onPress={this.handleStartPress.bind(this)}
        style={[styles.button, styles.startButton]}
        >
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    )
  }

  lapButton() {
    return (
      <TouchableHighlight 
        underlayColor="green"
        onPress={this.handleLapPress}
        style={[styles.button, styles.lapButton]}
        >
        <Text>Lap</Text>
      </TouchableHighlight>
    )
  }

  handleStartPress() {
    
    if (this.state.running) {
      clearInterval(this.intervalId);
      this.setState({
        running: false
      });
      return
    }

    let startTime = new Date();
    this.intervalId = setInterval(()=> {
      this.setState({
        timeElapsed: new Date() - startTime,
        running: true
      });
    }, 30);
  }

  handleLapPress() {
    console.log('lap pressed!')
  }

  border(color) {
    
    // return {
    //   borderColor: color,
    //   borderWidth: 4
    // }
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex:1
  },
  timerWrapper: {
    flex: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonWrapper: {
    flex:3,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius:50,
    justifyContent:'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: 'green'
  },
  lapButton: {
    borderColor: 'red'
  }
});

AppRegistry.registerComponent('StopWatch', () => StopWatch);
