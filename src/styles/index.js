import { StyleSheet } from 'react-native';

const themeBlue = '#006699';

export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 23,
    flex: 1,
  },
  container: {
    backgroundColor: 'gold',
    padding: 5,
    flex: 1
  },
  heading: {
    margin:  10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: themeBlue,
    borderBottomColor: themeBlue,
    borderBottomWidth: 2,
  },
});
