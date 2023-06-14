import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Messaging from '../pages/Messaging';
import Chat from '../pages/Chat';

const Stack = createNativeStackNavigator();

export default function MessageChatStack() {
  return (
    
      <Stack.Navigator
        screenOptions={{headerShown: false}}>
        <Stack.Screen 
        name="Messaging" 
        component={Messaging} 
       />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    
  );
}
