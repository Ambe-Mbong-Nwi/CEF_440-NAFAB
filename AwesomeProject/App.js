import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import LoginForm from './Componetns/Shared/Butoon';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Starting theApp </Text>
      <Text>hello bro  </Text>
      <StatusBar style="auto" />      
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
});
