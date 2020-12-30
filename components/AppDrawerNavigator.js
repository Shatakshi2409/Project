import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SubmitScreen from '../screens/SubmitScreen';
import SettingScreen from '../screens/SettingScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  ReportAProblem :{
    screen: SubmitScreen,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "Report a Problem"
    }
  },
  Settings :{
    screen: SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
