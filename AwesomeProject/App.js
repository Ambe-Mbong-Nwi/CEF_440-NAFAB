import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import SignUp from './Componetns/Form/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:100,
    padding:10
  },
});
