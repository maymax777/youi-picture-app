import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const RATIO = 9 / 16;
const COLUMN_SIZE = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width / COLUMN_SIZE,
    height: (window.width / COLUMN_SIZE) * RATIO,
    margin: 4,
    borderColor: 'darkgray',
    borderRadius: 4,
    backgroundColor: 'darkgray',
    padding: 2,
  },
  background: {
    flex: 1,
    borderRadius: 4,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 8,
    textAlign: 'center',
  },
});

export default styles;
