import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    const TabNavigation = ()=>{
        return(
            <Tab.Navigator>
                
            </Tab.Navigator>
        )
    }

  return (
    <View>
      <Text>Navigation</Text>
    </View>
  )
}