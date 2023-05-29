import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
//import LoginForm from './Componetns/Shared/Butoon';
import WelcomePage from './pages/WelcomePage';
import AddToCart from './pages/AddToCart';
import Notification from './pages/Notification';
import SignUp from './pages/SignUpBuyer';
import Intropage from './pages/IntroPage';
import OptionPage from './pages/OptionPage';
import SignUpVendor from './pages/SignUpVendor';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <Notification /> */}
      {/* <OptionPage/> */}
 <Intropage/>
      {/* <SignUp/> */}
      {/* <SignUpVendor/> */}
      {/* <AddToCart /> */}
      {/* <WelcomePage /> */}
          
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    content: {
      flex: 1,       //dont go off the screen just ensure content expands to fill the screen.
      padding: 5,           //move it away from top of screen
    },
    
  });