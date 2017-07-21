import { StackNavigator } from 'react-navigation';
const Screens = require('./src/screens');

console.log(Screens);

export default StackNavigator({
  Home: { screen: Screens.Home },
})