import React, { Component } from 'react'
import { Text, View ,TextInput, Picker, Button,StyleSheet} from 'react-native'

export class SignUp extends Component {
  render() {
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
              style={{
                height: 50,
                borderColor: 'gray',
                borderWidth: 1,
                marginTop:8,
                marginBottom:10,
                paddingLeft:7,
                borderRadius:7

              }}
              placeholder='Username'
      />
          <TextInput
                  style={{
                    height: 50,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginTop:8,
                    marginBottom:10,
                    paddingLeft:7,
                    borderRadius:7
                  }}
                  placeholder='Email'
      />
          <TextInput
                  style={{
                    height: 50,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginTop:5,
                    marginTop:8,
                    marginBottom:10,
                    borderRadius:7,
                    paddingLeft:7,
                  }}
    placeholder='Phone number'
      />
  {/* subjected to changes for the select input field  */}
  <TextInput
                  style={{
                    height: 50,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginTop:5,
                    marginTop:8,
                    marginBottom:10,
                    borderRadius:7,
                    paddingLeft:7,
                  }}
     secureTextEntry={true}
     placeholder='password'
      />

    <Button
     title='Sign ps'
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

}

export default SignUp
