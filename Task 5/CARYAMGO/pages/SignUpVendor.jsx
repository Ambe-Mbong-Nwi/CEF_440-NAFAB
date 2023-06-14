import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,Switch,Select,SafeAreaView, ViewBase   } from 'react-native'
import React from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 

export default function SignUpVendor({navigation}) {
    function trymy(){
        alert("yo bro");
      }
  return (
    <SafeAreaView style={{  backgroundColor:'green' }} > 
    <View style={styles.container1} >  
    <TouchableOpacity 
     onPress={() => navigation.navigate('Home')}
    >
    <AntDesign  name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
   
    <Text
      style={{
      marginBottom:25,
      fontSize:20,
      textAlign:'center'
       }}
    >
   Sign Up with
   <Text 
          style={{
            color:'#0CAA00'
          }}
   >  Carryam-GO</Text> 
  </Text>
  <View>
  <TextInput
  style={styles.Textinput}
          placeholder='Username'
  />
      <TextInput
            style={styles.Textinput}
              placeholder='Email'
  />
      <TextInput
style={styles.Textinput}
keyboardType='numeric'
placeholder='Phone number'
  />
 <TextInput
style={styles.Textinput}
placeholder='Town'    
  />
{/* Flexed input fields */}

<View style={{flexDirection:'row',justifyContent:'space-between' }} >
<TextInput
style={styles.Textinput1}
placeholder='Name of Market'    
  />
 <TextInput
 keyboardType='numeric'
style={styles.Textinput2}
placeholder='Shade Number'    
  />
</View>  
<TextInput
style={styles.Textinput}
 secureTextEntry={true}
 placeholder='password'
  />
  {/*check bok area */}
          <View
          style={{flexDirection:'row'   }}>        
          <View
          > 
             <Switch style={{  height:30 }}          
             /> 
              </View>

          <View style={{ width:'85%' }}>          
            <Text>I agree to the
              <Text> Terms</Text> and  <Text>Policies </Text> 
              of CarryAm Go
             </Text>
          
           </View>
          </View>

  <View style={styles.container}>
      <TouchableOpacity 
      onPress={trymy}
      style={styles.button} >
          <Text style={styles.btnText}  >Sign Up</Text>
  </TouchableOpacity>
  <Text style={{fontSize:15  }}  >Already have an account
     <Text style={styles.text} > Sign in </Text> </Text>
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
        marginTop:8,
        marginBottom:10,
        borderRadius:7,
        paddingLeft:7  
    },
    Textinput1:{
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:8,
        marginBottom:10,
        borderRadius:7,
        paddingLeft:7,
        flex:1,
        marginRight:10
    },
    Textinput2:{
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:8,
        marginBottom:10,
        borderRadius:7,
        paddingLeft:7,
        flex:1,
        marginLeft:10
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
        marginTop:80,
        padding:15,
        paddingTop:50,
        width:'100%',
        height:'100%'
    }
})