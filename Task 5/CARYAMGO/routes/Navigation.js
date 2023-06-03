import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import cartStack from '../routes/cartStack';
import Notification from '../pages/Notification';
import AddToCart from '../pages/AddToCart';
import Messaging from '../pages/Messaging';
import ProfilePage from '../pages/ProfilePage';
import Icon from 'react-native-vector-icons/Ionicons';
import WelcomePage from '../pages/WelcomePage';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={
       
        ({ route }) => ({

        tabBarActiveTintColor: '#28B41E',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: '#EFFAEE',
            borderRadius: 30,
            width: 300,
            height: 60,
            alignSelf: 'center',
            justifyContent: 'center',
          },
          null
        ],

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'WelcomePage') {
            iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Messaging') {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'AddToCart') {
                iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Notification') {
                iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'ProfilePage') {
                iconName = focused ? 'person' : 'person-outline';
            }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>

      <Tab.Screen 
      name="WelcomePage" 
      component={WelcomePage} 
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}/>

      <Tab.Screen 
      name="Messaging" 
      component={Messaging}
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}/>

      <Tab.Screen 
      name="AddToCart" 
      component={AddToCart} 
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}/>

      <Tab.Screen 
      name="Notification" 
      component={Notification} 
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}/>

      <Tab.Screen 
      name="ProfilePage" 
      component={ProfilePage} 
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}/>

    </Tab.Navigator>
  );
}