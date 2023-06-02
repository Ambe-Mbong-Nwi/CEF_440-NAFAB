import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';

export default function ProfilePage() {
  return (
   <SafeAreaView style={styles.safeare}  >  
    <View  style={styles.main} >
        <View style={styles.main1} >  
        <AntDesign name="arrowleft" size={24} color="white" /> 
        <Text style={{fontSize:21,color:"white"  }}  >Profile</Text>
        <AntDesign name="poweroff" size={24} color="white" />
        </View>
        {/* view for the profile image */}
        <View></View>
        <View >
            <Text style={{
                fontSize:17,
                textAlign:"center",
                color:"white",
                fontWeight:600
                 } } > Leony shop </Text>
            <Text style={{textAlign:"center",
            fontSize:16,
            color:"white" ,
            fontWeight:600} }>Muea market</Text>
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
 padding:15,
paddingTop:70,

},
main1:{
    flexDirection:"row",
    justifyContent:"space-between",
}
})