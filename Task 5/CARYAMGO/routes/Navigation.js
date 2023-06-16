import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeOrderrStack from './HomeOrderrStack';
import DiscountOrderrStack from './DiscountOrderrStack';
import MessageChatStack from './MessageChatStack';
import Notification from '../pages/Notification';
// import AddToCart from '../pages/AddToCart';
//import Messaging from '../pages/Messaging';
import ProfilePage from '../pages/ProfilePage';
import Icon from 'react-native-vector-icons/Ionicons';
// import WelcomePage from '../pages/WelcomePage';

const Tab = createBottomTabNavigator();

export default function Navigation({navigation}) {
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
            borderRadius: 20,
            width: '97%',
            height: '10%',
            alignSelf: 'center',
            justifyContent: 'center',
            marginBottom: 3,
          },
          null
        ],

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeOrderrStack" ) {
            iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'MessageChatStack') {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'DiscountOrderrStack') {
                iconName = focused ? 'today' : 'today-outline';
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
      name="HomeOrderrStack" 
      component={HomeOrderrStack} 
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}/>

      <Tab.Screen 
      name="MessageChatStack" 
      component={MessageChatStack}
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
        tabBarVisible: () => null,
        tabBarVisible: false,
        tabBarStyle: { display: "none" },
      }}/>

      <Tab.Screen 
      name="DiscountOrderrStack" 
      component={DiscountOrderrStack} 
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