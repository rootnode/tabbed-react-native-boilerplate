// Import dependencies
import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// Import screens
import TabBarIcon from '../components/icons/TabBarIcon';
import HomeScreen from '../screens/home/HomeScreen';
import LinksScreen from '../screens/links/LinksScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

// Import components
import Colors from '../constants/Colors'


/*
  Define Home Screen stack and it's options
*/
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen'
  }
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

/*
  Define Links Screen stack and it's options
*/
const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  {
    initialRouteName: 'Links',
    headerMode: 'screen'
  }
);
LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'link'}
    />
  ),
};

/*
  Define Settings Screen stack and it's options
*/
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Settings',
    headerMode: 'screen'
  }
);
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'setting'}
    />
  ),
};

/*
  Export tab navigator
*/
export default createBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      labelStyle: {
        fontFamily: 'space-mono',
        fontSize: 12
      },
      style: {
        backgroundColor: '#ffffff',
        height: 60
      },
      tabStyle: {
        backgroundColor: '#ffffff',
        marginTop: 5
      }
    }
  },
  { headerMode: 'none' }
);
