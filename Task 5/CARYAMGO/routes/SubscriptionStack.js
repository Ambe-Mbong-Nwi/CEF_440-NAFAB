import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from '../pages/ProfilePage';
import Subscription from '../pages/Subscription';


const Stack = createNativeStackNavigator();

export default function SubscriptionStack() {
  return (
    

      <Stack.Navigator
        screenOptions={{headerShown: false}}>

      {/*Route to the vendor's home page  */}
        <Stack.Screen 
        name="ProfilePage" 
        component={ProfilePage} 
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          title: 'j'}} />
        

        

        <Stack.Screen name="Subscription" component={Subscription} />
      </Stack.Navigator>
    
  );
}

// const CartStack = createStackNavigator(screens);

// export default createAppContainer(CartStack);