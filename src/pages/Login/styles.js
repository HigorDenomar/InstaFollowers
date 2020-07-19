import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    position: 'absolute',
    top: 60,
    left: 15,
  },
  inputContainer: {
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
  },
  buttonLogin: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    minWidth: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
  }
});

export default styles;