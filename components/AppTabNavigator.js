import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import RequestScreen from '../screens/RequestScreen';
import { Image } from 'react-native';

export const AppTabNavigator = createBottomTabNavigator({
  Donate : {
    screen: AppStackNavigator,
     navigationOptions :{
      tabBarIcon : <Image source={require("../assets/donateScreen.jpg")} style={{width:40, height:40}}/>,
      tabBarLabel : "Donating",
    }
  },
  Request: {
    screen: RequestScreen,
     navigationOptions :{
      tabBarIcon : <Image source={require("../assets/requestingScreen.jpg")} style={{width:40, height:40}}/>,
      tabBarLabel : "Requesting",
    }
  }
});
