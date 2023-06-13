import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from '../pages/WelcomePage';
import Order from '../pages/Order';


const Stack = createNativeStackNavigator();

export default function HomeOrderrStack() {
  return (
    
      <Stack.Navigator>
        {/* // screenOptions={{headerShown: false}}> */}
        <Stack.Screen 
        name="WelcomePage" 
        component={WelcomePage} 
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          title: 'j'}} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    
  );
}

// const CartStack = createStackNavigator(screens);

// export default createAppContainer(CartStack);