import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import DiscoverScreen from '../screens/DiscoverScreen'
import SavedScreen from '../screens/SavedScreen'
import SearchScreen from '../screens/SearchScreen'
import SplashScreen from '../screens/SplashScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    const TabNavigation = ()=>{
        return(
            <Tab.Navigator  >
                <Tab.Screen name="Home" component={HomeScreen}
                 options={{
                  headerShown:false,
                  tabBarIcon:()=>{
                    return (
                    <Ionicons name='home'/>
                    )
                  }
                  
                 }}
                />
                <Tab.Screen name='Discover' component={DiscoverScreen} />
                <Tab.Screen name='Save' component={SavedScreen}/>
                <Tab.Screen name='Search' component={SearchScreen}/>
            </Tab.Navigator>
        )
    }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*
        <Stack.Screen name='Splash' component={SplashScreen}/> 
        <Stack.Screen name='Welcome' component={WelcomeScreen}/> 
        */}
        <Stack.Screen name='HomeTab' component={TabNavigation}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}