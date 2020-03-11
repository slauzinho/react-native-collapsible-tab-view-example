import { createBottomTabNavigator } from 'react-navigation-tabs';
import TTT from './TTT';
import Tabs from './Tabs';
import { createAppContainer } from 'react-navigation';

const BottomTabNavigation = createBottomTabNavigator(
  {
    Intros: Tabs,
  },
  {
    tabBarComponent: TTT,
  }
);

export default createAppContainer(BottomTabNavigation);
