import { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// import the modules for the App 
import { StatusBar } from 'expo-status-bar';
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

// Keep the splash screen visible while we fetch resources to be displayed
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
//  subjected to changes
// const Stack = createStackNavigator();
  return (
    <NavigationContainer> 
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}
      >
   <OptionPage/>
  
    </View>
    </NavigationContainer> 
  );
}
