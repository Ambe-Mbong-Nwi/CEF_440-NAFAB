import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToCart from '../pages/AddToCart';
import Order from '../pages/Order';


const Stack = createNativeStackNavigator();

export default function DiscountOrderrStack() {
  return (
    
      <Stack.Navigator>

        <Stack.Screen 
        name="AddToCart" 
        component={AddToCart}
        screenOptions={{
            // headerShown: false,
            header: () => false,}} />
        <Stack.Screen name="Order" component={Order} />

      </Stack.Navigator>
    
  );
}

// const CartStack = createStackNavigator(screens);

// export default createAppContainer(CartStack);