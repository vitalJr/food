import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearhcScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import MapsScreen from './src/screens/MapsScreen';

console.disableYellowBox = true;

const navigator = createStackNavigator({
  Search: SearhcScreen,
  ResultsShow: ResultsShowScreen,
  Maps: MapsScreen
},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  });

export default createAppContainer(navigator);