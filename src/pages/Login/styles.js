import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18191A',
    paddingHorizontal: 15,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  appName: {
    fontSize: 28,
    color: '#bbb',
    fontWeight: 'bold',
    position: 'absolute',
    top: 60,
    left: 15,
  },
  inputContainer: {
    backgroundColor: '#242526',
    borderRadius: 5,
    marginBottom: 20,
    minWidth: 110,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#bbb',
  },
  buttonLogin: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    minWidth: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: 1,
    marginTop: 10,
  },
  buttonText: {
    color: '#bbb',
  }
});

export default styles;