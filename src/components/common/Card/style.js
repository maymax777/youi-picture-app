import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    flex: 1,
    width: 225,
    height: 225,
    // width: '100%',
    // height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    backgroundColor: 'green',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
});

export default styles;
