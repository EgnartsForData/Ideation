// Navigation/Navigation.js

import React from 'react'
import { createStackNavigator} from 'react-navigation-stack'
import { StyleSheet, Image } from 'react-native';
import {createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from '../Components/Home'
import Saved from '../Components/Saved'
import Upload from '../Components/Upload'
import IdeaDetails from '../Components/IdeaDetails'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Ideation',
      headerStyle: {
            backgroundColor: '#f4511e',
          },
    }
  },
  IdeaDetails: {
    screen: IdeaDetails
  }

})

const IdeationTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="home" size={30} />
        }
      }
    },
    Upload: {
      screen: Upload,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="plus" size={30} />
        }
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="bookmark" size={25} />
        }
      }
    }
  },

  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(IdeationTabNavigator)
