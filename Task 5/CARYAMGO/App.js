import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

//import LoginForm from './Componetns/Shared/Butoon';
import WelcomePage from './pages/WelcomePage';
import AddToCart from './pages/AddToCart';
import Notification from './pages/Notification';
import SignUp from './pages/SignUpBuyer';
import Intropage from './pages/IntroPage';
import OptionPage from './pages/OptionPage';
import SignUpVendor from './pages/SignUpVendor';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import VerificationNum from './pages/VerificationNum';
import VerificationEmail from './pages/VerificationEmail';
import ProfilePage from './pages/ProfilePage';
import Navigation from './routes/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import Subscription from './pages/Subscription';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();


export default function App() {
  return (
  // // <View > 

  // //        <Subscription />
  //       {/* <Notification /> */}
  //        {/* <OptionPage/> */}
  //  {/* <Intropage/> */}
  //       {/* <SignUp/> */}
  //      {/* <SignUpVendor/> */}
  //       {/* <Login/> */}
  //       {/* <ForgotPassword/> */}
  //      {/* <VerificationNum/> */}
  //      {/* <VerificationEmail/> */}
  //       {/* <ProfilePage shopnmame="Leony shop" market =" Muea market"
  // //     // Email="loenglain@gmail.com" Phonenumber="674733043" profilestatus="Buyer"
  // //     // location="Buea" marketname="Central Market" shadename="Shade 5" password="*************"
  // //     // /> */}
  //       {/* <AddToCart /> */}
  //      {/* {/* // // <WelcomePage /> */}
      <NavigationContainer>
           <Navigation />
      </NavigationContainer> 
      // </View> 
    
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
