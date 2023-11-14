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
import SplashScreens from '../screens/SplashScreens'
import WelcomeScreen from '../screens/WelcomeScreen'
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  const {colorSchema, toggleColorSchema} = useColorScheme();

    const TabNavigation = ()=>{
        return(
            <Tab.Navigator  
            screenOptions={({route})=>({
              tabBarIcon:({focused, color, size})=>{
                let iconName ;
                if(route.name==="Home")
                {
                  iconName="home"
                }
                else if(route.name==="Discover")
                {
                  iconName="compass-outline"
                }
                else if (route.name === "Saved") {
                  iconName = "bookmark-outline";
                } else if (route.name === "Search") {
                  iconName = "search-outline";
                }

                return <Ionicons name={iconName} size={24} color={color} />;

              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',

            })}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name='Discover' component={DiscoverScreen} />
                <Tab.Screen name='Saved' component={SavedScreen}/>
                <Tab.Screen name='Search' component={SearchScreen}/>
            </Tab.Navigator>
        )
    }

  return (
    <NavigationContainer>
      <Stack.Navigator
    
      >
        
        <Stack.Screen name='Splash' component={SplashScreens}/> 
        <Stack.Screen name='Welcome' component={WelcomeScreen}/> 
        <Stack.Screen name='HomeTab' component={TabNavigation}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}