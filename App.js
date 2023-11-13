import {  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
       
        <AppNavigation/>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
