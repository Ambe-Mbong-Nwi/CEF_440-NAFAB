import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from '../pages/WelcomePage';
import Order from '../pages/Order';
import NavugationVendor from '../pages/NavugationVendor';


const Stack = createNativeStackNavigator();

export default function HomeOrderrStack() {
  return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}>

      {/*Route to the vendor's home page  */}
        <Stack.Screen 
        name="WelcomePageVendor" 
        component={NavugationVendor} 
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