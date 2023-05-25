import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native';
import SignUp from './Componetns/Form/SignUp';

export default function App() {
  return (
    <SafeAreaView style={{  backgroundColor:'green' }} >  
    <View style={styles.container}>
      <SignUp/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop:70,
    padding:15,
    paddingTop:55
  },
});
