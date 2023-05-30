import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,SafeAreaView   } from 'react-native'
import React from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';


export default function ForgotPassword() {
  return (
    <SafeAreaView style={{  backgroundColor:'green', width:'100%',  }} > 
     <View style={styles.container} >
     <View style={styles.container1} > 
     <AntDesign style={{marginTop:5 }} name="arrowleft" size={24} color="black" />
      <Text style={styles.head} >ForgotPassword</Text>
      </View>
      <View>
        {/* space reserved for the image */}
      </View>
      <View>
       <TextInput
       style={styles.Textinput}
       placeholder='Enter phone Number or Email'
       />
      </View>

  <View style={styles.container2}>
      <TouchableOpacity 
    //   onPress={trymy}
      style={styles.button} >
          <Text style={styles.btnText}  >LOGIN</Text>
  </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginTop:150,  
        paddingTop:50,
        width:'100%',
        height:'100%',
        padding:30 
    },
    head:{
        fontSize:20,
        textAlign:'center',
        marginLeft:70
    },
    container1:{
        flexDirection:'row',
        // justifyContent:'space-between',
    },
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
      container2: {
        justifyContent: 'center',
        alignItems: 'center',
      },
})