import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard12086610Navigator from '../features/Dashboard12086610/navigator';
import Dashboard12186609Navigator from '../features/Dashboard12186609/navigator';
import Dashboard12286608Navigator from '../features/Dashboard12286608/navigator';
import Dashboard12386607Navigator from '../features/Dashboard12386607/navigator';
import Settings86592Navigator from '../features/Settings86592/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard12086610: { screen: Dashboard12086610Navigator },
Dashboard12186609: { screen: Dashboard12186609Navigator },
Dashboard12286608: { screen: Dashboard12286608Navigator },
Dashboard12386607: { screen: Dashboard12386607Navigator },
Settings86592: { screen: Settings86592Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
