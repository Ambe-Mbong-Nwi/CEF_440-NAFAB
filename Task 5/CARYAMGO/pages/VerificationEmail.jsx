import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,SafeAreaView   } from 'react-native'
import React from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';

export default function VerificationEmail() {
  return (
    <SafeAreaView style={{  backgroundColor:'green', width:'100%',  }} > 
    <View style={styles.container} >
    <View style={styles.container1} > 
    <AntDesign style={{marginTop:5 }} name="arrowleft" size={24} color="black" />
     <Text style={styles.head} >Verification</Text>
     </View>
     <View>
       {/* space reserved for the image */}
     </View>
<View>
    <Text style={{fontSize:20,textAlign:'center' }}  >Please enter the code sent to bn*******gmail.com</Text>
</View>
{/* flexed squares */}
<View  style={styles.boxCont}>
<View style={styles.box} ><TextInput/></View>
<View style={styles.box} ><TextInput/></View>
<View style={styles.box} ><TextInput/></View>
<View style={styles.box} ><TextInput/></View>
<View style={styles.box} ><TextInput/></View>
</View>


<Text style={{fontSize:17}}  >Didn't receive code ? <Text style={{color:'#0A9100' }}  >  Resend</Text>  </Text>
<View style={styles.container2}>
      <TouchableOpacity 
    //   onPress={trymy}
      style={styles.button} >
          <Text style={styles.btnText}  >Verify</Text>
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
        marginTop:30
      },
      box:{
        width:35,
        height:35,
        borderColor:'black',
        borderWidth:1,
        borderRadius:5
      },
      boxCont:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
        marginBottom:50,
        marginTop:50
      }
})