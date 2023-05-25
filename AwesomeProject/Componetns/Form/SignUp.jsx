import { View, Text,TextInput,Button,StyleSheet } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View>

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
{/* subjected to changes for the select input field  */}
<TextInput
style={styles.Textinput}
 secureTextEntry={true}
 placeholder='password'
  />

<Button
 title='Sign up'
 style={{
    backgroundColor: "red",
    width: 10,
    height: 40,
    borderRadius: 50,
    color:'red'
  }} />

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
    }
})