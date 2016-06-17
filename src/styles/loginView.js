import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    padding: 10,
    marginTop: 65,
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 4,
    color: '#666',
    textAlign: 'center',
    borderColor: '#666',
    borderWidth: 1,
    padding: 8,
  },
  textField: {
    fontSize: 15,
    flex: 1,
    height: 30,
    marginBottom: 20,
  },
});
