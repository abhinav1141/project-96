import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';
import MyDonationScreen from "../screens/MyRequstsScreen";
import NotificationScreen from "../screens/NotificationsScreen"
import MyReceivedItemsScreen from "../screens/MyReceivedItems"
import {Icon} from 'react-native-elements';
import SettingScreen from '../screens/SettingsScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
      navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
     MyBarters:{
      screen : MyDonationScreen,
       navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      
    }
    },
    Notifications:{
      screen:NotificationScreen,
       navigationOptions:{
      drawerIcon : <Icon name="bell" type ="font-awesome" />,
      drawerLabel : "Notifications"
    }
    },
    MyReceivedItems :{
    screen: MyReceivedItemsScreen,
     navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "My Received Books"
    }
  },
 Settings : {
      screen : SettingScreen,
       navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
    },
},
{
    contentComponent:CustomSidebarMenu
  },
{
   initialRouteName : 'Home'
  })