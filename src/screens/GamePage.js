import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Alert, TouchableWithoutFeedback } from 'react-native';
import { default as Sound } from 'react-native-sound';
import styles from '../styles/screens/GamePage';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strict: false,
      activemode: false,
      currentLevel: '--'
    };
    this.INDEX = {
      1: 1,
      2: 2,
      3: 3,
      4: 4
    };
    this.animations = {
      1: new Animated.Value(1),
      2: new Animated.Value(1),
      3: new Animated.Value(1),
      4: new Animated.Value(1)
    };
    this.game = {
      levelCount: 0,
      currentGame: [],
      player: [],
      // strict: false
    };
  }

onPressStrict() {
  if (this.state.strict) {
    this.setState({
      strict: false
    });
  } else {
    this.setState({
      strict: true
    });
  }
}

onPressclickableView(index) {
  // console.log('pressed');
  this.animateView(index);
  this.addToPlayer(index);
}

addToPlayer(Index) {
  this.game.player.push(Index);
  console.log('The current value of the player array: ', this.game.player);
  this.playerTurn(Index);
}
playerTurn(index) {
  const newthis = this;
  if (this.game.player[this.game.player.length - 1] !== this.game.currentGame[this.game.player.length - 1]) {
    if (this.state.strict) {
      Alert.alert('Strict mode on.. Start Again!');
      this.gameStart();
    } else {
      Alert.alert('Sorry wrong move! Try again');
      setTimeout(() => newthis.showMoves(), 3000);
    }
  } else {
    console.log('Correct move...');
    this.playSound(index);
    if (this.game.player.length === this.game.currentGame.length) {
      if (this.game.levelCount === 20) {
        Alert.alert('You Win!!');
      } else {
        this.nextLevel();
      }
    }
  }
}

playSound(index) {
  let s;
  console.log('sound function');
  if (index === 1) {
    s = new Sound('boom1.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('error', error);
        return;
      }
      s.play(() => {
        s.release();
      });
    });
  } else if (index === 2) {
    s = new Sound('clap2.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('error', error);
        return;
      }
      s.play(() => {
        s.release();
      });
    });
  } else if (index === 3) {
    s = new Sound('hihat3.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('error', error);
        return;
      }
      s.play(() => {
        s.release();
      });
    });
  } else if (index === 4) {
  s = new Sound('kick4.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('error', error);
      return;
    }
    s.play(() => {
      s.release();
    });
  });
} else {
  Alert.alert('Sound Not found');
}
}
animateView(Index) {
  // console.log('animate');
    Animated.sequence([
      Animated.timing(
        this.animations[Index],
        {
          toValue: 0.4,
          duration: 100,
        }
      ),
      Animated.timing(
        this.animations[Index],
        {
          toValue: 1,
          duration: 100,
        }
      ),
    ]).start();
    this.playSound(Index);
  }

  gameStart() {
    this.clearGame();
  }

  clearGame() {
    console.log('clear Game');
    this.game = {
      levelCount: 0,
      currentGame: [],
      player: [],
      // strict: false
    };
    this.setState({
      levelCount: '--'
    });
    this.increaseLevel();
  }
  increaseLevel() {
    let currentLevel = ++this.game.levelCount;
    this.setState({ currentLevel });
    console.log(currentLevel);
    this.generateRandom();
  }
  nextLevel() {
    this.increaseLevel();
  }
  generateRandom() {
    const mythis = this;
    this.game.currentGame.push(Math.floor(Math.random() * (4)) + 1);
    console.log(this.game.currentGame);
    setTimeout(() => {
      mythis.showMoves();
    }, 1500);
  }
  showMoves() {
    // Let us show the moves to the user.
    console.log('The moves of the current Game: ', this.game.currentGame);
    let i = 0;
    let moves = setInterval(() => {
      this.(this.game.currentGame[i]);
      i++;
      if (i >= this.game.currentGame.length) {
        clearInterval(moves);
      }
    }, 600);
    // Clearing the past moves of the user.
    this.clearPlayer();
  }

  clearPlayer() {
    this.game.player = [];
  }
  render() {
    return (
      <View style={styles.gamePageContainer}>
        <View elevation={5} style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View style={styles.flexRow}>
              <TouchableWithoutFeedback onPress={() => this.onPressclickableView(this.INDEX[1])} style={styles.topLeftR}>
                <Animated.View style={[styles.clickable, styles.topLeftR, styles.red, { opacity: this.animations[1] }]} />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback style={styles.topRightR} onPress={() => this.onPressclickableView(this.INDEX[2])}>
                <Animated.View style={[styles.clickable, styles.topRightR, styles.green, { opacity: this.animations[2] }]} />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.flexRow}>
              <TouchableWithoutFeedback onPress={() => this.onPressclickableView(this.INDEX[3])} style={styles.bottomLeftR}>
                <Animated.View style={[styles.clickable, styles.bottomLeftR, styles.blue, { opacity: this.animations[3] }]} />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.onPressclickableView(this.INDEX[4])} style={styles.bottomRightR}>
                <Animated.View style={[styles.clickable, styles.bottomRightR, styles.yellow, { opacity: this.animations[4] }]} />
              </TouchableWithoutFeedback>
            </View>
          </View>

          <Text style={[styles.countText, styles.center]}>{this.state.currentLevel}</Text>

        </View>
        <View style={[styles.gameController, styles.flexRow]}>
          <View style={styles.start}>
            <TouchableOpacity style={[styles.cotrollerButton, styles.green]} onPress={this.gameStart.bind(this)}>
              <Text style={styles.btnText}>START</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.strict, styles.flexRow]}>
          <TouchableOpacity style={[styles.cotrollerButton, styles.yellow]} onPress={this.onPressStrict.bind(this)}>
            <Text style={styles.btnText}>STRICT</Text>
          </TouchableOpacity>
          <View style={[styles.strictLed, this.state.strict ? styles.ledOn : styles.ledOff]} />
          </View>
        </View>
      </View>
    );
  }
}

export default GamePage;
