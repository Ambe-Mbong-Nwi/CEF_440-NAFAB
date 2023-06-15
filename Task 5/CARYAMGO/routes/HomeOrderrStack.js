import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from '../pages/WelcomePage';
import Order from '../pages/Order';


const Stack = createNativeStackNavigator();

export default function HomeOrderrStack() {
  return (
    
<<<<<<< HEAD
      <Stack.Navigator
        screenOptions={{headerShown: false}}>
=======
      <Stack.Navigator>
{/* <<<<<<< HEAD
        {/* // screenOptions={{headerShown: false}}> */}
>>>>>>> 0d751675d80201ba296573c25976e0a57f4da616
        <Stack.Screen 
        name="WelcomePage" 
        component={WelcomePage} 
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          title: 'j'}} />
        <Stack.Screen 
        name="WelcomePage" 
        component={WelcomePage} 
        screenOptions={{headerShown: false}} />
{/* ======= */}
        {/* // screenOptions={{headerShown: false}}> */}
        <Stack.Screen 
        name="WelcomePage" 
        component={WelcomePage} 
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          title: 'j'}} />
{/* >>>>>>> bd651fa4 (messaging) */}
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    
  );
}

// const CartStack = createStackNavigator(screens);

// export default createAppContainer(CartStack);