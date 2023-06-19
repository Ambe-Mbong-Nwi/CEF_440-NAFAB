import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,SafeAreaView   } from 'react-native'
import React from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';
import Navigation from '../shared/Navigation';

export default function Login1({navigation}) {
    // There is a form to be validated here  to validat the fields of the 
    // login page while performing Authentication
  return (
    <SafeAreaView style={{  backgroundColor:'green', width:'100%',  }} > 
    <View style={styles.container1} >  
    <AntDesign 
      onPress={() => navigation.navigate('SignUpVendor')}
    name="arrowleft" size={24} color="black" />
    <View style={{   marginBottom:100,marginTop:50  }}  >  
    <Text
      style={{
      color:'#0CAA00',
      marginBottom:3,
      fontSize:20,
      textAlign:'center'
       }}
    >
 Welcome Back|
  </Text>
  <Text 
          style={{
         
            fontSize:20,
            textAlign:'center'
          }}
   > Come Carryam GO</Text> 
   </View>
  <View>
      <TextInput
            style={styles.Textinput}
              placeholder='Email'
  />
<TextInput
style={styles.Textinput}
 secureTextEntry={true}
 placeholder='password'
  />
  <View style={{ justifyContent:'flex-end', flexDirection:'row',marginBottom:100    }}  >
    <Text
      onPress={() => navigation.navigate('ForgotPassword')}
    style={styles.text}> Forgot password ?</Text>
  </View>
 

  <View style={styles.container}>
      <TouchableOpacity 
    //   onPress={trymy}
      style={styles.button} >
          <Text style={styles.btnText}  >LOGIN</Text>
  </TouchableOpacity>
  <Text style={{fontSize:15  }}  >New here ? 
  <Text 
    onPress={() => navigation.navigate('SignUpVendor')}
  style={styles.text} > Sign Up </Text> </Text>
    </View>

  </View>
  </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Textinput:{
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:5,
        marginTop:8,
        marginBottom:10,
        borderRadius:7,
        paddingLeft:7  
    },
    btnText:{
      color:'white',
      fontSize:17,
      textAlign:'center'
    },
    button:{
      backgroundColor:'#0A9100',
      paddingTop:7,
      paddingBottom:7,
      width:150,
      borderRadius:7,
      marginBottom:15,
      marginTop:20   
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      color:'#0CAA00'
    },
    container1: {
        backgroundColor: '#fff',
        marginTop:100,
        padding:15,
        paddingTop:50,
        width:'100%',
        height:'100%',
        padding:30 
    }
})