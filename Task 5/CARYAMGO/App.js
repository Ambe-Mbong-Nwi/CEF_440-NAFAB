import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import the various compponetns 
import OptionPage from './routes/OptionPage';
import SignUpVendor from './pages/SignUpVendor';
import SignUpBuyer from './pages/SignUpBuyer';
import WelcomePage from './pages/WelcomePage';
import Navigation from './routes/Navigation';
import ProfilePage from './pages/ProfilePage';
import Navigation1 from './routes/Navigation1';
// routes unformation 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscountOrderrStack from './routes/DiscountOrderrStack';
import NavugationVendor from './pages/NavugationVendor';
import NavugationBuyer from './pages/NavugationBuyer';
import DiscountProfile from './pages/DiscountProfile';

import Card1 from './shared/Card1';
import Card from './shared/Card';

import Messaging1 from './pages/Messaging1';
import Product from './pages/Product';
import CustomerSupport from './pages/CustomerSupport';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>

      {/* <NavugationVendor/> */}
      {/* <NavugationBuyer/> */}
      {/* <Navigation1/> */}
       {/* <Navigation/>  */}
      {/* <Navigation1/> */}
        <ProfilePage/>
      {/* <Navigation /> */}
      {/* <CustomerSupport /> */}

      {/* <Product /> */}

      {/* <NavugationVendor/> */}

    {/* <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={OptionPage}
        options={{ headerShown: false }}
      /> */}
      {/* import the routes that link to the various screens */}
         {/* <Stack.Screen
            name="SignUpVendor"
            component={SignUpVendor}
            options={{ headerShown: false }}
          />
             <Stack.Screen
            name="SignUpBuyer"
            component={SignUpBuyer}
            options={{ headerShown: false }}
          />
               <Stack.Screen
            name="WelcomePageVendor"
            component={Navigation}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{ headerShown: false }}
          />
             <Stack.Screen
            name="Navigation1"
            component={Navigation1}
            options={{ headerShown: false }}
          />
          
    </Stack.Navigator> */}

{/* 
    </Stack.Navigator>

      <Messaging1 /> */}
      {/* <Navigation /> */}
     {/* <NavugationVendor/> */}
    {/* <DiscountProfile/> */}
    {/* <Stack.Navigator>
    //   <Stack.Screen
    //     name="Home"
    //     component={OptionPage}
    //     options={{ headerShown: false }}
    //   /> */}
      {/* import the routes that link to the various screens   */}
         {/* <Stack.Screen
    //         name="SignUpVendor"
    //         component={SignUpVendor}
    //         options={{ headerShown: false }}
    //       />
    //          <Stack.Screen
    //         name="SignUpBuyer"
    //         component={SignUpBuyer}
    //         options={{ headerShown: false }}
    //       /> */}
               {/* <Stack.Screen
    //         name="WelcomePage"
    //         component={WelcomePage}
    //         options={{ headerShown: true }}
    //       /> */}
           {/* <Stack.Screen
    //         name="Navigation"
    //         component={Navigation}
    //         options={{ headerShown: false }}
    //       />
          
    // </Stack.Navigator> */}

  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})