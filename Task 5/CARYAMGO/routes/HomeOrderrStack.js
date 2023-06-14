import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from '../pages/WelcomePage';
import Order from '../pages/Order';


const Stack = createNativeStackNavigator();

export default function HomeOrderrStack() {
  return (
    
      <Stack.Navigator>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* // screenOptions={{headerShown: false}}> */}
        <Stack.Screen 
        name="WelcomePage" 
        component={WelcomePage} 
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          title: 'j'}} />
=======
        <Stack.Screen 
        name="WelcomePage" 
        component={WelcomePage} 
        screenOptions={{headerShown: false}} />
>>>>>>> 3ecfdb68 (order button navigation)
=======
        {/* // screenOptions={{headerShown: false}}> */}
        <Stack.Screen 
        name="WelcomePage" 
        component={WelcomePage} 
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          title: 'j'}} />
>>>>>>> bd651fa4 (messaging)
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    
  );
}

// const CartStack = createStackNavigator(screens);

// export default createAppContainer(CartStack);