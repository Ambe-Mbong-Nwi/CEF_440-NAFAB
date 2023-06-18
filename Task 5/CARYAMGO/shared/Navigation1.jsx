import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeOrderrStack1 from '../routes/HomeOrderrStack1';
import DiscountOrderrStack from '../routes/DiscountOrderrStack';
import MessageChatStack from '../routes/MessageChatStack';
import Notification from '../pages/Notification';
import ProfilePage from '../pages/ProfilePage';
import Icon from 'react-native-vector-icons/Ionicons';
// import WelcomePage from '../pages/WelcomePage';

const Tab = createBottomTabNavigator();

export default function Navigation1({navigation}) {
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
            // width: 300,
            width: '95%',
            // marginLeft:50,
            // marginRight:50,
            height: 60,
            alignSelf: 'center',
            justifyContent: 'center',
          },
          null
        ],

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeOrderrStack1" ) {
            iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'MessageChatStack') {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'CartStack') {
            // } else if (route.name === 'DiscountOrderrStack') {
                iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Notification') {
                iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'ProfilePage') {
                iconName = focused ? 'person' : 'person-outline';
            }
// name="CartStack" 
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>

      <Tab.Screen 
      name="HomeOrderrStack1" 
      component={HomeOrderrStack1} 
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}
      />

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
      // name="DiscountOrderrStack" 
      name="CartStack" 
      component={HomeOrderrStack1} 
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