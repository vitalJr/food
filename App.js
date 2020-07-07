import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearhcScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

console.disableYellowBox = true;

const navigator = createStackNavigator({
  Search: SearhcScreen,
  ResultsShow: ResultsShowScreen
},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  });

export default createAppContainer(navigator);