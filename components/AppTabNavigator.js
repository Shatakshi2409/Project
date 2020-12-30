import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SettingScreen from '../screens/SettingsScreen';
import SubmitScreen from '../screens/SubmitScreen';


export const AppTabNavigator = createBottomTabNavigator({
  ReportAProblem : {
    screen: SubmitScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Pen.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Report a Problem",
    }
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Set.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Settings",
    }
  }
});
