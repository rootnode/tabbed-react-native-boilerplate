// Import dependencies
import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// Import screens
import TabBarIcon from '../components/icons/TabBarIcon';
import HomeScreen from '../screens/home/HomeScreen';
import LinksScreen from '../screens/links/LinksScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';


/*
  Define Home Screen stack and it's options
*/
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  headerTitle: 'Home',
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
const LinksStack = createStackNavigator({
  Links: LinksScreen,
});
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
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});
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
export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
