import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from '../pages/WelcomePage';
import Order from '../pages/Order';
import NavugationBuyer from '../pages/NavugationBuyer';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeOrderrStack1() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>

  {/*Route to the Buyer's home page  */}
    <Stack.Screen 
    name="WelcomePageBuyer" 
    component={NavugationBuyer} 
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      title: 'j'}} />
    
    <Stack.Screen name="Order" component={Order} />
  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

