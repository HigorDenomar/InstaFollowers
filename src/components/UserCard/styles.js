import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  content: {
    flexDirection: 'row'
  },

  imageProfile: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 8,
  },
  userName: {
    color: '#bbb',
    fontSize: 16,
  },
  name: {
    color: '#777',
  },
  buttonRemove: {
    borderWidth: 0.5,
    borderColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonRemoveText: {
    color: '#bbb',
    fontSize: 12,
  },
});

export default styles;