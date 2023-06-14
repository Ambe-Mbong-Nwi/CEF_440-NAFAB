import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OptionPage from './routes/OptionPage';
// routes unformation 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscountOrderrStack from './routes/DiscountOrderrStack';
import SignUpVendor from './pages/SignUpVendor';
import SignUpBuyer from './pages/SignUpBuyer';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={OptionPage}
        options={{ headerShown: false }}
      />
      {/* import the routes that link to the various screens   */}
         <Stack.Screen
            name="SignUpVendor"
            component={SignUpVendor}
            options={{ headerShown: false }}
          />
             <Stack.Screen
            name="SignUpBuyer"
            component={SignUpBuyer}
            options={{ headerShown: false }}
          />
          
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})