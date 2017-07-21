import { StackNavigator } from 'react-navigation';
const { Home } = require('./src/screens');

export default StackNavigator({
  Home: { screen: Home },
});