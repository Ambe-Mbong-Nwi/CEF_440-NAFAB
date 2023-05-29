import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Intropage() {
  return (
    <View style={styles.main} >

      <View style={styles.main1}> 
      <Text style={styles.Text}  >CarryAM-Go</Text>
      <View style={styles.viewText} >  
      <Text  style={styles.Text1}> Find your products at affordable prices </Text>
      </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    main:{
      backgroundColor:'white',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    main1:{
      backgroundColor:'#0A9100',
      borderBottomRightRadius:400,
      width:'100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
    
    },
    Text:{
       color:'white',
       fontWeight:'900',
       fontSize:48,
    
    },
    Text1:{
      color:'white',
      fontWeight:'700',
      fontSize:18,
      textAlign:'center'
   },
   viewText:{
    width:'80%',
    textAlign:'center',
       marginTop:30
   }
})