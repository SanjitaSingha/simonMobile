import { StyleSheet } from 'react-native';
import
{ BACKGROUND_COLOR, YELLOW, GREEN, BLUE, DARK_GREY, LIGHT_GREY, RED, DARK_RED }
from '../../colors/base';

const styles = StyleSheet.create({
  gamePageContainer: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    width: 330,
    height: 330,
    borderRadius: 330,
    margin: 'auto',
    backgroundColor: DARK_GREY,
    position: 'relative',
    // shadowColor: '#fff',
    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },
    // shadowRadius: 8,
    // shadowOpacity: 1.0
  },
  innerWrapper: {
    margin: 0,
    position: 'relative',
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickable: {
    width: 160,
    height: 160,
    borderWidth: 5,
    borderColor: DARK_GREY
  },
  topLeftR: {
    borderTopLeftRadius: 160
  },
  topRightR: {
    borderTopRightRadius: 160
  },
  bottomLeftR: {
    borderBottomLeftRadius: 160
  },
  bottomRightR: {
    borderBottomRightRadius: 160
  },
  green: {
    backgroundColor: GREEN
  },
  red: {
    backgroundColor: RED
  },
  blue: {
    backgroundColor: BLUE
  },
  yellow: {
    backgroundColor: YELLOW
  },
  flexRow: {
    flexDirection: 'row'
  },
  center: {
    backgroundColor: DARK_RED,
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: DARK_GREY,
    position: 'absolute',
    top: 230 / 2,
    left: 230 / 2,
    lineHeight: 70,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
    textAlign: 'center',
    color: 'red'
  },
  countText: {
    fontSize: 20
  },
  gameNameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: DARK_GREY
  },
  gameController: {
    justifyContent: 'space-around'
  },
  cotrollerButton: {
    width: 100,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 20
  },
  activeButton: {
    backgroundColor: 'green'
  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  },
  strictLed: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    borderColor: DARK_GREY,
    borderWidth: 2
  },
  ledOn: {
    backgroundColor: RED
  },
  ledOff: {
    backgroundColor: DARK_RED
  }
});

export default styles;
