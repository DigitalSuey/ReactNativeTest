import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 4,
  },
  rightContainer: {
    flex: 1,
  },
  rowSeparator: {
    backgroundColor: '#999',
    height: 1,
  },
  rowSeparatorHighlighted: {
    opacity: 0.0,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 60,
    height: 80,
    marginRight: 8,
    resizeMode: 'contain',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
