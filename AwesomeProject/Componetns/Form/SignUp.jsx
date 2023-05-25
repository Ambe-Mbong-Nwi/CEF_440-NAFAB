import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,Switch,Select  } from 'react-native'
import React from 'react'
export default function SignUp() {
  // write the funcion 
function trymy(){
  alert("yo");
}
  return (
    <View >  
    <Text
      style={{
      marginBottom:10,
      fontSize:20
       }}
    >
   Sign Up with
   <Text 
          style={{
            color:'#0CAA00',
          }}
   >  Carryam GO</Text> 
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
placeholder='Phone number'
  />
  {/* subjectd to changes */}

  {/* end of changes made */}
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
             <Switch    style={{  height:30 }}          
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
  )
}

// write the styles for the App 
const styles= StyleSheet.create({
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
    }



})