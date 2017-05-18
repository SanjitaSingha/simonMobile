import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RED, GREEN, BLUE, YELLOW } from '../colors/base';
import styles from '../styles/screens/GamePage';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strictmode: false,
      activemode: false,
      levelCount: 0,
      btnbackground: YELLOW,
      btnbackgroundBlue: BLUE,
      btnbackgroundRed: RED,
      btnbackgroundGreen: GREEN
    };
  }
onPressStrict() {
  if (this.state.strictmode) {
    this.setState({
      strictmode: false
    });
  } else {
    this.setState({
      strictmode: true
    });
  }
}
touchColorGreen() {
  this.setState({
    btnbackgroundGreen: 'green'
  });
  setTimeout(() => this.setState({
    btnbackgroundGreen: GREEN
  }), 250);
}
touchColorRed() {
  this.setState({
    btnbackgroundRed: 'green'
  });
  setTimeout(() => this.setState({
    btnbackgroundRed: RED
  }), 250);
}
touchColorBlue() {
  this.setState({
    btnbackgroundBlue: 'green'
  });
  setTimeout(() => this.setState({
    btnbackgroundBlue: BLUE
  }), 250);
}
touchColorYellow(e) {
  console.log(e);
  console.log(this);
  this.setState({
    btnbackground: 'green'
  });
  setTimeout(() => this.setState({
    btnbackground: YELLOW
  }), 250);
}
  render() {
    return (
      <View style={styles.gamePageContainer}>
        <View elevation={5} style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View style={styles.flexRow}>
              <TouchableOpacity
                id={1}
                style={[styles.clickable,
                   { backgroundColor: this.state.btnbackgroundGreen },
                   styles.topLeftR]}
                 onPress={this.touchColorGreen.bind(this)}
              />
              <TouchableOpacity
                id={2}
                style={[styles.clickable,
                  { backgroundColor: this.state.btnbackgroundRed },
                  styles.topRightR]}
                onPress={this.touchColorRed.bind(this)}
              />
            </View>
            <View style={styles.flexRow}>
              <TouchableOpacity
               id={3}
               style={[styles.clickable,
                  { backgroundColor: this.state.btnbackgroundBlue },
                  styles.bottomLeftR]}
                  onPress={this.touchColorBlue.bind(this)}
              />
              <TouchableOpacity
               id={4}
               data-key='4'
               style={[styles.clickable,
                  { backgroundColor: this.state.btnbackground },
                  styles.bottomRightR]}
                  onPress={this.touchColorYellow.bind(this)}
              />
            </View>
          </View>

          <Text style={[styles.countText, styles.center]}>--</Text>

        </View>
        <View style={[styles.gameController, styles.flexRow]}>
          <View style={styles.start}>
            <TouchableOpacity style={[styles.cotrollerButton, styles.green]}>
              <Text style={styles.btnText}>START</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.strict, styles.flexRow]}>
          <TouchableOpacity style={[styles.cotrollerButton, styles.yellow]} onPress={this.onPressStrict.bind(this)}>
            <Text style={styles.btnText}>STRICT</Text>
          </TouchableOpacity>
          <View style={[styles.strictLed, this.state.strictmode ? styles.ledOn : styles.ledOff]} />
          </View>
        </View>
      </View>
    );
  }
}


export default GamePage;
