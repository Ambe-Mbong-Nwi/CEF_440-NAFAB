import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import the various compponetns 
import OptionPage from './routes/OptionPage';
import SignUpVendor from './pages/SignUpVendor';
import SignUpBuyer from './pages/SignUpBuyer';
import WelcomePage from './pages/WelcomePage';
import Navigation from './shared/Navigation';
import ProfilePage from './pages/ProfilePage';
import Navigation1 from './shared/Navigation1';
import AddToCart from './pages/AddToCart';
import OrderProduct from './pages/OrderProduct';
import Login from './pages/Login';
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
import Order from './pages/Order';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
{/* 
    <Navigation />  */}
  {/* <Product/> */}
  {/* <AddToCart/> */}
  {/* <OrderHeader/> */}
  {/* <Order/> */}
  {/* <Navigation1 /> */}
  {/* <OrderProduct/> */}

  <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={OptionPage}
        options={{ headerShown: false }}
      />
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
             <Stack.Screen
            name="OrderProduct"
            component={OrderProduct}
            options={{ headerShown: false }}
          />
                <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          /> 
          
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})