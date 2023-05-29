import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Intropage() {
  return (
    <View style={styles.main} >
      <Text style={styles.Text}  >CarryAM-Go</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#0A9100',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    Text:{
       color:'white',
       fontWeight:'700',
       fontSize:35
       

    }
})