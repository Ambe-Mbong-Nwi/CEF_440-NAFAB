import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpVendor from '../pages/SignUpVendor';
import SignUpBuyer from '../pages/SignUpBuyer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 

export default function OptionPage({ navigation }) {
  return (
    <View style={styles.main}>
      <Text style={styles.maintxt}  > Join CarryAm-Go As a  </Text>
      <View style={{ width:'80%',  marginTop:20    }} >
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SignUpVendor')}
        >
            <Text style={styles.btnText}>  Vendor </Text>
           
        </TouchableOpacity >
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('SignUpBuyer')}
        >
        <Text  style={styles.btnText}>Buyer </Text>       
        </TouchableOpacity>
      </View>
    {/* subjected to changes  */}
{/* <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home" component={OptionPage} />
</Stack.Navigator>
</NavigationContainer> */}



    </View>

  )
}

const styles = StyleSheet.create({
    main:{
        justifyContent:'center',
        backgroundColor:'#0A9100',
        width:'100%',
        height:'100%',
      alignItems:'center'
    },
    maintxt:{
        textAlign:'center',
        color:'white',
        fontSize:28,
        fontWeight:"700"
    },
    button:{
        backgroundColor:'white',
        borderRadius:7,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:6,
        paddingRight:6,     
        marginBottom:10,
        
    },
    btnText:{
        textAlign:'center',
        color:'#0A9100',
        fontSize:20,
        fontWeight:"700",
      
    }
})