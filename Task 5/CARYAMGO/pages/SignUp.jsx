import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,Switch,Select,SafeAreaView   } from 'react-native'
import React from 'react'
import { useState } from 'react';
// import { Picker } from '@react-native-picker/picker';
// import DropDownPicker from 'react-native-dropdown-picker';
import { SelectList } from 'react-native-dropdown-select-list'
import { Feather,AntDesign } from '@expo/vector-icons';

export default function SignUp() {
  // write the funcion 
function trymy(){
  alert("yo");
}
// subjectd to changes 
const [selected, setSelected] = React.useState("");
  
const data = [
    {key:'1', value:'Buyer'},
    {key:'2', value:'Seller'},
]

handleChange = (value) => {
  this.setState({
    value,
  });
};
  return (
    <SafeAreaView style={{  backgroundColor:'green' }} > 
    <View style={styles.container1} >  
    <AntDesign name="arrowleft" size={24} color="black" />
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
  <View style={{ marginTop:5,}} >    
  <SelectList 

        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    /> 
    <View style={{flexDirection:'row', marginTop:5    }}  >
        <Feather name="alert-circle" size={24} color="black" />
        <Text style={{marginTop:2,color:'#000000',marginLeft:7 }} > 
    Tell us what kind of user you are </Text>
          </View>
 
    </View>
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