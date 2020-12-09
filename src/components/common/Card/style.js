import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const RATIO = 9 / 16;
const CARD_COUNT = 5;

console.log('here', window);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width / CARD_COUNT,
    height: (window.width / CARD_COUNT) * RATIO,
    margin: 8,
    borderColor: 'darkgray',
    borderRadius: 4,
    backgroundColor: 'darkgray',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;
