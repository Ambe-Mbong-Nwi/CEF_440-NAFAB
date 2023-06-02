import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';

export default function ProfilePage() {
  return (
   <SafeAreaView style={styles.safeare}  >  
    <View>
        <View style={styles.main} >  
        <AntDesign name="arrowleft" size={24} color="white" /> 
        <Text style={{fontSize:18,color:"white"  }}  >Profile</Text>
        <AntDesign name="poweroff" size={24} color="white" />
        </View>
      
    </View>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
safeare:{
    backgroundColor:'white',
    width:"100%",
    height:"100%",
  
    
},
main:{
 backgroundColor:'#0A9100',
 flexDirection:"row",
 padding:15,
paddingTop:70,
justifyContent:"space-between",
}
})