import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2B2B',
  },
  profile: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  imageProfile: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  nameProfile: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  description: {
    color: '#fff',
    fontWeight: '200',
    lineHeight: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  text: {
    color: '#fff'
  }
});

export default styles;