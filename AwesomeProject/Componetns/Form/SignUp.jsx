import React, { Component } from 'react'
import { Text, View ,TextInput} from 'react-native'

export class SignUp extends Component {
  render() {
    return (
      <View>

        <Text>
       Sign Up with
       <Text 
               style={{
                color:'#0CAA00',
                fontWeight:'900',
              }}
       >  Carryam GO</Text> 
      </Text>

      <View>
      <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,

              }}
      defaultValue='Username'
      />
          <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                  }}
      defaultValue='Email'
      />
          <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                  }}
      defaultValue='Phone number'
      />
      </View>
      </View>
    )
  }
}

export default SignUp
